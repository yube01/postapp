import axios from "axios";
import { useContext, useEffect, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import moment from "moment";
import { AuthContext } from "../context/AuthContext";
import Menu from "../components/Menu";

const Single = () => {
  const navigate = useNavigate();

  const [post, setPost] = useState({});

  const location = useLocation();

  const postId = location.pathname.split("/")[2];

  const { currentUser } = useContext(AuthContext);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await axios.get(`http://localhost:2000/post/${postId}`);
        setPost(res.data);
      } catch (error) {
        console.log(error);
      }
    };
    fetchData();
  }, [postId]);

  const handleClick = async () => {
    try {
      await axios.delete(`http://localhost:2000/post/${postId}`);
      navigate("/");
    } catch (error) {
      console.log(error);
    }
  };

  const getText = (html) => {
    const doc = new DOMParser().parseFromString(html, "text/html");
    return doc.body.textContent;
  };

  return (
    <div className="single">
      <div className="content">
        <img src={`${post?.img}`} alt="" />
        <div className="user">
          {post.userImg && <img src={post.userImg} alt="" />}
          <div className="info">
            <span>{post.username}</span>
            <p>Posted {moment(post.date).fromNow()}</p>
          </div>
          {currentUser.username === post.username && (
            <div className="edit">
              <Link to={`/write?edit=2`} state={post}>
                <img src="" alt="edit icon" />
              </Link>
              <img src="" alt="deleteicon" onClick={handleClick} />
            </div>
          )}
        </div>
        <h1>{post.title}</h1>

        {getText(post.desc)}
      </div>
      <Menu cat={post.cat} />
    </div>
  );
};

export default Single;

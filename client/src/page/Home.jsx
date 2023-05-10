import { Link } from "react-router-dom";
import Navbar from "../components/Navbar";

const Home = () => {
  return (
    <div className="home">
      <Navbar />
      <div className="posts">
        {/* {posts.map((post) => (
          <div className="post" key={post.id}>
            <div className="img">
              <img src={`../upload/${post.img}`} alt="" />
            </div>
            <div className="content">
              <Link className="link" to={`/post/${post.id}`}>
                <h1>{post.title}</h1>
              </Link> */}
        {/* <p>{getText(post.desc)}</p> */}
        {/* <button>Read More</button>
            </div>
          </div>
        ))} */}
      </div>
    </div>
  );
};

export default Home;

import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./page/Home";
import Login from "./page/Login";
import Register from "./page/Register";
import "./style.scss";
// import Header from "./components/Header";
// import Footer from "./components/Footer";
import Single from "./page/Single";
import Write from "./page/Write";

// const Layout = () => {
//   <>
//     <Header />
//     <Outlet />
//     <Footer />
//   </>;
// };

const router = createBrowserRouter([
  // {
  //   path: "/",
  //   element: <Layout />,
  //   children: [
  //     {
  //       path: "/",
  //       element: <Home />,
  //     },
  //     {
  //       path: "/post/:id",
  //       element: <Single />,
  //     },
  //     {
  //       path: "/write",
  //       element: <Write />,
  //     },
  //   ],
  // },
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/register",
    element: <Register />,
  },
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/write",
    element: <Write />,
  },
  {
    path: "/single",
    element: <Single />,
  },
]);

function App() {
  return (
    <div className="app">
      <div className="container">
        <RouterProvider router={router} />
      </div>
    </div>
  );
}

export default App;

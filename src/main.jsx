import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { createBrowserRouter, Link, RouterProvider } from "react-router-dom";
import ViewStory from "./ViewStory.jsx";
import Profile from "./Profile.jsx";
const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "/story/:id/:total",
    element: <ViewStory />,
  },
  {
    path: "/profile",
    element: <Profile />,
  },
  {
    path: "*",
    element: (
      <div>
        404 Not Found <Link to="/">Go Home</Link>
      </div>
    ),
  },
]);
createRoot(document.getElementById("root")).render(
  <RouterProvider router={router} />,
);

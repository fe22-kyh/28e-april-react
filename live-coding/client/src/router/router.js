import LoginComponent from "../component/login/LoginComponent.js";
import RegisterComponent from "../component/login/RegisterComponent.js";
import ProfileComponent from "../component/profile/ProfileComponent.js";

const routes = [
  {
    path: "*",
    element: <h2>Path not found</h2>
  },
  {
    path: "/login",
    element: <LoginComponent />
  },
  {
    path: "/register",
    element: <RegisterComponent />
  },
  {
    path: "/profile",
    element: <ProfileComponent />
  }
];

export default routes;
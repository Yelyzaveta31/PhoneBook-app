import { Outlet } from "react-router-dom";
import AuthNav from "../AuthNav/AuthNav";

const Layout = () => {
  return (
    <div>
      <AuthNav />
      <Outlet />
    </div>
  );
};

export default Layout;

import { Outlet } from "react-router-dom";
import Header from "../Header";

const Layout = () => {
  return (
    <div className="font-[Garamond max-w-[1400px] m-auto ">
      <Header />
      <Outlet />
    </div>
  );
};

export default Layout;

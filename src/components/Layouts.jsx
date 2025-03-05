import { Outlet } from "react-router-dom";
import logo from "../assets/Mobica 1.svg"

export default function Layout() {
  return (
    <main className="py-[30px] min-h-screen bg-black  md:px-[32px] sm:px-[10px] px-[17px]">
   <img src={logo} alt="logo" className="2xl:w-[203px] w-[150px] ml-[20px]"/>
      <Outlet />

    </main>
  );
}
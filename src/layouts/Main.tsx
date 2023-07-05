import Navbar from "@/components/Navbar";
import { Outlet } from "react-router-dom";

export default function Main() {
  return (
    <div className="flex w-screen h-screen flex-col bg-slate-50">
      <Navbar />
      <div className="flex justify-center items-center h-screen flex-1">
        <Outlet />
      </div>
    </div>
  );
}

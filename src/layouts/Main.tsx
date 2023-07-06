import Navbar from "@/components/Navbar";
import { useAuth } from "@/contexts/auth";
import { useEffect } from "react";
import { Outlet, useNavigate } from "react-router-dom";

export default function Main() {
  const { user } = useAuth();
  const navigate = useNavigate();

  useEffect(() => {
    if (!user) {
      navigate("/");
    }
  }, [navigate, user]);

  return (
    <div className="flex w-screen h-screen flex-col bg-slate-50">
      <Navbar />
      <div className="flex justify-center items-center h-screen flex-1">
        <Outlet />
      </div>
    </div>
  );
}

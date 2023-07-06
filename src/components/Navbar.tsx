import { Link, useNavigate } from "react-router-dom";
import { Layers } from "lucide-react";
import { Button, buttonVariants } from "./ui/button";
import { useAuth } from "@/contexts/auth";
import { supabase } from "@/services/supabase";

export default function Navbar() {
  const { user } = useAuth();
  const navigate = useNavigate();

  async function handleLogout() {
    await supabase.auth.signOut();
    navigate("/");
  }

  return (
    <div className="flex w-full px-4 py-4 justify-between items-center shadow-sm bg-white">
      <div className="font-bold text-lg px-2 flex items-center">
        <Layers className="mr-2 h-6 w-6" /> PaddleStack
      </div>
      <div className="flex space-x-2 items-center">
        {!user ? (
          <>
            <Link className={buttonVariants({ variant: "outline" })} to="login">
              Login
            </Link>
            <Link
              className={buttonVariants({ variant: "default" })}
              to="signup"
            >
              Signup
            </Link>
          </>
        ) : (
          <>
            <div className="mr-2">{user.email}</div>
            <Button onClick={handleLogout}>Logout</Button>
          </>
        )}
      </div>
    </div>
  );
}

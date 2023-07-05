import { Link } from "react-router-dom";
import { Layers } from "lucide-react";
import { buttonVariants } from "./ui/button";

export default function Navbar() {
  return (
    <div className="flex w-full px-4 py-4 justify-between items-center shadow-sm bg-white">
      <div className="font-bold text-lg px-2 flex items-center">
        <Layers className="mr-2 h-6 w-6" /> PaddleStack
      </div>
      <div className="flex space-x-2">
        <Link className={buttonVariants({ variant: "outline" })} to="login">
          Login
        </Link>
        <Link className={buttonVariants({ variant: "default" })} to="signup">
          Signup
        </Link>
      </div>
    </div>
  );
}

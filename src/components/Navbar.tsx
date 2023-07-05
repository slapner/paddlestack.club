import { Link } from "react-router-dom";
import { buttonVariants } from "./ui/button";

export default function Navbar() {
  return (
    <div className="flex w-full px-4 py-4 justify-between items-center shadow-sm bg-white">
      <div className="font-bold text-lg px-2">PaddleTap</div>
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

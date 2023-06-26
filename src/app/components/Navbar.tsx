import Link from "next/link";
import { Logo } from "./index";
const Navbar = () => {
  return (
    <nav className="flex justify-between content-center px-10 py-2 bg-amber-600 mb-6">
      <Link href="/" className="hover:no-underline">
        <Logo />
      </Link>
      <ul className="m-0 p-0 flex  divide-x divide-slate-200">
        <li className="list-none m-auto px-2">
          <Link className="text-slate-200" href="/genres">
            Genres
          </Link>
        </li>
        <li className="list-none m-auto px-2">
          <Link className="text-slate-200" href="/platforms">
            Platforms
          </Link>
        </li>
        <li className="list-none m-auto px-2">
          <Link className="text-slate-200" href="/games/1">
            Games
          </Link>
        </li>
        {/* <li className="list-none m-auto px-2">
          <Link className="text-slate-200 " href="/">
            Platforms
          </Link>
        </li>
        <li className="list-none m-auto px-2">
          <Link className="text-slate-200" href="/">
            Login
          </Link>
        </li> */}
      </ul>
    </nav>
  );
};

export default Navbar;

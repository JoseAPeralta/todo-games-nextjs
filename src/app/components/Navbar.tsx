import Link from "next/link";
import { Logo } from "./index";
import { getServerSession } from "next-auth";
import { authOptions } from "@/lib/auth";
import { LoginButton, LogoutButton } from "@/app/components";

const Navbar = async () => {
  const session = await getServerSession(authOptions);

  return (
    <nav className="flex flex-wrap justify-between content-center py-5 px-10 bg-amber-600 mb-6 sm:flex-nowrap sm:py-2 ">
      <Link
        href="/"
        className="hover:no-underline w-full flex justify-center sm:w-auto"
      >
        <Logo />
      </Link>
      <ul className="m-0 p-0 flex  divide-x divide-slate-200 w-full pt-5 sm:pt-0 sm:w-auto">
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
        <li className="list-none m-auto px-2">
          {!session ? <LoginButton /> : <LogoutButton />}
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;

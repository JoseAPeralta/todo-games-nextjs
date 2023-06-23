import Link from "next/link";

const Navbar = () => {
  return (
    <nav className="flex justify-between content-center px-10 py-2 bg-amber-600 mb-6">
      <Link
        href="/"
        className="flex font-bold uppercase text-slate-200 hover:no-underline"
      >
        <div className="text-5xl pr-1 border-r-2 border-slate-200">TG</div>
        <div className="pl-2">
          <div>t o t a l</div>
          <div>g a m e s</div>
        </div>
      </Link>
      <ul className="m-0 p-0 flex  divide-x divide-slate-200">
        {/* <li className="list-none m-auto px-2">
          <Link className="text-slate-200 " href="/">
            Platforms
          </Link>
        </li>
        <li className="list-none m-auto px-2">
          <Link className="text-slate-200" href="/">
            Genres
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

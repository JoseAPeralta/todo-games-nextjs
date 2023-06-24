import Link from "next/link";

export default function NotFound() {
  return (
    <div className="h-screen ">
      <div className="bg-amber-600 text-center p-10 m-14">
        <h2 className="text-6xl underline decoration-double underline-offset-4 ">
          404
        </h2>
        <h2 className="text-3xl">Page Not Found</h2>
        <p className="text-slate-200 font-normal">
          View{" "}
          <Link href="/" className="text-slate-300 text-bold">
            all games
          </Link>
        </p>
      </div>
    </div>
  );
}

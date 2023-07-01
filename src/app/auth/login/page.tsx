"use client";

import Link from "next/link";
import { LoginForm } from "./form";

export default function LoginPage() {
  return (
    <>
      <section className="container mx-auto px-6 py-12 h-full flex justify-center items-center">
        <div className="md:w-8/12 lg:w-5/12 bg-white px-8 py-10">
          <LoginForm />
          <div className="flex items-center my-4 before:flex-1 before:border-t before:border-slate-300 before:mt-0.5 after:flex-1 after:border-t after:border-slate-300 after:mt-0.5">
            <p className="text-center font-semibold mx-4 mb-0">OR</p>
          </div>
          <section className="inline-block w-full text-center">
            <Link
              href="/auth/register"
              className="text-blue-500 font-medium text-sm uppercase "
            >
              Register
            </Link>
          </section>
        </div>
      </section>
    </>
  );
}

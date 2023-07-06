"use client";

import { signIn, signOut } from "next-auth/react";
import Link from "next/link";

interface ButtonType {
  children: JSX.Element | string;
  callback: () => void;
}
const Button = ({ children, callback }: ButtonType) => {
  return (
    <button
      onClick={() => callback()}
      className="list-none text-slate-200 m-auto bg-inherit border-0 p-0 hover:underline focus:shadow-none"
    >
      {children}
    </button>
  );
};

export const LoginButton = () => {
  return <Button callback={signIn}>Sign in</Button>;
};

export const LogoutButton = () => {
  return <Button callback={signOut}>Sign Out</Button>;
};

export const ProfileButton = () => {
  return <Link href="/profile">Profile</Link>;
};

import Genres from "@/app/genres/page";
import {
  LoginButton,
  LogoutButton,
  ProfileButton,
  RegisterButton,
} from "@/app/components/buttons.component";

export default function Home() {
  return (
    <main>
      <div>
        <LoginButton />
        <RegisterButton />
        <LogoutButton />
        <ProfileButton />
      </div>
      <Genres />
    </main>
  );
}

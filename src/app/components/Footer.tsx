import { AiFillGithub, AiFillLinkedin, AiFillIdcard } from "react-icons/ai";

const Footer = () => {
  return (
    <footer className="px-10 py-14 bg-amber-600 mt-10 text-slate-200">
      <section className="flex justify-center flex-wrap">
        Develop by <strong>Jose Peralta</strong>
        <section className="flex gap-2 justify-center text-3xl w-full">
          <a
            href="https://github.com/JoseAPeralta"
            target="_blank"
            className="text-slate-300"
          >
            <AiFillGithub />
          </a>
          <a
            href="https://www.linkedin.com/in/jose-ariel-peralta/"
            target="_blank"
            className="text-slate-300"
          >
            <AiFillLinkedin />
          </a>
          <a
            href="https://jperalta.dev/"
            target="_blank"
            className="text-slate-300"
          >
            <AiFillIdcard />
          </a>
        </section>
      </section>
    </footer>
  );
};

export default Footer;

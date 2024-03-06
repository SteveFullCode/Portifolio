import { ModeToggle } from "../Dark";
import Navlink from "./navlink";

const navLinks = [
  {
    title: "Home",
    path: "#home",
  },
  {
    title: "Sobre",
    path: "#sobre",
  },
  {
    title: "Projetos",
    path: "#projetos",
  },
  {
    title: "Contato",
    path: "#contato",
  },
];

export default function Menu() {
  return (
    <main className="menu hidden md:block md:w-auto" id="menu">
      <div className="flex items-center py-2 gap-2">
        <ul className=" gap-2 flex ">
          {navLinks.map((link) => (
            <li
              key={link.title}
              className="text-black dark:text-white dark:hover:text-zinc-500 font-mono md:text-[17px]"
            >
              <Navlink href={link.path} title={link.title} />
            </li>
          ))}
        </ul>
        <ModeToggle />
      </div>
    </main>
  );
}

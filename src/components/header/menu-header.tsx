import React from "react";
import NavLink from "./navlink";
import { ModeToggle } from "../Dark";

interface NavLinkProps {
  href: string;
  title: string;
  closeMenu: () => void;
}

export default function Menu({ closeMenu }: { closeMenu: () => void }) {
  const navLinks = [
    { title: "Home", path: "#home" },
    { title: "Sobre", path: "#sobre" },
    { title: "Projetos", path: "#projetos" },
    { title: "Contato", path: "#contato" },
  ];

  return (
    <main className="menu hidden md:block md:w-auto" id="menu">
      <div className="flex items-center py-2 gap-2">
        <ul className=" gap-2 flex ">
          {navLinks.map((link) => (
            <li
              key={link.title}
              className="text-black dark:text-white dark:hover:text-zinc-500 font-mono md:text-[17px]"
            >
              <NavLink
                href={link.path}
                title={link.title}
                closeMenu={closeMenu}
              />
            </li>
          ))}
        </ul>
        <ModeToggle />
      </div>
    </main>
  );
}

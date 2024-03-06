"use client";

import React, { useState } from "react";
import Menu from "./menu-header";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/solid";
import MenuOverlay from "./menuoverlay";

export default function Header() {
  const [navbarOpen, setNavbarOpen] = useState(false);

  // Suponha que você tenha uma lista de links, substitua por sua lógica real
  const navLinks = [
    { title: "Home", path: "#home" },
    { title: "Sobre", path: "#sobre" },
    { title: "Projetos", path: "#projetos" },
    { title: "Contato", path: "#contato" },
  ];

  return (
    <main className="fixed top-0 left-0 right-0 z-10 bg-zinc-100 bg-opacity-90 dark:bg-slate-900 dark:bg-opacity-90 px-9 md:px-16">
      <section className="text-sm flex md:h-full w-full items-center justify-between h-14">
        <h3 className="scroll-m-20 text-2xl font-semibold tracking-tight text-black dark:text-white">
          Steve.dev
        </h3>
        <div className="mobile-menu block md:hidden">
          {!navbarOpen ? (
            <button
              onClick={() => setNavbarOpen(!navbarOpen)}
              className="flex items-center px-3 py-2  text-zinc-500 hover:text-white"
            >
              <Bars3Icon className="h-5 w-5" />
            </button>
          ) : (
            <button
              onClick={() => setNavbarOpen(!navbarOpen)}
              className="flex items-center px-3 py-2 text-zinc-500 hover:text-white"
            >
              <XMarkIcon className="h-5 w-5" />
            </button>
          )}
        </div>
        <Menu />
      </section>
      {navbarOpen ? <MenuOverlay Links={navLinks} /> : null}
    </main>
  );
}

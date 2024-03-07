import React from "react";
import NavLink from "./navlink";
import { ModeToggle } from "../Dark";

interface MenuOverlayProps {
  Links: { title: string; path: string }[];
  closeMenu: () => void;
}
export default function MenuOverlay({ Links, closeMenu }: MenuOverlayProps) {
  return (
    <ul className="flex flex-col py-4 items-center font-mono md:hidden">
      {Links.map((link, index) => (
        <li key={index}>
          <NavLink href={link.path} title={link.title} closeMenu={closeMenu} />
        </li>
      ))}
      <ModeToggle />
    </ul>
  );
}

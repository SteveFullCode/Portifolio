import React from "react";
import NavLink from "./navlink";
import { ModeToggle } from "../Dark";

interface Link {
  path: string;
  title: string;
}

interface MenuOverlayProps {
  Links: Link[];
}

const MenuOverlay: React.FC<MenuOverlayProps> = ({ Links }) => {
  return (
    <ul className="flex flex-col py-4 items-center font-mono md:hidden">
      {Links.map((link, index) => (
        <li key={index}>
          <NavLink href={link.path} title={link.title} />
        </li>
      ))}
      <ModeToggle />
    </ul>
  );
};

export default MenuOverlay;

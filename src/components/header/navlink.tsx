import React from "react";

interface NavLinkProps {
  href: string;
  title: string;
  closeMenu: () => void;
}

const NavLink: React.FC<NavLinkProps> = ({ href, title, closeMenu }) => {
  return (
    <a href={href} title={title} className="nav-link" onClick={closeMenu}>
      {title}
    </a>
  );
};

export default NavLink;

import React, { useState } from "react";
import { Navbar, NavbarBrand, NavbarContent, NavbarItem, NavbarMenuToggle, NavbarMenu, NavbarMenuItem, Link, Button } from "@nextui-org/react";

const menuItems = [
  {
    name: "Servicios",
    link: '#services'
  },
  {
    name: "Proyectos",
    link: '#projects'
  },
  {
    name: "Contacto",
    link: '#contact-us'
  }
];

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <Navbar onMenuOpenChange={setIsMenuOpen} className="bg-secondary">
      <NavbarContent>
        <NavbarBrand>
          <a className="flex title-font font-medium text-default-900 pr-4" href="/">
            <span className="ml-3 text-3xl hidden">DEV<span className="text-primary-100">SOUL</span></span>
            <img
              src="/img/logos/variante 1.png"
              alt="logo principal"
              className="object-cover h-40 w-40"
            />
          </a>
        </NavbarBrand>
        <NavbarMenuToggle
          aria-label={isMenuOpen ? "Close menu" : "Open menu"}
          className="sm:hidden text-white"
        />
      </NavbarContent>
      <NavbarContent className="hidden sm:flex gap-4" justify="center">
        {
          menuItems.map((item, i) => (
            <NavbarItem key={i}>
              <Link className="text-white" href={item.link}>
                {item.name}
              </Link>
            </NavbarItem>
          ))
        }
      </NavbarContent>
      <NavbarMenu>
        {menuItems.map((item, index) => (
          <NavbarMenuItem key={`${item.name}-${index}`}>
            <Link
              color={
                index === 2 ? "primary" : index === menuItems.length - 1 ? "danger" : "foreground"
              }
              className="w-full"
              href={item.link}
              size="lg"
            >
              {item.name}
            </Link>
          </NavbarMenuItem>
        ))}
      </NavbarMenu>
    </Navbar>
  );
}
import React, { useState } from "react";
import { Navbar, NavbarBrand, NavbarContent, NavbarItem, NavbarMenuToggle, NavbarMenu, NavbarMenuItem, Link, Button } from "@nextui-org/react";

const menuItems = [
  {
    name: "Sobre nosotros",
    link: '#about-us'
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
    <Navbar onMenuOpenChange={setIsMenuOpen}  className="bg-secondary">
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
              href="#"
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

/* <div className="max-w-screen-xl w-full mx-auto flex items-center justify-between py-4 px-4 lg:px-0 backdrop-blur-sm">
  <div className={`lg:items-center  left-0 top-20 z-50 w-full ${openMenu ? 'fixed' : 'hidden'} lg:hidden`} id="navbar-solid-bg">
    <ul className="flex flex-col font-medium rounded-lg bg-gray-50 justify-center items-center pb-2 lg:flex-row lg:gap-8 lg:mt-0 lg:border-0 lg:bg-transparent">
      <li>
        <a href="#" className="block py-2 px-3 lg:p-0 text-black" aria-current="page">
          Sobre nosotros
        </a>
      </li>
      <li>
        <a href="#" className="block py-2 px-3 lg:p-0 text-black">
          Casos de exito
        </a>
      </li>
      <li>
        <div className="bg-red-600 flex justify-center items-center px-4 rounded-md">
          <a className="hover:text-default-900" href="#contacto">Contacto</a>
        </div>
      </li>
    </ul>
  </div>

  <div className={`hidden lg:items-center w-full justify-end pe-2 lg:flex`} id="navbar-solid-bg">
    <ul className="flex flex-col font-medium rounded-lg bg-gray-50  lg:flex-row lg:gap-8 lg:mt-0 lg:border-0 lg:bg-transparent">
      <li>
        <a href="#" className="block py-2 px-3 lg:p-0 text-default-900" aria-current="page">
          Sobre nosotros
        </a>
      </li>
      <li>
        <a href="#" className="block py-2 px-3 lg:p-0 text-default-900">
          Casos de exito
        </a>
      </li>
      <li>
        <div className="bg-red-600 flex justify-center items-center px-4 rounded-md">
          <a className="hover:text-default-900" href="#contacto">Contacto</a>
        </div>
      </li>
    </ul>
  </div>
</div>
</nav> */
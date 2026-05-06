import React, { useState, useEffect } from "react";
import { Navbar, NavbarBrand, NavbarContent, NavbarItem, NavbarMenuToggle, NavbarMenu, NavbarMenuItem, Button } from "@nextui-org/react";
import { FaArrowRight } from "react-icons/fa";

const menuItems = [
  {
    name: "Inicio",
    link: '#hero'
  },
  {
    name: "Metodología",
    link: '#metodologia'
  },
  {
    name: "Beneficios",
    link: '#servicios'
  },
  {
    name: "Nosotros",
    link: '#nosotros'
  },
  {
    name: "Clientes",
    link: '#proyectos'
  },
  {
    name: "Contacto",
    link: '#cotizacion-rapida'
  }
];

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  // Detectar scroll para cambiar el estilo del header
  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      setIsScrolled(scrollTop > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Función para scroll suave
  const scrollToSection = (sectionId) => {
    const element = document.querySelector(sectionId);
    if (element) {
      element.scrollIntoView({ 
        behavior: 'smooth',
        block: 'start'
      });
    }
    setIsMenuOpen(false); // Cerrar menú móvil después de hacer clic
  };

  return (
    <Navbar 
      onMenuOpenChange={setIsMenuOpen} 
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        isScrolled 
          ? "bg-white/95 backdrop-blur-md shadow-[0_4px_20px_rgba(0,0,0,0.04)] border-b border-zinc-200"
          : "bg-white/85 backdrop-blur-sm border-b border-zinc-100"
      }`}
    >
      <NavbarContent>
        <NavbarBrand>
          <a 
            className="flex title-font font-medium text-default-900 pr-4 cursor-pointer" 
            onClick={() => scrollToSection("#hero")}
          >
            <span className="ml-3 text-3xl hidden">DEV<span className="text-primary-100">SOUL</span></span>
            <img
              src="/img/logos/isotipo 1.png"
              alt="logo principal"
              className="object-cover h-16 w-16 hover:scale-105 transition-transform duration-300"
            />
          </a>
        </NavbarBrand>
        <NavbarMenuToggle
          aria-label={isMenuOpen ? "Close menu" : "Open menu"}
          className="sm:hidden text-zinc-900"
        />
      </NavbarContent>
      
      <NavbarContent className="hidden sm:flex gap-4" justify="center">
        {menuItems.map((item, i) => (
          <NavbarItem key={i}>
            <button
              onClick={() => scrollToSection(item.link)}
              className="text-zinc-500 hover:text-zinc-900 transition-colors duration-300 tracking-tight relative group"
            >
              {item.name}
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-lime-400 transition-all duration-300 group-hover:w-full"></span>
            </button>
          </NavbarItem>
        ))}
      </NavbarContent>

      <NavbarContent justify="end">
        <NavbarItem>
          <Button
            onClick={() => scrollToSection("#cotizacion-rapida")}
            className="bg-primary-100 text-zinc-900 hover:opacity-80 transition-all duration-300 rounded-lg"
          >
            Automatiza tu empresa
            <FaArrowRight className="ml-2" />
          </Button>
        </NavbarItem>
      </NavbarContent>

      <NavbarMenu className="bg-white/95 backdrop-blur-md">
        {menuItems.map((item, index) => (
          <NavbarMenuItem key={`${item.name}-${index}`}>
            <button
              onClick={() => scrollToSection(item.link)}
              className="w-full text-left text-zinc-700 hover:text-zinc-900 transition-colors duration-300 py-2 px-4 font-medium"
            >
              {item.name}
            </button>
          </NavbarMenuItem>
        ))}
        <NavbarMenuItem>
          <Button
            onClick={() => scrollToSection("#cotizacion-rapida")}
            className="w-full bg-primary-100 text-zinc-900 hover:opacity-80 transition-all duration-300 mt-4"
          >
            Automatiza tu empresa
            <FaArrowRight className="ml-2" />
          </Button>
        </NavbarMenuItem>
      </NavbarMenu>
    </Navbar>
  );
}
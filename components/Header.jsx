import React, { useState } from "react";

export default function Header() {
  const [navbarOpen, setNavbarOpen] = React.useState(false);

  const [openMenu, setOpenMenu] = useState(false);

  const toggleMenu = () => setOpenMenu(!openMenu);

  return (
    // <header className="text-white body-font">
    //   <div className="container mx-auto flex flex-wrap p-5 md:flex-row">
    //     <a className="flex title-font font-medium text-white mb-4 md:mb-0 pr-4" href="/">
    //       <span className="ml-3 text-3xl">DEV<span className="text-red-500">SOUL</span></span>
    //     </a>
    //     <button
    //       className="text-white cursor-pointer text-xl leading-none py-1 border border-solid border-transparent rounded bg-transparent block md:hidden outline-none focus:outline-none ml-auto pb-3"
    //       type="button"
    //       onClick={() => setNavbarOpen(!navbarOpen)}
    //     >
    //       <svg
    //         xmlns="http://www.w3.org/2000/svg"
    //         width="24"
    //         height="24"
    //         viewBox="0 0 24 24"
    //         fill="none"
    //         stroke="white"
    //         strokeWidth="2"
    //         strokeLinecap="round"
    //         strokeLinejoin="round"
    //         className="feather feather-menu"
    //       >
    //         <line x1="3" y1="12" x2="21" y2="12"></line>
    //         <line x1="3" y1="6" x2="21" y2="6"></line>
    //         <line x1="3" y1="18" x2="21" y2="18"></line>
    //       </svg>
    //     </button>
    //     <div
    //       className={
    //         "md:flex flex-grow items-center" +
    //         (navbarOpen ? " flex" : " hidden")
    //       }
    //       id="example-navbar-danger"
    //     >
    //       <nav className="md:ml-auto flex justify-end items-center text-base font-semibold pl-7 w-full text-xl">
    //         <a className="mr-6 hover:text-white" href="#">Sobre nosotros</a>
    //         <a className="mr-6 hover:text-white" href="/casos-de-exito">Casos de exito</a>
    //         <div className="bg-red-600 flex justify-center items-center px-4 rounded-md">
    //           <a className="hover:text-white" href="#contacto">Contacto</a>
    //         </div>
    //       </nav>
    //     </div>
    //   </div>
    // </header>

    <nav className="border-gray-200 z-50 w-full text-white max-h-20 max-lg:flex-wrap max-lg:max-w-full">
      <div className="max-w-screen-xl w-full mx-auto flex items-center justify-between py-4 px-4 lg:px-0 backdrop-blur-sm">
        <a className="flex title-font font-medium text-white mb-4 md:mb-0 pr-4" href="/">
          <span className="ml-3 text-3xl">DEV<span className="text-red-500">SOUL</span></span>
        </a>

        <div className="flex items-center lg:hidden">
          <button
            type="button"
            className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm"
            aria-controls="navbar-solid-bg"
            aria-expanded={openMenu ? 'true' : 'false'}
            onClick={toggleMenu}
          >
            <span className="sr-only">Menu</span>
            <svg className="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14">
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M1 1h15M1 7h15M1 13h15"
              />
            </svg>
          </button>
        </div>

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
                <a className="hover:text-white" href="#contacto">Contacto</a>
              </div>
            </li>
          </ul>
        </div>

        <div className={`hidden lg:items-center w-full justify-end pe-2 lg:flex`} id="navbar-solid-bg">
          <ul className="flex flex-col font-medium rounded-lg bg-gray-50  lg:flex-row lg:gap-8 lg:mt-0 lg:border-0 lg:bg-transparent">
            <li>
              <a href="#" className="block py-2 px-3 lg:p-0 text-white" aria-current="page">
                Sobre nosotros
              </a>
            </li>
            <li>
              <a href="#" className="block py-2 px-3 lg:p-0 text-white">
                Casos de exito
              </a>
            </li>
            <li>
            <div className="bg-red-600 flex justify-center items-center px-4 rounded-md">
                <a className="hover:text-white" href="#contacto">Contacto</a>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

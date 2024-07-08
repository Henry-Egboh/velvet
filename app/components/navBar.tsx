"use client";
import Image from "next/image";
import Link from "next/link";
import { HiBars3, HiXMark } from "react-icons/hi2";
import { useState } from "react";
import { usePathname } from "next/navigation";
import { FaEthereum } from "react-icons/fa6";
import { FaShoppingCart } from "react-icons/fa";
import { PurpleButton } from "./button";
const NavBar = () => {
  // state to manage visibility
  const [isOpen, setIsOpen] = useState(false);
  // pathname to check active link
  const pathname = usePathname();
  // handle toggle function
  const handleToggle = () => {
    setIsOpen(!isOpen);
  };
  // itemize nav items
  const navItems = [
    {
      id: 1,
      name: "Home",
      href: "/",
    },
    {
      id: 2,
      name: "Services",
      href: "/webpages/services",
    },
    {
      id: 3,
      name: "Products",
      href: "/webpages/products",
    },
    {
      id: 4,
      name: "Login",
      href: "/login",
    },
    {
      id: 5,
      name: <PurpleButton type={"button"} className="transition duration-300 ease-in-out text-white hover:bg-purple-600 bg-purple-800 rounded-md p-2">Sign Up</PurpleButton>,
      href: "/login/signup",
    },
    {
      id: 6,
      name: <FaShoppingCart className="transition duration-300 ease-in-out hover:text-purple-600 text-purple-800" />,
      href: "/cart",
    },
    {
      id: 7,
      name: "Dashboard",
      href: "/dashboard",
    },
  ];

  return (
    <header className="text-sm font-medium max-w-screen-xl mx-auto p-4 flex items-center justify-between">
      {/* logo */}
      <h1 className="transition duration-500 ease-in-out text-lg hover:text-purple-800 hover:border-none px-4 py-2 font-semibold text-yellow-600 border border-solid ring rounded-tl-[50%] rounded-br-lg border-purple-800 cursor-pointer transform hover:scale-106 hover:translate-x-px">
        <Link
          className="transition duration-300 ease-in-out text-yellow-600 hover:text-purple-800"
          href={"/"}
        >
          <FaEthereum className="text-lg text-yellow-600 hover:text-purple-800" />
          Velvet
        </Link>
      </h1>
      {/* desktop nav items  */}
      <ul className="hidden md:flex items-center justify-center gap-x-8">
        {navItems.map((item) => (
          <li key={item.id}>
            <Link
              href={item.href}
              className={
                pathname === item.href
                  ? "border-b-2 border-yellow-600 transition ease-in-out duration-300 hover:text-yellow-600"
                  : " transition ease-in-out duration-300 hover:text-yellow-600"
              }
            >
              {item.name}
            </Link>
          </li>
        ))}
      </ul>
      {/* Mobile display icon and a call function to handle toggle */}
      <div
        onClick={handleToggle}
        className="block md:hidden cursor-pointer relative"
      >
        {isOpen ? (
          <HiXMark size={40} className="text-yellow-600" />
        ) : (
          <HiBars3 size={40} className="text-yellow-600" />
        )}
      </div>
      {/* mobile nav items  */}
      <ul
        className={
          isOpen
            ? "transition ease-in-out duration-400 absolute top-24 right-0 w-full bg-purple-800 flex flex-col items-center justify-center gap-y-8 p-4 text-white antialiased text-center text-sm md:hidden shadow-2xl z-50"
            : "transition ease-in-out duration-400 top-[-100%] right-[-100%] hidden"
        }
      >
        {navItems.map((item) => (
          <li key={item.id}>
            <Link
              href={item.href}
              className={
                pathname === item.href
                  ? "border-b-2 border-yellow-600 transition ease-in-out duration-300 hover:bg-black hover:bg-opacity-6 hover:border hover:rounded-lg hover:p-2 hover:text-yellow-600"
                  : "transition ease-in-out duration-300 hover:bg-black hover:bg-opacity-6 hover:border hover:rounded-lg hover:p-2 hover:text-yellow-600"
              }
            >
              {item.name}
            </Link>
          </li>
        ))}
      </ul>
    </header>
  );
};

export default NavBar;

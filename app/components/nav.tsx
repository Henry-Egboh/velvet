"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const Nav = () => {
  const pathname = usePathname();
  return (
    <header className="flex items-center justify-between py-4">
      <main>
        <h1>
          <Link className="" href={"/"}>
            Vel<span className="">vet</span>
          </Link>
        </h1>
      </main>
      <nav>
        <ul className="flex gap-8">
          <li>
            <Link
              className={`${pathname === "/" ? "active" : "link"}`}
              href={"/"}
            >
              Home
            </Link>
          </li>
          <li>
            <Link
              className={`${
                pathname === "/webpages/services" ? "active" : "link"
              }`}
              href={"/webpages/services"}
            >
              Services
            </Link>
          </li>
          <li>
            <Link
              className={`${
                pathname === "/webpages/products" ? "active" : "link"
              }`}
              href={"/webpages/products"}
            >
              Products
            </Link>
          </li>
          <li className="">
              <button type="button"><Link href={"/login"}>Login</Link></button>
          </li>
          <li className="">
              <Link href="/cart">Cart</Link>
          </li>
          <li>
            <Link href='/dashboard'>Dashboard</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Nav;

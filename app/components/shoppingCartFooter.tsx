import Link from "next/link";
import { linkStyling } from "../utils/stylesUtil";
import { socialIcons } from "../utils/socialIcons";
const ShoppingCartFooter = () => {
  return (
    <footer className="flex lg:gap-8 justify-center">
      {/* 1st footer section */}
      <section className="flex flex-col gap-2">
        <h4 className="font-medium text-sm tracking-wider leading-6 p-2">FAQ</h4>
        <ul className="flex flex-col gap-2 text-light font-light text-sm">
          <li>
            <Link className={linkStyling} href="/">
              Get a Refund
            </Link>
          </li>
          <li>
            <Link className={linkStyling} href="/">
              How to get discount
            </Link>
          </li>
          <li>
            <Link className={linkStyling} href="/">
              Partner with us
            </Link>
          </li>
        </ul>
      </section>
      {/* 2nd footer section */}
      <section className="flex flex-col gap-2">
        <h4 className="font-medium text-sm tracking-wider leading-6 p-2">
          Return Policy
        </h4>
        <ul className="flex flex-col gap-2 text-light font-light text-sm">
          <li>
            <Link className={linkStyling} href="/">
              Vision & Mission
            </Link>
          </li>
          <li>
            <Link className={linkStyling} href="/">
              Return Policy
            </Link>
          </li>
          <li>
            <Link className={linkStyling} href="/">
              Non-Return Policy
            </Link>
          </li>
          <li>
            <Link className={linkStyling} href={"/"}>
              Issue Statement
            </Link>
          </li>
        </ul>
      </section>
      {/* 3rd footer section */}
      <section className="flex flex-col gap-2 text-sm">
        <h4 className="font-bold tracking-wider leading-6 p-2">Contact</h4>
        <article className="flex flex-col gap-2 p-2">
          <p>#21 Altimore Street, Latidor</p>
          <p>East Yermen, Dutch</p>
          <p>Email: concern@velvet.com</p>
          <p>Phone: +234 812 541 6236</p>
        </article>
        <ul className="flex gap-4 items-center justify-center">
          {socialIcons.map((icon) => (
            <li key={icon.id}>
              <Link href={icon.href} className={linkStyling}>
                {icon.icon}
              </Link>
            </li>
          ))}
        </ul>
      </section>
    </footer>
  );
};
export default ShoppingCartFooter;

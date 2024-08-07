import Link from "next/link";
import { PurpleButton } from "./button";
import { getCurrentDate } from "../utils/getCurrentDate";
import { FaEthereum } from "react-icons/fa6";
import { linkStyling } from "../utils/stylesUtil";
import { socialIconStyles } from "../utils/stylesUtil";
import { socialIcons } from "../utils/socialIcons";
import { inputStyles } from "../utils/stylesUtil";
import ShoppingCartFooter from "./shoppingCartFooter";
const footerData = [
  {
    sleek: [
      {
        id: 1,
        name: "Marsh Rings",
        href: "/",
      },
      {
        id: 2,
        name: "Valeo Welsh",
        href: "/",
      },
      {
        id: 3,
        name: "Sartin Marko",
        href: "/",
      },
      {
        id: 4,
        name: "Chain Bucks",
        href: "/",
      },
    ],
    necklace: [
      {
        id: 1,
        name: "Olmo lace",
        href: "/",
      },
      {
        id: 2,
        name: "Bracelet",
        href: "/",
      },
      {
        id: 3,
        name: "Well Woven",
        href: "/",
      },
      {
        id: 4,
        name: "Everest",
        href: "/",
      },
    ],
    lifestyle: [
      {
        id: 1,
        name: "Beachwear",
        href: "/",
      },
      {
        id: 2,
        name: "Warm Winter",
        href: "/",
      },
      {
        id: 3,
        name: "True Snow",
        href: "/",
      },
      {
        id: 4,
        name: "Sweat Drape",
        href: "/",
      },
      {
        id: 5,
        name: "Cuchill",
        href: "/",
      },
      {
        id: 6,
        name: "Balzhimo",
        href: "/",
      },
    ],
    branded: [
      {
        id: 1,
        name: "Brash Tiali",
        href: "/",
      },
      {
        id: 2,
        name: "Braithon",
        href: "/",
      },
      {
        id: 3,
        name: "Curtail Loin",
        href: "/",
      },
      {
        id: 4,
        name: "Vital Lope",
        href: "/",
      },
      {
        id: 5,
        name: "Yellow flap",
        href: "/",
      },
    ],
  },
];

const Footer = () => {
  return (
    // footer section
    <footer className="grid w-full lg:px-4">
      <main>
      <main className="grid lg:grid-cols-4 gap-y-16 mb-16">
        {/* aside footer content with background */}
        <aside className="grid lg:row-span-2 bg-purple-800 bg-opacity-5 p-4 gap-y-8">
          {/* subscribe section  */}
          <div className="flex flex-col items-center md:items-start gap-4">
            <h4 className="text-base font-medium text-purple-800 ">
              Get Hot Deals!
            </h4>
            <div className="relative w-full">
              <form className="" action="">
                {/* reusable button component */}
                <div className="absolute left-0">
                  <PurpleButton
                    className={
                      "transition duration-400 ease-in-out bg-purple-800 text-white p-2 border border-purple-800 flex-initial hover:border-yellow-600 hover:bg-opacity-25 hover:text-yellow-600 text-sm transform hover:scale-105 hover:translate-x-px"
                    }
                  >
                    Subscribe
                  </PurpleButton>
                </div>
                <div className="w-full">
                  <input
                    type="email"
                    placeholder="Enter your email"
                    name="email"
                    autoComplete="on"
                    className="transition ease-in-out duration-300 w-full py-1.5 border border-gray-300 placeholder:pl-24 placeholder:text-xs placeholder:text-gray-300 hover:border-purple-300 focus:outline-none focus:border-yellow-600"
                  />
                </div>
              </form>
            </div>
          </div>
          {/* company logo with social icons */}
          <div className="flex flex-col justify-center items-center text-center gap-8">
            {/* company logo, name & description */}
            <div className="border-b border-yellow-600 pb-8">
              <div className="flex justify-center">
                <Link className="" href={"/"}>
                  <FaEthereum className="transition duration-400 ease-in-out text-purple-800 text-4xl hover:text-yellow-600" />
                </Link>
              </div>
              <h4>
                <Link
                  className="transition duration-400 ease-in-out hover:text-yellow-600 text-lg hover:border-b hover:border-yellow-600"
                  href={"/"}
                >
                  Velvet
                </Link>
              </h4>
              <p className="text-xs text-gray-400 italic">
                Dignissimos recusandae, dolores et tempora hic nesciunt!
              </p>
            </div>
            {/* social icons */}
            <ul className="flex items-center justify-center gap-4">
              {/* reusable social icon component */}
              {socialIcons.map((icon) => (
                <li key={icon.id}>
                  <Link href={icon.href} className={socialIconStyles}>
                    {icon.icon}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </aside>
        {/* ==========================================footer list items */}
        <div className="lg:col-span-3">
          <div className="grid grid-cols-2 md:flex gap-4 px-2 lg:gap-12 lg:px-12">
            {/* 1st column */}
            <div className="flex flex-col flex-auto">
              <h4 className="text-base font-medium text-purple-800 mb-4 border-b border-yellow-600 ">
                Georgous Sleek
              </h4>
              <ul className="flex flex-col gap-2 text-sm font-light">
                {footerData[0].sleek.map((item) => (
                  <li key={item.id}>
                    <Link className={linkStyling} href={item.href}>
                      {item.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
            {/* 2nd column */}
            <div className="flex flex-col flex-auto">
              <h4 className="text-base font-medium text-purple-800 mb-4 border-b border-yellow-600 ">
                Free Lifestyle
              </h4>
              <ul className="flex flex-col gap-2 text-sm font-light">
                {footerData[0].lifestyle.map((life) => (
                  <li key={life.id}>
                    <Link href={life.href} className={linkStyling}>
                      {life.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
            {/* 3rd column */}
            <div className="flex flex-col flex-auto">
              <h4 className="text-base font-medium text-purple-800 mb-4 border-b border-yellow-600 ">
                Necklace Dong
              </h4>
              <ul className="flex flex-col gap-2 text-sm font-light">
                {footerData[0].necklace.map((neck) => (
                  <li key={neck.id}>
                    <Link className={linkStyling} href={neck.href}>
                      {neck.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
            {/* 4th column */}
            <div className="flex flex-col flex-auto">
              <h4 className="text-base font-medium text-purple-800 mb-4 border-b border-yellow-600 ">
                Branded Jewelry
              </h4>
              <ul className="flex flex-col gap-2 text-sm font-light">
                {footerData[0].branded.map((brand) => (
                  <li key={brand.id}>
                    <Link className={linkStyling} href={brand.href}>
                      {brand.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
        {/* footer card items  */}
        <div className="lg:row-span-1 lg:col-span-3 lg:text-start w-full flex items-center justify-center lg:gap-x-8 lg:px-12 flex-auto text-center  ">
          <div className="bg-purple-800 bg-opacity-5 shadow p-2 flex flex-col lg:flex-row gap-4 items-center">
            <FaEthereum className="text-2xl text-purple-800" />
            <div className="text-xs">
              <h4 className="text-black-600 font-medium">Ethereal</h4>
              <p className="text-gray-400">
                similique a error accusantium architecto.
              </p>
            </div>
          </div>
          <div className="bg-purple-800 bg-opacity-5 shadow p-2 flex flex-col lg:flex-row gap-4 items-center">
            <FaEthereum className="text-2xl text-purple-800" />
            <div className="text-xs">
              <h4 className="text-black-600 font-medium">Ethereal</h4>
              <p className="text-gray-400">
                similique a error accusantium architecto.
              </p>
            </div>
          </div>
          <div className="bg-purple-800 bg-opacity-5 shadow p-2 flex flex-col lg:flex-row gap-4 items-center">
            <FaEthereum className="text-2xl text-purple-800" />
            <div className="text-xs">
              <h4 className="text-black-600 font-medium">Ethereal</h4>
              <p className="text-gray-400">
                similique a error accusantium architecto.
              </p>
            </div>
          </div>
        </div>
      </main>
      </main>
      <ShoppingCartFooter />
            {/* copyright section */}
      <div className="bg-purple-800 py-2 text-center lg:text-start lg:px-12 text-white text-sm w-full">
        <p>&copy; {getCurrentDate()} Velvet. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;

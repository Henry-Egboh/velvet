import Link from "next/link";
import { PurpleButton } from "./button";
import { getCurrentDate } from "../utils/getCurrentDate";
import {
  FaEthereum,
  FaFacebook,
  FaInstagram,
  FaTwitter,
  FaWhatsapp,
  FaYoutube,
} from "react-icons/fa6";
// object passed to the input element
const input = {
  email: {
    type: "email",
    placeholder: "Enter your email",
    classname: `transition duration-1000 ease-in-out border border-solid border-gray-300
        flex-initial focus:border-yellow-600 focus:outline-none py-1.5 px-4
        placeholder:text-sm placeholder:text-light placeholder-gray-300`,
    name: "email",
  },
};

const Footer = () => {
  return (
    // footer section
    <footer className="flex border border-gray-300">
      {/* aside footer content with background */}
      <main className="flex flex-col gap-12 bg-purple-800 bg-opacity-5 px-4 py-8 w-1/4">
        {/* subscribe section  */}
        <div className="flex flex-col gap-4 justify-center">
          <h4 className="text-base font-medium text-purple-800 ">
            Get Hot Deals!
          </h4>
          <form className="w-full flex items-center" action="">
            {/* reusable button component */}
            <PurpleButton
              className={
                "transition duration-1000 ease-in-out bg-purple-800 text-white p-2 border border-purple-800 flex-auto hover:border-yellow-600 hover:bg-opacity-25 hover:text-yellow-600 text-sm transform hover:scale-105 hover:translate-x-px"
              }
            >
              Subscribe
            </PurpleButton>
            <input
              className={input.email.classname}
              type={input.email.type}
              placeholder={input.email.placeholder}
              name={input.email.name}
            />
          </form>
        </div>
        {/* company logo with social icons */}
        <div className="flex flex-col justify-center items-center text-center gap-8">
            {/* company logo, name & description */}
          <div className="border-b border-yellow-600 pb-8">
            <div className="flex justify-center">
              <Link
                className=""
                href={"/"}
              >
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
          <div className="flex items-center gap-4">
               <Link
                href={"/"}
              >
                <FaWhatsapp className="transition duration-400 ease-in-out hover:text-yellow-600 text-purple-800 text-2xl transform hover:scale-105 hover:translate-x-px" />
              </Link>
               <Link
                href={"/"}
              >
                <FaYoutube className="transition duration-400 ease-in-out hover:text-yellow-600 text-purple-800 text-2xl transform hover:scale-105 hover:translate-x-px" />
              </Link>
               <Link
                href={"/"}
              >
                <FaTwitter className="transition duration-400 ease-in-out hover:text-yellow-600 text-purple-800 text-2xl transform hover:scale-105 hover:translate-x-px" />
              </Link>
               <Link
                href={"/"}
              >
                <FaInstagram className="transition duration-400 ease-in-out hover:text-yellow-600 text-purple-800 text-2xl transform hover:scale-105 hover:translate-x-px" />
              </Link>
               <Link
                href={"/"}
              >
                <FaFacebook className="transition duration-400 ease-in-out hover:text-yellow-600 text-purple-800 text-2xl transform hover:scale-105 hover:translate-x-px" />
              </Link>
          </div>
        </div>
      </main>
      {/* main footer content with links and copyrights  */}
      <main className="flex flex-col flex-auto gap-36">
        <section className="flex gap-12 px-12">
          <div className="flex flex-col flex-auto">
            <h4 className="text-base font-medium text-purple-800 mb-4 border-b border-yellow-600 ">
              Georgous Sleek
            </h4>
            <ul className="flex flex-col gap-2 text-sm font-light">
              <li>
                <Link
                  className="transition duration-1000 ease-in-out p-2 hover:text-yellow-600 text-sm transform hover:scale-105"
                  href={"/"}
                >
                  Pave Watch
                </Link>
              </li>
              <li>
                <Link
                  className="transition duration-1000 ease-in-out p-2 hover:text-yellow-600 text-sm transform hover:scale-105"
                  href={"/"}
                >
                  Pave Watch
                </Link>
              </li>
              <li>
                <Link
                  className="transition duration-1000 ease-in-out p-2 hover:text-yellow-600 text-sm transform hover:scale-105"
                  href={"/"}
                >
                  Pave Watch
                </Link>
              </li>
              <li>
                <Link
                  className="transition duration-1000 ease-in-out p-2 hover:text-yellow-600 text-sm transform hover:scale-105"
                  href={"/"}
                >
                  Pave Watch
                </Link>
              </li>
            </ul>
          </div>
          <div className="flex flex-col flex-auto">
            <h4 className="text-base font-medium text-purple-800 mb-4 border-b border-yellow-600 ">
              Free Lifestyle
            </h4>
            <ul className="flex flex-col gap-2 text-sm font-light">
              <li>
                <Link
                  className="transition duration-1000 ease-in-out p-2 hover:text-yellow-600 text-sm transform hover:scale-105"
                  href={"/"}
                >
                  Citel Sande
                </Link>
              </li>
              <li>
                <Link
                  className="transition duration-1000 ease-in-out p-2 hover:text-yellow-600 text-sm transform hover:scale-105"
                  href={"/"}
                >
                  Citel Sande
                </Link>
              </li>
              <li>
                <Link
                  className="transition duration-1000 ease-in-out p-2 hover:text-yellow-600 text-sm transform hover:scale-105"
                  href={"/"}
                >
                  Citel Sande
                </Link>
              </li>
              <li>
                <Link
                  className="transition duration-1000 ease-in-out p-2 hover:text-yellow-600 text-sm transform hover:scale-105"
                  href={"/"}
                >
                  Citel Sande
                </Link>
              </li>
              <li>
                <Link
                  className="transition duration-1000 ease-in-out p-2 hover:text-yellow-600 text-sm transform hover:scale-105"
                  href={"/"}
                >
                  Citel Sande
                </Link>
              </li>
              <li>
                <Link
                  className="transition duration-1000 ease-in-out p-2 hover:text-yellow-600 text-sm transform hover:scale-105"
                  href={"/"}
                >
                  Citel Sande
                </Link>
              </li>
            </ul>
          </div>
          <div className="flex flex-col flex-auto">
            <h4 className="text-base font-medium text-purple-800 mb-4 border-b border-yellow-600 ">
              Necklace Dong
            </h4>
            <ul className="flex flex-col gap-2 text-sm font-light">
              <li>
                <Link
                  className="transition duration-1000 ease-in-out p-2 hover:text-yellow-600 text-sm transform hover:scale-105"
                  href={"/"}
                >
                  Sablo Tie
                </Link>
              </li>
              <li>
                <Link
                  className="transition duration-1000 ease-in-out p-2 hover:text-yellow-600 text-sm transform hover:scale-105"
                  href={"/"}
                >
                  Sablo Tie
                </Link>
              </li>
              <li>
                <Link
                  className="transition duration-1000 ease-in-out p-2 hover:text-yellow-600 text-sm transform hover:scale-105"
                  href={"/"}
                >
                  Sablo Tie
                </Link>
              </li>
              <li>
                <Link
                  className="transition duration-1000 ease-in-out p-2 hover:text-yellow-600 text-sm transform hover:scale-105"
                  href={"/"}
                >
                  Sablo Tie
                </Link>
              </li>
              <li>
                <Link
                  className="transition duration-1000 ease-in-out p-2 hover:text-yellow-600 text-sm transform hover:scale-105"
                  href={"/"}
                >
                  Sablo Tie
                </Link>
              </li>
            </ul>
          </div>
          <div className="flex flex-col flex-auto">
            <h4 className="text-base font-medium text-purple-800 mb-4 border-b border-yellow-600 ">
              Branded Jewelry
            </h4>
            <ul className="flex flex-col gap-2 text-sm font-light">
              <li>
                <Link
                  className="transition duration-1000 ease-in-out p-2 hover:text-yellow-600 text-sm transform hover:scale-105"
                  href={"/"}
                >
                  Rings Olive
                </Link>
              </li>
              <li>
                <Link
                  className="transition duration-1000 ease-in-out p-2 hover:text-yellow-600 text-sm transform hover:scale-105"
                  href={"/"}
                >
                  Rings Olive
                </Link>
              </li>
              <li>
                <Link
                  className="transition duration-1000 ease-in-out p-2 hover:text-yellow-600 text-sm transform hover:scale-105"
                  href={"/"}
                >
                  Rings Olive
                </Link>
              </li>
              <li>
                <Link
                  className="transition duration-1000 ease-in-out p-2 hover:text-yellow-600 text-sm transform hover:scale-105"
                  href={"/"}
                >
                  Rings Olive
                </Link>
              </li>
              <li>
                <Link
                  className="transition duration-1000 ease-in-out p-2 hover:text-yellow-600 text-sm transform hover:scale-105"
                  href={"/"}
                >
                  Rings Olive
                </Link>
              </li>
            </ul>
          </div>
        </section>
        <section className="justify-items-end bg-purple-800 p-2 text-white text-sm">
          <p>&copy; {getCurrentDate()} Velvet. All rights reserved.</p>
        </section>
      </main>
    </footer>
  );
};

export default Footer;

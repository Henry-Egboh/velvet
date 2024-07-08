"use client";
import Link from "next/link";
import NavBar from "@/app/components/navBar";
import { PurpleButton } from "@/app/components/button";
const Cart = () => {
  return (
 <header>
<NavBar />
<Link className="text-lg font-bold legacyBehaviour hover:bg-black border-2 border-green" href={'/cart'} passHref={true}></Link><PurpleButton type={"button"} className="transition duration-300 ease-in-out text-white hover:bg-purple-600 bg-purple-800 rounded-md p-2">Proceed to Checkout</PurpleButton>
 </header>
  );
};

export default Cart;

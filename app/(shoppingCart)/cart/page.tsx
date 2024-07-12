"use client";
import Link from "next/link";
import { useRouter } from "next/navigation";
import NavBar from "@/app/components/navBar";
import { PurpleButton } from "@/app/components/button";
import ShoppingCartFooter from "@/app/components/shoppingCartFooter";
const Cart = () => {
  const router = useRouter();
  return (
    <header>
      <nav>
        {/* <NavBar /> */}
      </nav>
      <div className="flex items-center justify-center">
        <PurpleButton
          btnClick={() => {
            router.back();
          }}
          type={"button"}
          className="flex-1 transition duration-300 ease-in-out text-white hover:bg-yellow-400 bg-yellow-600 rounded-md p-2"
        >
          Back
        </PurpleButton>
        <PurpleButton
          btnClick={() => {
            router.push("/checkout");
          }}
          type={"button"}
          className="flex-1 transition duration-300 ease-in-out text-white hover:bg-purple-600 bg-purple-800 rounded-md p-2"
        >
          Checkout
        </PurpleButton>
      </div>
      <footer>
        <ShoppingCartFooter />
      </footer>
    </header>
  );
};

export default Cart;

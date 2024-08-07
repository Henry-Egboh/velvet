"use client";
import Link from "next/link";
import { useRouter } from "next/navigation";
import NavBar from "@/app/components/navBar";
import { PurpleButton } from "@/app/components/button";
import ShoppingCartFooter from "@/app/components/shoppingCartFooter";
import { useState } from "react";
import { inputStyles } from "@/app/utils/stylesUtil";


const Cart = () => {
  const [show, setShow] = useState(false);
return (
  <>
  <div>
    <h1 className="bg-black text-white p-2 cursor-pointer w-40" onClick={() => setShow(!show)}>Click Me</h1>
    <div className={show ? "block" : "hidden"}>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus praesentium,
        voluptatum sint esse laudantium pariatur fugit delectus tenetur
        nisi voluptas aliquam, excepturi asperiores non minima similique animi maiores corporis eos!</p>
    </div>
  </div>
  </>
)
};

export default Cart;

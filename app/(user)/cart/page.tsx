"use client";
import Link from "next/link";
const Cart = () => {
  return (
    <>
      {" "}
      <h1>Cart Page</h1>
      <ul className="flex gap-8">
        <li>
          <Link href="/webpages/products">Continue Shopping</Link>
        </li>
        <li>
          <Link href="/checkout">Check Out</Link>
        </li>
      </ul>
    </>
  );
};

export default Cart;

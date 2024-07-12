"use client";
import { PurpleButton } from "@/app/components/button";
import { useRouter } from "next/navigation";
import { inputStyles } from "@/app/utils/stylesUtil";
// CHECK OUT COMPONENT
const CheckOutPage = () => {
  const router = useRouter();
  return (
    <header className="bg-gray-100 md:p-8">
      <header className="w-full h-full flex lg:grid lg:grid-cols-7 gap-px">
        {/* 1ST COL empty left content */}
        <aside className="hidden lg:block lg:col-span-2"></aside>
        {/* 2ND COL main check out form layout */}
        <main className="lg:col-span-3 flex flex-col gap-4">
          {/* COL 2 FORM CONTENTS */}
          <section className="w-full flex flex-col gap-2 bg-white p-4 md:px-8 md:py-16">
            {/* check out form heading */}
            <h2 className="text-center font-semibold tracking-wide text-lg text-yellow-600 pb-4">
              Check Out Page
            </h2>
            {/* check out form */}
            <div>
              <form action="">
                {/* CONTACT ADDRESS */}
                <div className="flex flex-col gap-4 w-full">
                  <h2 className="my-8 font-medium tracking-wide text-base leading-6 text-purple-800 border-yellow-600 pb-2 border-b">
                    Contact Address
                  </h2>
                  <input
                    className={inputStyles}
                    type="text"
                    placeholder="Name"
                    name="name"
                    value={''}
                  />
                  <input
                    className={inputStyles}
                    type="email"
                    placeholder="Email"
                    name="email"
                    value={''}
                  />
                  <input
                    className={inputStyles}
                    type="tel"
                    placeholder="Phone"
                    name="phone"
                    value={''}
                  />
                </div>
                <div className="flex flex-col gap-4 w-full">
                  {/* BILLING ADDRESS */}
                  <h2 className="my-8 font-medium tracking-wide text-base leading-6 text-purple-800 border-yellow-600 pb-2 border-b">
                    Billing Address
                  </h2>
                  <input
                    className={`${inputStyles} w-[50%]`}
                    placeholder="Country"
                    list="countries"
                    name="country"
                    value={''}
                  />
                  <datalist id="countries">
                    <option value="Canada" />
                    <option value="Morroco" />
                    <option value="Netherland" />
                    <option value="Argentina" />
                    <option value="Croatia" />
                  </datalist>
                  <input
                    className={inputStyles}
                    type="text"
                    placeholder="streetName"
                    name="streetName"
                    value={""}
                  />
                  <div className="flex gap-4">
                    <input
                      className={`${inputStyles} flex-1`}
                      type="text"
                      placeholder="city"
                      name="city"
                      value={''}
                    />
                    <input
                      className={`${inputStyles} flex-1`}
                      placeholder="State"
                      list="states"
                      name="state"
                      value={''}
                    />
                    <datalist id="states">
                      <option value="Alberta" />
                      <option value="Georgia" />
                      <option value="Alabama" />
                    </datalist>
                  </div>
                  <input
                    className={`${inputStyles} w-[50%]`}
                    type="text"
                    placeholder="zipCode"
                    name="zipCode"
                    value={''}
                  />
                </div>
                <div className="flex flex-col gap-4 w-full">
                  {/* PAYMENT METHOD */}
                  <h2 className="my-8 font-medium tracking-wide text-base leading-6 text-purple-800 border-yellow-600 pb-2 border-b">
                    Payment Method
                  </h2>
                  <input
                    className={inputStyles}
                    type="text"
                    placeholder="Name on Card"
                    name="cardName"
                    value={''}
                  />
                  <input
                    className={inputStyles}
                    type="number"
                    placeholder="Card Number"
                    name="cardNumber"
                    value={''}
                  />
                  <div className="flex gap-4">
                    <input
                      className={`${inputStyles} flex-1`}
                      type="number"
                      placeholder="Expiration"
                      name="expiration"
                      value={''}
                    />
                    <input
                      className={`${inputStyles} flex-1`}
                      type="number"
                      placeholder="Security Code"
                      name="cvv"
                      value={''}
                    />
                  </div>
                </div>
                {/* continue to review section on MOBILE */}
                <div>
                  <PurpleButton
                    type={"button"}
                    className="hidden lg:flex justify-center mt-16 w-full transition duration-300 ease-in-out text-white hover:bg-purple-600 bg-purple-800 rounded-md p-2 hover:tracking-wide"
                  >
                    Proceed to Pay
                  </PurpleButton>
                  <PurpleButton
                    type={"button"}
                    className="lg:hidden mt-16 w-full transition duration-300 ease-in-out text-white hover:bg-purple-600 bg-purple-800 rounded-md p-2 hover:tracking-wide"
                  >
                    Continue
                  </PurpleButton>
                </div>
              </form>
            </div>
          </section>
        </main>
        {/*3RD COL order summary */}
        <aside className="hidden lg:flex flex-col items-center lg:flex-auto lg:col-span-2 bg-white text-center pt-16 px-4 font-semibold text-sm">
          <h2 className="text-purple-800">Review Order</h2>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam laborum
            dolores repellat? Aspernatur, voluptatibus quis.
          </p>
          <p>WHAT A REVIEW</p>
        </aside>
      </header>
    </header>
  );
};

export default CheckOutPage;

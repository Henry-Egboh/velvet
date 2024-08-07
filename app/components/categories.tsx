"use client";
import Img1 from "@/app/assets/dmitry-vechorko-LzcCJJcYvF8-unsplash.jpg";
import Img2 from "@/app/assets/filip-knezevic-k-ElrinXWAk-unsplash.jpg";
import Img3 from "@/app/assets/ian-dooley-y_CSTKJ0bEs-unsplash.jpg";
import Img4 from "@/app/assets/kitera-dent-6g_pz58eCJg-unsplash.jpg";
import Img5 from "@/app/assets/curology-VItxz6u036U-unsplash.jpg";
import Img6 from "@/app/assets/toa-heftiba-GLl6_-L3fxM-unsplash.jpg";
import Image from "next/image";
import { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { AnimatePresence, motion } from "framer-motion";
import { linkStyling } from "../utils/stylesUtil";

const activeTabClass = `before:bg-yellow-600 before:content-[''] before:absolute before-block before:w-[10%] before:lg:w-[15%]
                    before:h-0.5 before:top-0 bg-white rounded p-2 text-purple-800 text-xs md:text-sm font-medium
                    cursor-pointer before:transition before:duration-300 before:ease-in-out flex items-center`;
const tabClass =
  "flex items-center bg-purple-800 rounded p-2 text-white text-xs md:text-sm font-medium cursor-pointer hover:bg-purple-600 hover:scale-x-[0.9] transition duration-300 ease-in-out";

const ProductCategories = () => {
  const [activeTab, setActiveTab] = useState(0);
  const data = [
    {
      id: 0,
      category: "Hair Cream",
      brandName1: "Shampoo",
      brandName2: "Roma Citel",
      brandName3: "Chengdu Chen",
      brandName4: "CaroWhite",
      brandName5: "Farouz Farhan",
      image: Img1,
      link: "More",
    },
    {
      id: 1,
      category: "Body Lotion",
      brandName1: "Nivea",
      brandName2: "Roma Citel",
      brandName3: "Chengdu Chen",
      brandName4: "CaroWhite",
      brandName5: "Farouz Farhan",
      image: Img2,
      link: "More",
    },
    {
      id: 2,
      category: "After Shave",
      brandName1: "Dudu",
      brandName2: "Roma Citel",
      brandName3: "Chengdu Chen",
      brandName4: "CaroWhite",
      brandName5: "Farouz Farhan",
      image: Img3,
      link: "More",
    },
    {
      id: 3,
      category: "Oil Lotion",
      brandName1: "Oliver",
      brandName2: "Roma Citel",
      brandName3: "Chengdu Chen",
      brandName4: "CaroWhite",
      brandName5: "Farouz Farhan",
      image: Img4,
      link: "More",
    },
    {
      id: 4,
      category: "Bath Soap",
      brandName1: "SafeGuard",
      brandName2: "Roma Citel",
      brandName3: "Chengdu Chen",
      brandName4: "CaroWhite",
      brandName5: "Farouz Farhan",
      image: Img5,
      link: "More",
    },
    {
      id: 5,
      category: "Manicure",
      brandName1: "Froxa",
      brandName2: "Roma Citel",
      brandName3: "Chengdu Chen",
      brandName4: "CaroWhite",
      brandName5: "Farouz Farhan",
      image: Img6,
      link: "More",
    },
  ];
  return (
    <header className="px-2 lg:px-4 w-full my-16 md:my-48">
      <h2 className="font-medium text-yellow-600 text-sm md:text-2xl tracking-wider text-center">
        Top Brands
      </h2>
      <TabButtons catData={data} aTab={activeTab} setATab={setActiveTab} />
      <TabContent catData={data} aTab={activeTab} />
    </header>
  );
};
export default ProductCategories;
// TAB BUTTONS
const TabButtons = ({ catData, aTab, setATab }: any) => {
  return (
    <AnimatePresence mode="wait">
    <motion.div key={aTab}>
      <main className="w-full my-12">
        <ul className="flex gap-2 justify-center lg:gap-0 lg:justify-between relative w-[100%] lg:w-[50%] lg:mx-auto">
          {catData.map((item: any, index: number) => (
            <li
              className={`${aTab === index ? activeTabClass : tabClass}`}
              key={item.id}
              onClick={() => setATab(index)}
            >
              {item.category}
            </li>
          ))}
        </ul>
      </main>
    </motion.div>
    </AnimatePresence>
  );
};
// TAB CONTENT
const TabContent = ({ catData, aTab }: any) => {
  const textVariant = {
    initial: {y: "100%", opacity: 0},
    animate: {y: "0%", opacity: 1},
    exit: {y: "100%", opacity: 0},
  };
  const imgVariant = {
    initial: {scale: 0.1},
    animate: {scale: 1},
    exit: {scale: 0.1},
  }
  return (
    <AnimatePresence mode="wait">
    <motion.div key={aTab}>
      <main className="flex flex-col md:flex-row gap-8 md:gap-4 w-[100%] lg:w-[50%] lg:mx-auto">
        <motion.div variants={textVariant} initial="initial" animate="animate" exit="exit" transition={{transition: 0.5}} className="flex flex-col flex-1 gap-2 w-[100%]">
          <p className="border-b-[1px] border-gray-300 pb-2"><Link className={linkStyling} href={'/'}>{catData[aTab].brandName1}</Link></p>
          <p className="border-b-[1px] border-gray-300 pb-2"><Link className={linkStyling} href={'/'}>{catData[aTab].brandName2}</Link></p>
          <p className="border-b-[1px] border-gray-300 pb-2"><Link className={linkStyling} href={'/'}>{catData[aTab].brandName3}</Link></p>
          <p className="border-b-[1px] border-gray-300 pb-2"><Link className={linkStyling} href={'/'}>{catData[aTab].brandName4}</Link></p>
          <p className="border-b-[1px] border-gray-300 pb-2"><Link className={linkStyling} href={'/'}>{catData[aTab].brandName5}</Link></p>
          <p className="mt-2 w-full flex justify-center">
            <Link
              className="flex-1 transition duration-300 ease-in-out bg-yellow-600 p-2 rounded text-white text-sm font-medium tracking-wide hover:bg-purple-600 hover:text-white hover:shadow"
              href={"/"}
            >
              {catData[aTab].link}
            </Link>
          </p>
        </motion.div>
        <motion.div variants={imgVariant} initial="initial" animate="animate" exit="exit" transition={{transition: 0.5}} className="flex-1 overflow-hidden">
          <Image
            className="object-cover object-center"
            src={catData[aTab].image}
            alt="category image"
          />
        </motion.div>
      </main>
    </motion.div>
    </AnimatePresence>
  );
};

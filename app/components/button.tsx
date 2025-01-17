"use client";
import { useRouter } from "next/navigation";
import Link from "next/link";
// prop type definition
interface ButtonProps {
  children?: React.ReactNode;
  className?: string;
  btnClick?: any;
  type?: any;
}
// reusable submit button component
export const SubmitButton = ({ children }: ButtonProps) => {
  const router = useRouter();
  return (
    <>
      <button
        className="transition duration-300 ease-in-out border rounded-md bg-purple-800 text-white border-gray-300 w-full p-1 transform hover:bg-opacity-80 hover:tracking-wide"
        type="button"
        onClick={() => router.push("/")}
      >
        {children}
      </button>
    </>
  );
};
// reusable button component
export const PurpleButton = ({
  children,
  className,
  btnClick,
  type,
}: ButtonProps) => {
  return (
    <button className={className} type={type} onClick={btnClick}>
      {children}
    </button>
  );
};

"use client";
import { PurpleButton } from "@/app/components/button";
import { formItems } from "../page";
import { useState } from "react";
import Link from "next/link";
const SignUp = () => {
  // CREATE STATE TO UPDATE INPUT
  const [formData, setFormData] = useState({
    fullname: "",
    email: "",
    password: "",
    checked: false,
  });
  // HANDLE CHANGE
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value, }));
  };
  // HANDLE CHECKED BOX
  const handleCheckBox = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.checked) {
      setFormData((prev) => ({ ...prev, checked: true, }));
    } else {
      setFormData((prev) => ({ ...prev, checked: false, }));
    }
  }
  // HANDLE SUBMIT
  const handleSignUp = (e : React.FormEvent<HTMLInputElement>) => {
    e.preventDefault();
    alert(`FullName : ${formData.fullname}, Email : ${formData.email}, Password : ${formData.password}, Checked : ${formData.checked}`)
  };
  // SIGN UP CLASS
  const signUpBtn = {
    className: `transition duration-400 ease-in-out bg-purple-800 text-white p-2 rounded-md
      border border-current hover:border-purple-600 hover:bg-purple-600 hover:tracking-wide
      text-sm text-green-800 w-full`,
  };
  return (
    <main className="w-[100%] h-screen flex flex-col items-center justify-center">
      <form
        className="w-full md:w-[35%] flex flex-col gap-8 ring-1 ring-gray-200 items-center justify-center px-12 py-24"
        action=""
      >
        <input
          className={formItems[1].input.fullname.className}
          placeholder={formItems[1].input.fullname.placeholder}
          id={formItems[1].input.fullname["id"]}
          type={formItems[1].input.fullname["type"]}
          name={formItems[1].input.fullname["name"]}
          onChange={handleChange}
          value={formData.fullname}
        />
        <input
          className={formItems[1].input.email.className}
          id={formItems[1].input.email.id}
          type={formItems[1].input.email.type}
          placeholder={formItems[1].input.email.placeholder}
          name={formItems[1].input.email.name}
          onChange={handleChange}
          value={formData.email}
        />
        <input
          className={formItems[1].input.password.className}
          placeholder={formItems[1].input.password.placeholder}
          id={formItems[1].input.password["id"]}
          type={formItems[1].input.password["type"]}
          name={formItems[1].input.password["name"]}
          onChange={handleChange}
          value={formData.password}
        />
        <div className="flex gap-8 items-center justify-center">
          <input
            className="border border-lg border-purple-800 focus:outline-none focus:border-purple-600 focus:bg-yellow-600 p-2"
            type="checkbox"
            name="checkbox"
            id="checkbox"
            onChange={handleCheckBox}
            checked={formData.checked}
          />{" "}
          <label className="text-sm" htmlFor="checkbox">
            Subscribe to our newsletter
          </label>
        </div>
        {/* {formData.checked && <p>Checked : {formData.checked.toString()}</p>} */}
        <PurpleButton type={'submit'} btnClick={handleSignUp} className={signUpBtn.className}>
          Sign Up
        </PurpleButton>
      </form>
      <p>
        <Link href={"/"}>Take Me Home</Link>
      </p>
    </main>
  );
};

export default SignUp;

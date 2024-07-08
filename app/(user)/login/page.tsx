"use client";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { PurpleButton, SubmitButton } from "@/app/components/button";
// form parameters
export const formItems: any = [
  {
    label: {
      email: "Email :",
      password: "PassWord :",
    },
  },
  {
    input: {
      email: {
        type: "email",
        placeholder: "Enter your email",
        className: `transition duration-300 ease-in-out border border-solid rounded-md border-gray-300
        py-1 px-4 w-full placeholder-gray-300 placeholder-text-xs focus:outline-none focus:border-purple-300 shadow-sm`,
        name: "email",
        id: "email",
        autoComplete: "off",
        value: "",
      },
      password: {
        type: "password",
        placeholder: "Enter your password",
        className: `transition duration-300 ease-in-out border border-solid rounded-md border-gray-300
          py-1 px-4 w-full placeholder-gray-300 placeholder-text-xs focus:outline-none focus:border-purple-300 shadow-sm`,
        name: "password",
        id: "password",
        autocpomplete: "off",
        value: "",
      },
      fullname: {
        type: "text",
        placeholder: "Enter your fullname",
        className: `transition duration-300 ease-in-out border border-solid rounded-md border-gray-300
          py-1 px-4 w-full placeholder-gray-300 placeholder-text-xs focus:outline-none focus:border-purple-300 shadow-sm`,
        name: "fullname",
        id: "fullname",
        autoComplete: "name",
        value: "",
      }
    },
  },
];
// login function
const Login = () => {
  // sign up button class
  const signUpBtn = {
    className: `transition duration-400 ease-in-out bg-purple-800 text-white p-2 rounded-md
      border border-current hover:border-purple-600 hover:bg-purple-600 hover:tracking-wide
      text-sm text-green-800`,
  };
// handle sign up btn click
  const handleClick = () => {
    console.log("sign up button clicked");
  };

  return (
    <main className="w-full h-screen lg:flex lg:items-center lg:justify-center">
      <div className="w-full lg:w-3/4 xl:w-1/2 md:mx-auto lg:border border-gray-300 rounded-md lg:shadow-2xl">
        <form
          action=""
          className="flex justify-center items-center flex-col py-16 px-2 md:px-24 gap-8 text-sm"
        >
          {/* sign up component on top of login form */}
          <section className="flex justify-end items-center w-full">
            <PurpleButton
              type={"button"}
              className={signUpBtn.className}
            >
              Sign Up
            </PurpleButton>
          </section>
          <section className="flex flex-col sm:flex-row items-center justify-center gap-y-2 sm:gap-1 w-full">
            <div className="w-32">
              <label htmlFor="email">{formItems[0].label["email"]}</label>
            </div>
            <div className="w-full">
              <input
                className={formItems[1].input.email.className}
                id={formItems[1].input.email.id}
                type={formItems[1].input.email.type}
                placeholder={formItems[1].input.email.placeholder}
                name={formItems[1].input.email.name}
              />
            </div>
          </section>
          <section className="flex flex-col sm:flex-row items-center justify-center gap-y-2 sm:gap-1 w-full">
            <div className="w-32">
              <label htmlFor="password">{formItems[0].label.password}</label>
            </div>
            <div className="w-full">
              <input
                className={formItems[1].input.password.className}
                placeholder={formItems[1].input.password.placeholder}
                id={formItems[1].input.password["id"]}
                type={formItems[1].input.password["type"]}
                name={formItems[1].input.password["name"]}
              />
            </div>
          </section>
          <section className="w-full">
            <div className="flex items-center gap-4">
              <input id="checkbox" type="checkbox" />
              <label htmlFor="checkbox">Keep Signed in</label>
            </div>
          </section>
          {/* submit button component  */}
          <section className="w-full">
            <SubmitButton>Submit</SubmitButton>
          </section>
        </form>
      </div>
    </main>
  );
};

export default Login;

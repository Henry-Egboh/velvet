"use client";
import { PurpleButton, SubmitButton } from "@/app/components/button";
import { inputStyles } from "@/app/utils/stylesUtil";
import { useRouter } from "next/navigation";
// login form parameters
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
        name: "email",
        id: "email",
        autoComplete: "on",
        value: "",
      },
      password: {
        type: "password",
        placeholder: "Enter your password",
        name: "password",
        id: "password",
        autoComplete: "on",
        value: "",
      },
      fullname: {
        type: "text",
        placeholder: "Enter your fullname",
        name: "fullname",
        id: "fullname",
        autoComplete: "name",
        value: "",
      },
    },
  },
];
// login function
const Login = () => {
  // router instance
  const router = useRouter();
  // sign up button class
  const signUpBtn = {
    className: `transition duration-400 ease-in-out bg-yellow-600 text-white p-2 rounded-md
      border border-current hover:bg-yellow-400 hover:tracking-wide
      text-sm`,
  };
  // handle sign up btn click
  const handleClick = (e: any) => {
    e.preventDefault();
    router.push("/login/signup");
  };

  return (
    <main className="w-full lg:flex lg:items-center lg:justify-center">
      <div className="w-full lg:w-3/4 xl:w-1/2 md:mx-auto lg:border border-gray-300 rounded-md lg:shadow-2xl">
        <form
          action=""
          className="flex justify-center items-center flex-col py-16 px-2 md:px-24 gap-8 text-sm"
        >
          {/* sign up button component on top of login form */}
          <section className="flex justify-end items-center w-full">
            <PurpleButton
              type={"button"}
              className={signUpBtn.className}
              btnClick={handleClick}
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
                id={formItems[1].input.email.id}
                type={formItems[1].input.email.type}
                placeholder={formItems[1].input.email.placeholder}
                name={formItems[1].input.email.name}
                className={`${inputStyles} w-full`}
              />
            </div>
          </section>
          <section className="flex flex-col sm:flex-row items-center justify-center gap-y-2 sm:gap-1 w-full">
            <div className="w-32">
              <label htmlFor="password">{formItems[0].label.password}</label>
            </div>
            <div className="w-full">
              <input
                placeholder={formItems[1].input.password.placeholder}
                id={formItems[1].input.password["id"]}
                type={formItems[1].input.password["type"]}
                name={formItems[1].input.password["name"]}
                className={`${inputStyles} w-full`}
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

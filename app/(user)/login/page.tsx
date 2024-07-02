"use client";
import { useRouter } from "next/navigation";
const Login = () => {
  const router = useRouter();
  return (
    <main className="w-full h-screen lg:flex lg:items-center lg:justify-center">
      <div className="w-full lg:w-3/4 xl:w-2/4 md:mx-auto lg:border border-gray-300 rounded-md lg:shadow-2xl">
        <form
          action=""
          className="flex justify-center items-center flex-col py-16 px-2 md:px-24 gap-8 text-sm"
        >
          <section className="flex justify-end items-center w-full">
            <button
              className="transition duration-1000 ease-in-out bg-purple-800 text-white p-2 rounded-md border border-purple-800 hover:border-yellow-600 hover:bg-opacity-25 hover:text-yellow-600 text-sm text-green-800 transform hover:scale-105 hover:translate-x-px"
              type="button"
              onClick={() => router.push("/login/signup")}
            >
              Sign Up
            </button>
          </section>
          <section className="flex flex-col sm:flex-row items-center justify-center gap-y-2 sm:gap-1 w-full">
            <div className="w-32">
              <label htmlFor="username">Username :</label>
            </div>
            <div className="w-full">
              <input
                className="transition duration-300 ease-in-out border border-solid rounded-md border-gray-300 py-1 px-4 w-full placeholder-gray-300 placeholder-text-xs focus:outline-none focus:border-purple-300 shadow-sm"
                id="username"
                type="text"
                placeholder="Enter your email address"
                name="Username"
              />
            </div>
          </section>
          <section className="flex flex-col sm:flex-row items-center justify-center gap-y-2 sm:gap-1 w-full">
            <div className="w-32">
              <label htmlFor="password">Password :</label>
            </div>
            <div className="w-full">
              <input
                className="transition duration-300 ease-in-out border border-solid rounded-md border-gray-300 py-1 px-4 w-full placeholder-gray-300 placeholder-text-xs focus:outline-none focus:border-purple-300 shadow-sm"
                placeholder="Enter your password"
                id="password"
                type="password"
                name="password"
              />
            </div>
          </section>
          <section className="w-full">
            <div className="flex items-center gap-4">
              <input id="checkbox" type="checkbox" />
              <label htmlFor="checkbox">Keep Signed in</label>
            </div>
          </section>
          <section className="w-full">
            <button
              className="transition duration-300 ease-in-out border rounded-md bg-blue-600 text-white border-gray-300 w-full p-1 transform hover:bg-opacity-80 hover:tracking-wide"
              type="button"
              onClick={() => router.push("/")}
            >
              Submit
            </button>
          </section>
        </form>
      </div>
    </main>
  );
};

export default Login;

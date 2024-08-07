"use client";
import { useEffect } from "react";

const Error = ({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) => {
  useEffect(() => {
    console.error(error);
  }, [error]);
  return (
    <header className="w-screen h-screen flex flex-col justify-center items-center">
    <div className="flex flex-col gap-4 items-center justify-center text-base tracking-wide font-medium text-current">
      <h2>Ooops!😒</h2>
      <p>Something went wrong</p>
      <code className="text-xs">{error.message}</code>
      <button className="border-px bg-purple-600 text-white p-2" onClick={() => reset()}>Try Again</button>
    </div>
    </header>
  );
};

export default Error;

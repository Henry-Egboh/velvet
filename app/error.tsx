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
    console.log(error);
  }, [error]);
  return (
    <div>
      <h2>Ooops!😒</h2>
      <p>Something went wrong</p>
      <button onClick={() => reset()}>Try Again</button>
    </div>
  );
};

export default Error;

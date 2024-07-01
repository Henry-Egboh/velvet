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
    <>
      <h2>😒What just happened!</h2>
      <button onClick={() => reset()}>Try Again</button>
    </>
  );
};

export default Error;

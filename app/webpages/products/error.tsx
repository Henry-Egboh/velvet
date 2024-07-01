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
      <h2>🤔 Ooops!</h2>
      <p>Temporal Error</p>
      <button onClick={() => reset()}>Retry</button>
    </div>
  );
};

export default Error;

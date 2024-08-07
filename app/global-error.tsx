"use client";

import { useEffect } from "react";

export default function GlobalError({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  // useEffect(() => {
  //   console.error(error);
  // }, [error]);
  return (
    <html>
      <body>
        <header className="w-screen h-screen flex flex-col justify-center items-center">
          <div className="flex flex-col gap-4 items-center justify-center text-base tracking-wide font-medium text-current">
            <h2>Ooops!😒 ---</h2>
            <p>Lets go through this</p>
            <code className="text-xs">{error.message}</code>
            <button
              className="border-px rounded bg-purple-600 text-white p-4"
              onClick={() => reset()}
            >
              Retry
            </button>
          </div>
        </header>
      </body>
    </html>
  );
}

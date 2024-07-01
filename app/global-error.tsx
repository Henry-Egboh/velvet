"use client";
export default function GlobalError({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  return (
    <html>
      <body>
        <h2>Ooops!😒</h2>
        <p>Lets go through this</p>
        <button onClick={() => reset()}>Retry</button>
      </body>
    </html>
  );
}

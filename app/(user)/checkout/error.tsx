"use client";
const CheckoutErrorPage = ({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) => {
  return (
    <header className="w-screen h-screen flex flex-col justify-center items-center">
      <div className="flex flex-col gap-4 items-center justify-center text-base tracking-wide font-medium text-current">
        <h2>🤔🤔🤔🤔🤔</h2>
        <p>This Error occured in Checkout Page</p>
        <button
          className="border-px rounded bg-purple-600 text-white p-4"
          onClick={() => reset()}
        >
          Retry
        </button>
      </div>
    </header>
  );
};
export default CheckoutErrorPage;

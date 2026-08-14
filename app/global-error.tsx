"use client";

export default function GlobalError({
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  return (
    <html lang="en">
      <body className="bg-[#0E1728]">
        <main className="grid min-h-screen place-items-center bg-[#0E1728] px-6 py-24 text-center text-white">
          <div className="max-w-md">
            <p className="text-xs font-semibold uppercase tracking-[0.3em] text-[#74B287]">
              Perles Medicales
            </p>
            <h1 className="mt-4 font-serif text-4xl font-semibold">
              A brief pause.
            </h1>
            <p className="mt-4 leading-relaxed text-white/65">
              The page needs a fresh start. Please try again.
            </p>
            <button
              type="button"
              onClick={() => {
                reset();
                window.location.reload();
              }}
              className="mt-8 inline-flex rounded-full bg-[#4F9663] px-6 py-3 text-sm font-semibold text-white transition-colors hover:bg-[#74B287]"
            >
              Try again
            </button>
          </div>
        </main>
      </body>
    </html>
  );
}

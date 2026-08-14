"use client";

export default function Error({
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  return (
    <div className="grid min-h-[60vh] place-items-center bg-cream-100 px-6 py-24 text-center">
      <div className="max-w-md">
        <p className="eyebrow">Perles Medicales</p>
        <h1 className="display-serif mt-4 text-4xl font-semibold text-navy">
          A brief pause.
        </h1>
        <p className="mt-4 leading-relaxed text-navy/65">
          We couldn&apos;t open this page just now. Please try again and we&apos;ll
          get you back on track.
        </p>
        <button type="button" onClick={reset} className="btn-primary mt-8">
          Try again
        </button>
      </div>
    </div>
  );
}

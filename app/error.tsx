"use client";

export default function Error({
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  return (
    <main className="grid min-h-[60vh] place-items-center bg-cream-100 px-6 py-24 text-center">
      <div className="max-w-md">
        <p className="eyebrow">Perles Medicales</p>
        <h1 className="display-serif mt-4 text-4xl font-semibold text-navy">
          Une parenthèse inattendue.
        </h1>
        <p className="mt-4 leading-relaxed text-navy/65">
          Nous n&apos;avons pas pu afficher cette page. Réessayez, tout devrait
          rentrer dans l&apos;ordre.
        </p>
        <button type="button" onClick={reset} className="btn-primary mt-8">
          Try again
        </button>
      </div>
    </main>
  );
}

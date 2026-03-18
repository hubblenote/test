import Image from "next/image";

export default function Home() {
  return (
    <main className="flex min-h-screen items-center justify-center bg-slate-100 p-6">
      <section className="w-full max-w-5xl overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm">
        <header className="border-b border-slate-200 px-6 py-4">
          <h1 className="text-xl font-semibold text-slate-900">
            Fish Bowl Template
          </h1>
          <p className="text-sm text-slate-600">Static preview app scaffold</p>
        </header>
        <div className="p-6">
          <Image
            src="/fish-bowl-static.svg"
            alt="Static fish bowl illustration"
            width={1440}
            height={900}
            className="h-auto w-full rounded-xl border border-slate-200 bg-slate-50"
            priority
          />
        </div>
      </section>
    </main>
  );
}

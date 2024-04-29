import Link from "next/link";

export default function Home() {
  return (
    <main className="flex flex-col items-center justify-center min-h-screen py-2">
      <h2 className="text-6xl text-neutral-400 uppercase text-center font-bold">
        Oops!😅
        <br /> Sorry <span className="text-white"> portfolio</span>
        <br /> is not ready yet.
      </h2>
      <p className="mt-3 text-center text-lg text-neutral-400 max-w-screen-md">
        This is a placeholder for the portfolio page. Please check back later.
        or you can visit my{" "}
        <Link href="https://stefanrotari.vercel.app/">
          <span className="text-white underline">old portfolio page</span>
        </Link>{" "}
        for more information.
      </p>
    </main>
  );
}

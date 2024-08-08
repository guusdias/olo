import { inter } from "@/app/ui/fonts";
import Image from "next/image";
import Link from "next/link";

export default function Page() {
  return (
    <main className="flex min-h-screen flex-col p-6 items-center justify-center bg-gray-50">
      <div className="flex w-full max-w-4xl bg-white rounded-xl shadow-lg overflow-hidden">
        <div className="hidden md:flex md:w-1/2 bg-gray-200 items-center justify-center flex-col p-10">
          <Image
            className="mb-4"
            src="/logo.png"
            alt="logo"
            width={350}
            height={350}
          />
          <p className={`${inter.className} text-gray-700 text-lg font-medium`}>
            A new way to find your perfect clothe!
          </p>
        </div>
        <div className="w-full md:w-1/2 p-10 flex flex-col items-center justify-center">
          <h3 className="text-gray-800 text-3xl font-bold mb-6">Welcome!</h3>
          <p className="text-gray-700 mb-4 text-center">
            Discover a wide variety of clothes and accessories that fit your
            style.
          </p>
          <Link href="/home" passHref>
            <button className="w-full py-2 px-4 bg-gray-700 text-white font-medium rounded-md hover:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-gray-500">
              Start Shopping
            </button>
          </Link>
        </div>
      </div>
    </main>
  );
}

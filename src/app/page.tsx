import Image from "next/image";
export default function Home() {
  return (
    <div className="relative">
      <div className="sticky top-0 h-screen flex flex-col items-center justify-start bg-emerald-300 py-24 px-4">
        <Image
          className="rounded-full border-4 border-teal-900 h-32 w-32 object-top object-cover"
          src="/images/PF.jpg"
          alt="Picture of the author"
          width={150}
          height={150}
        />
        <h2 className="text-3xl text-teal-900">Stefano Piccoli</h2>
        <h3 className="text-teal-800">Software developer</h3>
        <div className="w-full py-8">
          <h1 className="text-teal-900 text-4xl">About</h1>
          <p>I'm a software developer based in Italy</p>
        </div>

      </div>
      <div className="sticky top-0 h-screen flex flex-col items-center justify-center bg-teal-700 text-white">
        <h2 className="text-4xl">The Second Title</h2>
        <p>Scroll Down</p>
      </div>
      <div className="sticky top-0 h-screen flex flex-col items-center justify-center bg-green-300 text-white">
        <h2 className="text-4xl">The Third Title</h2>
        <p>Scroll Down</p>
      </div>
      <div className="sticky top-0 h-screen flex flex-col items-center justify-center bg-neutral-800 text-white">
        <h2 className="text-4xl">The Fourth Title</h2>
      </div>
    </div>
  );
}

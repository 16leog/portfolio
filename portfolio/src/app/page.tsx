import Image from "next/image";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24 bg-gradient-to-b from-black via-gray-800 to-gray-600">
      <div className="z-10 max-w-5xl w-full items-center justify-between font-mono text-sm lg:flex text-white">
        <h1>Leonel Gonzalez</h1>
        <div>
          <h2>Software Engineer</h2>
          <h2>Full Stack Developer</h2>
          <h2>Web Developer</h2>
        </div>
      </div>
    </main>
  );
}

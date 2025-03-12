import Image from "next/image";

export default function Home() {
  return (
    <main className="relative w-full h-screen">
      <div className="relative w-full h-full">
        <Image
          src="https://cataas.com/cat"
          alt="Cute cat"
          fill
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          className="object-cover"
          unoptimized
        />
      </div>
    </main>
  );
}

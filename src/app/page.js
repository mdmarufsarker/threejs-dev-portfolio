import Image from "next/image";
import bg from "/public/background/home-background.png"

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between relative">
      <Image 
      className="w-full h-full opacity-25 object-cover object-center" 
      src={bg}
      alt="No image found"/>
    </main>
  );
}

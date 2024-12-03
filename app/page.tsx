import { ThemeToggle } from "@/components/ThemeToggle";
import AuthButton from "../components/AuthButton";
import Header from "@/components/Header";
import Image from "next/image";

export default async function Index() {
  return (
    <div className="flex-1 w-full flex flex-col items-center">
      <nav className="w-full flex justify-center border-b border-b-foreground/10">
        {/* <div className="w-full max-w-4xl flex justify-between items-center p-3 text-sm">
          <ThemeToggle />
          <AuthButton />
        </div> */}
         <Header />
      </nav>
      <section className="w-full flex flex-col items-center justify-center text-center space-y-8">
         <div className="relative w-full h-[35rem] flex justify-between">
           <Image
             src="/images/landing.png"
             alt="Holiday sale background"
             fill
             className="object-cover"
           />
           <div className="absolute inset-0 flex flex-col items-start justify-start text-white pl-6 pt-6 space-y-4">
             <h1 className="text-5xl font-extrabold tracking-tighter leading-none">
               HOLIDAY SALE
             </h1>
             <div className="flex items-center gap-2">
               <div className="flex flex-col leading-none text-3xl font-extrabold">
                 <span>UP</span>
                 <span>TO</span>
               </div>
               <span className="text-6xl font-extrabold">25% OFF</span>
             </div>
             <p className="text-5xl font-bold mt-2 font-extrabold">
               SITEWIDE
             </p>
           </div>
           <div className="absolute inset-x-0 bottom-0 flex flex-row bg-black/70 text-white justify-around h-[5rem] gap-2 px-4">
              <div className="flex flex-col justify-center items-center flex-1">
                <div className="text-xs font-semibold whitespace-nowrap">Waterproof Jewelry</div>
                <div className="text-[10px] font-light whitespace-nowrap">No fading, no tarnishing</div>
              </div>
              <div className="flex flex-col justify-center items-center flex-1">
                <div className="text-xs font-semibold whitespace-nowrap">14k Gold Fill & Pearls</div>
                <div className="text-[10px] font-light whitespace-nowrap">Timeless, island style</div>
              </div>
              <div className="flex flex-col justify-center items-center flex-1">
                <div className="text-xs font-semibold whitespace-nowrap">Christmas Delivery</div>
                <div className="text-[10px] font-light whitespace-nowrap">Order By December 17th</div>
              </div>
           </div>
         </div>
      </section>

      <footer className="w-full border-t border-t-foreground/10 p-8 flex justify-center text-center text-xs">
      </footer>
    </div>
  );
}

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
         <div className="relative w-full h-[37rem]">
           <Image
             src="/images/landing.png"
             alt="Holiday sale background"
             fill
             className="object-cover"
           />
           <div className="absolute inset-0 flex flex-col items-start justify-start text-white pl-6 pt-6">
             <h1 className="text-6xl font-extrabold tracking-tighter leading-none">
               HOLIDAY SALE
             </h1>
             <div className="flex items-center gap-4 text-5xl">
               <div className="flex flex-col leading-none text-3xl font-extrabold">
                 <span>UP</span>
                 <span>TO</span>
               </div>
               <span className="text-7xl font-extrabold">25% OFF</span>
             </div>
             <p className="text-5xl font-bold mt-2 font-extrabold">
               SITEWIDE
             </p>
           </div>
         </div>
      </section>

      <footer className="w-full border-t border-t-foreground/10 p-8 flex justify-center text-center text-xs">
        <p>
          Powered by{" "}
          <a
            href="https://supabase.com/?utm_source=create-next-app&utm_medium=template&utm_term=nextjs"
            target="_blank"
            className="font-bold hover:underline"
            rel="noreferrer"
          >
            Supabase
          </a>
        </p>
      </footer>
    </div>
  );
}

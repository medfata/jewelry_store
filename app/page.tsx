import { ThemeToggle } from "@/components/ThemeToggle";
import AuthButton from "../components/AuthButton";
import Header from "@/components/Header";
import Image from "next/image";
interface Product {
  title: string;
  description: string;
  imageUrl: string;
  sale?: string;
  price: number;
  reviews?: number;
}

const products: Product[] = [
  {
    title: "BANGELS OF GOLD",
    description: "Dainty Hawaiian-style bangle set with your choice of pendant",
    imageUrl: "/images/prod1.png",
    price: 50.40,
    reviews: 359
  },
  {
    title: "GOLD BEADED BRACELET",
    description: "4mm gold fill beads with clasp and charm",
    imageUrl: "/images/prod2.png",
    price: 100,
    reviews: 359
  },
  {
    title: "GOLD CHAIN BRACELET",
    description: "14K Gold fill chain with your choice of stone accent",
    imageUrl: "/images/prod1.png",
    sale: "SANDALWOOD",
    price: 110,
    reviews: 359
  },
  {
    title: "MENS BEADED BRACELET",
    description: "unisex wood or lava rock beaded with accent",
    imageUrl: "/images/prod2.png",
    sale: "SAVE 25%",
    price: 50.40,
    reviews: 359
  },
  {
    title: "SILVER CHARM NECKLACE",
    description: "Elegant silver charm necklace with customizable pendants",
    imageUrl: "/images/prod1.png",
    price: 75.00,
    reviews: 412
  },
  {
    title: "PEARL DROP EARRINGS",
    description: "Classic pearl drop earrings with gold accents",
    imageUrl: "/images/prod2.png",
    sale: "NEW ARRIVAL",
    price: 85.50,
    reviews: 278
  },
  {
    title: "LEATHER WRAP BRACELET",
    description: "Stylish leather wrap bracelet with metal clasp",
    imageUrl: "/images/prod1.png",
    price: 60.00,
    reviews: 198
  },
  {
    title: "GEMSTONE ANKLET",
    description: "Colorful gemstone anklet with adjustable chain",
    imageUrl: "/images/prod2.png",
    sale: "LIMITED EDITION",
    price: 45.00,
    reviews: 320
  }
];
export default async function Index() {
  return (
    <div className="flex-1 w-full flex flex-col items-center">
      <nav className="w-full flex justify-center border-b border-b-foreground/10 sticky top-0 bg-background z-50">
        <Header className="w-full" />
      </nav>
      <section className="w-full flex flex-col items-center justify-center text-center space-y-4">
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
          <div className="absolute inset-x-0 bottom-0 flex flex-row bg-black/70 text-white justify-around h-[5rem] pl-2 pr-2">
            <div className="flex flex-col justify-center items-center flex-1">
              <div className="text-[11px] font-semibold whitespace-nowrap">Waterproof Jewelry</div>
              <div className="text-[9px] font-light whitespace-nowrap">No fading, no tarnishing</div>
            </div>
            <div className="flex flex-col justify-center items-center flex-1">
              <div className="text-[11px] font-semibold whitespace-nowrap">14k Gold Fill & Pearls</div>
              <div className="text-[9px] font-light whitespace-nowrap">Timeless, island style</div>
            </div>
            <div className="flex flex-col justify-center items-center flex-1">
              <div className="text-[11px] font-semibold whitespace-nowrap">Christmas Delivery</div>
              <div className="text-[9px] font-light whitespace-nowrap">Order By December 17th</div>
            </div>
          </div>
        </div>
        <div className="flex space-x-2 max-h-[8rem]">
          <div className="relative w-1/3">
            <img src="/images/sand_proof.png" alt="Sand Proof" className="w-full h-full object-cover" />
            <div className="absolute inset-0 flex flex-col items-center justify-center text-white">
              <h2 className="text-3xl font-playfair font-bold">SAND</h2>
              <p className="text-sm">PROOF</p>
            </div>
          </div>
          <div className="relative w-1/3">
            <img src="/images/sweat_proof.png" alt="Sweat Proof" className="w-full h-full object-cover" />
            <div className="absolute inset-0 flex flex-col items-center justify-center text-white">
              <h2 className="text-3xl font-playfair font-bold">SWEAT</h2>
              <p className="text-sm">PROOF</p>
            </div>
          </div>
          <div className="relative w-1/3">
            <img src="/images/sea_proof.png" alt="Sea Proof" className="w-full h-full object-cover" />
            <div className="absolute inset-0 flex flex-col items-center justify-center text-white">
              <h2 className="text-3xl font-playfair font-bold">SEA</h2>
              <p className="text-sm">PROOF</p>
            </div>
          </div>
        </div>
      </section>
      <section className="w-full">
        <div className="flex flex-col items-center text-center max-w-3xl mx-auto py-6">
          <h1 className="text-3xl md:text-5xl font-playfair font-bold leading-tight tracking-normal">
            <span className="block">Customizable Jewelry,</span>
            <span className="block">Inspired by Island Culture</span>
          </h1>
          <p className="text-lg md:text-xl mt-2 text-gray-800 max-w-2xl font-poppins">
            Authentic sets made for your everyday adventures and evening elegance
          </p>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 p-4">
          {products.map((product, index) => (
            <div key={index} className="relative group cursor-pointer">
              <div className="aspect-square relative overflow-hidden">
                <Image
                  src={product.imageUrl}
                  alt={product.title}
                  fill
                  className="object-cover w-full h-full transition-transform duration-300 group-hover:scale-105"
                />
                {product.sale && (
                  <div className="absolute top-2 left-2 bg-black/80 text-white px-2 py-1 text-xs">
                    {product.sale}
                  </div>
                )}
              </div>
              <div className="mt-2 space-y-2">
                <div className="flex items-center justify-center space-x-1">
                  <span className="text-yellow-500">★★★★★</span>
                  <span className="text-xs text-gray-600">{product.reviews} Reviews</span>
                </div>
                <h3 className="text-sm font-playfair font-bold tracking-wider text-center">{product.title}</h3>
                <div className="flex justify-center items-center space-x-2">
                  <span className="text-sm font-semibold text-green-600">${product.price.toFixed(2)}</span>
                  <span className="text-xs text-gray-500 line-through">${(product.price * 1.2).toFixed(2)}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
      <footer className="w-full border-t border-t-foreground/10 p-8 flex justify-center text-center text-xs">
      </footer>
    </div>
  );
}

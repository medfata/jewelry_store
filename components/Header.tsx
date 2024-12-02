import { Menu, Search, ShoppingCart } from "lucide-react";
import { Button } from "./ui/button";

export default function Header() {
  return (
    <div className="w-full">
      {/* Main header with navigation */}
      <div className="flex justify-between items-center px-4 py-3 bg-white">
        <div className="flex items-center gap-2 w-[88px]">
          <Button variant="ghost" size="icon" className="hover:bg-gray-100">
            <span className="sr-only">Menu</span>
            <Menu size={20} />
          </Button>
        </div>

        <div className="flex-1 flex justify-center">
          <div className="text-xl font-bold">
            STORE
          </div>
        </div>

        <div className="flex items-center gap-2">
          <Button variant="ghost" size="icon" className="hover:bg-gray-100">
            <span className="sr-only">Search</span>
            <Search size={20} />
          </Button>
          <Button variant="ghost" size="icon" className="hover:bg-gray-100 relative">
            <span className="sr-only">Cart</span>
            <ShoppingCart size={20} />
            <span className="absolute -top-1 -right-1 bg-black text-white text-xs rounded-full w-4 h-4 flex items-center justify-center">0</span>
          </Button>
        </div>
      </div>
    </div>
  );
}

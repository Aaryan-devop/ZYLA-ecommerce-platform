import { ShoppingCart, Search, Menu, User, Heart } from 'lucide-react';
import { useState } from 'react';

export function Header() {
  const [cartCount] = useState(3);

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-white">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        {/* Logo */}
        <div className="flex items-center gap-8">
          <button className="lg:hidden">
            <Menu className="h-6 w-6" />
          </button>
          <a href="/" className="text-2xl font-semibold">
            ZYLA
          </a>
          
          {/* Navigation */}
          <nav className="hidden lg:flex items-center gap-6">
            <a href="#" className="text-sm hover:text-gray-600 transition-colors">
              New Arrivals
            </a>
            <a href="#" className="text-sm hover:text-gray-600 transition-colors">
              Men
            </a>
            <a href="#" className="text-sm hover:text-gray-600 transition-colors">
              Women
            </a>
            <a href="#" className="text-sm hover:text-gray-600 transition-colors">
              Electronics
            </a>
            <a href="#" className="text-sm hover:text-gray-600 transition-colors">
              Sale
            </a>
          </nav>
        </div>

        {/* Search and Actions */}
        <div className="flex items-center gap-4">
          <div className="hidden md:flex items-center gap-2 rounded-lg border px-3 py-2">
            <Search className="h-4 w-4 text-gray-400" />
            <input
              type="text"
              placeholder="Search products..."
              className="w-64 border-none bg-transparent outline-none text-sm"
            />
          </div>

          <button className="md:hidden">
            <Search className="h-5 w-5" />
          </button>

          <button className="relative">
            <Heart className="h-5 w-5" />
          </button>

          <button className="hidden sm:block">
            <User className="h-5 w-5" />
          </button>

          <button className="relative">
            <ShoppingCart className="h-5 w-5" />
            {cartCount > 0 && (
              <span className="absolute -right-2 -top-2 flex h-5 w-5 items-center justify-center rounded-full bg-black text-xs text-white">
                {cartCount}
              </span>
            )}
          </button>
        </div>
      </div>
    </header>
  );
}

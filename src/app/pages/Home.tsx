import { Hero } from '../components/Hero';
import { ProductCard } from '../components/ProductCard';
import { Categories } from '../components/Categories';
import { Instagram, Linkedin, MessageCircle } from 'lucide-react';

const featuredProducts = [
  {
    id: 1,
    name: 'Premium Wireless Headphones',
    price: 299,
    originalPrice: 399,
    image: 'https://images.unsplash.com/photo-1713618651165-a3cf7f85506c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjBoZWFkcGhvbmVzfGVufDF8fHx8MTc2NzY4NjExN3ww&ixlib=rb-4.1.0&q=80&w=1080',
    rating: 4.5,
    reviews: 128,
  },
  {
    id: 2,
    name: 'Smart Watch Pro',
    price: 399,
    originalPrice: 499,
    image: 'https://images.unsplash.com/photo-1579586337278-3befd40fd17a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzbWFydCUyMHdhdGNofGVufDF8fHx8MTc2NzY3MzAzM3ww&ixlib=rb-4.1.0&q=80&w=1080',
    rating: 4.8,
    reviews: 256,
  },
  {
    id: 3,
    name: 'Wireless Earbuds Elite',
    price: 149,
    originalPrice: 199,
    image: 'https://images.unsplash.com/photo-1572569511254-d8f925fe2cbb?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx3aXJlbGVzcyUyMGVhcmJ1ZHN8ZW58MXx8fHwxNzY3NjczMDMzfDA&ixlib=rb-4.1.0&q=80&w=1080',
    rating: 4.6,
    reviews: 189,
  },
  {
    id: 4,
    name: 'Professional Camera Lens',
    price: 899,
    image: 'https://images.unsplash.com/photo-1608186336271-53313eeaf864?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjYW1lcmElMjBsZW5zfGVufDF8fHx8MTc2NzY2MDMwNHww&ixlib=rb-4.1.0&q=80&w=1080',
    rating: 4.9,
    reviews: 342,
  },
  {
    id: 5,
    name: 'Ultra Thin Laptop',
    price: 1299,
    originalPrice: 1499,
    image: 'https://images.unsplash.com/photo-1618424181497-157f25b6ddd5?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsYXB0b3AlMjBjb21wdXRlcnxlbnwxfHx8fDE3Njc2NDA1NTl8MA&ixlib=rb-4.1.0&q=80&w=1080',
    rating: 4.7,
    reviews: 423,
  },
  {
    id: 6,
    name: 'Flagship Smartphone',
    price: 999,
    originalPrice: 1199,
    image: 'https://images.unsplash.com/photo-1732998360037-4857039d77a4?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzbWFydHBob25lJTIwZGV2aWNlfGVufDF8fHx8MTc2NzYxNDc1NXww&ixlib=rb-4.1.0&q=80&w=1080',
    rating: 4.8,
    reviews: 567,
  },
  {
    id: 7,
    name: 'Designer Sunglasses',
    price: 189,
    image: 'https://images.unsplash.com/photo-1732139637217-56c77369e25c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxmYXNoaW9uJTIwc3VuZ2xhc3Nlc3xlbnwxfHx8fDE3Njc2MDg3NTV8MA&ixlib=rb-4.1.0&q=80&w=1080',
    rating: 4.4,
    reviews: 94,
  },
  {
    id: 8,
    name: 'Performance Running Shoes',
    price: 129,
    originalPrice: 179,
    image: 'https://images.unsplash.com/photo-1562183241-b937e95585b6?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxydW5uaW5nJTIwc2hvZXN8ZW58MXx8fHwxNzY3NTkxNTU4fDA&ixlib=rb-4.1.0&q=80&w=1080',
    rating: 4.6,
    reviews: 276,
  },
];

export function Home() {
  return (
    <main>
      <Hero />
      
      {/* Featured Products */}
      <section className="py-16 bg-gray-50">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mb-8 flex items-center justify-between">
            <div>
              <h2 className="text-3xl">Featured Products</h2>
              <p className="mt-2 text-gray-600">Discover our handpicked selection</p>
            </div>
            <button className="text-sm underline hover:no-underline">
              View All
            </button>
          </div>

          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {featuredProducts.map((product) => (
              <ProductCard key={product.id} {...product} />
            ))}
          </div>
        </div>
      </section>

      <Categories />

      {/* Newsletter */}
      <section className="bg-black py-16 text-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-3xl">Stay Updated</h2>
            <p className="mt-4 text-gray-400">
              Subscribe to our newsletter and get 10% off your first order
            </p>
            
            {/* Social Media Links */}
            <div className="mt-6 flex items-center justify-center gap-4">
              <a 
                href="https://instagram.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="rounded-full bg-white/10 p-3 transition-colors hover:bg-white/20"
                aria-label="Instagram"
              >
                <Instagram className="h-5 w-5" />
              </a>
              <a 
                href="https://wa.me" 
                target="_blank" 
                rel="noopener noreferrer"
                className="rounded-full bg-white/10 p-3 transition-colors hover:bg-white/20"
                aria-label="WhatsApp"
              >
                <MessageCircle className="h-5 w-5" />
              </a>
              <a 
                href="https://linkedin.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="rounded-full bg-white/10 p-3 transition-colors hover:bg-white/20"
                aria-label="LinkedIn"
              >
                <Linkedin className="h-5 w-5" />
              </a>
            </div>
            
            <div className="mt-6 flex gap-2">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 rounded-lg bg-white/10 px-4 py-3 text-white placeholder-gray-400 outline-none focus:bg-white/20"
              />
              <button className="rounded-lg bg-white px-8 py-3 text-black transition-colors hover:bg-gray-100">
                Subscribe
              </button>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}

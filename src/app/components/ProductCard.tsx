import { Heart, Star } from 'lucide-react';
import { Link } from 'react-router-dom';

interface ProductCardProps {
  id: number;
  name: string;
  price: number;
  originalPrice?: number;
  image: string;
  rating: number;
  reviews: number;
}

export function ProductCard({ id, name, price, originalPrice, image, rating, reviews }: ProductCardProps) {
  const discount = originalPrice ? Math.round(((originalPrice - price) / originalPrice) * 100) : 0;

  return (
    <div className="group relative overflow-hidden rounded-lg border bg-white transition-shadow hover:shadow-lg">
      <Link to={`/product/${id}`} className="relative block aspect-square overflow-hidden bg-gray-100">
        <img
          src={image}
          alt={name}
          className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-110"
        />
        {discount > 0 && (
          <div className="absolute left-3 top-3 rounded-full bg-red-500 px-3 py-1 text-xs text-white">
            -{discount}%
          </div>
        )}
        <button className="absolute right-3 top-3 rounded-full bg-white p-2 opacity-0 transition-opacity group-hover:opacity-100" onClick={(e) => e.preventDefault()}>
          <Heart className="h-4 w-4" />
        </button>
      </Link>

      <div className="p-4 space-y-2">
        <Link to={`/product/${id}`}>
          <h3 className="text-sm line-clamp-2 hover:underline">{name}</h3>
        </Link>
        
        <div className="flex items-center gap-1">
          {[...Array(5)].map((_, i) => (
            <Star
              key={i}
              className={`h-3 w-3 ${
                i < Math.floor(rating)
                  ? 'fill-yellow-400 text-yellow-400'
                  : 'text-gray-300'
              }`}
            />
          ))}
          <span className="text-xs text-gray-500 ml-1">({reviews})</span>
        </div>

        <div className="flex items-center gap-2">
          <span className="text-lg">${price}</span>
          {originalPrice && (
            <span className="text-sm text-gray-400 line-through">
              ${originalPrice}
            </span>
          )}
        </div>

        <Link to={`/product/${id}`}>
          <button className="w-full rounded-lg bg-black py-2 text-sm text-white transition-colors hover:bg-gray-800">
            Add to Cart
          </button>
        </Link>
      </div>
    </div>
  );
}
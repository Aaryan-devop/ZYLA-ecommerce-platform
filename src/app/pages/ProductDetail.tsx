import { useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { Star, Heart, Minus, Plus, ShoppingCart, Check } from 'lucide-react';
import { products } from '../data/products';
import { toast } from 'sonner';

export function ProductDetail() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [quantity, setQuantity] = useState(1);
  const [isAddedToCart, setIsAddedToCart] = useState(false);

  const product = products.find((p) => p.id === Number(id));

  if (!product) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h2 className="text-2xl mb-4">Product not found</h2>
          <button
            onClick={() => navigate('/')}
            className="rounded-lg bg-black px-6 py-2 text-white hover:bg-gray-800"
          >
            Back to Home
          </button>
        </div>
      </div>
    );
  }

  const discount = product.originalPrice
    ? Math.round(((product.originalPrice - product.price) / product.originalPrice) * 100)
    : 0;

  const handleAddToCart = () => {
    setIsAddedToCart(true);
    toast.success(`Added ${quantity} ${product.name} to cart`);
    setTimeout(() => setIsAddedToCart(false), 2000);
  };

  const handleBuyNow = () => {
    toast.success('Proceeding to checkout...');
    // In a real app, this would navigate to checkout
  };

  const incrementQuantity = () => setQuantity((prev) => prev + 1);
  const decrementQuantity = () => setQuantity((prev) => (prev > 1 ? prev - 1 : 1));

  return (
    <main className="py-12 bg-gray-50">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Breadcrumb */}
        <div className="mb-8 flex items-center gap-2 text-sm text-gray-600">
          <button onClick={() => navigate('/')} className="hover:text-black">
            Home
          </button>
          <span>/</span>
          <span className="text-black">{product.name}</span>
        </div>

        <div className="grid gap-8 lg:grid-cols-2">
          {/* Product Image */}
          <div className="relative aspect-square overflow-hidden rounded-2xl bg-white">
            <img
              src={product.image}
              alt={product.name}
              className="h-full w-full object-cover"
            />
            {discount > 0 && (
              <div className="absolute left-4 top-4 rounded-full bg-red-500 px-4 py-2 text-white">
                -{discount}% OFF
              </div>
            )}
            <button className="absolute right-4 top-4 rounded-full bg-white p-3 shadow-lg hover:bg-gray-50">
              <Heart className="h-5 w-5" />
            </button>
          </div>

          {/* Product Info */}
          <div className="flex flex-col">
            <div className="rounded-2xl bg-white p-8">
              <h1 className="text-3xl mb-4">{product.name}</h1>

              {/* Rating */}
              <div className="mb-4 flex items-center gap-2">
                <div className="flex items-center gap-1">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      className={`h-4 w-4 ${
                        i < Math.floor(product.rating)
                          ? 'fill-yellow-400 text-yellow-400'
                          : 'text-gray-300'
                      }`}
                    />
                  ))}
                </div>
                <span className="text-sm text-gray-600">
                  {product.rating} ({product.reviews} reviews)
                </span>
              </div>

              {/* Price */}
              <div className="mb-6 flex items-center gap-3">
                <span className="text-4xl">${product.price}</span>
                {product.originalPrice && (
                  <span className="text-xl text-gray-400 line-through">
                    ${product.originalPrice}
                  </span>
                )}
              </div>

              {/* Stock Status */}
              <div className="mb-6 flex items-center gap-2">
                <div className="h-2 w-2 rounded-full bg-green-500"></div>
                <span className="text-sm text-green-600">In Stock</span>
              </div>

              {/* Description */}
              <p className="mb-6 text-gray-600">{product.description}</p>

              {/* Features */}
              <div className="mb-8">
                <h3 className="mb-3 text-lg">Key Features</h3>
                <ul className="space-y-2">
                  {product.features.map((feature, index) => (
                    <li key={index} className="flex items-start gap-2">
                      <Check className="h-5 w-5 text-green-500 flex-shrink-0 mt-0.5" />
                      <span className="text-sm text-gray-600">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Quantity Selector */}
              <div className="mb-6">
                <label className="mb-2 block text-sm">Quantity</label>
                <div className="flex items-center gap-4">
                  <div className="flex items-center gap-2 rounded-lg border border-gray-300">
                    <button
                      onClick={decrementQuantity}
                      className="p-3 hover:bg-gray-50 transition-colors"
                    >
                      <Minus className="h-4 w-4" />
                    </button>
                    <span className="w-12 text-center">{quantity}</span>
                    <button
                      onClick={incrementQuantity}
                      className="p-3 hover:bg-gray-50 transition-colors"
                    >
                      <Plus className="h-4 w-4" />
                    </button>
                  </div>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="flex gap-4">
                <button
                  onClick={handleAddToCart}
                  className="flex-1 rounded-lg border-2 border-black px-8 py-3 transition-colors hover:bg-gray-50 flex items-center justify-center gap-2"
                  disabled={isAddedToCart}
                >
                  {isAddedToCart ? (
                    <>
                      <Check className="h-5 w-5" />
                      Added to Cart
                    </>
                  ) : (
                    <>
                      <ShoppingCart className="h-5 w-5" />
                      Add to Cart
                    </>
                  )}
                </button>
                <button
                  onClick={handleBuyNow}
                  className="flex-1 rounded-lg bg-black px-8 py-3 text-white transition-colors hover:bg-gray-800"
                >
                  Buy Now
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}

"use client"
  
  import { Heart } from 'lucide-react'

  interface ProductCardProps {
    product: any
    rating: number
  }
  
  export default function ProductCard({ product, rating }: ProductCardProps) {
    return (
      <div className="p-[3px] relative rounded-[32px] bg-gradient-to-r from-teal-600 to-cyan-600 h-full">
        <div className="relative rounded-[32px] dark:bg-[#1a1a1a] bg-background px-4 py-8  h-full flex flex-col">
          <div className="relative mb-4">
            <button className="absolute right-2 top-2 z-10">
              <Heart className="w-6 h-6 text-gray-400" />
            </button>
            <img
              src={product.images[0]}
              alt={product.name}
              className="w-full h-48 object-cover rounded-2xl"
            />
          </div>
          <div className="flex items-center gap-2 mb-2">
            <span className="text-red-500">★</span>
            <span className="text-gray-700 dark:text-gray-200">{rating.toFixed(1)}</span>
          </div>
          <h3 className="text-lg font-semibold text-foreground mb-2">{product.name}</h3>
          
          <div className="text-xl font-bold text-cyan-600 mb-4">$240.00</div>
          <button className="w-full py-2 px-4 bg-cyan-600 hover:bg-[#00f2fe]/90 text-gray-100 font-medium rounded-xl transition-colors">
            Add to Cart
          </button>
        </div>
      </div>
    )
  }
  
  
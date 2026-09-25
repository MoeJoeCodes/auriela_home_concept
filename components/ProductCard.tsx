'use client';

import Image from 'next/image';
import { useCart } from '@/context/CartContext';
import { useState } from 'react';

type ProductCardProps = {
  id: string;
  name: string;
  price: number;
  image: string;
  category?: string;
  bestseller?: boolean;
};

export default function ProductCard({ id, name, price, image, category, bestseller }: ProductCardProps) {
  const { addToCart } = useCart();
  const [isHovered, setIsHovered] = useState(false);
  const [added, setAdded] = useState(false);

  const handleAddToCart = () => {
    addToCart({ id, name, price, image });
    setAdded(true);
    setTimeout(() => setAdded(false), 2000);
  };

  return (
    <div 
      className="group flex flex-col gap-4 font-montserrat"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="relative aspect-[4/5] bg-beige w-full overflow-hidden rounded-2xl">
        {bestseller && (
          <div className="absolute top-4 left-4 bg-cream/90 backdrop-blur-md rounded-full px-3 py-1 text-[10px] uppercase font-bold tracking-widest z-10 text-charcoal">
            Bestseller
          </div>
        )}
        <Image
          src={image}
          alt={name}
          fill
          referrerPolicy="no-referrer"
          className={`object-cover transition-transform duration-700 ${isHovered ? 'scale-105' : 'scale-100'}`}
        />
        <div className={`absolute bottom-0 left-0 w-full p-4 transition-transform duration-300 ${isHovered ? 'translate-y-0' : 'translate-y-full'}`}>
          <button
            onClick={handleAddToCart}
            className="w-full bg-charcoal text-cream py-3 uppercase text-xs tracking-[0.1em] transition-colors hover:bg-gold"
          >
            {added ? 'Added to Cart' : 'Add to Cart'}
          </button>
        </div>
      </div>
      <div>
        <h3 className="text-sm font-medium text-charcoal">{name}</h3>
        {category && <p className="text-xs text-charcoal/60 mt-1 italic font-playfair">{category}</p>}
        <p className="text-sm text-charcoal/80 mt-1">${price.toLocaleString('en-US', { minimumFractionDigits: 2 })}</p>
      </div>
    </div>
  );
}

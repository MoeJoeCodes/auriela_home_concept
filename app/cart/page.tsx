'use client';

import { useCart } from '@/context/CartContext';
import Image from 'next/image';
import Link from 'next/link';
import { Minus, Plus, Trash2 } from 'lucide-react';

export default function CartPage() {
  const { items, removeFromCart, updateQuantity, cartTotal } = useCart();

  if (items.length === 0) {
    return (
      <div className="max-w-7xl mx-auto px-6 md:px-10 py-24 min-h-[60vh] flex flex-col items-center justify-center text-center">
        <h1 className="font-playfair text-4xl text-charcoal mb-6">Your Cart is Empty</h1>
        <p className="font-montserrat text-charcoal/70 mb-10 max-w-md leading-relaxed">
          It appears you haven't added anything to your cart yet. Explore our collections to find something beautiful for your home.
        </p>
        <Link 
          href="/furniture"
          className="bg-charcoal text-cream font-montserrat text-xs uppercase tracking-[0.1em] py-4 px-8 hover:bg-gold transition-colors"
        >
          Explore the Collection
        </Link>
      </div>
    );
  }

  return (
    <div className="max-w-7xl mx-auto px-6 md:px-10 py-12 md:py-24">
      <h1 className="font-playfair text-4xl md:text-5xl text-charcoal mb-12">Your Cart</h1>
      
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 lg:gap-24">
        {/* Cart Items */}
        <div className="lg:col-span-2 flex flex-col gap-8">
          {items.map((item) => (
            <div key={item.id} className="flex gap-6 border-b border-taupe/30 pb-8">
              <div className="relative w-24 h-32 md:w-32 md:h-40 bg-beige flex-shrink-0">
                <Image
                  src={item.image}
                  alt={item.name}
                  fill
                  className="object-cover"
                />
              </div>
              <div className="flex flex-col flex-grow justify-between py-2">
                <div className="flex justify-between items-start gap-4">
                  <div>
                    <h3 className="font-montserrat text-sm md:text-base font-medium text-charcoal mb-1">{item.name}</h3>
                    <p className="font-montserrat text-xs text-charcoal/60">${item.price.toLocaleString('en-US', { minimumFractionDigits: 2 })}</p>
                  </div>
                  <button 
                    onClick={() => removeFromCart(item.id)}
                    className="text-charcoal/50 hover:text-charcoal transition-colors"
                    aria-label="Remove item"
                  >
                    <Trash2 className="w-4 h-4" />
                  </button>
                </div>
                <div className="flex items-center gap-4 mt-4">
                  <div className="flex items-center border border-taupe">
                    <button 
                      onClick={() => updateQuantity(item.id, item.quantity - 1)}
                      className="px-3 py-2 text-charcoal/60 hover:text-charcoal transition-colors"
                    >
                      <Minus className="w-3 h-3" />
                    </button>
                    <span className="font-montserrat text-sm w-8 text-center">{item.quantity}</span>
                    <button 
                      onClick={() => updateQuantity(item.id, item.quantity + 1)}
                      className="px-3 py-2 text-charcoal/60 hover:text-charcoal transition-colors"
                    >
                      <Plus className="w-3 h-3" />
                    </button>
                  </div>
                  <p className="font-montserrat text-sm ml-auto">
                    ${(item.price * item.quantity).toLocaleString('en-US', { minimumFractionDigits: 2 })}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Order Summary */}
        <div className="lg:col-span-1">
          <div className="bg-beige/40 p-8 flex flex-col gap-6 sticky top-32">
            <h2 className="font-playfair text-2xl text-charcoal">Order Summary</h2>
            <div className="flex justify-between items-center font-montserrat text-sm text-charcoal/80">
              <span>Subtotal</span>
              <span>${cartTotal.toLocaleString('en-US', { minimumFractionDigits: 2 })}</span>
            </div>
            <div className="flex justify-between items-center font-montserrat text-sm text-charcoal/80">
              <span>Shipping</span>
              <span className="italic text-charcoal/60">Calculated at checkout</span>
            </div>
            <div className="border-t border-taupe/50 pt-4 mt-2 flex justify-between items-center font-montserrat text-base font-medium text-charcoal">
              <span>Total Estimated</span>
              <span>${cartTotal.toLocaleString('en-US', { minimumFractionDigits: 2 })}</span>
            </div>
            <Link 
              href="/checkout"
              className="mt-4 bg-charcoal text-cream text-center font-montserrat text-xs uppercase tracking-[0.1em] py-4 w-full hover:bg-gold transition-colors block"
            >
              Proceed to Enquire
            </Link>
            <p className="font-montserrat text-[10px] text-charcoal/60 text-center uppercase tracking-widest mt-2">
              Payment is not required yet
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

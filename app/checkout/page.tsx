'use client';

import { useState } from 'react';
import { useCart } from '@/context/CartContext';
import Link from 'next/link';

export default function CheckoutPage() {
  const { items, cartTotal, clearCart } = useCart();
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // In a real app we would send this data to an API
    setSubmitted(true);
    clearCart();
    // Scroll to top
    window.scrollTo(0, 0);
  };

  if (submitted) {
    return (
      <div className="max-w-3xl mx-auto px-6 md:px-10 py-32 text-center min-h-[60vh] flex flex-col items-center justify-center">
        <h1 className="font-playfair text-4xl md:text-5xl text-charcoal mb-6">Thank You for Your Interest</h1>
        <p className="font-montserrat text-base text-charcoal/80 mb-10 leading-relaxed max-w-xl mx-auto">
          We have received your order enquiry. Please contact Aurelia Home at <a href="mailto:concierge@aureliahome.com" className="border-b border-charcoal/50 hover:text-gold transition-colors">concierge@aureliahome.com</a> or call +1 (212) 555-0198 to complete your purchase offline with one of our design consultants.
        </p>
        <Link 
          href="/"
          className="bg-charcoal text-cream font-montserrat text-xs uppercase tracking-[0.1em] py-4 px-8 hover:bg-gold transition-colors inline-block"
        >
          Return Home
        </Link>
      </div>
    );
  }

  if (items.length === 0 && !submitted) {
    return (
      <div className="max-w-7xl mx-auto px-6 md:px-10 py-24 min-h-[60vh] flex flex-col items-center justify-center text-center">
        <h1 className="font-playfair text-4xl text-charcoal mb-6">Your Cart is Empty</h1>
        <Link 
          href="/"
          className="bg-charcoal text-cream font-montserrat text-xs uppercase tracking-[0.1em] py-4 px-8 hover:bg-gold transition-colors block"
        >
          Return Home
        </Link>
      </div>
    );
  }

  return (
    <div className="max-w-7xl mx-auto px-6 md:px-10 py-12 md:py-24">
      <h1 className="font-playfair text-4xl md:text-5xl text-charcoal mb-12">Order Enquiry</h1>
      
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24">
        {/* Contact Form */}
        <div>
          <h2 className="font-playfair text-2xl text-charcoal mb-8">Contact Information</h2>
          <form onSubmit={handleSubmit} className="flex flex-col gap-6">
            <div className="flex flex-col gap-2">
              <label htmlFor="name" className="font-montserrat text-xs font-semibold tracking-[0.1em] uppercase text-charcoal">FullName</label>
              <input 
                type="text" 
                id="name" 
                required 
                className="bg-transparent border-b border-taupe py-2 text-sm font-montserrat focus:outline-none focus:border-charcoal transition-colors placeholder:text-charcoal/40"
                placeholder="Eleanor Vance"
              />
            </div>
            <div className="flex flex-col gap-2">
              <label htmlFor="email" className="font-montserrat text-xs font-semibold tracking-[0.1em] uppercase text-charcoal">Email Address</label>
              <input 
                type="email" 
                id="email" 
                required 
                className="bg-transparent border-b border-taupe py-2 text-sm font-montserrat focus:outline-none focus:border-charcoal transition-colors placeholder:text-charcoal/40"
                placeholder="eleanor@example.com"
              />
            </div>
            <div className="flex flex-col gap-2">
              <label htmlFor="phone" className="font-montserrat text-xs font-semibold tracking-[0.1em] uppercase text-charcoal">Phone Number</label>
              <input 
                type="tel" 
                id="phone" 
                required 
                className="bg-transparent border-b border-taupe py-2 text-sm font-montserrat focus:outline-none focus:border-charcoal transition-colors placeholder:text-charcoal/40"
                placeholder="+1 (555) 000-0000"
              />
            </div>
            <div className="flex flex-col gap-2 mt-4">
              <label htmlFor="message" className="font-montserrat text-xs font-semibold tracking-[0.1em] uppercase text-charcoal">Order Notes</label>
              <textarea 
                id="message" 
                rows={4}
                className="bg-transparent border-b border-taupe py-2 text-sm font-montserrat focus:outline-none focus:border-charcoal transition-colors placeholder:text-charcoal/40 resize-none"
                placeholder="Any special requests or delivery notes..."
              ></textarea>
            </div>
            
            <button 
              type="submit"
              className="mt-8 bg-charcoal text-cream font-montserrat text-xs uppercase tracking-[0.1em] py-4 w-full hover:bg-gold transition-colors"
            >
              Submit Enquiry
            </button>
            <p className="font-montserrat text-[10px] text-charcoal/50 text-center leading-relaxed mt-2 uppercase tracking-widest">
              By submitting this enquiry, you are not committing to a purchase. A design consultant will reach out to finalize details.
            </p>
          </form>
        </div>

        {/* Enquiry Summary */}
        <div>
          <div className="bg-beige/40 p-8 flex flex-col gap-8">
            <h2 className="font-playfair text-2xl text-charcoal">Enquiry Summary</h2>
            <div className="flex flex-col gap-4">
              {items.map(item => (
                <div key={item.id} className="flex justify-between items-start gap-4">
                  <div className="font-montserrat text-sm text-charcoal/80">
                    <span className="font-medium">{item.quantity}x</span> {item.name}
                  </div>
                  <div className="font-montserrat text-sm text-charcoal/80">
                    ${(item.price * item.quantity).toLocaleString('en-US', { minimumFractionDigits: 2 })}
                  </div>
                </div>
              ))}
            </div>
            <div className="border-t border-taupe/50 pt-6 flex justify-between items-center font-montserrat text-base font-medium text-charcoal">
              <span>Total Value</span>
              <span>${cartTotal.toLocaleString('en-US', { minimumFractionDigits: 2 })}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

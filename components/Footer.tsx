import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="bg-[#E8DED2] text-charcoal py-16 md:py-24 font-montserrat">
      <div className="max-w-7xl mx-auto px-6 md:px-10 grid grid-cols-1 md:grid-cols-4 gap-12">
        <div className="md:col-span-1">
          <Link href="/" className="font-playfair text-xl tracking-widest block mb-4">
            AURELIA HOME
          </Link>
          <p className="text-sm text-charcoal/80 leading-relaxed">
            Curating the finest in home interiors since 2014. Elegance in every detail.
          </p>
        </div>
        
        <div>
          <h4 className="text-xs font-semibold tracking-[0.1em] uppercase mb-6">Shop</h4>
          <ul className="space-y-4 text-sm text-charcoal/80">
            <li><Link href="/rugs" className="hover:text-charcoal transition-colors">Rugs</Link></li>
            <li><Link href="/curtains" className="hover:text-charcoal transition-colors">Curtains</Link></li>
            <li><Link href="/chandeliers" className="hover:text-charcoal transition-colors">Chandeliers</Link></li>
            <li><Link href="/furniture" className="hover:text-charcoal transition-colors">Furniture</Link></li>
          </ul>
        </div>

        <div>
          <h4 className="text-xs font-semibold tracking-[0.1em] uppercase mb-6">Information</h4>
          <ul className="space-y-4 text-sm text-charcoal/80">
            <li><Link href="/privacy" className="hover:text-charcoal transition-colors">Privacy Policy</Link></li>
            <li><Link href="/terms" className="hover:text-charcoal transition-colors">Terms of Use</Link></li>
            <li><Link href="/contact" className="hover:text-charcoal transition-colors">Contact Us</Link></li>
          </ul>
        </div>

        <div>
          <h4 className="text-xs font-semibold tracking-[0.1em] uppercase mb-6">Join the Circle</h4>
          <p className="text-sm text-charcoal/80 mb-4">
            Sign up to receive exclusive offers and design inspiration.
          </p>
          <form className="flex border-b border-taupe pb-2">
            <input 
              type="email" 
              placeholder="YOUR EMAIL" 
              className="bg-transparent w-full text-xs placeholder:text-charcoal/50 outline-none"
              aria-label="Email address"
            />
            <button type="submit" className="text-xs tracking-[0.1em] hover:text-gold uppercase transition-colors" aria-label="Subscribe">
              Subscribe
            </button>
          </form>
        </div>
      </div>
      <div className="max-w-7xl mx-auto px-6 md:px-10 mt-16 md:mt-24 text-xs text-charcoal/60 flex flex-col md:flex-row justify-between items-center gap-4">
        <p>&copy; {new Date().getFullYear()} Aurelia Home. All rights reserved.</p>
        <p>Quiet Luxury for the Modern Home.</p>
      </div>
    </footer>
  );
}

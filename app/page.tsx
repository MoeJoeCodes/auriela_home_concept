import Image from 'next/image';
import Link from 'next/link';
import ProductCard from '@/components/ProductCard';

export default function Home() {
  return (
    <div className="pb-24">
      {/* Hero Section */}
      <section className="relative h-screen -mt-24 md:-mt-32 w-full flex items-center justify-center text-center">
        <video
          className="absolute inset-0 h-full w-full object-cover brightness-[0.8]"
          autoPlay
          muted
          loop
          playsInline
          preload="metadata"
          aria-label="Crafting bespoke luxury furniture"
        >
          <source
            src="https://qnelsjzfuynqotkwojxv.supabase.co/storage/v1/object/public/aurelia%20home/images/Crafting_bespoke_luxury_furniture_20260911152548.mp4"
            type="video/mp4"
          />
        </video>
        <div className="relative z-10 max-w-3xl px-6 text-cream mt-16 md:mt-0">
          <h1 className="font-playfair text-5xl md:text-7xl mb-6">The Art of Living Refined</h1>
          <p className="font-montserrat text-sm md:text-base tracking-wide mb-10 max-w-xl mx-auto text-cream/90 leading-relaxed">
            Curating timeless pieces that harmonize heritage craftsmanship with contemporary minimalism.
          </p>
          <Link 
            href="/furniture" 
            className="inline-block bg-gold/90 hover:bg-gold text-cream font-montserrat text-xs uppercase tracking-[0.15em] py-4 px-8 transition-colors"
          >
            Explore the Collection &rarr;
          </Link>
        </div>
      </section>

      <div className="flex flex-col gap-24 md:gap-32 pt-16 md:pt-24">
        {/* Curated Categories */}
        <section className="max-w-7xl mx-auto w-full px-6 md:px-10">
        <div className="text-center mb-16">
          <h2 className="font-playfair text-3xl md:text-4xl text-charcoal">Curated Categories</h2>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-5 gap-4 md:gap-6">
          {[
            { name: 'Rugs', image: 'https://qnelsjzfuynqotkwojxv.supabase.co/storage/v1/object/public/aurelia%20home/images/_rug_.jpeg', link: '/rugs' },
            { name: 'Curtains', image: 'https://qnelsjzfuynqotkwojxv.supabase.co/storage/v1/object/public/aurelia%20home/images/curtains_.jpeg', link: '/curtains' },
            { name: 'Chandeliers', image: 'https://qnelsjzfuynqotkwojxv.supabase.co/storage/v1/object/public/aurelia%20home/images/chandelier_.jpeg', link: '/chandeliers' },
            { name: 'Furniture', image: 'https://qnelsjzfuynqotkwojxv.supabase.co/storage/v1/object/public/aurelia%20home/images/_sofa_with_marble_.jpeg', link: '/furniture' },
            { name: 'Decor', image: 'https://qnelsjzfuynqotkwojxv.supabase.co/storage/v1/object/public/aurelia%20home/images/_home_decor_arrangement,.jpeg', link: '/furniture' },
          ].map((cat) => (
            <Link key={cat.name} href={cat.link} className="group text-center flex flex-col gap-4">
              <div className="relative aspect-square bg-beige overflow-hidden rounded-full">
                <Image
                  src={cat.image}
                  alt={cat.name}
                  fill
                  referrerPolicy="no-referrer"
                  className="object-cover group-hover:scale-105 transition-transform duration-700"
                />
              </div>
              <span className="font-montserrat text-xs uppercase tracking-widest text-charcoal">{cat.name}</span>
            </Link>
          ))}
        </div>
      </section>

      {/* The Seasonal Edit / Categories */}
      <section className="bg-beige/40 py-24">
        <div className="max-w-7xl mx-auto w-full px-6 md:px-10">
          <div className="flex flex-col items-start mb-12">
            <span className="font-montserrat text-xs uppercase tracking-widest text-charcoal/60 mb-4">Autumn 2024</span>
            <h2 className="font-playfair text-4xl md:text-5xl text-charcoal mb-6 leading-tight">The Seasonal Edit</h2>
            <p className="font-montserrat text-sm text-charcoal/80 leading-relaxed max-w-xl">
              Transition into the cooler months with our curated selection of warm textures, earthy palettes, and sculptural forms designed to create sanctuary within your home.
            </p>
          </div>

          <div className="flex flex-col md:flex-row gap-6 md:gap-8 lg:gap-10 md:h-[700px]">
            {/* Left Column: 2 Stacked Images */}
            <div className="w-full md:w-1/2 flex flex-col gap-6 md:gap-8 lg:gap-10 h-[600px] md:h-full">
              <Link href="/furniture" className="relative flex-1 w-full bg-beige rounded-2xl overflow-hidden group">
                <Image
                  src="https://qnelsjzfuynqotkwojxv.supabase.co/storage/v1/object/public/aurelia%20home/images/Close-up_of_luxury_fabric_curtains,.jpeg"
                  alt="Furniture Category"
                  fill
                  referrerPolicy="no-referrer"
                  className="object-cover group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-charcoal/10 group-hover:bg-charcoal/20 transition-colors"></div>
                <div className="absolute bottom-6 left-6 md:bottom-8 md:left-8 text-cream">
                  <h3 className="font-playfair text-2xl md:text-3xl tracking-wide mb-2 drop-shadow-md">Living Room</h3>
                  <span className="font-montserrat text-xs uppercase tracking-widest border-b border-cream/50 pb-1 drop-shadow-md">Shop Now</span>
                </div>
              </Link>
              <Link href="/rugs" className="relative flex-1 w-full bg-beige rounded-2xl overflow-hidden group">
                <Image
                  src="https://qnelsjzfuynqotkwojxv.supabase.co/storage/v1/object/public/aurelia%20home/images/Modern_dining_room_.jpeg"
                  alt="Rugs Category"
                  fill
                  referrerPolicy="no-referrer"
                  className="object-cover group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-charcoal/10 group-hover:bg-charcoal/20 transition-colors"></div>
                <div className="absolute bottom-6 left-6 md:bottom-8 md:left-8 text-cream">
                  <h3 className="font-playfair text-2xl md:text-3xl tracking-wide mb-2 drop-shadow-md">Fine Flooring</h3>
                  <span className="font-montserrat text-xs uppercase tracking-widest border-b border-cream/50 pb-1 drop-shadow-md">Shop Now</span>
                </div>
              </Link>
            </div>

            {/* Right Column: 1 Large Image */}
            <Link href="/chandeliers" className="w-full md:w-1/2 h-[500px] md:h-full relative bg-beige rounded-2xl overflow-hidden group">
              <Image
                src="https://qnelsjzfuynqotkwojxv.supabase.co/storage/v1/object/public/aurelia%20home/images/_open-plan_living_room.jpeg"
                alt="Chandeliers Category"
                fill
                referrerPolicy="no-referrer"
                className="object-cover group-hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-charcoal/10 group-hover:bg-charcoal/20 transition-colors"></div>
              <div className="absolute bottom-6 left-6 md:bottom-8 md:left-8 text-cream">
                <h3 className="font-playfair text-3xl md:text-4xl tracking-wide mb-2 drop-shadow-md">Statement Lighting</h3>
                <span className="font-montserrat text-sm uppercase tracking-widest border-b border-cream/50 pb-1 drop-shadow-md">Shop Now</span>
              </div>
            </Link>
          </div>
        </div>
      </section>

      {/* New Arrivals */}
      <section className="max-w-7xl mx-auto w-full px-6 md:px-10">
        <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-6">
          <div>
            <h2 className="font-playfair text-3xl md:text-4xl text-charcoal mb-2">New Arrivals</h2>
            <p className="font-montserrat text-sm text-charcoal/60">The latest additions to our curated world.</p>
          </div>
          <Link 
            href="/furniture"
            className="font-montserrat text-xs uppercase tracking-widest text-charcoal border-b border-charcoal pb-1 hover:text-gold transition-colors hidden md:block"
          >
            Shop All
          </Link>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          <ProductCard 
            id="na-1"
            name="Aurelia Sculptural Stool"
            price={450}
            image="https://qnelsjzfuynqotkwojxv.supabase.co/storage/v1/object/public/aurelia%20home/images/stool.png"
          />
          <ProductCard 
            id="na-2"
            name="Alabaster Votive Set"
            price={185}
            image="https://qnelsjzfuynqotkwojxv.supabase.co/storage/v1/object/public/aurelia%20home/images/candles.png"
          />
          <ProductCard 
            id="na-3"
            name="Terraform Centerpiece"
            price={220}
            image="https://qnelsjzfuynqotkwojxv.supabase.co/storage/v1/object/public/aurelia%20home/images/center%20piece.png"
          />
          <ProductCard 
            id="na-4"
            name="Heritage Linen Throw"
            price={310}
            image="https://qnelsjzfuynqotkwojxv.supabase.co/storage/v1/object/public/aurelia%20home/images/linen.png"
          />
        </div>
      </section>

      {/* Banners */}
      <section className="max-w-7xl mx-auto w-full px-6 md:px-10 flex flex-col gap-6">
        <div className="relative h-[300px] md:h-[400px] w-full flex items-center justify-center bg-charcoal rounded-2xl md:rounded-3xl overflow-hidden">
          <Image
           src="https://qnelsjzfuynqotkwojxv.supabase.co/storage/v1/object/public/aurelia%20home/images/Luxury_living_room_with_velvet_.jpeg"
           alt="Velvet & Silk"
           fill
           referrerPolicy="no-referrer"
           className="object-cover brightness-[0.6]"
          />
          <h2 className="relative z-10 font-playfair text-4xl md:text-5xl text-cream italic">Velvet & Silk</h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="relative h-[300px] md:h-[400px] w-full flex items-center justify-center bg-taupe rounded-2xl md:rounded-3xl overflow-hidden">
            <Image
             src="https://qnelsjzfuynqotkwojxv.supabase.co/storage/v1/object/public/aurelia%20home/images/Minimal_modern_interior_with_stone_.jpeg"
             alt="Stone & Clay"
             fill
             referrerPolicy="no-referrer"
             className="object-cover brightness-[0.7]"
            />
            <h2 className="relative z-10 font-playfair text-3xl md:text-4xl text-cream italic">Stone & Clay</h2>
          </div>
          <div className="relative h-[300px] md:h-[400px] w-full flex items-center justify-center bg-beige rounded-2xl md:rounded-3xl overflow-hidden">
            <Image
             src="https://qnelsjzfuynqotkwojxv.supabase.co/storage/v1/object/public/aurelia%20home/images/Bright_open_living_space_.jpeg"
             alt="Light & Space"
             fill
             referrerPolicy="no-referrer"
             className="object-cover brightness-[0.8]"
            />
            <h2 className="relative z-10 font-playfair text-3xl md:text-4xl text-cream italic text-center px-4">Light & Space</h2>
          </div>
        </div>
      </section>

      {/* Featured Essentials */}
      <section className="max-w-7xl mx-auto w-full px-6 md:px-10">
        <h2 className="font-playfair text-3xl md:text-4xl text-charcoal mb-12">Featured Essentials</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          <ProductCard 
            id="fe-1"
            name="Linear Oak Side Table"
            category="Natural Oak"
            price={595}
            image="https://qnelsjzfuynqotkwojxv.supabase.co/storage/v1/object/public/aurelia%20home/images/Minimalist_oak_side_table,_.jpeg"
            bestseller
          />
          <ProductCard 
            id="fe-2"
            name="Obelisk Bronze Lamp"
            category="Patinated Bronze"
            price={340}
            image="https://qnelsjzfuynqotkwojxv.supabase.co/storage/v1/object/public/aurelia%20home/images/Modern_bronze_table_lamp,_.jpeg"
          />
          <ProductCard 
            id="fe-3"
            name="Carrara Marble Platter"
            category="Polished Marble"
            price={125}
            image="https://qnelsjzfuynqotkwojxv.supabase.co/storage/v1/object/public/aurelia%20home/images/Carrara_marble_serving_platter,_.jpeg"
          />
          <ProductCard 
            id="fe-4"
            name="Horizon Abstract Canvas"
            category="Framed Original"
            price={1200}
            image="https://qnelsjzfuynqotkwojxv.supabase.co/storage/v1/object/public/aurelia%20home/images/Abstract_neutral_wall_art_canvas,_.jpeg"
          />
        </div>
      </section>

      {/* Testimonials */}
      <section className="bg-beige/30 py-24">
        <div className="max-w-7xl mx-auto w-full px-6 md:px-10">
          <h2 className="font-playfair text-3xl md:text-4xl text-charcoal text-center mb-16">The Aurelia Experience</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                text: "The level of detail in the linens I purchased is unmatched. Every night feels like a stay in a luxury boutique hotel.",
                author: "ELEANOR VANCE"
              },
              {
                text: "Their furniture pieces are more than just items; they are sculptural statements. My living room has never felt more complete.",
                author: "MARCUS THORNE"
              },
              {
                text: "Incredibly fast delivery and the packaging was as beautiful as the products themselves. Aurelia Home truly understands luxury.",
                author: "SOFIA MARTINEZ"
              }
            ].map((test, i) => (
              <div key={i} className="bg-cream p-10 flex flex-col items-center justify-center text-center gap-6">
                <div className="flex gap-1 text-gold">
                  {[...Array(5)].map((_, j) => (
                    <span key={j}>★</span>
                  ))}
                </div>
                <p className="font-playfair italic text-charcoal/80 text-[15px] leading-relaxed">
                  "{test.text}"
                </p>
                <span className="font-montserrat text-[10px] uppercase tracking-widest text-charcoal/60">
                  — {test.author}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>
      </div>
    </div>
  );
}

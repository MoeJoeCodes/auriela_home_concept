import ProductCard from '@/components/ProductCard';
import { products } from '@/data/products';

export default function ChandeliersPage() {
  return (
    <div className="max-w-7xl mx-auto px-6 md:px-10 py-12 md:py-24">
      <div className="text-center mb-16 md:mb-24">
        <h1 className="font-playfair text-4xl md:text-5xl text-charcoal mb-4">Chandeliers</h1>
        <p className="font-montserrat text-charcoal/70 max-w-xl mx-auto leading-relaxed">
          Illuminate your home with sculptural lighting pieces crafted from alabaster, bronze, and crystal.
        </p>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
        {products.chandeliers.map((product) => (
          <ProductCard key={product.id} {...product} />
        ))}
      </div>
    </div>
  );
}

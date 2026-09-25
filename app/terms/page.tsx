export default function TermsPage() {
  return (
    <div className="max-w-4xl mx-auto px-6 md:px-10 py-12 md:py-24">
      <h1 className="font-playfair text-4xl md:text-5xl text-charcoal mb-12 text-center">Terms of Use</h1>
      
      <div className="font-montserrat text-sm text-charcoal/80 space-y-8 leading-relaxed">
        <p>Last Updated: {new Date().toLocaleDateString()}</p>
        
        <section>
          <h2 className="text-charcoal font-semibold mb-4">1. Acceptance of Terms</h2>
          <p>
            By accessing and using the Aurelia Home website ("the Website"), you accept and agree to be bound by the terms and provision of this agreement. In addition, when using this Website's particular services, you shall be subject to any posted guidelines or rules applicable to such services.
          </p>
        </section>

        <section>
          <h2 className="text-charcoal font-semibold mb-4">2. Intellectual Property</h2>
          <p>
            All content included on this site, such as text, graphics, logos, button icons, images, audio clips, digital downloads, data compilations, and software, is the property of Aurelia Home or its content suppliers and protected by international copyright laws.
          </p>
        </section>

        <section>
          <h2 className="text-charcoal font-semibold mb-4">3. Product Descriptions</h2>
          <p>
            Aurelia Home attempts to be as accurate as possible. However, we do not warrant that product descriptions or other content of this site is accurate, complete, reliable, current, or error-free. Every effort is made to display the colors of our products as accurately as possible, but we cannot guarantee that your computer monitor's display of any color will be accurate.
          </p>
        </section>

        <section>
          <h2 className="text-charcoal font-semibold mb-4">4. Order Enquiry and Contract Creation</h2>
          <p>
            The display of products on our Website constitutes an invitation to treat and not an offer to sell. No contract for the sale of any products will exist between you and Aurelia Home until an order is confirmed by our concierge team following an enquiry placed through the Website or via phone.
          </p>
        </section>

        <section>
          <h2 className="text-charcoal font-semibold mb-4">5. Limitation of Liability</h2>
          <p>
            In no event shall Aurelia Home, nor its directors, employees, partners, agents, suppliers, or affiliates, be liable for any indirect, incidental, special, consequential or punitive damages, including without limitation, loss of profits, data, use, goodwill, or other intangible losses, resulting from your access to or use of or inability to access or use the Service.
          </p>
        </section>
      </div>
    </div>
  );
}

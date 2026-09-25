'use client';

export default function ContactPage() {
  return (
    <div className="max-w-7xl mx-auto px-6 md:px-10 py-12 md:py-24">
      <div className="max-w-3xl mx-auto">
        <h1 className="font-playfair text-4xl md:text-5xl text-charcoal mb-6 text-center">Contact Us</h1>
        <p className="font-montserrat text-sm text-charcoal/70 mb-16 text-center leading-relaxed">
          For enquiries regarding our collections, bespoke sourcing, or interior styling services, please reach out. Our concierge team is at your disposal.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 mb-24 font-montserrat">
          <div className="flex flex-col gap-8">
            <div>
              <h2 className="text-xs font-semibold tracking-[0.1em] uppercase text-charcoal mb-4">New York Gallery</h2>
              <address className="not-italic text-sm text-charcoal/80 leading-relaxed">
                124 Fifth Avenue<br />
                New York, NY 10011<br />
                United States
              </address>
              <p className="text-sm text-charcoal/80 mt-4 h-auto">
                <a href="tel:+12125550198" className="hover:text-gold transition-colors">+1 (212) 555-0198</a><br />
                <a href="mailto:concierge@aureliahome.com" className="hover:text-gold transition-colors">concierge@aureliahome.com</a>
              </p>
            </div>
            <div>
              <h2 className="text-xs font-semibold tracking-[0.1em] uppercase text-charcoal mb-4">Gallery Hours</h2>
              <p className="text-sm text-charcoal/80 leading-relaxed">
                Monday – Friday: 10am – 6pm<br />
                Saturday: 11am – 5pm<br />
                Sunday: By Appointment Only
              </p>
            </div>
          </div>

          <div>
            <form className="flex flex-col gap-6" onSubmit={(e) => e.preventDefault()}>
              <div className="flex flex-col gap-2">
                <label htmlFor="name" className="text-xs font-semibold tracking-[0.1em] uppercase text-charcoal">Name</label>
                <input 
                  type="text" 
                  id="name" 
                  required 
                  className="bg-transparent border-b border-taupe py-2 text-sm focus:outline-none focus:border-charcoal transition-colors placeholder:text-charcoal/40"
                  placeholder="Your Name"
                />
              </div>
              <div className="flex flex-col gap-2">
                <label htmlFor="email" className="text-xs font-semibold tracking-[0.1em] uppercase text-charcoal">Email</label>
                <input 
                  type="email" 
                  id="email" 
                  required 
                  className="bg-transparent border-b border-taupe py-2 text-sm focus:outline-none focus:border-charcoal transition-colors placeholder:text-charcoal/40"
                  placeholder="Your Email"
                />
              </div>
              <div className="flex flex-col gap-2 mt-4">
                <label htmlFor="message" className="text-xs font-semibold tracking-[0.1em] uppercase text-charcoal">Message</label>
                <textarea 
                  id="message" 
                  rows={4}
                  required
                  className="bg-transparent border-b border-taupe py-2 text-sm focus:outline-none focus:border-charcoal transition-colors placeholder:text-charcoal/40 resize-none"
                  placeholder="How can we assist you?"
                ></textarea>
              </div>
              <button 
                type="submit"
                className="mt-8 bg-charcoal text-cream text-xs uppercase tracking-[0.1em] py-4 w-full hover:bg-gold transition-colors"
              >
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

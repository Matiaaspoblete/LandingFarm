import { Facebook, Instagram, Youtube, Phone, MapPin } from 'lucide-react'

export default function Footer() {
  return (
    <footer id="contactus" className="bg-white text-[rgb(87,60,36)] py-12 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="md:col-span-2">
            <div className="flex items-center mb-4">
              <svg className="h-8 w-8 text-[rgb(67,40,16)] mr-3" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M12 2L2 7L12 12L22 7L12 2Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M2 17L12 22L22 17" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M2 12L12 17L22 12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
              <span className="text-xl font-semibold">Goat Farm</span>
            </div>
            <p className="mb-4">Nurturing happy goats and crafting quality products since 1985.</p>
            <div className="flex space-x-4">
              <button
                aria-label="Visit our Facebook page"
                className="p-2 bg-[rgb(87,60,36)] text-white rounded-full hover:bg-[rgb(67,40,16)] focus:outline-none focus:ring-2  focus:ring-offset-2 transition-colors"
              >
                <Facebook size={20} />
              </button>
              <button
                aria-label="Visit our Instagram profile"
                className="p-2 bg-[rgb(87,60,36)] text-white rounded-full hover:bg-[rgb(67,40,16)] focus:outline-none focus:ring-2  focus:ring-offset-2 transition-colors"
              >
                <Instagram size={20} />
              </button>
              <button
                aria-label="Visit our YouTube channel"
                className="p-2 bg-[rgb(87,60,36)] text-white rounded-full hover:bg-[rgb(67,40,16)] focus:outline-none focus:ring-2 focus:ring-offset-2 transition-colors"
              >
                <Youtube size={20} />
              </button>
            </div>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li><a href="#aboutus" className="hover:text-[rgba(94,68,46,0.73)]">About Us</a></li>
              <li><a href="#ourgoats" className="hover:text-[rgba(94,68,46,0.73)]">Our Goats</a></li>
              <li><a href="#products" className="hover:text-[rgba(94,68,46,0.73)]">Products</a></li>
              <li><a href="#contactus" className="hover:text-[rgba(94,68,46,0.73)]">Contact Us</a></li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4">Contact Information</h3>
            <ul className="space-y-2">
              <li className="flex items-center">
                <Phone size={16} className="mr-2" />
                <a href="tel:+1234567890" className="hover:text-[rgba(94,68,46,0.73)]">+40 754 465-952</a>
              </li>
              <li className="flex items-center">
                <MapPin size={16} className="mr-2" />
                <a href="https://goo.gl/maps/" target="_blank" rel="noopener noreferrer" className="hover:text-[rgba(94,68,46,0.73)]">View on Google Maps</a>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="mt-12 pt-8 border-t border-[rgba(94,68,46,0.73)] text-sm text-center">
          © {new Date().getFullYear()} Goat Farm. All rights reserved.
        </div>
      </div>
    </footer>
  )
}
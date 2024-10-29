'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'
import Cheese from '@/images/cheese.jpg'

const products = [
  { name: 'Artisan Goat Cheese', image: Cheese, description: "Our handcrafted goat cheese is made from the freshest milk, offering a creamy texture and rich flavor that's perfect for any cheese board." },
  { name: 'Fresh Goat Milk', image: Cheese, description: 'Straight from our farm to your table, our goat milk is pasteurized and bottled daily, ensuring the highest quality and freshness.' },
  { name: 'Natural Goat Milk Soap', image: Cheese, description: 'Gentle on your skin and free from harsh chemicals, our goat milk soap is perfect for those with sensitive skin or anyone looking for a luxurious bathing experience.' },
]

export default function Products() {
  return (
    <div id="products" className="relative overflow-hidden bg-[rgb(87,60,36)] py-24 sm:py-32">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center"
        >
          <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">Our Products</h2>
          <p className="mt-4 text-lg leading-8 text-[rgb(234,242,150)] max-w-2xl mx-auto">
            Discover the natural goodness of our farm-fresh goat products. From creamy cheeses to nourishing soaps, we offer a range of high-quality items made with care and passion.
          </p>
        </motion.div>
        <motion.div 
          className="mt-16 grid grid-cols-1 gap-x-8 gap-y-16 sm:grid-cols-2 lg:grid-cols-3"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.8 }}
        >
          {products.map((product, index) => (
            <motion.div
              key={product.name}
              className="bg-white rounded-2xl overflow-hidden shadow-lg"
              whileHover={{ y: -10 }}
              transition={{ duration: 0.3 }}
            >
              <div className="relative h-48 w-full overflow-hidden">
                <Image
                  src={product.image}
                  alt={product.name}
                  layout="fill"
                  objectFit="cover"
                  className="transform transition-transform duration-300 hover:scale-110"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-2">{product.name}</h3>
                <p className="text-gray-600">{product.description}</p>
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="mt-4 inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-[rgb(87,60,36)] hover:bg-[rgb(67,40,16)] focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[rgb(87,60,36)]"
                >
                  Learn More
                </motion.button>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </div>
  )
}
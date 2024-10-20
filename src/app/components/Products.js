
export default function Products() {
    return (
      <div id="products" className="h-screen relative overflow-hidden bg-white">
        <div className="pb-40 pt-16 sm:pb-40 sm:pt-24 lg:pb-10 lg:pt-10 bg-red-600">
          <div className="mx-auto max-w-7xl px-4 sm:static sm:px-6 lg:px-8">
            <h1 className="text-black text-center text-2xl">Our Products</h1>
            <p className="text-[rgb(107 114 128] mt-4 text-center">As a digital creative, your laptop or tablet is at the center of your work. Keep your device safe with a fabric sleeve that matches in quality and looks.</p>
          </div>
          <div className="mt-16">
            <div className="flex flex-col-reverse">
                <div className="mt-6">
                    <h3 className="text-xl text-[rgb(17 24 39)]">Cheese</h3>
                    <p className="mt-2">Our laptop sleeve is compact and precisely fits 13" devices. The zipper allows you to access the interior with ease, and the front pouch provides a convenient place for your charger cable.</p>
                </div>
                <div className="flex-1">
                    <div className="overflow-hidden relative ">
                    <img 
                    alt="White canvas laptop sleeve with gray felt interior, silver zipper, and tan leather zipper pull." 
                    src="https://tailwindui.com/plus/img/ecommerce-images/product-feature-07-detail-01.jpg" 
                    className="object-cover object-center">
                    </img>
                    </div>
                </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
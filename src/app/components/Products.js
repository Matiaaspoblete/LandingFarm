import Image from 'next/image';
import Cheese from '../../images/cheese.jpg'

export default function Products() {
  return (
    <div id="products" className="h-screen relative overflow-hidden bg-[rgb(87,60,36)]">
      <div className="lg:pl-12 lg:pr-12 lg:pb-10 lg:pt-10 pb-40 pt-16 sm:pb-40 sm:pt-24 pl-5 pr-5">
        <div className="mx-auto max-w-7xl px-4 sm:static sm:px-6 lg:px-8">
          <h1 className="text-white text-center text-4xl font-bold">Our Products</h1>
          <p className="text-[#b4b7bd] mt-4 text-center text-base">
            As a digital creative, your laptop or tablet is at the center of your work. Keep your device safe with a fabric sleeve that matches in quality and looks.
          </p>
        </div>

        <div className="mt-16">
          {/* First Product */}
          <div className="flex flex-col-reverse lg:grid lg:grid-cols-12 items-center lg:gap-8">
            {/* Text on the left */}
            <div className="sm:mt-6 lg:mt-0 lg:row-start-1 lg:col-start-2 lg:col-span-5">
              <h3 className="lg:text-xl text-white font-semibold">Cheese</h3>
              <p className="mt-2 text-s text-[#b4b7bd]">
                Our laptop sleeve is compact and precisely fits 13" devices. The zipper allows you to access the interior with ease, and the front pouch provides a convenient place for your charger cable.
              </p>
            </div>
            {/* Image on the right */}
            <div className="sm:flex-1 lg:row-start-1 lg:col-start-7 lg:col-span-5">
              <div className="overflow-hidden">
                <Image
                  alt="White canvas laptop sleeve with gray felt interior, silver zipper, and tan leather zipper pull."
                  src={Cheese}
                  className="object-cover object-center w-full"
                />
              </div>
            </div>
          </div>

          {/* Second Product */}
          <div className="flex flex-col lg:grid lg:grid-cols-12 items-center lg:gap-8 mt-8">
            {/* Image on the left */}
            <div className="sm:flex-1 lg:row-start-1 lg:col-start-2 lg:col-span-5">
              <div className="overflow-hidden">
                <Image
                  alt="White canvas laptop sleeve with gray felt interior, silver zipper, and tan leather zipper pull."
                  src={Cheese}
                  className="object-cover object-center w-full"
                />
              </div>
            </div>
            {/* Text on the right */}
            <div className="sm:mt-6 lg:mt-0 lg:row-start-1 lg:col-start-7 lg:col-span-5">
              <h3 className="lg:text-xl text-white font-semibold">Cheese</h3>
              <p className="mt-2 text-s text-[#b4b7bd]">
                Our laptop sleeve is compact and precisely fits 13" devices. The zipper allows you to access the interior with ease, and the front pouch provides a convenient place for your charger cable.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

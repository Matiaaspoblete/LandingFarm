import Image from 'next/image';
import Goat1 from '@/images/goat-1.jpeg'
import Goat2 from '@/images/goat-2.jpg'
import Goat3 from '@/images/goat-3.jpg'


export default function Goats() {
  return (
    <div id="ourgoats" className="bg-white">
      <div className="container mx-auto px-4 py-8 lg:pl-12 lg:pr-12 lg:pb-10 lg:pt-10 pb-20 pt-16 pl-5 pr-5">
        <div className="mx-auto max-w-7xl px-4 sm:static sm:px-6 lg:px-8">
          <h1 className="text-[#111827] text-center text-4xl font-bold">Our Goat Family</h1>
          <p className="text-[#6b7280] mt-4 text-center text-base">
          Each of our goats has a unique personality and a special place on our farm. From playful kids to gentle elders, they’re cared for with love and dedication.
          </p>
        </div>
        <div className="mt-8 p-6 grid grid-cols-2 md:grid-cols-3 gap-4">
        <div className="col-span-2 md:col-span-1 row-span-2">
          <Image
            src={Goat2}
            alt="Goat in a field"
            width={400}
            height={400}
            className="rounded-lg object-cover w-full h-full"
          />
        </div>
        <div>
          <Image
            src={Goat1}
            alt="Baby goat"
            width={400}
            height={400}
            className="rounded-lg object-cover w-full h-full"
          />
        </div>
        <div>
          <Image
            src={Goat3}
            alt="Goat eating grass"
            width={400}
            height={400}
            className="rounded-lg object-cover w-full h-full"
          />
        </div>
        <div className="col-span-2 md:col-span-1">
          <Image
            src={Goat2}
            alt="Group of goats"
            width={400}
            height={400}
            className="rounded-lg object-cover w-full h-full"
          />
        </div>
        <div className='hidden sm:block'>
          <Image
            src={Goat3}
            alt="Goat close-up"
            width={400}
            height={400}
            className="rounded-lg object-cover w-full h-full"
          />
        </div>
      </div>
      </div>
    </div>
  );
}



export default function AboutUs() {
    return (
      <div id="aboutus" className=" relative overflow-hidden bg-[rgb(87,60,36)]">
        <div className="pb-80 pt-16 sm:pb-40 sm:pt-24 lg:pb-48 lg:pt-60">
          <div className="relative mx-auto max-w-7xl px-4 sm:static sm:px-6 lg:px-8">
            <div className="sm:max-w-lg">
              <h1 className="text-4xl font-bold tracking-tight text-white sm:text-6xl">
              Meet the Family Behind the Farm              
              </h1>
              <p className="mt-8 text-xl text-[rgb(234,242,150)]">
              We’re a family-run farm with a simple mission: to raise happy, healthy goats and provide the best farm-fresh products to our community. From humble beginnings, we’ve grown into a trusted source for goat milk, cheeses, and more—always staying true to our roots and values.
              </p>
            </div>
            <div>
              <div className="mt-10">
                {/* Decorative image grid */}
                <div
                  aria-hidden="true"
                  className="pointer-events-none lg:absolute lg:inset-y-0 lg:mx-auto lg:w-full lg:max-w-7xl"
                >
                  <div className="absolute transform sm:left-1/2 sm:top-0 sm:translate-x-8 lg:left-1/2 lg:top-1/2 lg:-translate-y-1/2 lg:translate-x-8">
                    <div className="flex items-center space-x-4 lg:space-x-8">
                      <div className="grid flex-shrink-0 grid-cols-1 gap-y-6 lg:gap-y-8">
                        <div className="h-40 w-40 lg:h-64 lg:w-72 overflow-hidden rounded-lg sm:opacity-0 lg:opacity-100">
                          <img
                            alt=""
                            src="https://site-547756.mozfiles.com/files/547756/medium/goat-lamb-little-grass-144240.jpeg?1502811025"
                            className="h-full w-full object-cover object-center"
                          />
                        </div>
                        <div className="h-40 w-40 lg:h-64 lg:w-72 overflow-hidden rounded-lg">
                          <img
                            alt=""
                            src="https://media.istockphoto.com/id/146776721/photo/goats.jpg?s=612x612&w=0&k=20&c=z0GrAzkkLYJMAWQGy0Dsc-3y0ZfDWsxxvEu8FMKwy9c="
                            className="h-full w-full object-cover object-center"
                          />
                        </div>
                      </div>
                      <div className="grid flex-shrink-0 grid-cols-1 gap-y-6 lg:gap-y-8">

                        <div className="h-40 w-40 lg:h-64 lg:w-72 overflow-hidden rounded-lg">
                          <img
                            alt=""
                            src="https://www.thehappychickencoop.com/wp-content/uploads/2019/11/goat-farming.jpg"
                            className="h-full w-full object-cover object-center"
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
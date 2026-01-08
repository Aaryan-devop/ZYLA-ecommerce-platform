export function Hero() {
  return (
    <section className="relative bg-gradient-to-r from-gray-50 to-gray-100 py-16 sm:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid gap-8 lg:grid-cols-2 items-center">
          <div className="space-y-6">
            <div className="inline-block rounded-full bg-black px-4 py-1 text-sm text-white">
              New Collection
            </div>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl">
              Discover Your Style
            </h1>
            <p className="text-lg text-gray-600 max-w-md">
              Shop the latest trends in fashion, electronics, and lifestyle products. Up to 50% off on selected items.
            </p>
            <div className="flex gap-4">
              <button className="rounded-lg bg-black px-8 py-3 text-white transition-transform hover:scale-105">
                Shop Now
              </button>
              <button className="rounded-lg border border-gray-300 px-8 py-3 transition-colors hover:bg-gray-50">
                Learn More
              </button>
            </div>
          </div>

          <div className="relative h-[400px] lg:h-[500px]">
            <img
              src="https://images.unsplash.com/photo-1441986300917-64674bd600d8?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzaG9wcGluZyUyMHN0b3JlfGVufDB8fHx8MTczNjk1MDQ2Mnww&ixlib=rb-4.1.0&q=80&w=1080"
              alt="Shopping"
              className="h-full w-full object-cover rounded-2xl"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

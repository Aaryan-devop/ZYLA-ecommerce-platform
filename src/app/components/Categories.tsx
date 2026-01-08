const categories = [
  {
    name: 'Electronics',
    image: 'https://images.unsplash.com/photo-1498049794561-7780e7231661?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxlbGVjdHJvbmljc3xlbnwwfHx8fDE3MzY5NTA0NjJ8MA&ixlib=rb-4.1.0&q=80&w=1080',
  },
  {
    name: 'Fashion',
    image: 'https://images.unsplash.com/photo-1445205170230-053b83016050?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxmYXNoaW9ufGVufDB8fHx8MTczNjk1MDQ2Mnww&ixlib=rb-4.1.0&q=80&w=1080',
  },
  {
    name: 'Home & Living',
    image: 'https://images.unsplash.com/photo-1586023492125-27b2c045efd7?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxob21lJTIwZGVjb3J8ZW58MHx8fHwxNzM2OTUwNDYyfDA&ixlib=rb-4.1.0&q=80&w=1080',
  },
  {
    name: 'Sports',
    image: 'https://images.unsplash.com/photo-1461896836934-ffe607ba8211?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzcG9ydHN8ZW58MHx8fHwxNzM2OTUwNDYyfDA&ixlib=rb-4.1.0&q=80&w=1080',
  },
];

export function Categories() {
  return (
    <section className="bg-white py-16">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-8">
          <h2 className="text-3xl">Shop by Category</h2>
          <p className="mt-2 text-gray-600">Browse through our diverse range of categories</p>
        </div>

        <div className="grid grid-cols-2 gap-4 lg:grid-cols-4">
          {categories.map((category) => (
            <a
              key={category.name}
              href="#"
              className="group relative overflow-hidden rounded-lg aspect-square"
            >
              <img
                src={category.image}
                alt={category.name}
                className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
              <div className="absolute bottom-4 left-4 text-white">
                <h3 className="text-xl">{category.name}</h3>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}

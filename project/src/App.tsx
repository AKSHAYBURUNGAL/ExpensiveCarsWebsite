import React from 'react';
import { CarCard } from './components/CarCard';
import { cars } from './data/cars';
import { Car } from 'lucide-react';

function App() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 to-gray-800">
      <div className="container mx-auto px-4 py-16">
        <div className="mb-16 text-center">
          <div className="mb-6 flex justify-center">
            <Car size={48} className="text-emerald-400" />
          </div>
          <h1 className="mb-4 text-5xl font-bold text-white">
            World's Most Expensive Cars
          </h1>
          <p className="mx-auto max-w-2xl text-gray-300">
            Discover the pinnacle of automotive excellence with our curated list of
            the top 10 most expensive cars in the world. Each masterpiece
            represents the ultimate in luxury, performance, and exclusivity.
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {cars.map((car) => (
            <CarCard
              key={car.id}
              rank={car.id}
              name={car.name}
              price={car.price}
              image={car.image}
              description={car.description}
            />
          ))}
        </div>

        <footer className="mt-16 text-center text-sm text-gray-400">
          <p>© {new Date().getFullYear()} Luxury Cars Showcase. All rights reserved.</p>
        </footer>
      </div>
    </div>
  );
}

export default App;
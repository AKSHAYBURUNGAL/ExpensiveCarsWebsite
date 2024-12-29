import React from 'react';
import { DollarSign, Info } from 'lucide-react';

interface CarCardProps {
  rank: number;
  name: string;
  price: string;
  image: string;
  description: string;
}

export function CarCard({ rank, name, price, image, description }: CarCardProps) {
  return (
    <div className="group relative overflow-hidden rounded-xl bg-white shadow-xl transition-all hover:scale-[1.02]">
      <div className="absolute left-4 top-4 z-10 flex h-12 w-12 items-center justify-center rounded-full bg-black/80 text-xl font-bold text-white">
        #{rank}
      </div>
      <div className="relative h-64 overflow-hidden">
        <img
          src={image}
          alt={name}
          className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
      </div>
      <div className="p-6">
        <h3 className="mb-2 text-2xl font-bold">{name}</h3>
        <div className="mb-4 flex items-center gap-2 text-emerald-600">
          <DollarSign size={20} />
          <span className="font-semibold">{price}</span>
        </div>
        <p className="text-gray-600">{description}</p>
      </div>
    </div>
  );
}
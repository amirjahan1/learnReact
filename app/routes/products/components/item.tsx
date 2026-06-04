// create simple product page 

import {Link} from 'react-router'; // Replace with 'react-router-dom' or your framework's router if not using Next.js
import { useState } from 'react';

interface ProductItemProps {
  id?: string;
  name: string;
  price: number;
  imageUrl: string;
}

export default function ProductItem({ 
  id, 
  name, 
  price, 
  imageUrl, 
 
}: ProductItemProps) {
  const [isHovered, setIsHovered] = useState(false);


  return (
    <Link
      to={"/product/"+ id}
      className="group relative block w-full overflow-hidden rounded-2xl bg-neutral-900 border border-neutral-800 shadow-sm transition-all duration-500 ease-out hover:shadow-xl hover:shadow-indigo-500/10 hover:border-indigo-500/30 focus:outline-none focus-visible:ring-2 focus-visible:ring-indigo-500"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      aria-label={`View details for ${name}`}
    >
      {/* Image Container */}
      <div className="aspect-[4/3] w-full overflow-hidden bg-neutral-800">
        <img
          src={imageUrl}
          alt={name}
          className={`h-full w-full object-cover transition-transform duration-700 ease-out ${
            isHovered ? 'scale-110' : 'scale-100'
          }`}
          loading="lazy"
        />
        
        {/* Hover Overlay Gradient */}
        <div className={`absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent transition-opacity duration-500 ${
          isHovered ? 'opacity-100' : 'opacity-0'
        }`} />
      </div>

      {/* Content */}
      <div className="relative p-5">
        <h3 className="text-lg font-semibold text-neutral-100 transition-colors duration-300 group-hover:text-indigo-400 line-clamp-1">
          {name}
        </h3>
        
        <div className="mt-2 flex items-center justify-between">
          <span className="text-xl font-bold text-white tabular-nums">
            ${price.toLocaleString('en-US', { minimumFractionDigits: 2 })}
          </span>
          
          {/* Animated Arrow Indicator */}
          <span className={`flex h-8 w-8 items-center justify-center rounded-full bg-indigo-600 text-white transition-all duration-500 ${
            isHovered ? 'translate-x-0 opacity-100' : '-translate-x-4 opacity-0'
          }`}>
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
              <path d="M5 12h14"/>
              <path d="m12 5 7 7-7 7"/>
            </svg>
          </span>
        </div>
      </div>
    </Link>
  );
}

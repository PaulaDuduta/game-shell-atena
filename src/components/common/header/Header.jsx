import React from 'react';
import { GiAbstract037 } from 'react-icons/gi';
import { Link } from 'react-router-dom';

export const Header = () => {
  return (
    <div className="container mx-auto px-4 flex justify-between">
      <h1 className="uppercase font-bold text-lg inline-block">
        <Link
          to="/"
          title="Home"
          className="text-teal-900 flex gap-3 items-center"
        >
          <GiAbstract037 size={32} className="inline-block"></GiAbstract037>
          Game Shell
        </Link>
      </h1>

      <div>controls</div>
    </div>
  );
};

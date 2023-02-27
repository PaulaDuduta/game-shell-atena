import React from 'react';
import { Link } from 'react-router-dom';
import AuthorizedInline from '../../auth/AuthorizedInline';

export const Footer = () => {
  return (
    <div className="container mx-auto px-4 flex justify-between">
      <div>
        <h1>
          <Link to="/" title="Home">
            Game Shell
          </Link>
        </h1>
        <p className="text-xs">Crafted by Pixellab</p>
      </div>

      <ul>
        <AuthorizedInline>
          <li>
            <Link to="/profile" title="Go to profile">
              Profile
            </Link>
          </li>

          <li>
            <Link to="/play" title="Play now">
              Play
            </Link>
          </li>
        </AuthorizedInline>

        <li>
          <Link to="/ranks" title="See users">
            Ranks
          </Link>
        </li>
      </ul>
    </div>
  );
};

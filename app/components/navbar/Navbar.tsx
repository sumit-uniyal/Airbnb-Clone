'use client';

import React from 'react';
import Containers from '../Containers';
import Logo from './Logo';
import Search from './Search';
import UserMenu from './UserMenu';
import { User } from '@prisma/client';

interface NavbarProps {
  currentuser?: User | null;
}

const Navbar: React.FC<NavbarProps> = ({ currentuser }) => {
  return (
    <div className="fixed w-full bg-white z-10 shadow-sm">
      <div className="py-4 border-b-[1px]">
        <Containers>
          <div className="grid grid-cols-3 items-center">
            <div className="justify-self-start">
              <Logo />
            </div>

            <div className="justify-self-center">
              <Search />
            </div>

            <div className="justify-self-end">
              <UserMenu currentuser={currentuser} />
            </div>
          </div>
        </Containers>
      </div>
    </div>
  );
};

export default Navbar;

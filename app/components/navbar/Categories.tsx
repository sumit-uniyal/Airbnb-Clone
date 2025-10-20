import React from 'react';
import Containers from '../Containers';
import { TbBeach, TbMountain, TbPool } from 'react-icons/tb';
import {
  GiBoatFishing,
  GiCactus,
  GiCastle,
  GiForestCamp,
  GiIsland,
  GiWindmill,
} from 'react-icons/gi';
import { MdOutlineVilla } from 'react-icons/md';
import CategoryBox from './CategoryBox';
import { usePathname, useSearchParams } from 'next/navigation';
import { FaSkiing } from 'react-icons/fa';

export const categories = [
  {
    label: 'Beach',
    icon: TbBeach,
    description: 'This property is close to the beach',
  },
  {
    label: 'Windmills',
    icon: GiWindmill,
    description: 'This property has windmills',
  },
  {
    label: 'Modern',
    icon: MdOutlineVilla,
    description: 'This property is modern',
  },
  {
    label: 'Countryside',
    icon: TbMountain,
    description: 'This property is in the countryside',
  },
  {
    label: 'Pools',
    icon: TbPool,
    description: 'This property has a pool',
  },
  {
    label: 'Island',
    icon: GiIsland,
    description: 'This property is on an island',
  },
  {
    label: 'Lake',
    icon: GiBoatFishing,
    description: 'This property is close to a lake',
  },
  {
    label: 'Skiing',
    icon: FaSkiing,
    description: 'This property has Skiing Activities',
  },
  {
    label: 'Castles',
    icon: GiCastle,
    description: 'This property is modern',
  },
  {
    label: 'Modern',
    icon: MdOutlineVilla,
    description: 'This property is in a castle',
  },
  {
    label: 'Camping',
    icon: GiForestCamp,
    description: 'This property has camping activities',
  },
  {
    label: 'Desert',
    icon: GiCactus,
    description: 'This property is in desert',
  },
];

const Categories = () => {
  const params = useSearchParams();
  const category = params?.get('category');
  const pathname = usePathname();
  const isMainpage = pathname === '/';

  if (!isMainpage) {
    return null;
  }

  return (
    <Containers>
      <div className="pt-4 flex flex-row items-center justify-between overflow-x-auto">
        {categories.map((ele) => (
          <CategoryBox
            key={ele.label}
            label={ele.label}
            selected={category === ele.label}
            icon={ele.icon}
          />
        ))}
      </div>
    </Containers>
  );
};

export default Categories;

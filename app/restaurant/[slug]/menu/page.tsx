import React from 'react';
import Link from 'next/link';
import NavBar from '../../../components/NavBar';
import Header from '../../components/Header';
import RestaurantNavBar from '../../components/RestaurantNavBar';
import Menu from '../../components/Menu';

const RestaurantMenu = () => {
  return (
    <>
      {/* DESCRIPTION PORTION */}
      <div className="bg-white w-[100%] rounded p-3 shadow">
        <RestaurantNavBar />
        <Menu />
      </div>
      {/* DESCRIPTION PORTION */}
    </>
  );
};
export default RestaurantMenu;

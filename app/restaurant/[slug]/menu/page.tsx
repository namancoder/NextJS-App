import React from 'react';
import RestaurantNavBar from '../../components/RestaurantNavBar';
import Menu from '../../components/Menu';
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

const fetchRestaurantMenu = async (slug: string) => {
  const restaurant = await prisma.restaurant.findUnique({
    where: {
      slug,
    },
    select: {
      items: true,
    },
  });

  if (!restaurant) {
    throw new Error();
  }
  return restaurant;
};

const RestaurantMenu = async ({
  params,
}: {
  params: { slug: string };
}) => {
  const { items } = await fetchRestaurantMenu(params.slug);
  return (
    <>
      <div className="bg-white w-[100%] rounded p-3 shadow">
        <RestaurantNavBar slug={params.slug} />
        <Menu items={items} />
      </div>
    </>
  );
};
export default RestaurantMenu;

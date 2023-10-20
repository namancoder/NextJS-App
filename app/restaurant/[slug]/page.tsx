import React from 'react';

import RestaurantNavBar from '../components/RestaurantNavBar';
import Title from '../components/Title';
import Rating from '../components/Rating';
import Description from '../components/Description';
import Images from '../components/Images';
import Reviews from '../components/Reviews';
import ReservationCard from '../components/ReservationCard';
import { PrismaClient } from '@prisma/client';

interface Restaurant {
  name: string;
  id: number;
  description: string;
  images: string[];
  slug: string;
}

const prisma = new PrismaClient();
const fetchRestaurantbySlug = async (
  slug: string
): Promise<Restaurant> => {
  const restaurant = await prisma.restaurant.findUnique({
    where: {
      slug,
    },
    select: {
      name: true,
      id: true,
      description: true,
      images: true,
      slug: true,
    },
  });
  if (!restaurant) {
    throw new Error();
  }
  return restaurant;
};

const RestaurantDetails = async ({
  params,
}: {
  params: { slug: string };
}) => {
  const restaurant = await fetchRestaurantbySlug(params.slug);
  return (
    <>
      <div className="bg-white w-[70%] rounded p-3 shadow">
        <RestaurantNavBar slug={restaurant.slug} />
        <Title name={restaurant.name} />
        <Rating />
        <Description description={restaurant.description} />
        <Images images={restaurant.images} />
        <Reviews />
      </div>
      <ReservationCard />
      {/* DESCRIPTION PORTION */} {/* RESERVATION CARD PORTION */}{' '}
      {/* RESERVATION
          CARD PORTION */}
    </>
  );
};
export default RestaurantDetails;

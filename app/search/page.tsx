import React from 'react';
import SearchSideBar from './components/SearchSideBar';
import RestaurantCard from './components/RestaurantCar';
import Header from './components/Header';
import {
  Cuisine,
  PRICE,
  Location,
  PrismaClient,
} from '@prisma/client';
import SearchBar from '../components/SearchBar';
interface Restaurant {
  id: number;
  name: string;
  slug: string;
  cuisine: Cuisine;
  location: Location;
  price: PRICE;
}

const prisma = new PrismaClient();

const fetchRestaurantByFilters = async (
  city: string | undefined,
  cuisine: string | undefined,
  price: PRICE | undefined
): Promise<any> => {
  const select = {
    id: true,
    name: true,
    slug: true,
    cuisine: true,
    location: true,
    price: true,
    main_image: true,
  };
  if (!city && !cuisine && !price) {
    const allRestaurants = await prisma.restaurant.findMany({
      select,
    });
    return allRestaurants;
  }

  const filtersObject = {
    ...(city !== undefined && {
      location: {
        name: {
          equals: city,
        },
      },
    }),
    ...(price !== undefined && {
      price: {
        equals: price,
      },
    }),
    ...(cuisine !== undefined && {
      cuisine: {
        name: {
          equals: cuisine,
        },
      },
    }),
  };
  console.log('filters', filtersObject);
  const queryRestaurants = await prisma.restaurant.findMany({
    where: {
      ...filtersObject,
    },
    select,
  });
  return queryRestaurants;
};
const fetchLocations = async () => {
  return await prisma.location.findMany();
};

const fetchCuisines = async () => {
  return await prisma.cuisine.findMany();
};

const SearchPage = async ({
  searchParams,
}: {
  searchParams: { city?: string; cuisine?: string; price?: PRICE };
}) => {
  const restaurants = await fetchRestaurantByFilters(
    searchParams.city,
    searchParams.cuisine,
    searchParams.price
  );
  console.log('filters1', restaurants);
  const locations = await fetchLocations();
  const cuisines = await fetchCuisines();
  return (
    <>
      <div className="bg-gradient-to-r to-[#5f6984] from-[#0f1f47] p-2">
        <SearchBar cityParam={searchParams.city} />
      </div>
      <div className="flex py-4 m-auto w-2/3 items-start">
        <SearchSideBar
          locations={locations}
          cuisines={cuisines}
          searchParams={searchParams}
        />
        <div className="inline">
          {restaurants.length > 0 ? (
            restaurants.map((item: any) => {
              console.log('item', item);
              return <RestaurantCard key={item.id} item={item} />;
            })
          ) : (
            <span>No Restaurants Found</span>
          )}
        </div>
      </div>
    </>
  );
};
export default SearchPage;

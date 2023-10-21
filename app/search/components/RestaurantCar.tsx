import React from 'react';
import Link from 'next/link';

const RestaurantCard = ({ item }: { item: any }) => {
  return (
    <div className="">
      <div className="border-b flex pb-5">
        <Link href={`/restaurant/${item.slug}/`}>
          <img
            src={item.main_image}
            alt=""
            className="w-44 rounded"
          />
          <div className="pl-5">
            <h2 className="text-3xl">{item.name}</h2>
            <div className="flex items-start">
              <div className="flex mb-2">*****</div>
              <p className="ml-2 text-sm">Awesome</p>
            </div>
            <div className="mb-9">
              <div className="font-light flex text-reg">
                <p className="mr-4">$$$</p>
                <p className="mr-4">{item.cuisine.name}</p>
                <p className="mr-4">{item.location.name}</p>
              </div>
            </div>
            <div className="text-red-600">
              <Link href="">View more information</Link>
            </div>
          </div>
        </Link>
      </div>
    </div>
  );
};
export default RestaurantCard;

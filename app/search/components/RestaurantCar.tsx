import React from "react";
import Link from "next/link";
import Stars from "../../components/Stars";
import { calculateReviewRatingAverage } from "../../../utils/calculateReviewByRatingAverage";
import Price from "../../components/Price";

const RestaurantCard = ({ item }: { item: any }) => {
  const renderRatingText = () => {
    const rating = calculateReviewRatingAverage(item.reviews);

    if (rating > 4) return "Awesome";
    else if (rating <= 4 && rating > 3) return "Good";
    else if (rating <= 3 && rating > 0) return "Average";
    else "";
  };

  return (
    <div className=''>
      <div className='border-b flex pb-5'>
        <Link href={`/restaurant/${item.slug}/`}>
          <img src={item.main_image} alt='' className='w-44 rounded' />
          <div className='pl-5'>
            <h2 className='text-3xl'>{item.name}</h2>
            <div className='flex items-start'>
              <div className='flex mb-2'>
                <Stars reviews={item.reviews} />
              </div>
              <p className='ml-2 text-sm'>{renderRatingText()}</p>
            </div>
            <div className='mb-9'>
              <div className='font-light flex text-reg'>
                <Price price={item.price} />
                <p className='mr-4'>{item.cuisine.name}</p>
                <p className='mr-4'>{item.location.name}</p>
              </div>
            </div>
            <div className='text-red-600'>
              <Link href={`/restaurant/${item.slug}`}>
                View more information
              </Link>
            </div>
          </div>
        </Link>
      </div>
    </div>
  );
};
export default RestaurantCard;

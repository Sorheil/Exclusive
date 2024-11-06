import React from 'react';
import ImageProductCard from "./../../../assets/image/imageProductCard.png";
import StarRating from '../RatingStar';

type ProductCardProps = {
    name: string;
    price: number;
    oldPrice?: number;
    numberStar: number;
    numberOpinion: number;
};

export const ProductCard: React.FC<ProductCardProps> = ({ name, price, oldPrice, numberStar, numberOpinion }) => {
    return (
        <div className="flex flex-col gap-1 w-[270px] h-[350px]">
            {/* Container image */}
            <div className='relative w-[270px] h-[250px] flex justify-center items-center bg-gray-100 group'>
                <img src={ImageProductCard} alt="" className="w-[190px] h-[180px] object-contain" />

                {/* Hidden Add to Cart div */}
                <div className="w-full h-10 absolute bottom-0 flex justify-center items-center bg-black text-white opacity-0 translate-y-full group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300">
                    <p className='text-center'>Add To Cart</p>
                </div>
                {/* reduction item */}
                <p className='px-1 py-1 rounded bg-red-500 absolute top-3 left-3'>{oldPrice && <span className='text-white'>-{oldPrice}%</span>}</p>

                <div className='flex flex-col gap-2 justify-center items-center absolute top-3 right-3 '>
                    <button className='flex justify-center items-center bg-white rounded-full w-10 h-10 '><svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24"><path fill="currentColor" d="m12.1 18.55l-.1.1l-.11-.1C7.14 14.24 4 11.39 4 8.5C4 6.5 5.5 5 7.5 5c1.54 0 3.04 1 3.57 2.36h1.86C13.46 6 14.96 5 16.5 5c2 0 3.5 1.5 3.5 3.5c0 2.89-3.14 5.74-7.9 10.05M16.5 3c-1.74 0-3.41.81-4.5 2.08C10.91 3.81 9.24 3 7.5 3C4.42 3 2 5.41 2 8.5c0 3.77 3.4 6.86 8.55 11.53L12 21.35l1.45-1.32C18.6 15.36 22 12.27 22 8.5C22 5.41 19.58 3 16.5 3" /></svg></button>
                    <button className='flex justify-center items-center bg-white rounded-full w-10 h-10 '><svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24"><path fill="currentColor" d="M12 9a3 3 0 0 1 3 3a3 3 0 0 1-3 3a3 3 0 0 1-3-3a3 3 0 0 1 3-3m0-4.5c5 0 9.27 3.11 11 7.5c-1.73 4.39-6 7.5-11 7.5S2.73 16.39 1 12c1.73-4.39 6-7.5 11-7.5M3.18 12a9.821 9.821 0 0 0 17.64 0a9.821 9.821 0 0 0-17.64 0" /></svg></button>
                </div>
            </div>

            {/* Description */}
            <h2 className='font-bold'>{name}</h2>
            <p>
                <span className='mr-2 text-red-500'>${price}</span>
                {oldPrice && <span className='text-gray-400 line-through'>${oldPrice}</span>}
            </p>
            <p>{price}</p>
            <p className='flex items-center'>
                <StarRating rating={numberStar} />
                <span className="ml-2 text-gray-400">({numberOpinion})</span>
            </p>
        </div>
    );
};

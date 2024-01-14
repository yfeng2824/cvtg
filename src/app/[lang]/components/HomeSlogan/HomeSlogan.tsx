import { CommonProps } from '@/type';
import React from 'react';
import { getDictionary } from '../../../../../getDictionaries';
import Image from 'next/image';

const HomeSlogan: React.FC<CommonProps> = async(locale) => {
  const lang = await getDictionary(locale.locale);
  const data = lang.homeSlogan
  return (
    <div className="w-full bg-navy lg:h-[754px] flex justify-center items-center sm:text-center px-4 sm:py-20">
      <div className="w-full mx-auto max-w-[1120px] flex items-center justify-between sm:flex-col">
        <div className='flex flex-col lg:max-w-[583px] items-center'>
            <p className="font-bd-en text-brand text-body-bold">{data.headerTips}</p>
            <p className="font-bd-en text-white text-header1-desktop mt-4 sm:text-header1-mobile">{data.headerTips}</p>
            <p className='font-bd-en text-white07 text-subheader my-12'>{data.headerIntro} </p>
            <button className='lg:w-44 lg:h-14 bg-brand text-navy rounded-sm font-hd-en text-button sm:w-[343px] sm:h-[56px]'>{data.ContactUs}</button>
        </div>
        <div className='lg:w-[457px] lg:h-[434px] relative sm:w-[343px] sm:h-[318px] sm:mt-8'>
          <Image
            alt='home-slogan-svg'
            layout='fill'
            objectFit='contain'
            src='/svg/home-slogan.svg'
           />
        </div>
      </div>
    </div>
  );
};

export default HomeSlogan;
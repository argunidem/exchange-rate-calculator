import React from 'react';

import { BsCurrencyExchange } from 'react-icons/bs';

import Select from './Select';
import Input from './Input';
import Swap from './Swap';
import Rate from './Rate';

import { currencies } from '../data';

const Converter = () => {
  return (
    <div className='w-full h-full flex flex-col space-y-20 items-center justify-center'>
      <div className='flex flex-col space-y-12 items-center'>
        <BsCurrencyExchange className='text-8xl' />
        <h1 className='text-3xl sm:text-4xl px-3 font-bold text-center'>
          Exchange Rate Calculator
        </h1>
      </div>

      <div className='sm:w-80 w-60 flex flex-col space-y-16 items-center justify-center'>
        <div className='flex justify-between w-full space-x-12'>
          <Select currencies={currencies} selected='USD' />
          <Input />
        </div>

        <div className='flex justify-between w-full items-center'>
          <Swap />
          <Rate />
        </div>

        <div className='flex justify-between w-full'>
          <Select currencies={currencies} selected='EUR' />
          <Input />
        </div>
      </div>
    </div>
  );
};
export default Converter;

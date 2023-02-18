import React from 'react';
import { useSelector } from 'react-redux';

const Rate = () => {
  const converter = useSelector((state) => state.data);

  return (
    <p className='text-sm sm:text-base'>
      1 {converter.fromCurrency} = {converter.values.rate}{' '}
      {converter.toCurrency}
    </p>
  );
};

export default Rate;

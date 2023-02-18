import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchRates } from './actions/dataSlice';

import Converter from './converter/Converter';
import Swap from './Swap';
import Rate from './Rate';
import { BsCurrencyExchange } from 'react-icons/bs';

const Container = () => {
  const dispatch = useDispatch();
  const converter = useSelector((state) => state.data);

  useEffect(() => {
    if (converter.isLoading) {
      dispatch(fetchRates({ payload: converter.fromCurrency }));
    }
  }, [dispatch, converter.isLoading, converter.fromCurrency]);

  return (
    <div className='w-full h-full flex flex-col space-y-20 items-center justify-center'>
      <div className='flex flex-col space-y-12 items-center'>
        <BsCurrencyExchange className='text-8xl' />
        <h1 className='text-3xl sm:text-4xl px-3 font-bold text-center'>
          Exchange Rate Calculator
        </h1>
        {/* "time_last_update_utc" add last update time to ui */}
      </div>

      <div className='sm:w-80 w-60 flex flex-col space-y-16 items-center justify-center'>
        <Converter isFirst={true} />

        <div className='flex flex-col justify-center items-center space-y-10 sm:space-y-0 sm:flex-row sm:justify-between w-full sm:w-3/4 md:w-full'>
          <Swap />
          <Rate />
        </div>

        <Converter isFirst={false} />
      </div>
    </div>
  );
};
export default Container;

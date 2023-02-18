import React from 'react';
import { useDispatch } from 'react-redux';
import { swapCurrencies } from './actions/dataSlice';

const Swap = () => {
  const dispatch = useDispatch();

  return (
    <button
      className='ml-1 sm:self-start btn btn-outline text-slate-300 border-neutral-content hover:bg-slate-300'
      onClick={() => dispatch(swapCurrencies())}
    >
      Swap
    </button>
  );
};

export default Swap;

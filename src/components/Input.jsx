import React, { Fragment } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { setFirstValue, setSecondValue } from './actions/dataSlice';

const Input = ({ isFirst }) => {
  const dispatch = useDispatch();
  const converter = useSelector((state) => state.data.values);

  return (
    <Fragment>
      {isFirst ? (
        <input
          type='number'
          onChange={(e) => {
            dispatch(setFirstValue(e.target.value));
            dispatch(setSecondValue(e.target.value * converter.rate));
          }}
          value={converter.first}
          className='input input-bordered border-slate-400 bg-neutral w-28 focus:outline-none'
        />
      ) : (
        <input
          type='text'
          readOnly
          placeholder={converter.second}
          className='input input-bordered w-28 bg-neutral border-slate-400 cursor-default placeholder:text-white focus:outline-none'
        />
      )}
    </Fragment>
  );
};

export default Input;

import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { setFromCurrency, setToCurrency } from './actions/dataSlice';
import { scrollToCurrency } from '../scroll';
import { AiFillCaretDown } from 'react-icons/ai';

const Select = ({ isFirst }) => {
  const dispatch = useDispatch();
  const converter = useSelector((state) => state.data);
  const currencies = Object.keys(converter.rates).sort();
  const data = { currencies, isFirst, converter };
  return (
    <div className='dropdown dropdown-hover'>
      <label
        tabIndex={0}
        className='btn bg-slate-200 border-none text-neutral w-24 hover:bg-slate-700 hover:text-white'
        onMouseOver={(e) => scrollToCurrency(e, data)}
      >
        <span className='mr-2 pointer-events-none'>
          {isFirst ? converter.fromCurrency : converter.toCurrency}
        </span>

        <AiFillCaretDown className='pointer-events-none' />
      </label>
      <ul
        tabIndex={0}
        className='dropdown-content shadow rounded-btn w-24 h-36 overflow-y-auto py-1'
      >
        {currencies.length > 0 &&
          currencies.map((currency, index) => {
            return (
              <li
                onClick={
                  isFirst
                    ? (e) =>
                        dispatch(setFromCurrency(e.target.firstChild.innerText))
                    : (e) =>
                        dispatch(setToCurrency(e.target.firstChild.innerText))
                }
                className={`text-center py-1 hover:bg-slate-800 hover:text-white active:bg-white active:text-slate-800 ${
                  isFirst && converter.fromCurrency === currency
                    ? 'bg-slate-200 text-neutral'
                    : !isFirst && converter.toCurrency === currency
                    ? 'bg-slate-200 text-neutral'
                    : 'bg-slate-700'
                } 
                `}
                key={index}
              >
                <span className='pointer-events-none'>{currency}</span>
              </li>
            );
          })}
      </ul>
    </div>
  );
};

export default Select;

import React, { useRef } from 'react';
import { AiFillCaretDown } from 'react-icons/ai';

const Select = ({ currencies, selected }) => {
  const ref = useRef();

  const scrollToCurrency = (e) => {
    const ul = e.target.nextElementSibling;
    const selectedCurrency = ref.current.innerText;
    if (currencies !== undefined) {
      const currencyLi = Array.from(ul.children).find((element) => {
        return element.firstElementChild.innerText === selectedCurrency
          ? element.firstElementChild
          : '';
      });
      currencyLi.scrollIntoView({ behavior: 'smooth', block: 'center' });
    }
  };

  return (
    <div className='dropdown dropdown-hover'>
      <label
        tabIndex={0}
        className='btn bg-slate-200 border-none text-neutral w-24 hover:bg-slate-700 hover:text-white'
        onMouseOver={scrollToCurrency}
      >
        <span className='mr-2 pointer-events-none' ref={ref}>
          {selected}
        </span>

        <AiFillCaretDown className='pointer-events-none' />
      </label>
      <ul
        tabIndex={0}
        className='dropdown-content shadow rounded-btn w-24 h-36 overflow-y-auto py-1'
      >
        {currencies !== undefined &&
          currencies.map((currency, index) => {
            return (
              <li
                className={`active:bg-white hover:bg-slate-800 hover:text-white text-center py-1 ${
                  selected === currency
                    ? 'bg-slate-200 text-neutral'
                    : 'bg-slate-700'
                }`}
                key={index}
              >
                <span>{currency}</span>
              </li>
            );
          })}
      </ul>
    </div>
  );
};

export default Select;

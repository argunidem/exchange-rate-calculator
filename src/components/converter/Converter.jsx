import React from 'react';

import Select from '../Select';
import Input from '../Input';

const Converter = ({ isFirst }) => {
  return (
    <div className='flex justify-center space-x-2 sm:justify-between w-full sm:w-3/4 md:w-full'>
      <Select isFirst={isFirst} />
      <Input isFirst={isFirst} />
    </div>
  );
};

export default Converter;

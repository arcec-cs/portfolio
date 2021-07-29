import React from 'react';

const SubsectionHeader = ({content}) => { 
  return ( 
    <h3 className='f5 f4-ns tc mb0 mt0 w-100'>
      <span className='pb2 bb dib'>{content}</span>
    </h3> 
  );
}
export default SubsectionHeader;
import React from 'react';
import SubsectionHeader from './SubsectionHeader';

const EducationEntry = ({title, content, subContent, widthNS}) => { 
  return ( 
    <div className={`w-100 pa1-m center-ns mv3 mv0-ns ${widthNS}`}>
      <SubsectionHeader content={title}/>
      <span className='db paragraph-color-dark pt2'>{content}</span>
      {subContent && <span className='i dib mt1 paragraph-color-dark'>{subContent}</span>}
    </div>
  );
}
export default EducationEntry;
import React from 'react';

const SkillIcon = ({children, title, className}) => { 
  return(
    <> 
    <h4 className='tc mt3 mb2 dn-ns mh1 main-color-dark'>{`${title}:`}</h4>
    <section className={`flex flex-column-ns flex-wrap items-center w-33-l w-30-m br-ns ${className}`}>
      <h4 className='mt3 mb2 tc dn di-ns mh1 main-color-dark'>{`${title}:`}</h4>
      {children}
    </section>
    </>
  );
}
export default SkillIcon;
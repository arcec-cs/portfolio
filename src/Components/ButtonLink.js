import React from 'react';

const ButtonLink = ({label, host, path, svg, prependLabel, className}) => { 
  return(
    <a 
    className={`no-underline bg-animate bg-secondary-color hover-bg-highlight-color inline-flex items-center tc br2 pa2 ${className} `} 
    href={`https://${host}/${path}`} 
    title={label} 
    target='_blank' 
    rel='noreferrer'
    >
      <img src={svg} alt=''></img>
      <span className='f6 ml1 ml3-ns pr2-ns main-color-light'>
        {prependLabel && prependLabel}
        {label}
      </span>
    </a>
  );
}
export default ButtonLink;
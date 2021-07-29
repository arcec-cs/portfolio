import React from 'react';

const IconLink = ({id, title, svg, host, path}) => { 
  return ( 
    <a
    id={id}
    href={`https://${host}/${path}`} 
    title={`${title}`} 
    target='_blank' 
    rel='noreferrer' 
    className='paragraph-color-light link hover-highlight-color highlight-color dib mh3 tc outline-0'>
      <img src={svg} alt=''></img>
      <span className='f6 db paragraph-color-light '>{title}</span>
    </a>
  );
}
export default IconLink;
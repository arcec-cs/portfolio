import React from 'react';

const SkillIcon = ({svg, caption, borderTop}) => { 
  return( 
    <div className='center'>
      <figure className={`pv2 ph3 mh3 pa2-ns mh2-ns mh0-ns mv0 tc bb ${borderTop}`}>
        <img src={svg} alt='icon' className='pv2 skillIcon'></img>
        <figcaption className='tc paragraph-color-dark'>{caption}</figcaption>
      </figure>
    </div> 
  );
}
export default SkillIcon;
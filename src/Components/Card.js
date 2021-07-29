import React from 'react';

const Card = ({title, children, style}) => { 
  return( 
    <section 
    style={(style)? style: {}} 
    className='w-90 mw8 center br3 pa3 pa4-ns mt4 mb5 ba b--black-10 bg-main-color-light'>
      <h2 className='f3-ns f4 mb3 tl mt0 color-main-dark'>{title}</h2>
      {children}
    </section>
  );
}
export default Card;
import React from 'react';
import ButtonLink from './ButtonLink';
import github from '../assets/svg/github.svg'

const RepoCard = ({svg, title, body, list}) => { 
  const cardList = (list) && list.map(item =><li>{item}</li>)
  return ( 
    <article
    className='mw6 center br3 pa3 pa4-ns mv3 mt4-ns mb0-ns ba b--black-10 bg-main-color-dark main-color-light'
    >
      <div className ='flex justify-center'>
        <img src={svg} title={title} alt={title} className='h3 w3 dib self-center mr3'/>
        <ButtonLink label={'GitHub'} svg={github} host={'github.com'} path={`arcec-cs/${title}`} className='self-center'/>
      </div> 
      <h5 className='f4 mv3 tc'>{title}</h5>
      <hr style={{opacity: 0.9}} className='mw3 bb bw1 main-color-light'/>
      <p className='lh-copy measure-narrow center f5 paragraph-color-light'>
        {body}
      </p>
      {(list) && 
      <ul className ='measure-narrow paragraph-color-light lh-copy'>
        {cardList}  
      </ul>}
    </article>
  );
}
export default RepoCard;
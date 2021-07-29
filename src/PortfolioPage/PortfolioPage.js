import React from 'react';
import Card from '../Components/Card';
import RepoCard from '../Components/RepoCard';
import SkillIcon from '../Components/SkillIcon';
import SkillSection from '../Components/SkillSection';
import ButtonLink from '../Components/ButtonLink';
import IconLink from '../Components/IconLink';
import EducationEntry from '../Components/EducationEntry';
import SubsectionHeader from '../Components/SubsectionHeader';
import * as img from '../Assets/img.js'
import * as text from '../Assets/text.js';
import * as svg from '../Assets/svg.js';
import './PortfolioPage.css';

const PortfolioPage = () => { 
  return( 
    <div className='bg-main-color-dark pa4-ns pt4 pb4 pa3'>
      <header className='tc center pt0'>
        <h1 className='tc f1 main-color-light mb0 mt0'>{'I am Christian Arce'}</h1>
        <h4 className='secondary-color'>{'Full-Stack Web Developer'}</h4>
        <nav className='pv2 ph3 tc center'>
          <IconLink id={'iconLinkGitHub'} title='GitHub' svg={svg.github} host='github.com' path='arcec-cs'/>
          <IconLink id={'iconLinkLinkedIn'} title='LinkedIn' svg={svg.linkedin} host='linkedin.com' path='in/arcechristian'/> 
        </nav>
      </header>
      <Card title='About me'>
        <div className='flex flex-wrap flex-nowrap-l'>
          <img 
          src={img.me} 
          id='Me' 
          title="Its Me! :)"
          alt="Its Me! :)"
          className="border-box dib self-center center tl-l h-auto ba b--black-05 mt0 pa2 mr4-l " />
          <p className="f4-ns f5 lh-copy measure mt3 mt0-l mb0 center paragraph-color-dark tab">
            {text.aboutMe}</p>
        </div>
      </Card>
      <Card title='Education'>
        <div className= 'flex justify-between flex-wrap tc'>
          <EducationEntry title='School' content='Wentworth Institute of Technology' subContent='Boston, MA' widthNS='w-34-m w-30-l'/>
          <EducationEntry title='Degree' content='BS in Computer Science' subContent='Sep 2016 - Aug 2020' widthNS='w-34-m w-30-l'/>
          <EducationEntry title='GPA' content='3.39/4.00' widthNS='w-30-ns'/>
        </div>    
      </Card>
      <Card title='Skills'> 
        <div className='flex flex-row-ns flex-column justify-between flex-wrap mw8 center paragraph-color-dark'>
          <SkillSection title='Languages' className='bl-ns w-40-m'>
            <SkillIcon svg={svg.js} caption={'JavaScript'} borderTop={'bt-ns pt3-ns'}/>
            <span className='ba b--black-10 mt4 center dn db-ns pv1'>
              <h5 className ='tc mt0 main-color-dark ph2 tc mb3'>{'JS Fundamentals'}</h5>
              <ul className='ml1 pl0 paragraph-color-dark list mb0'>
                <li className='pv1 mh1'>{'ES6+'}</li>
                <li className='pv1 mh1'>{'Prototypical Inheritance'}</li>
                <li className='pv1 mh1'>{'Functional Programming'}</li>
                <li className='pv1 mh1'>{'Object Oriented Programming'}</li>
                <li className='pv1 mh1'>{'Asynchronous Programming'}</li>
                <li className='pv1 mh1'>{'JS Runtime Environment'}</li>
              </ul>
            </span>
          </SkillSection>
          <SkillSection title='Front-end'>
            <SkillIcon svg={svg.react} caption={'React'} borderTop={'bt-ns pt3-ns'}/>
            <SkillIcon svg={svg.html} caption={'HTML'}/>
            <SkillIcon svg={svg.css} caption={'CSS'}/>
            <div className='center'>
              <div className='pv2 ph3 mh3 pa2-ns mh0-ns bb'>
                <div style={{marginBottom: '.6875rem'}} className='mv2 mb3 h3 w3 flex bg-light-gray'>
                  <text className='sans-serif b f2 self-center center'>{'T'}</text>
                </div>
                <span>Tachyons</span>
              </div>
            </div>
          </SkillSection>
          <SkillSection title='Back-end'>
          <SkillIcon svg={svg.node} caption={'Node.js'} borderTop={'bt-ns pt3-ns'}/>
            <SkillIcon svg={svg.postgres} caption={'Postgres'}/>
            <SkillIcon svg={svg.express} caption={'Express'}/>
            <SkillIcon svg={svg.knex} caption={'Knex.js'}/>
          </SkillSection>
        </div>
      </Card>
      <Card title='Typetracer- single page typing application' style={{marginBottom: 0}}>   
        <figure>
          <img src={img.typetracer} alt='Typetracer Application' className='dn db-l ba b--black-10'/>
          <img src={img.typetracerMedium} alt='Typetracer Application' className='dn db-m ba b--black-10'/>
          <img src={img.typetracerMobile} alt='Typetracer Application' className='dn-ns b--black-10'/>
          <figcaption className='center tc self center i mt2'>{'Typing Pinocchio in Typetracer; Almost as good as 400 slices of toast :)'}</figcaption>
        </figure>
        <nav className='tc'>
          <ButtonLink 
          label='Typetracer' 
          host='typetracer.herokuapp.com'
          path='' 
          svg={svg.openBook} 
          prependLabel={<span className='dn di-ns'>{'To '}</span>}/>
          <ButtonLink 
          label='GitHub' 
          host='github.com' 
          path='arcec-cs/typetracer' 
          svg={svg.github} className={'ml3'}/> 
        </nav> 
        <section className='mv4 paragraph-color-dark center f5 f4-ns measure-wide lh-copy tab'>
          <SubsectionHeader content='About'/>
          <p className='mt3'>{text.description[0]}</p>
          <p className='mt3'>{text.description[1]}</p>
          <p className='mt3'>{text.description[2]}</p>
        </section>
        <section className='flex flex-wrap mt4 mb0'>
          <SubsectionHeader content='Repositories'/>
          <RepoCard svg={svg.browser} title='typetracer' body={text.ttRepoBody} list={text.ttRepoList} style={{marginTop: '2rem'}}/>
          <RepoCard svg={svg.server} title='typetracer-api' body={text.ttApiRepoBody} list={text.ttApiRepoList}/>
          <RepoCard svg={svg.database} title='typetracer-db-builder' body={text.ttDBRepoBody} list={text.ttDBRepoList}/>
        </section>  
      </Card>
    </div>
  );
}
export default PortfolioPage;
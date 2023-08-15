// import React from 'react'
import { Link } from 'react-router-dom'
import AboutMobile from '../components/AboutMobile'



const About = () => {
  return (
    <>
    <div className=' hidden sm:flex sm:-mt-4 h-150vh w-full bg-[#f5f5f5] mb-20 justify-center'>
      <div className='max-screen-lg mx-auto sm:flex flex-col justify-center w-auto  p-40 '>

        <div className= ' py-6  pl-20 bg-white'>
          <h2 className= ' text-[#056594] text-5xl font-bold'>About Ruqteq</h2>
        </div>
        <div className= ' mt-10 mb-28 text-[#067EB9]'>
          <p className= ''>
          Figma ipsum component variant main layer. Plugin strikethrough team scrolling asset 
          inspect ipsum list image frame. Variant bold opacity vector select asset follower link stroke. 
          Content style horizontal community bullet effect. List subtract draft selection inspect layout 
          frame bullet strikethrough. Outline community layer vector content. Invite pen image figma object 
          object pen thumbnail. Asset polygon rectangle connection layer content star layer. Background 
          list share community image vertical flows mask. Prototype team bold distribute opacity star 
          team strikethrough distribute plugin. Fill move overflow inspect edit inspect selection connection. 
          Union content ellipse device move.
          </p>
        </div>

        <di className= ' py-6  pl-16 bg-white'>
          <h2 className= ' text-[#056594] text-5xl font-bold'>Our Mission</h2>
        </di>


        <div className= ' mt-10 mb-28 text-[#067EB9]'>
          <p className= ''>
          Figma ipsum component variant main layer. Plugin strikethrough team scrolling asset 
          inspect ipsum list image frame. Variant bold opacity vector select asset follower link stroke. 
          Content style horizontal community bullet effect. List subtract draft selection inspect layout 
          frame bullet strikethrough. Outline community layer vector content. Invite pen image figma object 
          object pen thumbnail. Asset polygon rectangle connection layer content star layer. Background 
          list share community image vertical flows mask. Prototype team bold distribute opacity star 
          team strikethrough distribute plugin. Fill move overflow inspect edit inspect selection connection. 
          Union content ellipse device move.
          </p>
        </div>


        <div className= ' py-6  pl-16 bg-white'>
          <h2 className= 'text-[#056594] text-5xl font-bold'>Our Vision</h2>
        </div>


        <div className= ' mt-10 mb-28 text-[#067EB9]'>
          <p className= ''>
          Figma ipsum component variant main layer. Plugin strikethrough team scrolling asset 
          inspect ipsum list image frame. Variant bold opacity vector select asset follower link stroke. 
          Content style horizontal community bullet effect. List subtract draft selection inspect layout 
          frame bullet strikethrough. Outline community layer vector content. Invite pen image figma object 
          object pen thumbnail. Asset polygon rectangle connection layer content star layer. Background 
          list share community image vertical flows mask. Prototype team bold distribute opacity star 
          team strikethrough distribute plugin. Fill move overflow inspect edit inspect selection connection. 
          Union content ellipse device move.
          </p>
        </div>
      </div>
    </div>


      { /* mobile view of the about section*/}
    <div className='sm:hidden mt-24 h-full w-full mb-20 justify-center p-5 '>
      
      <AboutMobile />
    </div>



    
    </>
  )
}

export default About
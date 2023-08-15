// import React from 'react'
import { Link } from 'react-router-dom'
import Courseimg from '../assets/courses-img.svg'
import Courseimg1 from '../assets/courses-img1.svg'





const Courses = () => {
  return (
    <>
    <div className='flex sm:flex-row flex-col mt-6 smh-full w-full bg-[#f5f5f5] mb-20 justify-center'>
        <div className='max-screen-lg mx-auto sm:flex flex flex-col justify-center w-auto  '>

            <div className=' w-full h-full mx-auto p-10  bg-white flex justify-center '>
                <span className=' text-5xl text-[#067EB9] font-bold text-center'>Courses</span>
            </div>

            <div className=' flex sm:flex-row flex-col mx-auto justify-center w-auto h-auto sm:py-20 p-5 sm:px-40 sm:space-x-20 sm:space-y-0 space-y-10'>
                <div className='  w-full h-full flex flex-col p-10 bg-white shadow-lg rounded-xl'>
                    <img src={Courseimg1} alt='course-img' className='w-full sm:h-full  '/>

                    <div className=' py-7 justify-start text-start pr-10'>
                        <p className=' mb-7 text-xl font-bold '>Frontend Developement</p>
                        <span className=' -10 text-gray-600 text-base'>
                            Figma ipsum component variant main layer. Plugin strikethrough 
                            team scrolling asset inspect ipsum list image frame. Variant bold opacity
                            vector select asset follower link 
                         </span>

                         <div className='pt-10'>
                            <p className='text-sm text-gray-600'> #000,000 <span className='text-sm text-gray-600'>40% Off</span></p>

                            <div className='flex mx-auto  justify-between'>
                                <span className=' text-base'>#000,000</span>
                                <p className=''>6 Months</p>

                            </div>

                            <button className='px-16 py-1 border border-gray-400 rounded-lg  mt-10 shadow-lg '><Link to='/frontend-dev'>Enrol</Link></button>
                            
                         </div>
                        
                    </div>
                </div>

                <div className='  w-full h-full flex flex-col p-10 bg-white shadow-lg rounded-xl'>
                    <img src={Courseimg} alt='course-img' className='w-full h-full '/>

                    <div className=' py-7 justify-start text-start pr-10'>
                        <p className=' mb-7 text-xl font-bold '>Frontend Developement</p>
                        <span className=' -10 text-gray-600 text-base'>
                            Figma ipsum component variant main layer. Plugin strikethrough 
                            team scrolling asset inspect ipsum list image frame. Variant bold opacity
                            vector select asset follower link 
                         </span>

                         <div className='pt-10'>
                            <p className='text-sm text-gray-600'> #000,000 <span className='text-sm text-gray-600'>40% Off</span></p>

                            <div className='flex mx-auto  justify-between'>
                                <span className=' text-base'>#000,000</span>
                                <p className=''>6 Months</p>
                            </div>

                            <button className='px-16 py-1 border border-gray-400 rounded-lg  mt-10 shadow-lg '><Link to='/backend-dev'>Enrol</Link></button>
                            
                         </div>
                        
                    </div>
                </div>

            </div>
        </div>
    </div>

        


    
    </>
  )
}

export default Courses
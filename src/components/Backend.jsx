import { Link } from 'react-router-dom'
import BackendImg from '../assets/Backend.png'

const Backend = () => {
  return (
    <section className='bg-white02 md:px-20 px-8 py-8'>
       <div className='text-center bg-white01 mb-8'>
        <h2 className='text-blue04 md:text-5xl text-3xl font-[900] py-7'>Backend Development</h2>
       </div>
       <div className='bg-white01 px-4 py-5 border  border-white01 rounded-3xl'>
          <div className='item-center bg-blue03 border border-blue03 rounded-lg mb-3'>
            <img src={BackendImg} alt="" className='w-auto h-auto mx-auto' />
          </div>
          <div>
            <h5 className='text-grey11 md:text-[40px] text-3xl py-4'>Course Summary</h5>
            <p className='md:text-[24px] text-xl text-grey07 '>Figma ipsum component variant main layer. Plugin strikethrough team scrolling asset inspect ipsum list image frame. Variant bold opacity vector select asset follower link stroke. Content style horizontal community bullet effect. List subtract draft selection inspect layout frame bullet strikethrough. Outline community layer vector content. Invite pen image figma object object pen thumbnail. Variant bold opacity vector select asset follower link stroke. Content style horizontal community bullet effect. List subtract draft selection inspect layout frame bullet strikethrough. Outline community layer vector content. Invite pen image figma object object pen thumbnail. </p>
            <button className='bg-blue03 text-center text-grey11 items-center md:w-[640px] w-[300px] h-[56px] md:mx-[30%] rounded-lg my-6'><Link to='/enrol'>Enrol Now</Link></button>
          </div>
       </div>

       <div className='my-6 flex  md:flex-row flex-col gap-16 bg-white02 font-bold '>
        <div className='bg-white01 md:w-[60%] flex  md:px-14 px-10 py-4 border border-white01 rounded-3xl'>
          <div className='text-grey11 border-r-8 rounded-t rounded-b border-grey11 md:pr-16 pr-8'>
            <h4 className='md:text-[40px] text-3xl mb-1'>Price</h4>
            <p className='text-grey07 md:text-[24px] text-lg mb-2'> <del className='text-grey07'>#000,000</del> <span className='ml-2'>40% off</span></p>
            <p className='md:text-[32px] text-2xl'>#000,000</p>
          </div>
          <div className='md:pl-16 pl-8 '>
            <h5 className='md:text-[40px] text-3xl mb-1'>Payment Mode</h5>
            <p className='md:text-[32px] text-x2l text-grey09'>One Time Payment <br /> Installment </p>
          </div>
        </div>
    
        <div className='bg-white01 md:w-[40%]  flex  px-14 py-4 border border-white01 rounded-3xl'>
          <div className='text-grey11 border-r-8 rounded-t rounded-b border-grey11 md:pr-8'>
            <h4 className='md:text-[40px] text-3xl mb-1'>Duration</h4>
            <p className='md:text-[32px] text-2xl'>6 Months</p>
          </div>
          <div className='md:pl-16 pl-8 '>
            <p className='text-[24px] text-grey09'>Next Cohort <br /> starts on <br /> September <br /> 2023</p>
          </div>
        </div>
        </div>

        <div className='bg-white01 border-white01 rounded-3xl px-4 py-5 font-bold '>
          <h3 className='text-[40px] text-white01 bg-blue04 text-center'>Requirement & Prerequisite</h3>
          <ul className='md:ml-[36%] my-8 text-[32px] text-grey09 text-justify items-center list-disc list-inside'>
            <li className=''>No coding experience required </li>
            <li className=''>Laptop (minimum of 4 Ram )</li>
            <li className=''>Access to internet</li>
          </ul>
          <h4 className='text-[40px] text-white01 bg-blue04 text-center my-5'>Classes Delivery Mode</h4>
          <p className='text-[32px] mb-6 text-grey09 text-center'>100% online</p>
        </div>

        <div className='bg-white01 border-white01 rounded-3xl px-4 py-5 font-bold mt-6 '>
        <h3 className='text-[40px] text-white01 bg-blue04 text-center'>Course Content</h3>
        <ul className='my-8 mx-auto'>
          <li className='flex flex-col text-grey09 text-[32px] mx-[23%] mb-4'>HTML <span className='text-grey07 text-[24px]'>HTMl 5; html skeleton, list, pictures, table, html form, html elements, attributes</span></li>
          <li className='flex flex-col text-grey09 text-[32px] mx-[23%] mb-4'>HTML <span className='text-grey07 text-[24px]'>HTMl 5; html skeleton, list, pictures, table, html form, html elements, attributes</span></li>
          <li className='flex flex-col text-grey09 text-[32px] mx-[23%] mb-4'>HTML <span className='text-grey07 text-[24px]'>HTMl 5; html skeleton, list, pictures, table, html form, html elements, attributes</span></li>
          <li className='flex flex-col text-grey09 text-[32px] mx-[23%] mb-4'>HTML <span className='text-grey07 text-[24px]'>HTMl 5; html skeleton, list, pictures, table, html form, html elements, attributes</span></li>
          <li className='flex flex-col text-grey09 text-[32px] mx-[23%] mb-4'>HTML <span className='text-grey07 text-[24px]'>HTMl 5; html skeleton, list, pictures, table, html form, html elements, attributes</span></li>
          <li className='flex flex-col text-grey09 text-[32px] mx-[23%] mb-4'>HTML <span className='text-grey07 text-[24px]'>HTMl 5; html skeleton, list, pictures, table, html form, html elements, attributes</span></li>
        </ul>
        </div>
    </section>
  )
}

export default Backend
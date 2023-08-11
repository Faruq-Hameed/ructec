import Logoblue from '../assets/logoblue.svg';
import Logowhite from '../assets/logowhite.svg';


const Patners = () => {
  return (
    <section className='items-center  flex justify-center flex-col bg-white01'>
        <h2 className=" text-blue05 text-[40px] font-normal text-center py-3">Our Partners</h2>
        <div className=" w-full  bg-grey01 px-[10%] py-8 grid md:grid-cols-5 grid-cols-2 md:grid-rows-2 grid-rows-5 md:gap-8 gap-10  ">
            <img src={Logoblue} alt="" />
            <img src={Logoblue} alt="" />
            <img src={Logoblue} alt="" />
            <img src={Logoblue} alt="" />
            <img src={Logoblue} alt="" />
            <img src={Logowhite} alt="" />
            <img src={Logowhite} alt="" />
            <img src={Logowhite} alt="" />
            <img src={Logowhite} alt="" />
            <img src={Logowhite} alt="" />
        </div>
         <div className=' w-full  py-10 items-center  px-16'>
           <p className='text-blue05 text-[24px] md:w-[996px] mx-[7%]'>Subscribe to our Newsletters to stay tuned for new courses <br /> and latest updates. Let’s do it!</p>
           <div className='items-center  mx-[7%]'>
            <input type="text"placeholder='Enter your email address to subscribe' className='p-3 border rounded-l-lg lg:w-1/3 w-4/6 md:mt-3 mt-4' />
            <button className='bg-blue03 text-grey10 border rounded-r-lg p-3'>Subscribe</button>
           </div>
         </div>
    </section>
  )
}

export default Patners
import { Link } from 'react-router-dom';
import Fb from '../assets/fb2.svg';
import In from '../assets/in.svg';
import Ig from '../assets/ig.svg';
import Tt from '../assets/tt.svg';
import Phone from '../assets/phone.svg';
import Mail from '../assets/mail.svg';



const Contact = () => {
  return (
<section className="bg-white01 my-[10%] md:mx-[8%] mx-8 border rounded-xl  items-center md:W-[80%] h-[322px]">
     <h2 className="mx-[5%]  text-blue05 md:text-5xl text-[32px] my-12 ">Contact Us ?</h2>
     <div className=" md:flex md:gap-14 grid grid-cols-3 gap-x-0 gap-y-6 grid-rows-2 md:px-20 px-8  ">
      <Link to="" className=''>  <img src={Fb} alt="" />  </Link>
      <Link to="">   <img src={In} alt="" />  </Link>
      <Link to="">   <img src={Ig} alt="" />  </Link>
      <Link to="">   <img src={Tt} alt="" />  </Link>
      <Link to="">   <img src={Phone} alt=""/>  </Link>
      <Link to="">    <img src={Mail} alt="" />  </Link>
     </div>
    </section>  )
}

export default Contact
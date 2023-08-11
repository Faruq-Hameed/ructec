import Logo from '../assets/fLogo.svg';
import Fbk from '../assets/facebookLogo.svg';
import Lin from '../assets/linkedinLogo.svg';
import Inst from '../assets/instagramLogo.svg';
import Twt from '../assets/twitterLogo.svg';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <section className='md:px-16 px-8 pt-8 pb-24 bg-blue03 text-white01 md:flex flex md:flex-row flex-col md:justify-between items-center'>
        <div >
            <img src={Logo} alt="" />
        </div>
        <div className='md:my-0 my-6'>
            <ul  className='md:my-0 m-6 md:flex flex md:flex-row flex-col gap-x-8  items-center  text-white01 text-[16px]'>
               <Link to='/courses'>
               <li className=''>
                    <select name="" id="" className='bg-inherit pr-1'>
                        <option value="">Courses</option>
                    </select>
                </li>
               </Link>
               <Link to='/about'>
               <li className=' hover:text-blue06'>
                  About
                </li>
               </Link>
                <Link to='/contact'>
                <li className=' hover:text-blue06'>
                    Contact
                    </li>
                </Link>
                <Link to='/faqs'>
                <li className=' hover:text-blue06'>
                    FAQs
                    </li>
                </Link>
               
            </ul>
        </div>
        <div>
            <p className=' md:text-start text-center'>Reach Us</p>
            <ul className='grid md:grid-cols-4 grid-cols-2 md:grid-rows-1 grid-rows-2 gap-8 mt-4'>
             <Link to=''>
                 <li><img src={Fbk} alt="" /></li>
             </Link>
             <Link to=''>
             <li><img src={Lin} alt="" /></li>
             </Link>
             <Link to=''>
             <li><img src={Inst} alt="" /></li>
             </Link>
              <Link to=''>
              <li><img src={Twt} alt="" /></li>
              </Link>
            </ul>
        </div>
    </section>
  )
}

export default Footer
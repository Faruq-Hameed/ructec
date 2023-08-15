import { useState } from 'react'; 
import { Link , useLocation} from 'react-router-dom';
import Logo from '../assets/ruqtec.svg';

const Navbar = () => {
  const [open, setOpen] = useState(false);
 const location = useLocation()

  return (
    <section className='h-[88px] flex justify-between bg-white01 md:px-20 px-8  py-6'>
        <div className='flex justify-between items-center'>
            <img src={Logo} alt="" className=' w-[150px] h-[48px] object-cover' />
            <div  onClick={() => setOpen(!open)}className='text-blue03 text-4xl cursor-pointer md:hidden absolute right-8 top-6 text-center'>
             <ion-icon name={open ? "close" : "menu"} ></ion-icon>
      </div>
        </div>
        <div>
            <ul  className= {`md:flex md:gap-8 gap-12 md:mt-3 mt-0 px-4  md:text-center items-center text-blue04 md:z-auto z-50 md:static absolute w-full left-0 md:w-auto 
                 md:pb-0 pb-12 md:pl-0 pl-[40%]   md:opacity-100 md:bg-white bg-white   transition-all ease-in duration-500 ${open ? 'top-20' : 'top-[-490px]'} `}>
            <Link to='/' className=''>
                <li className=' hover:text-blue06 md:py-0 py-5'>
                  Home
                </li>
            </Link>
               <Link to='/courses'>
               <li className=' hover:text-blue06 md:pb-0 pb-5'>
                    <select name="" id="" className='bg-inherit pr-1 outline-none'>
                        <option value="/courses">Courses</option>
                        <option value="/backend-dev"><Link to='/backend-dev'>Backend</Link></option>
                        <option value="/frontend-dev"><Link to='/frontend-dev'>Frontend</Link></option>


                    </select>
                </li>
               </Link>
                <Link to='/about'>
                <li className=' hover:text-blue06 md:pb-0 pb-5'>
                  About
                </li>
                </Link>
               <Link to='/contact'>
               <li className=' hover:text-blue06 md:pb-0 pb-5'>
                  Contact
                </li>
               </Link>
        {
        location.pathname ==='/' ? <Link to='/signingg'>
        <button className= '  md:hidden block bg-blue03 text-grey10 text-center border rounded-lg w-[124px] h-[40px] hover:bg-blue06 hover:text-white01'>Sign in <span><select name="" id="" className='bg-inherit  '></select></span></button>
    </Link> : ''
       }
            </ul>
        </div>
       {
        location.pathname ==='/' ? <Link to='/signing'>
        <button className= ' md:block hidden bg-blue03 text-grey10 text-center border rounded-lg w-[124px] h-[40px] hover:bg-blue06 hover:text-white01'>Sign in <span><select name="" id="" className='bg-inherit  '></select></span></button>
    </Link> : ''
       }
        
    </section>
  )
}

export default Navbar
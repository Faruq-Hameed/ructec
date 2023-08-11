
import  { useState } from 'react';
// import Plus from '../assets/down-arrow-white.svg'

const ModalItem = ({ title, desc, num, isFirst  }) => {
  const [showModal, setShowModal] = useState(isFirst);

  const handleClick = () => {
    setShowModal(true);
  };

  const handleClose = (event) => {
    event.stopPropagation();
    setShowModal(false)
  }
 

  return (
    <>

    <div 
      className=" flex flex-col mx-auto md:mt-10 h-full w-full bg-white mb-20 justify-center shadow-lg" 
      onClick={handleClick}>
        <div className='max-screen-lg sm:mx-auto sm:flex flex-col  w-auto '>
          <div className='flex flex-wrap mx-auto sm:space-x-96 space-x-12 justify-center w-auto p-4  rounded items-center group'>

            <div className=' flex sm:space-x-14 space-x-6 justify-center'>
              <h1 className='text-[#056594] sm:text-4xl text-3xl font-bold'> {num}</h1>
              <h2 className=' sm:text-4xl text-xl font-extrabold text-[#067EB9]'>{title}</h2>
            </div>
          
            <div className=''>
              {
              showModal ?
                <div className='group-hover:rotate-18 flex items-center duration-300 w-8 h-8 rounded-full bg-[#056594]'>
                    <span className=' text-lg flex mx-auto text-center text-white'> x</span>
                </div> : 
                <div className='group-hover:rotate-18 flex items-center duration-300 w-8 h-8 rounded-full bg-[#056594]'>
                    <span className=' text-lg flex mx-auto text-center text-white'> +</span>
                </div>
              }
            </div>
            


          </div>
        </div>
    
      {showModal && (
        <div>
          <div className=" w-full h-full flex justify-center text-lg bg-[white] text-[#067EB9] font-medium mt-6 sm:px-60 p-5" onClick={handleClose}>
            <p>{desc}</p>
          </div>
        </div>
      )}
    </div>
    </>
  );
};

const Faqs = () => {
  return (
    <div className="container flex flex-col mx-auto justify-center">

    <div className= ' p-6   sm:bg-white bg-[#f9f9f9] sm:shadow-md'>
        <h2 className= ' text-[#056594] sm:text-5xl text-3xl font-bold text-center'>Frequently Asked Questions</h2>
    </div>
      <ModalItem
        num = '01'
        title="Why Ruqteq?"
        desc="Figma ipsum component variant main layer. Plugin strikethrough team scrolling asset 
          inspect ipsum list image frame. Variant bold opacity vector select asset follower link stroke. 
          Content style horizontal community bullet effect. List subtract draft selection inspect layout 
          frame bullet strikethrough. Outline community layer vector content. Invite pen image figma object 
          object pen thumbnail."
          isFirst={true}
      />
      <ModalItem
        num = '02'
        title="Why Ruqteq?"
        desc="Figma ipsum component variant main layer. Plugin strikethrough team scrolling asset 
          inspect ipsum list image frame. Variant bold opacity vector select asset follower link stroke. 
          Content style horizontal community bullet effect. List subtract draft selection inspect layout 
          frame bullet strikethrough. Outline community layer vector content. Invite pen image figma object 
          object pen thumbnail. "
        
      />
      <ModalItem
        num = '03'
        title="Why Ruqteq?"
        desc="Figma ipsum component variant main layer. Plugin strikethrough team scrolling asset 
          inspect ipsum list image frame. Variant bold opacity vector select asset follower link stroke. 
          Content style horizontal community bullet effect. List subtract draft selection inspect layout 
          frame bullet strikethrough. Outline community layer vector content. Invite pen image figma object 
          object pen thumbnail. "
        
      />
    </div>
    
  );
};

export default Faqs;

import React from 'react'

const Enrol = () => {
  return (
    <section className='md:px-20 px-8 py-6'>
        <div className='mb-6'>
        <h2 className='text-blue04 md:text-5xl text-3xl font-[900] py-7 text-center bg-white01'>Enrol for a Course</h2>
        </div>
        <div className='bg-blue02 border border-blue02 rounded-3xl items-cemter p-8 my-14'>
            <form action="" className='items-center md:mx-[30%] mx-[5%] '>
               <label htmlFor="name" className='text-white02'>Name</label> <br />
               <input type="text" placeholder='Name' className='md:w-[633px] w-full h-[35px] bg-white01 mb-3 border rounded outline-none p-4' /> <br />
               <label htmlFor="email" className='text-white02'>Email</label> <br />
               <input type="email" placeholder='Name' className='md:w-[633px] w-full  h-[35px] bg-white01 mb-3 border rounded outline-none p-4' /> <br />
               <label htmlFor="Phone number" className='text-white02'>Phone Number</label> <br />
               <input type="text" placeholder='Name' className='md:w-[633px] w-full  h-[35px] bg-white01 mb-3 border rounded outline-none p-4' /> <br />
               <label htmlFor="address" className='text-white02'>Address</label> <br />
               <input type="text" placeholder='Address' className='md:w-[633px] w-full  h-[35px] bg-white01 mb-3 border rounded outline-none p-4' /> <br />
               <label htmlFor="" className='text-white02'>Preferred Course</label> <br />
               <select name="" id=" "  className='md:w-[633px] w-full  h-[35px] bg-white01 mb-3 border rounded outline-none p-4'>
                 <option value="" >Select an Option</option>
                 <option value="">Frontend Development</option>
                 <option value="">Backend Development</option>
               </select> <br />
               <label htmlFor="" className='text-white02'>Why do you want to study this course ?</label><br />
               <textarea name="" id=""  placeholder='Write something...'  className='md:w-[633px] w-full  h-[112px] bg-white01 mb-5 border rounded outline-none p-4'></textarea> <br />
               <button className='md:w-[633px] w-full  h-[48px] bg-blue03 text-grey10 text-center border border-blue03 rounded outline-none '>Submit form</button>
            </form>
        </div>
    </section>
  )
}

export default Enrol
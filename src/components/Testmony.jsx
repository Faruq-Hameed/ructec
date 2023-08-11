import ImageT1 from '../assets/imageT1.png';
import ImageT2 from '../assets/imageT2.png';
import ImageT from '../assets/imageT.png';
import ImageT4 from '../assets/imageT4.png';


const Testmony = () => {
  return (
    <section className=''>
        <div>
            <h2 className="bg-white01 text-blue05 text-[40px] font-normal text-center py-3">What People say about Ruqtec</h2>
            <div className="bg-white02 pt-20 pb-6 md:px-16 px-8 md:flex  flex md:flex-row flex-col items-center justify-between  ">
                <div className='relative md:mb-0 mb-14'>
                    <img src={ImageT1} alt="" className='absolute -top-10 left-20 w-[100px] h-[100px]' />
                   <div className='bg-white01 border rounded-lg w-[270px] h-[400px] text-center p-4'>
                   <p className='mt-24'>“ Figma ipsum component variant main layer. Horizontal stroke edit effect flows horizontal asset component shadow create. Shadow background share object text stroke shadow style community. ”</p>
                    <h5 className='mt-6 mb-1'>Faruk Hameed</h5>
                    <small>BackEnd Developer</small>
                   </div>
                </div>
                <div className='relative md:mb-0 mb-14'>
                    <img src={ImageT2} alt="" className='absolute -top-10 left-20 w-[100px] h-[100px]' />
                   <div className='bg-white01 border rounded-lg w-[270px] h-[400px] text-center p-4'>
                   <p className='mt-24'>“ Figma ipsum component variant main layer. Horizontal stroke edit effect flows horizontal asset component shadow create. Shadow background share object text stroke shadow style community. ”</p>
                    <h5 className='mt-6 mb-1'>Faruk Hameed</h5>
                    <small>BackEnd Developer</small>
                   </div>
                </div>
                <div className='relative md:mb-0 mb-14'>
                    <img src={ImageT} alt="" className='absolute -top-10 left-24 w-[100px] h-[100px]' />
                   <div className='bg-white01 border rounded-lg w-[270px] h-[400px] text-center p-4'>
                   <p className='mt-24'>“ Figma ipsum component variant main layer. Horizontal stroke edit effect flows horizontal asset component shadow create. Shadow background share object text stroke shadow style community. ”</p>
                    <h5 className='mt-6 mb-1'>Faruk Hameed</h5>
                    <small>BackEnd Developer</small>
                   </div>
                </div>
                <div className='relative md:mb-0 mb-14'>
                    <img src={ImageT4} alt="" className='absolute -top-10 left-20 w-[100px] h-[100px]' />
                   <div className='bg-white01 border rounded-lg w-[270px] h-[400px] text-center p-4'>
                   <p className='mt-20'>“ Figma ipsum component variant main layer. Horizontal stroke edit effect flows horizontal asset component shadow create. Shadow background share object text stroke shadow style community. ”</p>
                    <h5 className='mt-10 mb-1'>Faruk Hameed</h5>
                    <small>BackEnd Developer</small>
                   </div>
                </div>
            </div>
        </div>
    </section>
  )
}

export default Testmony
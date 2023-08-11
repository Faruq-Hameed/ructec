import HeroImage from '../assets/heroImage.png';

const Hero = () => {
  return (
    <section className='md:px-16 px-8 py-6 md:flex  flex md:flex-row flex-col justify-between bg-white02 pt-14'>
        <div className=''>
            <h1 className='text-blue03 text-5xl font-[900]'>Kick Start <br /> your Tech Career <br /> in Software Development</h1>
            <p className='text-grey10 font-normal mt-4 leading-[19px] md:w-[548px]'>Figma ipsum component variant main layer. Ipsum variant move object strikethrough scrolling inspect scale follower. Main outline rotate main line line effect underline polygon boolean. Blur asset stroke stroke follower object font list. Strikethrough select project horizontal scrolling plugin rectangle create figjam edit. Select subtract line edit bold layer italic main.</p>
            <button className='bg-blue03 text-center text-grey10 w-[190px] h-[48px] border rounded-lg mt-5'>Get Started Now</button>
        </div>
        <div className='md:mt-0 mt-8'>
            <img src={HeroImage} alt=""  className='md:w-auto w-full mb-16'/>
        </div>
    </section>
  )
}

export default Hero
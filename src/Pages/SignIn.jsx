
const SignIn = () => {
  return (
    <section className=" h-full my-[8%] bg-white02">
     <h2 className="text-start text-blue05 text-[32px] mb-6 ml-[32%]">Sign In</h2>
     <form action="" className="md:w-[761px] w-full h-[456px] bg-gradient-to-r from-[#056594] to-[#0797DE] border rounded-xl md:p-12 p-6 md:items-center items-start mx-auto">
        <label htmlFor="username" className="text-white01">Username</label><br />
        <input type="text"  className="w-full mb-12 h-[35px] outline-none rounded p-3"/><br />
        <label htmlFor="username" className="text-white01">Password</label><br />
        <input type="text"  className="w-full h-[35px] outline-none rounded p-3"/><br />
        <button  className="w-full mt-14 border text-grey10 bg-blue03 border-blue03 rounded h-[35px]">Sign in</button>
     </form>
    </section>
  )
}

export default SignIn
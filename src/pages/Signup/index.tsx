import Header from "../../components/Header"

const Signup: React.FC = () => {
    return (
        <>
            <Header />
            {/* <main>
                <div className="pt-14 pb-20 pe-16 flex gap-28">
                    
                    <div className="w-[671px] h-[650px] ">
                        <img src={signup} alt="panier + produit" className="object-contain object-center" />
                    </div>
                    
                    <div className="w-[371px] self-center" >
                        <form action="" className="w-full" >
                            <h2 className="text-3xl pb-2">Create an account</h2>
                            <h3 className="text-base pb-8">Enter your details below</h3>
                            <div className="pb-10 ">
                                <label htmlFor="username" className="sr-only">username</label>
                                <input type="text" className=" outline-none w-full border-b-2" placeholder="username" />
                            </div>
                            <div className="pb-10 ">
                                <label htmlFor="email" className="sr-only">Email</label>
                                <input type="email" className=" outline-none w-full border-b-2" placeholder="Email" />
                            </div>
                            <div className="pb-10 border-b-2">
                                <label htmlFor="password" className="sr-only">password</label>
                                <input type="password" className=" outline-none w-full border-b-2" placeholder="password" />
                            </div>
                            <button className="bg-[#DB4444] w-full py-4 mb-4 text-white ">Create Account</button>
                            <button className="w-full py-4 border-2 rounded flex  justify-center items-center gap-5"><i className="fa-brands fa-google text-2xl "></i>Sign up with Google </button>
                        </form>
                        <p className="text-center mt-6">Already have account? <Link to="/signin" className="underline">Log in</Link></p>
                    </div>
                </div>
            </main> */}
            {/* <Footer /> */}
        </>
    )
}
export default Signup
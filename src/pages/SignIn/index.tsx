import Header from "../../components/Header"
import Footer from "@/components/Footer"
import signup from './../../assets/image/signup.png'
import { Link } from "react-router-dom"
const Signin: React.FC = () => {
    return (
        <>
            <Header />
            <main>
                <div className=" flex gap-28 pt-14 pb-20 pe-16">
                    {/* left side */}
                    <div className=" hidden sm:block sm:w-[671px] sm:h-[650px] ">
                        <img src={signup} alt="panier + produit" className="object-contain object-center" />
                    </div>
                    {/* right side */}
                    <div className="w-[371px] self-center" >
                        <form action="" className="w-full" >
                            <h2 className="text-3xl pb-2">Log in to Exclusive</h2>
                            <h3 className="text-base pb-8">Enter your details below</h3>

                            <div className="pb-10 ">
                                <label htmlFor="email" className="sr-only ">Email</label>
                                <input type="email" className=" outline-none w-full border-b-2" placeholder="Email" />
                            </div>

                            <div className="pb-10 ">
                                <label htmlFor="password" className="sr-only p">password</label>
                                <input type="password" className=" outline-none w-full  border-b-2" placeholder="password" />
                            </div>

                            <div className="flex justify-between  items-center ">
                                <button className="bg-red-500 py-3 px-8 rounded  text-white ">Log In</button>
                                <Link to="#" className="text-red-500"> Forget Password?</Link>
                            </div>
                        </form>
                    </div>
                </div>
            </main>
            <Footer />
        </>
    )
}
export default Signin
import './../../assets/global.css'

const Footer: React.FC = () => {
    const currentYear = new Date().getFullYear();

    return (
        <footer className='bg-black  text-white'>
            <ul className='flex flex-wrap justify-between p-20' >
                <li className='w-[217px]'>
                    <h2 className='text-2xl pb-4'>Exclusive</h2>
                    <p className='text-xl pb-3'>subscribe</p>
                    <p className='text-base pb-2'>Get 10% off your first order</p>
                    <form action="#" className='relative'>
                        <label htmlFor="email" className='hidden'>email</label>
                        <input type="email" name="email" id="email" placeholder='Enter your email' className=' py-2 px-2 bg-transparent ring-1 ring-white rounded-sm w-full' />
                        <button className='right-2 top-1/2 transform -translate-y-1/2 absolute'><i className="fa-regular fa-paper-plane" ></i> </button>
                    </form>
                </li>
                <li>
                    <h2 className='text-2xl pb-4'>Support</h2>
                    <p className='pb-2'>111 Bijoy sarani, Dhaka,<br></br>DH 1515, Bangladesh.</p>
                    <p className='pb-2'>exclusive@gmail.com</p>
                    <p className='pb-2'>+88015-88888-9999</p>
                </li>

                <li className='flex flex-col'>
                    <h2 className='text-2xl pb-4'>Account</h2>
                    <a href="#" className='pb-2'>My Account</a>
                    <a href="#" className='pb-2'>Login / Register</a>
                    <a href="#" className='pb-2'>Cart</a>
                    <a href="#" className='pb-2'>Wishlist</a>
                    <a href="#" className='pb-2'>Shop</a>
                </li>

                <li className='flex flex-col'>
                    <h2 className='text-2xl pb-4'>Quick Links</h2>
                    <a href="#" className='pb-2'>Privacy Policy</a>
                    <a href="#" className='pb-2'>Terms Of Use</a>
                    <a href="#" className='pb-2'>FAQ</a>
                    <a href="#" className='pb-2'>Contact</a>
                </li>

                <li>
                    <h2 className='text-2xl pb-4'>Follow Us</h2>
                    <ul className='flex gap-5 text-2xl'>
                        <li><a href="#"><i className="fa-brands fa-facebook"></i></a></li>
                        <li><a href="#"><i className="fa-brands fa-twitter"></i></a></li>
                        <li><a href="#"><i className="fa-brands fa-instagram"></i></a></li>
                        <li><a href="#"><i className="fa-brands fa-linkedin"></i></a></li>
                    </ul>
                </li>
            </ul>
            <p className='text-center p-5 border-t-2 border-gray-900 '>&copy; {currentYear} Rimel. All rights reserved.</p>
        </footer>
    );
}

export default Footer;

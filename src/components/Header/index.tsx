import './../../assets/global.css';
import { useState } from 'react';
import Nav from '../Nav';
import Icon from '../ui/icone';
import { Link } from 'react-router-dom';

const Header: React.FC = () => {
    // Définir l'état pour gérer la visibilité de la navbar
    const [isNavOpen, setIsNavOpen] = useState(false);

    // Fonction pour basculer la visibilité de la navbar
    const toggleNavBar = () => {
        setIsNavOpen(!isNavOpen);
    };

    return (
        <header>
            <div className="bg-black py-2 relative">
                <p className='text-white text-center text-[7px] sm:text-sm'>
                    Summer Sale For All Swim Suits And Free Express Delivery - OFF 50%!
                    <Link to="/" className='underline ms-3'>ShopNow</Link>
                </p>
            </div>


            <div className='flex justify-between items-center mx-5 py-3 lg:px-7'>
                <h1 className='font-extrabold text-xl md:text-2xl'>Exclusive</h1>

                <div className='flex gap-5  md:hidden'>
                    <button><Icon name="search" /></button>
                    {/* Toggle le menu en cliquant ici */}
                    <button onClick={toggleNavBar}><Icon name="menu" /></button>
                </div>

                {/* Composant Nav avec l'état de visibilité et la fonction de toggle */}
                <Nav isNavOpen={isNavOpen} toggleNavBar={toggleNavBar} />

                <div className='hidden  md:flex md:items-center md:gap-5 '>
                    <form action="#" className='relative ' >
                        <label htmlFor="search" className='sr-only'>name product</label>
                        <input type="text" name="search" id="search" placeholder="Search" className='md:py-1 md:px-3 bg-[#F5F5F5] outline-none ' />

                        <div className='absolute top-1/2 right-3 -translate-y-1/2'>
                            <Icon name="search" size={18} />
                        </div>
                    </form>

                    <div className='flex gap-3'>
                        <Link to="#"><Icon name='heart'/></Link>
                        <Link to="#"><Icon name='shopping'/></Link>
                    </div>

                </div>

            </div>
        </header>
    );
};

export default Header;

import { NavLink } from 'react-router-dom';
import Icon from '../ui/icone';

interface NavProps {
    isNavOpen: boolean;
    toggleNavBar: () => void;
}

const Nav: React.FC<NavProps> = ({ isNavOpen, toggleNavBar }) => {
    return (
        <nav
            className={`flex items-center justify-center fixed inset-0 backdrop-blur bg-white/50 p-4 transition-transform duration-500 transform ${isNavOpen ? 'translate-x-0' : '-translate-x-full'
                }
                 md:transform-none md:static md:bg-transparent md:items-start md:justify-start`}
        >
            <ul className='text-3xl text-black gap-4 md:text-lg md:gap-8 md:flex '>
                <li className='w-full py-4 md:w-auto md:py-0'>
                    <NavLink
                        to="/"
                        className={({ isActive }) =>
                            isActive ? 'border-b-2' : ''
                        }
                    >
                        Home
                    </NavLink>
                </li>
                <li className='w-full py-4 md:w-auto md:py-0'>
                    <NavLink
                        to="/contact"
                        className={({ isActive }) =>
                            isActive ? 'border-b-2' : ''
                        }
                    >
                        Contact
                    </NavLink>
                </li>
                <li className='w-full py-4 md:w-auto md:py-0'>
                    <NavLink
                        to="/about"
                        className={({ isActive }) =>
                            isActive ? 'border-b-2' : ''
                        }
                    >
                        About
                    </NavLink>
                </li>
                <li className='w-full py-4 md:w-auto md:py-0'>
                    <NavLink
                        to="/signup"
                        className={({ isActive }) =>
                            isActive ? 'border-b-2' : ''
                        }
                    >
                        Sign up
                    </NavLink>
                </li>
            </ul>

            {/* Bouton pour fermer la navbar en mobile */}
            <button className='absolute top-4 right-4 md:hidden' onClick={toggleNavBar}>
                <Icon name="menu" /> {/* Utilisez une icône de fermeture ici */}
            </button>
        </nav>
    );
};

export default Nav;

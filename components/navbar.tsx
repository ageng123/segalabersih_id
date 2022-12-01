import React from 'react';
import { logo } from '../assets';
import { NavLinks } from '../constants';
import { UilBars, UilTimes } from "@iconscout/react-unicons";
export const Navbar = () => {
    const [toggle, setToggle] = React.useState(false);
    const toggleMenu = () => setToggle(!toggle);
    return (<>
        <nav className="relative w-full flex py-6 justify-between items-center navbar z-[3]">
            <img src={logo} alt="Segalabersih.id" className="w-[200px] h-[36px]" />
            <ul className="list-none sm:flex hidden justify-end items-center flex-1">
                { NavLinks.map((nav,index) => (
                    <li key={nav.id} className={`cursor-pointer text-white text-[16px] font-normal font-poppins ${index === NavLinks.length - 1 ? 'mr-0' : 'mr-10'}`}>
                        <a href={nav.path}>{nav.title}</a>
                    </li>
                ))}
            </ul>
            <div className="sm:hidden flex flex-1 justify-end items-center text-white cursor-pointer">
               { toggle === true ? <UilTimes onClick={toggleMenu}  className={`text-red-600 bg-red-300 rounded-full w-[32px] h-[32px] p-[6px] bg-opacity-30`} /> : <UilBars onClick={toggleMenu}  className={`text-blue-600 rounded-full w-[32px] h-[32px] p-[6px] `} /> }
               <div className={`${toggle ? 'flex' : 'hidden'} p-6 bg-black-gradient absolute top-20 right-0 mx-4 my-2 min-w-[140px] rounded-xl sidebar`}>
                <ul className="list-none flex flex-col justify-end items-right flex-1">
                    { NavLinks.map((nav,index) => (
                        <li key={nav.id} className={`cursor-pointer text-white text-[16px] font-normal font-poppins ${index === NavLinks.length - 1 ? 'mr-0' : 'mb-4'}`}>
                            <a href={nav.path}>{nav.title}</a>
                        </li>
                    ))}
                </ul>
               </div>

            </div>
        </nav>
    </>)
}
export default Navbar;

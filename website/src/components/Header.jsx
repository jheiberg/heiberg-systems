import { Link } from 'react-router-dom';
import icon from "../img/icon.png";

const linkCss = "p-2 mx-5 text-slate-800 bg-transparent text-2xl hover:text-slate-400 hover:bg-slate-800 hover:border hover:border-white hover:rounded-md";

export default function Header() {
    return (
        <div className="fixed top-0 w-full  bg-gray-500 border-b border-slate-950" >
            <Link to='/'><img src={icon} alt="Icon" className='pl-5 pt-4 justify-start fixed w-20 h-15' /></Link>
            <nav className='py-3 w-full'>
                <ul className='flex justify-end w-full h-10'>
                    <li><Link to="/about" className={linkCss}>About</Link></li>
                    <li><Link to="/services" className={linkCss}>Services</Link></li>
                    <li><Link to="/applications" className={linkCss}>Applications</Link></li>
                    <li><Link to="/contact" className={linkCss}>Contact Me</Link></li>
                </ul>
            </nav>
        </div>
    )
}
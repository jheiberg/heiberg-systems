import './App.css'
import React from "react";
import logo from "./img/logo2.png";
import icon from "./img/icon.png";

const buttonCss = "p-2 mx-5 text-slate-800 bg-transparent text-2xl hover:text-slate-400 hover:bg-slate-800 hover:border-white hover:rounded-md";

function App() {

    return (
        <>
            <div className="w-screen bg-frontpage-image bg-cover bg-center bg-fixed overflow-y-hidden">
                <div className="pr-4 fixed top-0 w-full  bg-gray-500 border-b border-slate-950" >
                    <img src={icon} alt="Icon" className='pl-5 pt-2 justify-start fixed w-20 h-10 align-baseline' />
                    <ul className='flex justify-end'>
                        <li><button className={buttonCss}>About</button></li>
                        <li><button className={buttonCss}>My CV</button></li>
                        <li><button className={buttonCss}>Offerings</button></li>
                        <li><button className={buttonCss}>Applications</button></li>
                        <li><button className={buttonCss}>Contact Me</button></li>
                    </ul>
                </div>
                <div className="bg-slate-500 bg-opacity-60 w-full flex flex-col items-center justify-center align-middle h-screen">
                    <div className="border-2 border-blue-400 p-4 rounded-xl text-center">
                        <img src={logo} alt="" className="mt-auto mb-auto mx-10 w-50 h-20" />
                        <p className="font-sans font-bold text-white text-2xl mb-8">...built on solid principles</p>
                        <button className=" m-auto p-2 bg-blue-200 font-serif font-bold text-l text-blue-950 h-10 w-36 border border-black rounded-3xl align-middle">Contact Me</button>
                    </div>
                </div>
            </div>
            <div className="h-screen w-full bg-white"></div>
        </>
    )
}

export default App;

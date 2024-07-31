import React from "react";
import HiddenMenu from "../HiddenMenu";
import logo from "../../img/logo2.png";

const buttonCss = "p-2 mx-5 text-slate-800 text-2xl hover:text-slate-400 hover:bg-slate-800 hover:border hover:rounded-md";

const StaticSite = () => {
    return (
        <div className="bg-frontpage-image bg-cover bg-center bg-fixed">
            <div className="bg-slate-500 bg-opacity-60 w-full flex flex-col items-center justify-center align-middle h-screen">
                <div className="mx-5">
                    <ul className="mx-10 my-2 top-5 w-full flex flex-row absolute justify-self-end align-middle" >
                        <li><button className={buttonCss}>About</button></li>
                        <li><button className={buttonCss}>My CV</button></li>
                        <li><button className={buttonCss}>Offerings</button></li>
                        <li><button className={buttonCss}>Applications</button></li>
                        <li><button className={buttonCss}>Contact Me</button></li>
                    </ul>
                </div>
                <div className="border-2 border-blue-400 p-4 rounded-xl text-center">
                    <img src={logo} alt="" className="mt-auto mb-auto mx-10 w-50 h-20" />
                    <p className="font-sans font-bold text-white text-2xl mb-8">...built on solid principles</p>
                    <button className="bg-blue-200 font-serif font-normal text-l text-blue-950 h-7 w-36 border border-black rounded-3xl">Contact Me</button>
                </div>
            </div>
        </div>)
}

export default StaticSite;
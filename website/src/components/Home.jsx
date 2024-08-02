import logo from "../img/logo2.png";

export default function Home() {
    return (
        <div className="w-screen bg-frontpage-image bg-cover bg-center bg-fixed">
            <div className="bg-slate-500 bg-opacity-60 w-full flex flex-col items-center justify-center align-middle h-screen">
                <div className="border-2 border-blue-400 p-4 rounded-xl text-center">
                    <img src={logo} alt="" className="mt-auto mb-auto mx-10 w-50 h-20" />
                    <p className="font-sans font-bold text-white text-2xl mb-8">...built on solid principles</p>
                    <button className=" m-auto p-2 bg-blue-200 font-serif font-bold text-l text-blue-950 h-10 w-36 border border-black rounded-3xl align-middle">Contact Me</button>
                </div>
            </div>
        </div>
    )
}
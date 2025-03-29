import { useState } from "react";
import Aurora from "../AuroraText/AuroraText";

function Navbar() {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <header className="w-full py-3 flex items-center justify-between px-6 sticky top-0 z-50 bg-background/60 backdrop-blur">
            {/* Logo Section */}
            <div className="cursor-pointer">
                <Aurora
                    text={"WebWorks Studio"}
                    size={"2xl"}
                    intensity={"bold"}
                />
            </div>

            {/* Hamburger Menu */}
            <div className="md:hidden">
                <button onClick={() => setIsOpen(!isOpen)} className="focus:outline-none">
                    {isOpen ? (
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-8 w-8">
                            <line x1="18" y1="6" x2="6" y2="18"></line>
                            <line x1="6" y1="6" x2="18" y2="18"></line>
                        </svg>
                    ) : (
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-8 w-8">
                            <line x1="3" y1="12" x2="21" y2="12"></line>
                            <line x1="3" y1="6" x2="21" y2="6"></line>
                            <line x1="3" y1="18" x2="21" y2="18"></line>
                        </svg>
                    )}
                </button>
            </div>

            {/* Navigation Menu */}
            <nav className={`md:flex items-center space-x-6 ${isOpen ? "block" : "hidden"} absolute md:relative top-full left-0 w-full md:w-auto bg-background/90 md:bg-transparent backdrop-blur-md md:backdrop-blur-none p-5 md:p-0`}>
                <ul className="flex flex-col md:flex-row md:space-x-4">
                    <li className="list-none">
                        <button className="group inline-flex h-10 w-max items-center justify-center rounded-md px-4 py-2 text-md font-medium transition-colors hover:bg-red-100 hover:text-[#FF1C46] focus:bg-red-100 focus:text-[#FF1C46] focus:outline-none">
                            Team
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-chevron-down relative top-[1px] ml-1 h-3 w-3 transition duration-200 group-hover:rotate-180">
                                <path d="m6 9 6 6 6-6"></path>
                            </svg>
                        </button>
                    </li>
                    <li className="list-none">
                        <button className="group inline-flex h-10 w-max items-center justify-center rounded-md px-4 py-2 text-md font-medium transition-colors hover:bg-red-100 hover:text-[#FF1C46] focus:bg-red-100 focus:text-[#FF1C46] focus:outline-none">
                            Services
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-chevron-down relative top-[1px] ml-1 h-3 w-3 transition duration-200 group-hover:rotate-180">
                                <path d="m6 9 6 6 6-6"></path>
                            </svg>
                        </button>
                    </li>
                    <li className="list-none">
                        <a href="/blog" className="inline-flex h-10 w-max items-center justify-center rounded-md px-4 py-2 text-md font-medium transition-colors hover:bg-red-100 hover:text-[#FF1C46] focus:bg-red-100 focus:text-[#FF1C46] focus:outline-none">
                            Blog
                        </a>
                    </li>
                </ul>

                {/* Auth Button */}
                <div className="mt-4 md:mt-0">
                    <a href="/signup" className="flex items-center gap-2 justify-center bg-[#FF1C46] text-white rounded-md px-4 py-2 text-sm font-medium transition-colors">
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-6 w-6">
                            <rect width="7" height="7" x="14" y="3" rx="1"></rect>
                            <path d="M10 21V8a1 1 0 0 0-1-1H4a1 1 0 0 0-1 1v12a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1v-5a1 1 0 0 0-1-1H3"></path>
                        </svg>
                        Contact Us For Service
                    </a>
                </div>
            </nav>
        </header>
    );
}

export default Navbar;
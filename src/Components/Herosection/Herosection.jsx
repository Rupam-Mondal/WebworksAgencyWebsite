import { AnimatedShinyTextDemo } from "../ShinyText/ShinyText";

function Herosection() {
    return (
        <div className="h-screen w-full flex flex-col justify-center items-center gap-6 px-4 sm:px-6 md:px-8">
            {/* Shiny text section */}
            <div className="w-full text-center">
                <AnimatedShinyTextDemo />
            </div>

            {/* Hero Content */}
            <div className="flex font-inter w-full max-w-2xl flex-col space-y-4 text-center">
                <h1 className="text-3xl font-medium leading-tight text-foreground sm:text-4xl md:text-5xl">
                    <span className="inline-block px-1 md:px-2 font-semibold">Automate</span>
                    <span className="inline-block px-1 md:px-2 font-semibold">your</span>
                    <br className="hidden md:block" />
                    <span className="inline-block px-1 md:px-2 font-semibold">workflow</span>
                    <span className="inline-block px-1 md:px-2 font-semibold">with us</span>
                </h1>
                <p className="mx-auto max-w-lg text-base sm:text-lg md:text-xl text-muted-foreground leading-6 sm:leading-8">
                    No matter what problem you have, our team can help you solve it.
                </p>
                <div className="flex justify-center">
                    <a href="/signup" className="inline-flex items-center gap-2 justify-center bg-[#FF1C46] 
                        text-white rounded-md px-4 py-2 text-sm sm:text-base font-medium transition-colors">
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24"
                            viewBox="0 0 24 24" fill="none" stroke="currentColor"
                            strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"
                            className="h-5 w-5 sm:h-6 sm:w-6">
                            <rect width="7" height="7" x="14" y="3" rx="1"></rect>
                            <path d="M10 21V8a1 1 0 0 0-1-1H4a1 1 0 0 0-1 1v12a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1v-5a1 1 0 0 0-1-1H3"></path>
                        </svg>
                        Contact Us For Service
                    </a>
                </div>
            </div>
        </div>
    );
}

export default Herosection;

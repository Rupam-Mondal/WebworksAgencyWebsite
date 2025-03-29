import { AnimatedShinyTextDemo } from "../ShinyText/ShinyText";

function Herosection(){
    return (
        <>
            <div className="h-screen w-full flex flex-col justify-center items-center gap-7">
                {/* shiny text section */}
                <div className="">
                    <AnimatedShinyTextDemo/>
                </div>

                {/* section 1 */}

                <div class="flex w-full max-w-2xl flex-col space-y-4 overflow-hidden">
                    <h1 class="text-center text-4xl font-medium leading-tight text-foreground sm:text-5xl md:text-6xl">
                        <span class="inline-block px-1 md:px-2 font-semibold">Automate</span>
                        <span class="inline-block px-1 md:px-2 font-semibold">your</span>
                        <span class="inline-block px-1 md:px-2 font-semibold">workflow</span>
                        <span class="inline-block px-1 md:px-2 font-semibold">with us</span>
                    </h1>
                    <p class="mx-auto max-w-xl text-center text-lg leading-7 text-muted-foreground sm:text-xl sm:leading-9">
                        No matter what problem you have, our team can help you solve.
                    </p>
                    <div className="flex justify-center">
                        <a href="/signup" class="inline-flex items-center gap-2 justify-center bg-[#FF1C46] 
    text-white rounded-md px-4 py-2 text-sm font-medium transition-colors">
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24"
                                viewBox="0 0 24 24" fill="none" stroke="currentColor"
                                stroke-width="2" stroke-linecap="round" stroke-linejoin="round"
                                class="h-6 w-6">
                                <rect width="7" height="7" x="14" y="3" rx="1"></rect>
                                <path d="M10 21V8a1 1 0 0 0-1-1H4a1 1 0 0 0-1 1v12a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1v-5a1 1 0 0 0-1-1H3"></path>
                            </svg>
                            Contact Us For Service
                        </a>
                    </div>

                </div>


            </div>
        </>
    )
}

export default Herosection;
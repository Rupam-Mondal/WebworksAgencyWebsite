function Service() {
    return (
        <>
            <div id="service" className="h-auto w-full flex flex-col justify-center items-center">
                {/* Text sections */}
                <div class="text-center space-y-4 pb-6 mx-auto">
                    <h2 class="text-sm text-primary font-mono font-medium tracking-wider uppercase text-[#FF1C46]">Services</h2>
                    <h3 class="mx-auto mt-4 max-w-xs text-3xl font-semibold sm:max-w-none sm:text-4xl md:text-5xl">Empower Your Business with Softwares</h3>
                    <p class="mt-6 text-lg leading-8 text-slate-600 max-w-2xl mx-auto">Our Company provides top-notch web services tailored to your business needs, ensuring seamless digital solutions.
                    </p>
                </div>

                <div className="group mt-5 relative flex flex-col w-[400px] h-[300px] items-start overflow-hidden bg-neutral-50 dark:bg-neutral-800 p-6 rounded-2xl hover:bg-red-500/10 transition-all duration-500 ease-out">
                    <div>
                        <h3 className="font-semibold mb-2 text-primary">Advanced AI Algorithms</h3>
                        <p className="text-foreground">
                            Our platform utilizes cutting-edge AI algorithms to provide accurate and efficient solutions for your business needs.
                        </p>
                    </div>
                    <svg
                        width="1203"
                        height="753"
                        viewBox="0 0 1203 753"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                        className="-mb-32 mt-4 max-h-64 w-full px-4 select-none drop-shadow-[0_0_28px_rgba(0,0,0,.1)] group-hover:-translate-y-2 transition-all duration-300"
                    >
                        <g clipPath="url(#path0)">
                            <path
                                d="M0 52H1202V741C1202 747.627 1196.63 753 1190 753H12C5.37258 753 0 747.627 0 741V52Z"
                                className="fill-[#E5E5E5] dark:fill-[#404040]"
                            ></path>
                            <path
                                fillRule="evenodd"
                                clipRule="evenodd"
                                d="M0 12C0 5.37258 5.37258 0 12 0H1190C1196.63 0 1202 5.37258 1202 12V52H0L0 12Z"
                                className="fill-[#E5E5E5] dark:fill-[#404040]"
                            ></path>
                            <path
                                fillRule="evenodd"
                                clipRule="evenodd"
                                d="M1.06738 12C1.06738 5.92487 5.99225 1 12.0674 1H1189.93C1196.01 1 1200.93 5.92487 1200.93 12V51H1.06738V12Z"
                                className="fill-white dark:fill-[#262626]"
                            ></path>
                        </g>
                    </svg>
                </div>
            </div>
        </>
    )
}

export default Service;
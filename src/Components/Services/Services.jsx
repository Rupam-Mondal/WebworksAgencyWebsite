import webservice from '../../assets/webservice.jpg';
import uiux from '../../assets/uiux.jpg';
import officerlandingpage from '../../assets/officerlandingpage.jpg'

function Service() {
    return (
        <>
            <div id="service" className="h-auto bg-[#F5F5F5] w-full flex flex-col justify-center items-center">
                {/* Text sections */}
                <div class="text-center space-y-4 pb-6 mx-auto">
                    <h2 class="text-sm font-mono font-medium tracking-wider uppercase text-[#FF1C46]">
                        Services
                    </h2>
                    <h3 class="mx-auto mt-4 max-w-xs text-3xl font-semibold sm:max-w-none sm:text-4xl md:text-5xl">Empower Your Business with Softwares</h3>
                    <p class="mt-6 text-lg px-3 leading-8 text-slate-600 max-w-2xl mx-auto">Our Company provides top-notch web services tailored to your business needs, ensuring seamless digital solutions.
                    </p>
                </div>


                <div className='w-full h-auto flex flex-wrap px-10 gap-7 justify-center'>
                    {/* card 1 */}
                    <div className="group cursor-pointer mt-5 relative flex flex-col w-[400px] h-[300px] items-start overflow-hidden bg-neutral-50 dark:bg-neutral-800 p-6 rounded-2xl hover:bg-red-500/10 transition-all duration-500 ease-out">
                        <div>
                            <h3 className="font-semibold mb-2 text-[#FF1C46]">Advanced Web Services</h3>
                            <p className="text-foreground">
                                Our platform builds both AI-powered and non-AI-powered websites tailored to your needs.
                            </p>
                        </div>
                        <img
                            src={webservice}
                            width="1203"
                            height="753"
                            class="w-full max-h-64 px-4 -mb-32 mt-4 select-none drop-shadow-[0_0_28px_rgba(0,0,0,.1)] group-hover:-translate-y-2 transition-all duration-300"
                        />

                    </div>

                    {/* card 2 */}

                    <div className="group cursor-pointer mt-5 relative flex flex-col w-[400px] h-[300px] items-start overflow-hidden bg-neutral-50 dark:bg-neutral-800 p-6 rounded-2xl hover:bg-blue-500/10 transition-all duration-500 ease-out">
                        <div>
                            <h3 className="font-semibold mb-2 text-[#FF1C46]">UI/UX Designs</h3>
                            <p className="text-foreground">
                                Our platform builds both AI-powered and non-AI-powered websites tailored to your needs.
                            </p>
                        </div>
                        <img
                            src={uiux}
                            width="1203"
                            height="753"
                            class="w-full max-h-64 px-4 -mb-32 mt-4 select-none drop-shadow-[0_0_28px_rgba(0,0,0,.1)] group-hover:-translate-y-2 transition-all duration-300"
                        />

                    </div>

                    {/* card 3 */}

                    <div className="group cursor-pointer mt-5 relative flex flex-col w-[400px] h-[300px] items-start overflow-hidden bg-neutral-50 dark:bg-neutral-800 p-6 rounded-2xl hover:bg-green-500/10 transition-all duration-500 ease-out">
                        <div>
                            <h3 className="font-semibold mb-2 text-[#FF1C46]">Full Stack Softwares</h3>
                            <p className="text-foreground">
                                Our platform builds both AI-powered and non-AI-powered websites tailored to your needs.
                            </p>
                        </div>
                        <img
                            src={officerlandingpage}
                            width="1203"
                            height="753"
                            class="w-full max-h-64 px-4 -mb-32 mt-4 select-none drop-shadow-[0_0_28px_rgba(0,0,0,.1)] group-hover:-translate-y-2 transition-all duration-300"
                        />

                    </div>
                </div>
            </div>
        </>
    )
}

export default Service;
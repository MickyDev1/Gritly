import Image from "next/image";

export const metadata = {
    title: 'GRITLY',
};
export default function Courses() {
    return (
        <>
            {/* Navbar */}
            <nav className="flex justify-between border-b-1 border-[#ABDFB2] py-[20px] px-[100px] font-semibold font-montserrat text-[18px] mb-15">
                <div className="">
                    <Image src="/images/logo.png" alt="logo" width={255} height={20} className="" />
                </div>

                <div className="flex gap-10">
                    <ul className="flex gap-15">
                        <li><a href="/">Home</a></li>
                        <li><a href="/about-us">About Us</a></li>
                        <li><a href="/services">Our Services</a></li>
                        <li><a href="/courses" className="border-b-[6px] border-solid border-[#0A4312] pb-[5px] rounded-[5px] text-[#0A4312]">Courses</a></li>
                    </ul>
                    <div className="">
                        <a href="#" className="rounded-[12px] bg-[#0A4312] text-white py-[13px] px-[40px] mb-[15px]"><button>Get Started</button></a>
                    </div>
                </div>
            </nav>
            {/* Navbar */}

            {/* Body container */}
            <main className="my-0 mx-[100px] grid justify-center font-sans mb-[45px]">

                {/* Search-bar */}
                <div className="grid gap-[50px] text-[16px] text-[#626963] mb-[100px] font-semibold">
                    <div className="bg-[#EFEFEF] flex justify-between py-[10px] px-[80px] rounded-[30px]">
                        <div className="flex gap-2">
                            <span>
                                <img src="\images\book.png" alt="icon" />
                            </span>
                            <p>Develop skills and Get Certificate</p>
                        </div>
                        <div className="flex gap-2">
                            <span>
                                <img src="\images\portfolio.png" alt="icon" width={20} />
                            </span>
                            <p>Level up Your Career</p>
                        </div>
                        <div className="flex gap-2">
                            <span>
                                <img src="/images/cash.png" alt="icon" width={20} />
                            </span>
                            <p>Earn On Gritly</p>
                        </div>
                    </div>

                    {/* <div className="flex gap-[5px] justify-center items-center py-[5px] mx-[200px] border-[1px] border-solid border-[#626963] rounded-[10px]">
                        <span>
                            <img src="/images/search.png" alt="icon" />
                        </span>
                        <p>What skills would you like to acquire?</p>
                    </div> */}

                    <input type="text" placeholder="What skills would you like to acquire?" className="flex gap-[5px] text-center text-black justify-center items-center py-[5px] mx-[200px] border-[1px] border-solid border-[#626963] rounded-[10px]" />
                </div>
                {/* Search-bar */}

                {/* Card container */}
                <div className="flex justify-around flex-wrap gap-y-[50px] mb-[80px]">
                    {/* Card */}
                    <div className="w-[350px] rounded-[10px] shadow-[3px_12px_10px_0px_rgba(0,0,0,0.25)] border-[1px] border-solid border-[#ABDFB2]">
                        <div><img src="/images/card1.png" alt="card" className="rounded-t-[10px] brightness-50" /></div>

                        <div className="text-[#626963] text-[16px] py-[20px] px-[16px]">
                            <div>
                                <h2 className="text-[#0A4312] font-bold text-[20px] mb-[10px]">UI/UX Design Masterclass</h2>
                                <p className="mb-[20px]">Learn modern UI/UX design principles and create stunning interfaces for web and mobile apps.</p>
                            </div>
                            <span className="flex justify-between mb-[10px] px-[5px]">
                                <span className="flex gap-[5px]">
                                    <span><img src="/images/time-ico.png" alt="icon" /></span>
                                    <p>8 - 10 hrs</p>
                                </span>
                                <span className="flex gap-[5px]">
                                    <span><img src="/images/grad-hat.png" alt="icon" /></span>
                                    <p>1,255 learners</p>
                                </span>
                            </span>
                            <div className="flex justify-between">
                                <button className="rounded-[12px] text-[#0A4312] py-[13px] px-[30px] border border-[#2BFF49]">More Info</button>
                                <button className="rounded-[12px] bg-[#0A4312] text-white py-[13px] px-[30px]">Start Learning</button>
                            </div>
                        </div>
                    </div>
                    <div className="w-[350px] rounded-[10px] shadow-[3px_12px_10px_0px_rgba(0,0,0,0.25)] border-[1px] border-solid border-[#ABDFB2]">
                        <div><img src="/images/card2.png" alt="card" className="rounded-t-[10px] brightness-50" /></div>

                        <div className="text-[#626963] text-[16px] py-[20px] px-[16px]">
                            <div>
                                <h2 className="text-[#0A4312] font-bold text-[20px] mb-[10px]">Data Science & Machine Learning</h2>
                                <p className="mb-[20px]">Master data analysis, visualization, and machine learning algorithms with practical projects.</p>
                            </div>
                            <span className="flex justify-between mb-[10px] px-[5px]">
                                <span className="flex gap-[5px]">
                                    <span><img src="/images/time-ico.png" alt="icon" /></span>
                                    <p>10 - 12 hrs</p>
                                </span>
                                <span className="flex gap-[5px]">
                                    <span><img src="/images/grad-hat.png" alt="icon" /></span>
                                    <p>2,215 learners</p>
                                </span>
                            </span>
                            <div className="flex justify-between">
                                <button className="rounded-[12px] text-[#0A4312] py-[13px] px-[30px] border border-[#2BFF49]">More Info</button>
                                <button className="rounded-[12px] bg-[#0A4312] text-white py-[13px] px-[30px]">Start Learning</button>
                            </div>
                        </div>
                    </div>
                    <div className="w-[350px] rounded-[10px] shadow-[3px_12px_10px_0px_rgba(0,0,0,0.25)] border-[1px] border-solid border-[#ABDFB2]">
                        <div><img src="/images/card3.png" alt="card" className="rounded-t-[10px] brightness-50" /></div>

                        <div className="text-[#626963] text-[16px] py-[20px] px-[16px]">
                            <div>
                                <h2 className="text-[#0A4312] font-bold text-[20px] mb-[10px]">Graphics Design Masterclass</h2>
                                <p className="mb-[20px]">Learn Modern creative and storytelling design principles with branding and visual identity in graphics design</p>
                            </div>
                            <span className="flex justify-between mb-[10px] px-[5px]">
                                <span className="flex gap-[5px]">
                                    <span><img src="/images/time-ico.png" alt="icon" /></span>
                                    <p>6 - 10 hrs</p>
                                </span>
                                <span className="flex gap-[5px]">
                                    <span><img src="/images/grad-hat.png" alt="icon" /></span>
                                    <p>3,200 learners</p>
                                </span>
                            </span>
                            <div className="flex justify-between">
                                <button className="rounded-[12px] text-[#0A4312] py-[13px] px-[30px] border border-[#2BFF49]">More Info</button>
                                <button className="rounded-[12px] bg-[#0A4312] text-white py-[13px] px-[30px]">Start Learning</button>
                            </div>
                        </div>
                    </div>
                    <div className="w-[350px] rounded-[10px] shadow-[3px_12px_10px_0px_rgba(0,0,0,0.25)] border-[1px] border-solid border-[#ABDFB2]">
                        <div><img src="/images/card4.png" alt="card" className="rounded-t-[10px] brightness-50" /></div>

                        <div className="text-[#626963] text-[16px] py-[20px] px-[16px]">
                            <div>
                                <h2 className="text-[#0A4312] font-bold text-[20px] mb-[10px]">UI/UX Design Masterclass</h2>
                                <p className="mb-[20px]">Learn modern UI/UX design principles and create stunning interfaces for web and mobile apps.</p>
                            </div>
                            <span className="flex justify-between mb-[10px] px-[5px]">
                                <span className="flex gap-[5px]">
                                    <span><img src="/images/time-ico.png" alt="icon" /></span>
                                    <p>8 - 10 hrs</p>
                                </span>
                                <span className="flex gap-[5px]">
                                    <span><img src="/images/grad-hat.png" alt="icon" /></span>
                                    <p>1,255 learners</p>
                                </span>
                            </span>
                            <div className="flex justify-between">
                                <button className="rounded-[12px] text-[#0A4312] py-[13px] px-[30px] border border-[#2BFF49]">More Info</button>
                                <button className="rounded-[12px] bg-[#0A4312] text-white py-[13px] px-[30px]">Start Learning</button>
                            </div>
                        </div>
                    </div>
                    <div className="w-[350px] rounded-[10px] shadow-[3px_12px_10px_0px_rgba(0,0,0,0.25)] border-[1px] border-solid border-[#ABDFB2]">
                        <div><img src="/images/card5.png" alt="card" className="rounded-t-[10px] brightness-50" /></div>

                        <div className="text-[#626963] text-[16px] py-[20px] px-[16px]">
                            <div>
                                <h2 className="text-[#0A4312] font-bold text-[20px] mb-[10px]">UI/UX Design Masterclass</h2>
                                <p className="mb-[20px]">Learn modern UI/UX design principles and create stunning interfaces for web and mobile apps.</p>
                            </div>
                            <span className="flex justify-between mb-[10px] px-[5px]">
                                <span className="flex gap-[5px]">
                                    <span><img src="/images/time-ico.png" alt="icon" /></span>
                                    <p>8 - 10 hrs</p>
                                </span>
                                <span className="flex gap-[5px]">
                                    <span><img src="/images/grad-hat.png" alt="icon" /></span>
                                    <p>1,255 learners</p>
                                </span>
                            </span>
                            <div className="flex justify-between">
                                <button className="rounded-[12px] text-[#0A4312] py-[13px] px-[30px] border border-[#2BFF49]">More Info</button>
                                <button className="rounded-[12px] bg-[#0A4312] text-white py-[13px] px-[30px]">Start Learning</button>
                            </div>
                        </div>
                    </div>
                    <div className="w-[350px] rounded-[10px] shadow-[3px_12px_10px_0px_rgba(0,0,0,0.25)] border-[1px] border-solid border-[#ABDFB2]">
                        <div><img src="/images/card3.png" alt="card" className="rounded-t-[10px] brightness-50" /></div>

                        <div className="text-[#626963] text-[16px] py-[20px] px-[16px]">
                            <div>
                                <h2 className="text-[#0A4312] font-bold text-[20px] mb-[10px]">UI/UX Design Masterclass</h2>
                                <p className="mb-[20px]">Learn modern UI/UX design principles and create stunning interfaces for web and mobile apps.</p>
                            </div>
                            <span className="flex justify-between mb-[10px] px-[5px]">
                                <span className="flex gap-[5px]">
                                    <span><img src="/images/time-ico.png" alt="icon" /></span>
                                    <p>8 - 10 hrs</p>
                                </span>
                                <span className="flex gap-[5px]">
                                    <span><img src="/images/grad-hat.png" alt="icon" /></span>
                                    <p>1,255 learners</p>
                                </span>
                            </span>
                            <div className="flex justify-between">
                                <button className="rounded-[12px] text-[#0A4312] py-[13px] px-[30px] border border-[#2BFF49]">More Info</button>
                                <button className="rounded-[12px] bg-[#0A4312] text-white py-[13px] px-[30px]">Start Learning</button>
                            </div>
                        </div>
                    </div>
                    {/* Card */}
                </div>

                {/* Slider bar */}
                <div className="flex flex-wrap justify-center text-[#0E7A31] gap-[15px]">
                    <span className="px-[8px] border border-solid border-[#0E7A31] rounded-[5px]">&lt;</span>
                    <span className="px-[8px] border border-solid border-[#0E7A31] rounded-[5px]">1</span>
                    <span className="px-[8px] border border-solid border-[#0E7A31] rounded-[5px]">2</span>
                    <span className="px-[8px] border border-solid border-[#0E7A31] rounded-[5px]">3</span>
                    <span className="px-[8px] border border-solid border-[#0E7A31] rounded-[5px]">4</span>
                    <span className="px-[8px] border border-solid border-[#0E7A31] rounded-[5px]">5</span>
                    <span className="px-[8px] border border-solid border-[#0E7A31] rounded-[5px]">6</span>
                    <span className="px-[8px] border border-solid border-[#0E7A31] rounded-[5px]">7</span>
                    <span className="px-[8px] border border-solid border-[#0E7A31] rounded-[5px]">8</span>
                    <span className="px-[8px] border border-solid border-[#0E7A31] rounded-[5px]">9</span>
                    <span className="px-[8px] border border-solid border-[#0E7A31] rounded-[5px]">10</span>
                    <span className="px-[8px] border border-solid border-[#0E7A31] rounded-[5px]">....</span>
                    <span className="px-[8px] border border-solid border-[#0E7A31] rounded-[5px]">64</span>
                    <span className="px-[8px] border border-solid border-[#0E7A31] rounded-[5px]">65</span>
                    <span className="px-[8px] border border-solid border-[#0E7A31] rounded-[5px]">&gt;</span>
                </div>
                {/* Slider bar */}
            </main>
            {/* Body container */}

            {/* Footer */}
            <footer className="bg-[#0A4312] text-white text-[14px] py-[65px]">
                <div className="flex flex-wrap justify-between gap-y-[30px] mx-[230px] pb-[20px] border-white border-b">
                    <div className="w-[270px] grid gap-[20px]">
                        <span><img src="/images/logo.png" alt="logo" /></span>
                        <span className="text-[20px] opacity-60">Learn in-demand skills and earn rewards as you progress through your educational journey.</span>
                        <span className="flex gap-[24px]">
                            <img src="https://img.icons8.com/?size=20&id=32292&format=png&color=ffffff" alt="instagram" />
                            <img src="https://img.icons8.com/?size=20&id=X5olMRtG6Lpj&format=png&color=FFFFFF" alt="twitter" />
                            <img src="https://img.icons8.com/?size=20&id=446&format=png&color=FFFFFF" alt="linkedin" />
                        </span>
                    </div>
                    <div className="grid gap-[15px]">
                        <h6>Quick Links</h6>
                        <ul className="grid gap-[8px] opacity-60">
                            <li><a href="/">Home</a></li>
                            <li><a href="/about-us">About Us</a></li>
                            <li><a href="/services">Our Services</a></li>
                            <li><a href="/courses">Courses</a></li>
                            <li><a href="/blog">Blog</a></li>
                        </ul>
                    </div>
                    <div className="grid gap-[15px]">
                        <h6>Rescources</h6>
                        <ul className="grid gap-[8px] opacity-60">
                            <li><a href="#">Help Center</a></li>
                            <li><a href="#">Community</a></li>
                            <li><a href="#">Partners</a></li>
                            <li><a href="#">API Documentation</a></li>
                            <li><a href="#">Privary Policy</a></li>
                        </ul>
                    </div>
                    <div>
                        <h6 className="mb-[30px]">Company</h6>
                        <ul className="grid gap-[8px] opacity-60">
                            <li><a href="#">Gritly</a></li>
                            <li><a href="#">FAQs</a></li>
                            <li><a href="#">Contact Us</a></li>
                        </ul>
                    </div>
                    <div>
                        <h6 className="mb-[30px]">Legals</h6>
                        <ul className="grid gap-[8px] opacity-60">
                            <li><a href="#">Privacy Policy</a></li>
                            <li><a href="#">Terms & Conditions</a></li>
                            <li><a href="#">Cookie Policy</a></li>
                        </ul>
                    </div>
                </div>
                <p className="ml-[230px] pt-[20px]">© 2025  Gritly. All rights reserved.</p>
            </footer>
            {/* Footer */}
        </>
    );
}
import Link from "next/link";

export default function Footer() {
    return (
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
                        <li><Link href="/">Home </Link></li>
                        <li><Link href="/about-us">About Us </Link></li>
                        <li><Link href="/services">Our Services </Link></li>
                        <li><Link href="/courses">Courses </Link></li>
                        <li><Link href="/blog">Blog </Link></li>
                    </ul>
                </div>
                <div className="grid gap-[15px]">
                    <h6>Rescources</h6>
                    <ul className="grid gap-[8px] opacity-60">
                        <li><Link href="#">Help Center </Link></li>
                        <li><Link href="#">Community </Link></li>
                        <li><Link href="#">Partners </Link></li>
                        <li><Link href="#">API Documentation </Link></li>
                        <li><Link href="#">Privary Policy </Link></li>
                    </ul>
                </div>
                <div>
                    <h6 className="mb-[30px]">Company</h6>
                    <ul className="grid gap-[8px] opacity-60">
                        <li><Link href="#">Gritly </Link></li>
                        <li><Link href="#">FAQs </Link></li>
                        <li><Link href="#">Contact Us </Link></li>
                    </ul>
                </div>
                <div>
                    <h6 className="mb-[30px]">Legals</h6>
                    <ul className="grid gap-[8px] opacity-60">
                        <li><Link href="#">Privacy Policy </Link></li>
                        <li><Link href="#">Terms & Conditions </Link></li>
                        <li><Link href="#">Cookie Policy </Link></li>
                    </ul>
                </div>
            </div>
            <p className="ml-[230px] pt-[20px]">© 2025  Gritly. All rights reserved.</p>
        </footer>
    )
}
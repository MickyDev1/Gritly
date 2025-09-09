import Link from "next/link";

export default function NavBar() {
    return (
        <nav className="flex justify-between items-center border-b-1 border-[#ABDFB2] py-[20px] px-[100px] font-semibold font-montserrat text-[18px] mb-15">
            <div className="">
                <img src="/images/logo.png" alt="logo" width={255} height={20} />
            </div>
            <div className="flex gap-10">
                <ul className="flex gap-15">
                    <li><Link href="/">Home</Link></li>
                    <li><Link href="/about-us">About Us </Link></li>
                    <li><Link href="/services">Our Services </Link></li>
                    <li><Link href="/courses" className="border-b-[6px] border-solid border-[#0A4312] pb-[5px] rounded-[5px] text-[#0A4312]">Courses </Link></li>
                </ul>
                <div>
                    <Link href="#" className="rounded-[12px] bg-[#0A4312] text-white py-[13px] px-[40px] mb-[15px]"><button>Get Started</button> </Link>
                </div>
            </div>
        </nav>
    )
}
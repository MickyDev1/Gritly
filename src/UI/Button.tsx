import Link from "next/link"

interface Prop{
    title: string;
}

export default function Button(props: Prop) {
    return (
        <Link href="#" className="rounded-[12px] bg-[#0A4312] text-white py-[13px] px-[40px] mb-[15px]"><button>{props.title}</button></Link>
    )
}
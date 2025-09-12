export default function SearchBar() {
    return (
        <section className="mx-[100px] grid justify-center font-sans mb-[45px]">
            <div className="grid gap-[50px] text-[16px] text-[#626963] mb-[100px] font-semibold">
                <div className="bg-[#EFEFEF] flex gap-[50] justify-between py-[10px] px-[80px] rounded-[30px]">
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

                <input type="text" placeholder="What skills would you like to acquire?" className="flex gap-[5px] text-center text-black justify-center items-center py-[5px] mx-[70px] border-[1px] border-solid border-[#626963] rounded-[15px]" />
            </div>
        </section>
    )
}
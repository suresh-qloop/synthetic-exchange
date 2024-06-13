'use client'
import React, { useEffect, useState } from 'react'
import Link from 'next/link'

const Hero2 = () => {
    const [data, setData] = useState(null);

    useEffect(() => {
        const fetchData = async () => {
            
            try {
                const response = await fetch('/api/cryptoprices');
                if (!response.ok) {
                    throw new Error('Network response was not ok');
                }
                const result = await response.json();
                setData(result)
            } catch (error){
                console.log(error)
            }
        }
        fetchData();

        const intervalId = setInterval(() => {
            fetchData();
        }, 5000)

        return () => {
            clearInterval(intervalId)
        }

    }, [])

    return (
        <div className='container w-full mx-auto bg-white'>
            <div className='sm:relative sm:h-[800px]'>
                <div className='flex flex-col items-center justify-center mx-auto sm:w-full Matter'>
                    <div className='block sm:hidden mt-[80px] w-fit mx-auto mb-16'>
                        <Link href="https://virgocx.ca/page#/market/BTC_CAD"><div className="cursor-pointer w-[264px] h-[140px] bg-white rounded-[30px] mb-[24px] sm:mb-[0px] border-black border hover:scale-110 transition-all title-hover" style={{borderRadius: "20px", borderColor: "#d4ccf7"}}>
                                <div className="flex py-[20px] px-[20px]">
                                    <div className="flex">
                                        <div className="flex flex-col mt-[10px]">
                                            <img alt="" src="https://virgocx.s3.ca-central-1.amazonaws.com/prod/2022/03/21/b154ff43ff81471186ea1d73d90445e0.png" className="w-[46.88px] h-[46.88px] bounce-image" />
                                            <div className="flex items-center mt-[20px] font-medium text-[16px]">
                                                <div className="text-[#fc5454] mr-[2px]">-2.26%</div>
                                                <img alt="" src="/arrowDown.png" className="w-[10px] h-[8px]" />
                                            </div>
                                        </div>
                                        <div className="flex flex-col ml-[40px]">
                                            <div className="text-[18px] text-[#26263A] font-bold h-[36px] overflow-clip hover:overflow-y-auto title-blue">Bitcoin</div>
                                            <div className="caption text-[14px] text-[#616161] font-medium">BTC/CAD</div><div className="button text-[16px] font-medium text-[#616161] mt-[12px]">$94740.72</div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </Link>
                        <Link href="https://virgocx.ca/page#/market/ETH_CAD"><div className="cursor-pointer w-[264px] h-[140px] bg-white rounded-[30px] mb-[24px] sm:mb-[0px] border-black border hover:scale-110 transition-all title-hover" style={{borderRadius: "20px", borderColor: "#d4ccf7"}}>
                                <div className="flex py-[20px] px-[20px]">
                                    <div className="flex">
                                        <div className="flex flex-col mt-[10px]">
                                            <img alt="" src="https://virgocx.s3.ca-central-1.amazonaws.com/prod/2022/03/21/4bf758589dc84bd88ef85cadb634154e.png" className="w-[46.88px] h-[46.88px] bounce-image" />
                                            <div className="flex items-center mt-[20px] font-medium text-[16px]">
                                                <div className="text-[#fc5454] mr-[2px]">-2.26%</div>
                                                <img alt="" src="/arrowDown.png" className="w-[10px] h-[8px]" />
                                            </div>
                                        </div>
                                        <div className="flex flex-col ml-[40px]">
                                            <div className="text-[16px] text-[#26263A] font-bold h-[36px] overflow-clip hover:overflow-y-auto title-blue">Ethereum</div>
                                            <div className="caption text-[14px] text-[#616161] font-medium">ETH/CAD</div><div className="button text-[16px] font-medium text-[#616161] mt-[12px]">$4788.90</div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </Link>
                        <Link href="https://virgocx.ca/page#/market/APE_CAD"><div className="cursor-pointer w-[264px] h-[140px] bg-white rounded-[30px] mb-[24px] sm:mb-[0px] border-black border hover:scale-110 transition-all title-hover" style={{borderRadius: "20px", borderColor: "#d4ccf7"}}>
                            <div className="flex py-[20px] px-[20px]">
                                <div className="flex">
                                    <div className="flex flex-col mt-[10px]">
                                        <img alt="" src="https://virgocx.s3.ca-central-1.amazonaws.com/prod/2022/03/18/bc00498edfcf4507b085a180fc8213e3.png" className="w-[46.88px] h-[46.88px] bounce-image" />
                                        <div className="flex items-center mt-[20px] font-medium text-[16px]">
                                            <div className="text-[#fc5454] mr-[2px]">-2.26%</div>
                                            <img alt="" src="/arrowDown.png" className="w-[10px] h-[8px]" />
                                        </div>
                                    </div>
                                    <div className="flex flex-col ml-[40px]">
                                        <div className="text-[16px] text-[#26263A] font-bold h-[36px] overflow-clip hover:overflow-y-auto title-blue">ApeCoin</div>
                                        <div className="caption text-[14px] text-[#616161] font-medium">APE/CAD</div><div className="button text-[16px] font-medium text-[#616161] mt-[12px]">$1.4965</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        </Link>
                        <div className='outline-[#d4ccf7] w-[264px] h-[140px] outline-dashed outline-2 rounded-[30px] flex flex-col items-center justify-center'>
                            <div className='font-bold text-[16px] text-[#e3897d]'>& More New Coins!</div>
                            <Link href="https://virgocx.ca/page#/market/BTC_CAD" className="text-[#6b47ed] hover:no-underline text-center font-medium text-[18px] mt-[14px] underline px-[28px]">View Our Full List of Coins</Link>
                        </div>
                    </div>
                    <div className='z-10 justify-center hidden w-full sm:flex px-[40px] xl:px-0'>
                        <div className='shadow-virgo -translate-y-[80px] bg-white w-full rounded-[30px] py-[40px] px-[40px] grid grid-cols-2 lg:grid-cols-4 gap-[25px]'>
                            {data?.map((item, index) => (
                                <Link href="#" key={index}><div className="cursor-pointer bg-white rounded-[30px] mb-[24px] sm:mb-[0px] border-black border hover:scale-110 transition-all title-hover" style={{borderRadius: "20px", borderColor: "#d4ccf7"}}>
                                <div className="flex py-[20px] px-[20px]">
                                    <div className="flex items-center gap-[45px] lg:gap-[19px] xl:gap-[45px]">
                                        <div className="flex flex-col mt-[10px]">
                                            <img alt="" src={item.image} className="w-[46.88px] h-[46.88px] lg:w-[45.88px] lg:h-[45.88px] xl:w-[46.88px] xl:h-[46.88px] bounce-image" />
                                            <div className="flex items-center mt-[20px] font-semibold text-[18px] lg:text-[16px] xl:text-[18px]">
                                                <div className={`${item.price_change_percentage_24h < 0 ? "text-[#fc5454]" : "text-[#36cc66]"} mr-[2px]`}>  {item.price_change_percentage_24h.toFixed(2)}%</div>
                                                <img alt="" src={`${item.price_change_percentage_24h < 0 ? "/arrowDown.png" : "/arrowUp.png"}`} className="w-[10px] h-[8px]" />
                                            </div>
                                        </div>
                                        <div className="flex flex-col">
                                            <div className="sm:text-[20px] lg:text-[18px] xl:text-[20px] text-[#26263A] sm:font-bold h-[36px] overflow-clip hover:overflow-y-auto title-blue leading-[35px] xl:leading-[30px]">{item.name}</div>
                                            <div className="caption sm:text-[16px] lg:text-[14px] xl:text-[16px] text-[#616161] uppercase">{item.symbol}/CAD</div><div className="button sm:text-[18px] lg:text-[16px] xl:text-[18px] sm:font-medium text-[#616161] mt-[12px]">${item.current_price}</div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            </Link>
                            ))}
                            {/* <Link href="#"><div className="cursor-pointer bg-white rounded-[30px] mb-[24px] sm:mb-[0px] border-black border hover:scale-110 transition-all title-hover" style={{borderRadius: "20px", borderColor: "#d4ccf7"}}>
                                <div className="flex py-[20px] px-[20px]">
                                    <div className="flex items-center gap-[45px] lg:gap-[19px] xl:gap-[45px]">
                                        <div className="flex flex-col mt-[10px]">
                                            <img alt="" src="https://virgocx.s3.ca-central-1.amazonaws.com/prod/2022/03/21/4bf758589dc84bd88ef85cadb634154e.png" className="w-[46.88px] h-[46.88px] lg:w-[45.88px] lg:h-[45.88px] xl:w-[46.88px] xl:w-[46.88px] xl:h-[46.88px] bounce-image" />
                                            <div className="flex items-center mt-[20px] font-semibold text-[18px] lg:text-[16px] xl:text-[18px]">
                                                <div className="text-[#fc5454] mr-[2px]">-2.26%</div>
                                                <img alt="" src="/arrowDown.png" className="w-[10px] h-[8px]" />
                                            </div>
                                        </div>
                                        <div className="flex flex-col">
                                            <div className="sm:text-[20px] lg:text-[18px] xl:text-[20px] text-[#26263A] sm:font-bold h-[36px] overflow-clip hover:overflow-y-auto title-blue leading-[35px] xl:leading-[30px]">Ethereum</div>
                                            <div className="caption sm:text-[16px] lg:text-[14px] xl:text-[16px] text-[#616161]">ETH/CAD</div><div className="button sm:text-[18px] lg:text-[16px] xl:text-[18px] sm:font-medium text-[#616161] mt-[12px]">$4788.90</div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            </Link>
                            <Link href="#"><div className="cursor-pointer bg-white rounded-[30px] mb-[24px] sm:mb-[0px] border-black border hover:scale-110 transition-all title-hover" style={{borderRadius: "20px", borderColor: "#d4ccf7"}}>
                                <div className="flex py-[20px] px-[20px]">
                                    <div className="flex items-center gap-[45px] lg:gap-[19px] xl:gap-[45px]">
                                        <div className="flex flex-col mt-[10px]">
                                            <img alt="" src="https://virgocx.s3.ca-central-1.amazonaws.com/prod/2022/03/18/bc00498edfcf4507b085a180fc8213e3.png" className="w-[46.88px] h-[46.88px] lg:w-[45.88px] lg:h-[45.88px] xl:w-[46.88px] xl:w-[46.88px] xl:h-[46.88px] bounce-image" />
                                            <div className="flex items-center mt-[20px] font-semibold text-[18px] lg:text-[16px] xl:text-[18px]">
                                                <div className="text-[#fc5454] mr-[2px]">-2.26%</div>
                                                <img alt="" src="/arrowDown.png" className="w-[10px] h-[8px]" />
                                            </div>
                                        </div>
                                        <div className="flex flex-col">
                                            <div className="sm:text-[20px] lg:text-[18px] xl:text-[20px] text-[#26263A] sm:font-bold h-[36px] overflow-clip hover:overflow-y-auto title-blue leading-[35px] xl:leading-[30px]">ApeCoin</div>
                                            <div className="caption sm:text-[16px] lg:text-[14px] xl:text-[16px] text-[#616161]">APE/CAD</div><div className="button sm:text-[18px] lg:text-[16px] xl:text-[18px] sm:font-medium text-[#616161] mt-[12px]">$1.4965</div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            </Link>
                            <Link href="#"><div className="cursor-pointer bg-white rounded-[30px] mb-[24px] sm:mb-[0px] border-black border hover:scale-110 transition-all title-hover" style={{borderRadius: "20px", borderColor: "#d4ccf7"}}>
                                <div className="flex py-[20px] px-[20px]">
                                    <div className="flex items-center gap-[45px] lg:gap-[19px] xl:gap-[45px]">
                                        <div className="flex flex-col mt-[10px]">
                                            <img alt="" src="https://virgocx.s3.ca-central-1.amazonaws.com/prod/2022/03/21/650d07a22aac4343bc91354a4c04f8e7.png" className="w-[46.88px] h-[46.88px] lg:w-[45.88px] lg:h-[45.88px] xl:w-[46.88px] xl:w-[46.88px] xl:h-[46.88px] bounce-image" />
                                            <div className="flex items-center mt-[20px] font-semibold text-[18px] lg:text-[16px] xl:text-[18px]">
                                                <div className="text-[#fc5454] mr-[2px]">-2.26%</div>
                                                <img alt="" src="/arrowDown.png" className="w-[10px] h-[8px]" />
                                            </div>
                                        </div>
                                        <div className="flex flex-col">
                                            <div className="sm:text-[20px] lg:text-[18px] xl:text-[20px] text-[#26263A] sm:font-bold h-[36px] overflow-clip hover:overflow-y-auto title-blue leading-[35px] xl:leading-[30px]">Cardano</div>
                                            <div className="caption sm:text-[16px] lg:text-[14px] xl:text-[16px] text-[#616161]">ADA/CAD</div><div className="button sm:text-[18px] lg:text-[16px] xl:text-[18px] sm:font-medium text-[#616161] mt-[12px]">$0.590616</div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            </Link>
                            <Link href="#"><div className="cursor-pointer bg-white rounded-[30px] mb-[24px] sm:mb-[0px] border-black border hover:scale-110 transition-all title-hover" style={{borderRadius: "20px", borderColor: "#d4ccf7"}}>
                                <div className="flex py-[20px] px-[20px]">
                                    <div className="flex items-center gap-[45px] lg:gap-[19px] xl:gap-[45px]">
                                        <div className="flex flex-col mt-[10px]">
                                            <img alt="" src="https://virgocx.s3.ca-central-1.amazonaws.com/prod/2021/12/29/e2a5b520891c49bf9a659b77eda8c3e0.png" className="w-[46.88px] h-[46.88px] lg:w-[45.88px] lg:h-[45.88px] xl:w-[46.88px] xl:w-[46.88px] xl:h-[46.88px] bounce-image" />
                                            <div className="flex items-center mt-[20px] font-semibold text-[18px] lg:text-[16px] xl:text-[18px]">
                                                <div className="text-[#fc5454] mr-[2px]">-2.26%</div>
                                                <img alt="" src="/arrowDown.png" className="w-[10px] h-[8px]" />
                                            </div>
                                        </div>
                                        <div className="flex flex-col">
                                            <div className="sm:text-[20px] lg:text-[18px] xl:text-[20px] text-[#26263A] sm:font-bold h-[36px] overflow-clip hover:overflow-y-auto title-blue leading-[35px] xl:leading-[30px]">Solana</div>
                                            <div className="caption sm:text-[16px] lg:text-[14px] xl:text-[16px] text-[#616161]">SOL/CAD</div><div className="button sm:text-[18px] lg:text-[16px] xl:text-[18px] sm:font-medium text-[#616161] mt-[12px]">$207.94</div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            </Link>
                            <Link href="#"><div className="cursor-pointer bg-white rounded-[30px] mb-[24px] sm:mb-[0px] border-black border hover:scale-110 transition-all title-hover" style={{borderRadius: "20px", borderColor: "#d4ccf7"}}>
                                <div className="flex py-[20px] px-[20px]">
                                    <div className="flex items-center gap-[45px] lg:gap-[19px] xl:gap-[45px]">
                                        <div className="flex flex-col mt-[10px]">
                                            <img alt="" src="https://virgocx.s3.ca-central-1.amazonaws.com/prod/2022/03/21/e68bca32f3e44bcd9ba7e776709874d9.png" className="w-[46.88px] h-[46.88px] lg:w-[45.88px] lg:h-[45.88px] xl:w-[46.88px] xl:w-[46.88px] xl:h-[46.88px] bounce-image" />
                                            <div className="flex items-center mt-[20px] font-semibold text-[18px] lg:text-[16px] xl:text-[18px]">
                                                <div className="text-[#fc5454] mr-[2px]">-2.26%</div>
                                                <img alt="" src="/arrowDown.png" className="w-[10px] h-[8px]" />
                                            </div>
                                        </div>
                                        <div className="flex flex-col">
                                            <div className="sm:text-[20px] lg:text-[18px] xl:text-[20px] text-[#26263A] sm:font-bold h-[36px] overflow-clip hover:overflow-y-auto title-blue leading-[35px] xl:leading-[30px]">DOGE</div>
                                            <div className="caption sm:text-[16px] lg:text-[14px] xl:text-[16px] text-[#616161]">DOGE/CAD</div><div className="button sm:text-[18px] lg:text-[16px] xl:text-[18px] sm:font-medium text-[#616161] mt-[12px]">$0.1954004</div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            </Link>
                            <Link href="#"><div className="cursor-pointer bg-white rounded-[30px] mb-[24px] sm:mb-[0px] border-black border hover:scale-110 transition-all title-hover" style={{borderRadius: "20px", borderColor: "#d4ccf7"}}>
                                <div className="flex py-[20px] px-[20px]">
                                    <div className="flex items-center gap-[45px] lg:gap-[19px] xl:gap-[45px]">
                                        <div className="flex flex-col mt-[10px]">
                                            <img alt="" src="	https://virgocx.s3.ca-central-1.amazonaws.com/prod/2022/03/21/0972a7eb818047898164c64cc4187ce3.png" className="w-[46.88px] h-[46.88px] lg:w-[45.88px] lg:h-[45.88px] xl:w-[46.88px] xl:w-[46.88px] xl:h-[46.88px] bounce-image" />
                                            <div className="flex items-center mt-[20px] font-semibold text-[18px] lg:text-[16px] xl:text-[18px]">
                                                <div className="text-[#fc5454] mr-[2px]">-2.26%</div>
                                                <img alt="" src="/arrowDown.png" className="w-[10px] h-[8px]" />
                                            </div>
                                        </div>
                                        <div className="flex flex-col">
                                            <div className="sm:text-[20px] lg:text-[18px] xl:text-[20px] text-[#26263A] sm:font-bold h-[36px] overflow-clip hover:overflow-y-auto title-blue leading-[35px] xl:leading-[30px]">Litecoin</div>
                                            <div className="caption sm:text-[16px] lg:text-[14px] xl:text-[16px] text-[#616161]">LTC/CAD</div><div className="button sm:text-[18px] lg:text-[16px] xl:text-[18px] sm:font-medium text-[#616161] mt-[12px]">$106.59</div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            </Link> */}
                            <div className='outline-[#d4ccf7] outline-dashed outline-2 rounded-[30px] flex flex-col items-center justify-center'>
                                <div className='sm:font-bold sm:text-[18px] lg:text-[16px] xl:text-[18px] text-[#e3897d]'>& More New Coins!</div>
                                <Link href="https://virgocx.ca/page#/market/BTC_CAD" className="text-[#6b47ed] hover:no-underline text-center font-medium text-[18px] lg:text-[16px] xl:text-[18px] mt-[14px] underline sm:px-[28px]">View Our Full List of Coins</Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Hero2

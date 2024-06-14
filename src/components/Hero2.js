'use client'
import React, { useEffect, useState } from 'react'
import Link from 'next/link'

const Hero2 = () => {
    const [data, setData] = useState(null);

    useEffect(() => {
        const fetchData = async () => {
            
            try {
                const response = await fetch('/api/cryptoprices', {
                    method: 'GET',
                    headers: {
                        'Cache-Control': 'no-store, no-cache, must-revalidate, proxy-revalidate',
                        'Pragma': 'no-cache',
                        'Expires': '0'
                    }
                });
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
            <div className='sm:relative lg:mx-[4%] xl:mx-0 2xl:mx-[9%]'>
                <div className='flex flex-col items-center justify-center mx-auto sm:w-full Matter'>
                    <div className='block sm:hidden mt-[80px] w-fit mx-auto mb-16'>
                        {data?.map((item, index) => (
                            <Link key={index} href="#"><div className="cursor-pointer w-[264px] h-[140px] bg-white rounded-[30px] mb-[24px] sm:mb-[0px] border-black border hover:scale-110 transition-all title-hover" style={{borderRadius: "20px", borderColor: "#d4ccf7"}}>
                                    <div className="flex py-[20px] px-[20px]">
                                        <div className="flex">
                                            <div className="flex flex-col mt-[10px]">
                                                <img alt="coin" src={item.image} className="w-[46.88px] h-[46.88px] bounce-image" />
                                                <div className="flex items-center mt-[20px] font-medium text-[16px]">
                                                    <div className={`${item.price_change_percentage_24h < 0 ? "text-[#fc5454]" : "text-[#36cc66]"} mr-[2px]`}>{item.price_change_percentage_24h.toFixed(2)}%</div>
                                                    <img alt="arrow" src={`${item.price_change_percentage_24h < 0 ? "/arrowDown.png" : "/arrowUp.png"}`} className="w-[10px] h-[8px]" />
                                                </div>
                                            </div>
                                            <div className="flex flex-col ml-[40px]">
                                                <div className="text-[18px] text-[#26263A] font-bold h-[36px] overflow-clip hover:overflow-y-auto title-blue">{item.name}</div>
                                                <div className="caption text-[14px] text-[#616161] font-medium uppercase">{item.symbol}/CAD</div><div className="button text-[16px] font-medium text-[#616161] mt-[12px]">${item.current_price}</div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </Link>
                        ))}
                        <div className='outline-[#d4ccf7] w-[264px] h-[140px] outline-dashed outline-2 rounded-[30px] flex flex-col items-center justify-center'>
                            <div className='font-bold text-[16px] text-[#e3897d]'>& More New Coins!</div>
                            <Link href="#" className="text-[#6b47ed] hover:no-underline text-center font-medium text-[18px] mt-[14px] underline px-[28px]">View Our Full List of Coins</Link>
                        </div>
                    </div>
                    <div className='z-10 justify-center hidden w-full sm:flex px-[40px] xl:px-0'>
                        <div className='shadow-virgo -translate-y-[80px] bg-white w-full rounded-[30px] py-[40px] lg:py-[20px] xl:py-[40px] px-[40px] lg:px-[20px] xl:px-[40px] grid grid-cols-2 lg:grid-cols-4 gap-[25px] lg:gap-[15px] xl:gap-[25px]'>
                            {data?.map((item, index) => (
                                <Link href="#" key={index}><div className="cursor-pointer bg-white rounded-[30px] mb-[24px] sm:mb-[0px] border-black border hover:scale-110 transition-all title-hover" style={{borderRadius: "20px", borderColor: "#d4ccf7"}}>
                                <div className="flex py-[20px] px-[20px] lg:px-[16px] xl:px-[20px]">
                                    <div className="flex items-center gap-[45px] lg:gap-[19px] xl:gap-[45px]">
                                        <div className="flex flex-col mt-[10px]">
                                            <img alt="coin" src={item.image} className="w-[46.88px] h-[46.88px] lg:w-[45.88px] lg:h-[45.88px] xl:w-[46.88px] xl:h-[46.88px] bounce-image" />
                                            <div className="flex items-center mt-[20px] font-semibold text-[18px] lg:text-[16px] xl:text-[18px]">
                                                <div className={`${item.price_change_percentage_24h < 0 ? "text-[#fc5454]" : "text-[#36cc66]"} mr-[2px]`}>  {item.price_change_percentage_24h.toFixed(2)}%</div>
                                                <img alt="arrow" src={`${item.price_change_percentage_24h < 0 ? "/arrowDown.png" : "/arrowUp.png"}`} className="w-[10px] h-[8px]" />
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
                            <div className='outline-[#d4ccf7] outline-dashed outline-2 rounded-[30px] flex flex-col items-center justify-center'>
                                <div className='sm:font-bold sm:text-[18px] lg:text-[16px] xl:text-[18px] text-[#e3897d]'>& More New Coins!</div>
                                <Link href="#" className="text-[#6b47ed] hover:no-underline text-center font-medium text-[18px] lg:text-[16px] xl:text-[18px] mt-[14px] underline sm:px-[28px]">View Our Full List of Coins</Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Hero2

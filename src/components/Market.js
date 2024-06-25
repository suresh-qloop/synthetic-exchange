/* eslint-disable @next/next/no-img-element */
'use client'
import { Input, Select } from 'antd'
import Link from 'next/link'
import React, { useEffect, useState } from 'react'
import CoinChart from './CoinChart'

const Market = () => {
    const [data, setData] = useState(null);
    const [activeIndex, setActiveIndex] = useState(0);
    const [searchInput, setSearchInput] = useState("");
    const [filteredData, setFilteredData] = useState(data);
    const [symbol, setSymbol] = useState("KRAKEN:BTCCAD");

    useEffect(() => {
        if (data) {
            const s = data[activeIndex].symbol;
            if (s === 'btc') {
                setSymbol("KRAKEN:BTCCAD")
            } else {
                setSymbol("KRAKEN:ETHCAD")
            }
        }
    }, [data, activeIndex])

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
            } catch (error) {
                console.log(error)
            }
        }
        fetchData();

        const intervalId = setInterval(() => {
            fetchData();
        }, 60000)

        return () => {
            clearInterval(intervalId)
        }
    }, [])

    useEffect(() => {
        if (data) {
            if (searchInput?.trim() === "") {
                setFilteredData(data)
            } else {
                setFilteredData(data.filter(item => item.name.toLowerCase().includes(searchInput?.toLowerCase()) || item.symbol.toLowerCase().includes(searchInput?.toLowerCase())))
            }
        }
    }, [searchInput, data])

    const customOptions = [
        {
            value: "cad",
            label: (
                <>
                    <img
                        src="ca.png"
                        alt="CAD"
                        className='w-[20px] sm:w-[14px] lg:w-[16px] xl:w-[20px] h-[20px] sm:h-[14px] lg:h-[16px] xl:h-[20px] mr-[8px] sm:mr-[6px] xl:mr-[8px]'
                    />
                    <span className='text-black text-[20px] sm:text-[14px] lg:text-[16px] xl:text-[20px] leading-[30px] sm:leading-[28px] xl:leading-[30px] h-[27px]'>CAD</span>
                </>
            ),
        },
        {
            value: "usd",
            label: (
                <>
                    <img
                        src="usd.png"
                        alt="USD"
                        className='w-[20px] sm:w-[14px] lg:w-[16px] xl:w-[20px] h-[20px] sm:h-[14px] lg:h-[16px] xl:h-[20px] mr-[8px] sm:mr-[6px] xl:mr-[8px]'
                    />
                    <span className='text-black text-[20px] sm:text-[14px] lg:text-[16px] xl:text-[20px] leading-[30px] sm:leading-[28px] xl:leading-[30px] h-[27px]'>USD</span>
                </>
            ),
        },
        {
            value: "usdc",
            label: (
                <>
                    <img
                        src="usdc.png"
                        alt="USDC"
                        className='w-[20px] sm:w-[14px] lg:w-[16px] xl:w-[20px] h-[20px] sm:h-[14px] lg:h-[16px] xl:h-[20px] mr-[8px] sm:mr-[6px] xl:mr-[8px]'
                    />
                    <span className='text-black text-[20px] sm:text-[14px] lg:text-[16px] xl:text-[20px] leading-[30px] sm:leading-[28px] xl:leading-[30px] h-[27px]'>USDC</span>
                </>
            ),
        },
    ];

    const handleClick = (index) => {
        setActiveIndex(index);
    }

    return (
        <div className='bg-[#F2F2F2]'>
            <div className='container mx-auto max-sm:pt-[10px]'>
                <div className='flex flex-col bg-white mx-[5%] lg:mx-[4%] xl:mx-0 2xl:mx-[9%]'>
                    {/* header */}
                    <div className='border-b border-[#f5f5f5] py-[18px] lg:py-[20px] xl:py-[24px] px-[15px] xl:px-[22px]'>
                        <div className='flex flex-col items-center justify-between sm:flex-row'>
                            <div className='flex items-center max-sm:flex-wrap'>
                                <div className='max-sm:w-[100%] max-sm:justify-start flex items-center pr-[15px] xl:pr-[24px] sm:border-e sm:border-[#eaeaea]'>
                                    <img src={data && data[activeIndex].image} alt="i-logo" className='h-[52px] sm:h-[32px] lg:h-[42px] xl:h-[52px] w-[52px] sm:w-[32px] lg:w-[42px] xl:w-[52px] mr-[12px] sm:mr-[5px] lg:mr-[12px] rounded-full' />
                                    <div>
                                        <Link href="#" className='font-semibold text-black cursor-pointer nunitoBold text-[24px] sm:text-[18px] lg:text-[22px] xl:text-[24px] mr-[32px] sm:mr-[28px] lg:mr-[32px] leading-[33px] sm:leading-[25px] lg:leading-[30px] xl:leading-[33px] relative right-full-name after:bg-cover after:h-[24px] sm:after:h-[18px] lg:after:h-[24px] after:w-[24px] sm:after:w-[18px] lg:after:w-[24px] after:top-[4px] after:right-[-32px] sm:after:right-[-22px] lg:after:right-[-32px] after:absolute'>{data && data[activeIndex].name}</Link>
                                        <div className='flex items-center mt-[4px] sm:mt-[2px] lg:mt-[4px]'>
                                            <span className='uppercase text-[#979797] text-[18px] sm:text-[13px] lg:text-[16px] xl:text-[18px] leading-[25px] sm:leading-[15px] lg:leading-[20px] xl:leading-[25px]'>{data && data[activeIndex].symbol}/CAD</span>
                                            <div className='flex items-center'>
                                                <span className='bg-[#f7f5ff] rounded-[4px] text-[#343434] text-[12px] sm:text-[9px] lg:text-[10px] xl:text-[12px] leading-[16px] sm:leading-[15px] lg:leading-[16px] ml-[8px] sm:ml-[4px] lg:ml-[6px] xl:ml-[8px] py-[4px] sm:py-0 lg:py-[4px] px-[12px] sm:px-0 lg:px-[12px]'>Layer1</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className='max-sm:w-[100%] flex max-sm:justify-between max-sm:mt-[10px] items-center px-[10px] lg:px-[15px] xl:px-[24px]'>
                                    <div className='text-[#fc5454] nunitoBold text-[28px] sm:text-[20px] lg:text-[24px] xl:text-[28px] leading-[38px] sm:leading-[34px] xl:leading-[38px] mr-0 sm:mr-[6px] xl:mr-[8px]'>${data && data[activeIndex].current_price}</div>
                                    <div className={`${data && data[activeIndex].price_change_percentage_24h < 0 ? "text-[#fc5454]" : "text-[#36cc66]"} nunitoBold font-semibold text-[16px] sm:text-[12px] lg:text-[14px] xl:text-[16px] leading-[22px] sm:leading-[19px] xl:leading-[22px] max-sm:text-end`}>
                                        <span className='text-[#616161] text-[16px] nunitoBold font-semibold block sm:hidden'>24h Change </span>
                                        {data && (data[activeIndex].price_change_percentage_24h < 0 ? data[activeIndex].price_change_percentage_24h.toFixed(2) : "+" + data[activeIndex].price_change_percentage_24h.toFixed(2))}%
                                    </div>
                                </div>
                                <div className='max-sm:w-[100%] max-sm:mt-[10px] max-sm:justify-end max-sm:gap-5 flex items-center'>
                                    <div className='price-box ml-0 sm:ml-[10px] lg:ml-[16px] max-sm:text-center'>
                                        <h6 className='text-[#979797] text-[14px] sm:text-[12px] xl:text-[14px] leading-[19px] sm:leading-[15px] xl:leading-[19px]'>24h Low</h6>
                                        <span className='font-semibold text-[14px] sm:text-[12px] xl:text-[14px] mt-[4px] sm:mt-[3px] xl:mt-[4px] leading-[19px] sm:leading-[15px] xl:leading-[19px]'>{data && data[activeIndex].low_24h}</span>
                                    </div>
                                    <div className='price-box ml-0 sm:ml-[10px] lg:ml-[16px] max-sm:text-center'>
                                        <h6 className='text-[#979797] text-[14px] sm:text-[12px] xl:text-[14px] leading-[19px] sm:leading-[15px] xl:leading-[19px]'>24h High</h6>
                                        <span className='font-semibold text-[14px] sm:text-[12px] xl:text-[14px] mt-[4px] sm:mt-[3px] xl:mt-[4px] leading-[19px] sm:leading-[15px] xl:leading-[19px]'>{data && data[activeIndex].high_24h}</span>
                                    </div>
                                </div>
                            </div>
                            <div className='max-sm:w-full'>
                                <Select
                                    variant='borderless'
                                    suffixIcon=<img src='/arrow_down_purple.svg' alt='arrowDown' className='w-[15px] sm:w-[10px] lg:w-[15px] h-[9px] sm:h-[5px] lg:h-[6px] xl:h-[9px]' />
                                    defaultValue={customOptions[0].value}
                                    className='max-sm:mt-[20px] custom-select w-full sm:w-[85px] lg:w-[95px] xl:w-[125px] after:bg-[#979797] after:bottom-[-6px] xl:after:bottom-[-10px] after:h-[1px] after:left-0 after:absolute after:w-full sm:after:w-[92%]'
                                    options={customOptions}
                                />
                            </div>
                        </div>
                    </div>
                    {/* body */}
                    <div className='relative flex flex-1 max-sm:flex-wrap market-body'>
                        <div className='w-[100%] sm:w-[35%] border-e border-[#f5f5f5]'>
                            <div className='flex flex-col items-center'>
                                <Input variant='borderless' allowClear className='flex items-center bg-[#f5f5f5] rounded-[4px] h-[36px] xl:h-[40px] mt-[12px] lg:mt-[24px] pl-[18px] w-[92%] sm:w-[94%] xl:w-[92%]' placeholder='Search cryptocurrency' prefix={<img src='/search-icon.png' alt='search' className=' h-[17.5px] w-[17.5px]' />} onChange={(e) => setSearchInput(e.target.value)} />
                            </div>
                            <div className='flex items-center mx-[22px] sm:mx-[10px] lg:mx-[15px] xl:mx-[22px] mt-[12px] sm:mt-[8px] lg:mt-[12px] mb-[8px] sm:mb-[6px] lg:mb-[8px]'>
                                <div className='text-[#979797] text-[14px] sm:text-[12px] lg:text-[14px] w-[133px] sm:w-[90px] lg:w-[125px] xl:w-[140px]'>Crypto</div>
                                <div className='text-[#979797] text-[14px] sm:text-[12px] lg:text-[14px] flex flex-1 justify-center items-center cursor-pointer'>
                                    <span className='text-[#979797] text-[14px] sm:text-[12px] lg:text-[14px] nunitoBold'>Ref.Price</span>
                                    <img src="/arrowUpDown.png" alt="arrowUpDown" className='h-[10px] sm:h-[8px] lg:h-[10px] w-[6px] sm:w-[4px] lg:w-[6px] ml-[6px] sm:ml-[3px] lg:ml-[6px]' />
                                </div>
                                <div className='text-[#979797] text-[14px] sm:text-[12px] lg:text-[14px] flex flex-1 justify-end items-center cursor-pointer'>
                                    <span className='text-[#979797] text-[14px] sm:text-[12px] lg:text-[14px] nunitoBold'>24h Chg%</span>
                                    <img src="/arrowUpDown.png" alt="arrowUpDown" className='h-[10px] sm:h-[8px] lg:h-[10px] w-[6px] sm:w-[4px] lg:w-[6px] ml-[6px] sm:ml-[3px] lg:ml-[6px]' />
                                </div>
                            </div>
                            <ul className='relative h-[332px] lg:h-[438px] overflow-y-scroll xl:h-[485px] xl:overflow-y-hidden'>
                                {filteredData?.map((item, index) => (
                                    <li key={index} className={`flex items-center cursor-pointer py-[12px] sm:py-[8px] lg:py-[12px] px-[22px] sm:px-[8px] lg:px-[15px] xl:px-[22px] ${activeIndex === index ? "li-active" : ""}`} onClick={() => handleClick(index)}>
                                        <div className='flex items-center w-[133px] sm:w-[97px] lg:w-[125px] xl:w-[140px]'>
                                            <img src={item.image} alt="i-l-logo" className='h-[32px] sm:h-[26px] lg:h-[32px] w-[32px] sm:w-[26px] lg:w-[32px] mr-[12px] sm:mr-[6px] lg:mr-[12px] rounded-full' />
                                            <div>
                                                <div className='flex items-center text-[#343434] nunitoBold font-semibold text-[14px] sm:text-[12px] lg:text-[14px] leading-[19px] sm:leading-[16px] lg:leading-[19px]'>{item.name}</div>
                                                <div className='text-[#979797] text-[12px] sm:text-[11px] lg:text-[12px] leading-[16px] sm:leading-[14px] lg:leading-[16px] mt-[6px] sm:mt-[4px] lg:mt-[6px] uppercase'>{item.symbol}</div>
                                            </div>
                                        </div>
                                        <div className='text-[#343434] flex-1 text-[14px] sm:text-[12px] lg:text-[14px] text-center leading-[20px]'>${item.current_price}</div>
                                        <div className='flex-1 text-right'>
                                            <div className={`${item.price_change_percentage_24h < 0 ? "text-[#fc5454]" : "text-[#36cc66]"} text-[14px] sm:text-[12px] lg:text-[14px] leading-[20px] sm:leading-[16px] lg:leading-[20px]`}>{item.price_change_percentage_24h < 0 ? item.price_change_percentage_24h.toFixed(2) : "+" + item.price_change_percentage_24h.toFixed(2)}%</div>
                                        </div>
                                    </li>
                                ))}
                            </ul>
                        </div>
                        <div className='w-[100%] sm:w-[65%] p-[10px] lg:p-[20px] max-sm:mt-[10px]'>
                            <CoinChart activeIndex={activeIndex} symbol={symbol} />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Market

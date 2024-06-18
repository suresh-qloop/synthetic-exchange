import { Input, Select } from 'antd'
import { CloseCircleOutlined } from '@ant-design/icons'
import Link from 'next/link'
import React from 'react'

const Market = () => {

    const customOptions = [
        {
            value: "cad",
            label: (
                <>
                    <img
                        src="ca.png"
                        alt="CAD"
                        style={{ width: 20, height: 20, marginRight: 8 }}
                    />
                    <span className='text-black text-[20px] leading-[30px] h-[27px]'>CAD</span>
                </>
            ),
        },
        {
            value: "usd",
            label: (
                <>
                    <img
                        src="ca.png"
                        alt="USD"
                        style={{ width: 20, height: 20, marginRight: 8 }}
                    />
                    <span className='text-black text-[20px] leading-[30px] h-[27px]'>USD</span>
                </>
            ),
        },
        {
            value: "usdc",
            label:(
                <>
                    <img
                        src="ca.png"
                        alt="USDC"
                        style={{ width: 20, height: 20, marginRight: 8 }}
                    />
                    <span className='text-black text-[20px] leading-[30px] h-[27px]'>USDC</span>
                </>
            ),
        },
    ];

  return (
    <div className='bg-[#F2F2F2]'>
      <div className='container mx-auto'>
        <div className='flex flex-col bg-white mx-[5%] lg:mx-[4%] xl:mx-0 2xl:mx-[9%]'>
        {/* header */}
            <div className='border-b border-[#f5f5f5] py-[24px] px-[22px]'>
                <div className='flex items-center justify-between'>
                    <div className='flex items-center'>
                        <div className='flex items-center pr-[24px] border-e border-[#eaeaea]'>
                            <img src="https://virgocx.s3.ca-central-1.amazonaws.com/prod/2022/03/21/b154ff43ff81471186ea1d73d90445e0.png" alt="" className='h-[52px] w-[52px] mr-[12px]' />
                            <div>
                                <Link href="#" className='font-semibold text-black cursor-pointer NunitoBold text-[24px] mr-[32px] leading-[33px] relative right-full-name'>Bitcoin</Link>
                                <div className='flex items-center mt-[4px]'>
                                    <span>BTC/CAD</span>
                                    <div className='flex items-center'>
                                        <span className='bg-[#f7f5ff] rounded-[4px] text-[#343434] text-[12px] leading-[16px] ml-[8px] py-[4px]px-[12px]'>Layer1</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className='flex items-center px-[24px]'>
                            <div className='text-[#fc5454] NunitoBold text-[28px] leading-[38px] mr-[8px]'>$90,076.50</div>
                            <div className='text-[#fc5454] NunitoBold font-semibold text-[16px] leading-[22px]'>
                            <span className='text-[#616161] text-[16px] NunitoBold font-semibold sm:hidden'>24h Change </span>
                            -1.29%
                            </div>
                        </div>
                        <div className='flex items-center'>
                            <div className='price-box !ml-0'>
                                <h6 className='text-[#979797] text-[14px] leading-[19px]'>Buy Price</h6>
                                <span className='text-[#36cc66] font-semibold text-[14px] mt-[4px] leading-[19px]'>91,688.91</span>
                            </div>
                            <div className='price-box'>
                                <h6 className='text-[#979797] text-[14px] leading-[19px]'>Sell Price</h6>
                                <span className='text-[#fc5454] font-semibold text-[14px] mt-[4px] leading-[19px]'>88,812.84</span>
                            </div>
                            <div className='price-box'>
                                <h6 className='text-[#979797] text-[14px] leading-[19px]'>24h Low</h6>
                                <span className='font-semibold text-[14px] mt-[4px] leading-[19px]'>88,690.32</span>
                            </div>
                            <div className='price-box'>
                                <h6 className='text-[#979797] text-[14px] leading-[19px]'>24h High</h6>
                                <span className='font-semibold text-[14px] mt-[4px] leading-[19px]'>91,275.96</span>
                            </div>
                        </div>
                    </div>
                    <div>
                        <Select
                        bordered={false}
                        suffixIcon=<img src='/arrow_down_purple.svg' />
                        defaultValue={customOptions[0].value}
                        className='custom-select'
                        options={customOptions}
                        />
                    </div>
                </div>
            </div>
            {/* body */}
            <div className='relative flex flex-1 market-body'>
                <div className='w-[424px]'>
                    <div className='flex flex-col items-center'>
                        <Input bordered={false} placeholder='Search cryptocurrency' prefix={<img src='/search-icon.png' alt='search' className=' h-[17.5px] w-[17.5px]' />} suffix={<CloseCircleOutlined style={{ height: "15px", width: "15px", color: "#00000040"}} />} />
                    </div>
                </div>
                <div></div>
            </div>
        </div>
      </div>
    </div>
  )
}

export default Market

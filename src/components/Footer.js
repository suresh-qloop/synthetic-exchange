'use client'
import { Collapse } from 'antd';
import Link from 'next/link'
import React, { useState } from 'react'

const { Panel } = Collapse;

const Footer = () => {

    const [imageSrcApp, setImageSrcApp] = useState('/appStore.png');
    const [imageSrcGoogle, setImageSrcGoogle] = useState('/googleStore.png');
    const [imageSrcApk, setImageSrcApk] = useState('/apk.png');

    const expandRotateClass = (isActive) => {
        return `w-[13px] transition-transform duration-300 ${isActive ? 'rotate-180' : ''}`
    }

    return (
        <div className='bg-[#F2F2F2]'>
            <footer className='container mx-auto'>
            <div className='lg:mx-[4%] xl:mx-0 2xl:mx-[9%] px-[20px] sm:px-[60px] lg:px-[110px] xl:px-[142px] sm:pt-[55px] sm:pb-[46px]'>
                <div className='block sm:hidden'>
                    <div>
                        <Collapse
                            accordion
                            expandIcon={({ isActive }) => <img src='/black_arrow_down.svg' alt='downarrow' className={expandRotateClass(isActive)} />}
                            expandIconPosition='end'
                            ghost
                        >
                            <Panel header="SoFi" key="1">
                                <div className='flex flex-col'>
                                    <Link href="#" className='text-[16px] font-semibold text-[#616161] pl-[20px] pb-[15px]'>Home</Link>
                                    <Link href="#" className='text-[16px] font-semibold text-[#616161] pl-[20px] pb-[15px]'>Market</Link>
                                    <Link href="#" className='text-[16px] font-semibold text-[#616161] pl-[20px] pb-[15px]'>Security</Link>
                                    <Link href="#" className='text-[16px] font-semibold text-[#616161] pl-[20px] pb-[15px]'>Fees & Funding</Link>
                                </div>
                            </Panel>
                            <Panel header="Buy Crypto" key="2">
                                <div className='flex flex-col'>
                                    <Link href="#" className='text-[16px] font-semibold text-[#616161] pl-[20px] pb-[15px]'>Bitcoin (BTC)</Link>
                                    <Link href="#" className='text-[16px] font-semibold text-[#616161] pl-[20px] pb-[15px]'>Ethereum (ETH)</Link>
                                    <Link href="#" className='text-[16px] font-semibold text-[#616161] pl-[20px] pb-[15px]'>Solana (SOL)</Link>
                                    <Link href="#" className='text-[16px] font-semibold text-[#616161] pl-[20px] pb-[15px]'>PAX Gold (PAXG)</Link>
                                    <Link href="#" className='text-[16px] font-semibold text-[#616161] pl-[20px] pb-[15px]'>Qtum (QTUM)</Link>
                                    <Link href="#" className='text-[16px] font-semibold text-[#616161] pl-[20px] pb-[15px]'>Nano (XNO)</Link>
                                    <Link href="#" className='text-[16px] font-semibold text-[#616161] pl-[20px] pb-[15px]'>Binance Coin (wormhole) (BNB)</Link>
                                </div>
                            </Panel>
                            <Panel header="More Products" key="3">
                                <div className='flex flex-col'>
                                    <Link href="#" className='text-[16px] font-semibold text-[#616161] pl-[20px] pb-[15px]'>API</Link>
                                </div>
                            </Panel>
                            <Panel header="Resources" key="4">
                                <div className='flex flex-col'>
                                    <Link href="#" className='text-[16px] font-semibold text-[#616161] pl-[20px] pb-[15px]'>About Us</Link>
                                    <Link href="#" className='text-[16px] font-semibold text-[#616161] pl-[20px] pb-[15px]'>Contact Us</Link>
                                    <Link href="#" className='text-[16px] font-semibold text-[#616161] pl-[20px] pb-[15px]'>Career</Link>
                                    <Link href="#" className='text-[16px] font-semibold text-[#616161] pl-[20px] pb-[15px]'>News</Link>
                                    <Link href="#" className='text-[16px] font-semibold text-[#616161] pl-[20px] pb-[15px]'>Support</Link>
                                </div>
                            </Panel>
                            <Panel header="Programs" key="5">
                                <div className='flex flex-col'>
                                    <Link href="#" className='text-[16px] font-semibold text-[#616161] pl-[20px] pb-[15px]'>Referral Program</Link>
                                </div>
                            </Panel>
                            <Panel header="Legal" key="6">
                                <div className='flex flex-col'>
                                    <Link href="#" className='text-[16px] font-semibold text-[#616161] pl-[20px] pb-[15px]'>Privacy Policy</Link>
                                    <Link href="#" className='text-[16px] font-semibold text-[#616161] pl-[20px] pb-[15px]'>Terms of Service</Link>
                                </div>
                            </Panel>
                        </Collapse>
                    </div>
                </div>
                <div className='hidden sm:gap-[7px] lg:gap-0 xl:gap-5 sm:grid sm:grid-cols-6'>
                    <div className='flex flex-col sm:h-auto'>
                        <h1 className='pt-[10px] sm:pt-0 pb-[16px] sm:pb-[32px] text-[15px] lg:text-[16px] xl:text-[20px] text-[#343434] font-extrabold'>SoFi</h1>
                        <Link href="#" className='hidden sm:block sm:!opacity-100 pl-[8px] sm:pl-0 pb-[15px] sm:text-[13px] lg:text-[14px] xl:text-[18px] font-medium text-[#616161]'>Home</Link>
                        <Link href="#" className='hidden sm:block sm:!opacity-100 pl-[8px] sm:pl-0 pb-[15px] sm:text-[13px] lg:text-[14px] xl:text-[18px] font-medium text-[#616161]'>Market</Link>
                        <Link href="#" className='hidden sm:block sm:!opacity-100 pl-[8px] sm:pl-0 pb-[15px] sm:text-[13px] lg:text-[14px] xl:text-[18px] font-medium text-[#616161]'>Security</Link>
                        <Link href="#" className='hidden sm:block sm:!opacity-100 pl-[8px] sm:pl-0 pb-[15px] sm:text-[13px] lg:text-[14px] xl:text-[18px] font-medium text-[#616161]'>Fees & Funding</Link>
                    </div>
                    <div className='flex flex-col sm:h-auto'>
                        <h1 className='pt-[10px] sm:pt-0 pb-[16px] sm:pb-[32px] text-[15px] lg:text-[16px] xl:text-[20px] text-[#343434] font-extrabold'>Buy Crypto</h1>
                        <Link href="#" className='hidden sm:block sm:!opacity-100 pl-[8px] sm:pl-0 pb-[15px] sm:text-[13px] lg:text-[14px] xl:text-[18px] font-medium text-[#616161]'>Bitcoin (BTC)</Link>
                        <Link href="#" className='hidden sm:block sm:!opacity-100 pl-[8px] sm:pl-0 pb-[15px] sm:text-[13px] lg:text-[14px] xl:text-[18px] font-medium text-[#616161]'>Ethereum (ETH)</Link>
                        <Link href="#" className='hidden sm:block sm:!opacity-100 pl-[8px] sm:pl-0 pb-[15px] sm:text-[13px] lg:text-[14px] xl:text-[18px] font-medium text-[#616161]'>Solana (SOL)</Link>
                        <Link href="#" className='hidden sm:block sm:!opacity-100 pl-[8px] sm:pl-0 pb-[15px] sm:text-[13px] lg:text-[14px] xl:text-[18px] font-medium text-[#616161]'>PAX Gold (PAXG)</Link>
                        <Link href="#" className='hidden sm:block sm:!opacity-100 pl-[8px] sm:pl-0 pb-[15px] sm:text-[13px] lg:text-[14px] xl:text-[18px] font-medium text-[#616161]'>Qtum (QTUM)</Link>
                        <Link href="#" className='hidden sm:block sm:!opacity-100 pl-[8px] sm:pl-0 pb-[15px] sm:text-[13px] lg:text-[14px] xl:text-[18px] font-medium text-[#616161]'>Nano (XNO)</Link>
                        <Link href="#" className='hidden sm:block sm:!opacity-100 pl-[8px] sm:pl-0 pb-[15px] sm:text-[13px] lg:text-[14px] xl:text-[18px] font-medium text-[#616161]'>Binance Coin (wormhole) (BNB)</Link>
                    </div>
                    <div className='flex flex-col sm:h-auto'>
                        <h1 className='pt-[10px] sm:pt-0 pb-[16px] sm:pb-[32px] text-[15px] lg:text-[16px] xl:text-[20px] text-[#343434] font-extrabold'>More Products</h1>
                        <Link href="#" className='hidden sm:block sm:!opacity-100 pl-[8px] sm:pl-0 pb-[15px] sm:text-[13px] lg:text-[14px] xl:text-[18px] font-medium text-[#616161]'>API</Link>
                    </div>
                    <div className='flex flex-col sm:h-auto'>
                        <h1 className='pt-[10px] sm:pt-0 pb-[16px] sm:pb-[32px] text-[15px] lg:text-[16px] xl:text-[20px] text-[#343434] font-extrabold'>Resources</h1>
                        <Link href="#" className='hidden sm:block sm:!opacity-100 pl-[8px] sm:pl-0 pb-[15px] sm:text-[13px] lg:text-[14px] xl:text-[18px] font-medium text-[#616161]'>About Us</Link>
                        <Link href="#" className='hidden sm:block sm:!opacity-100 pl-[8px] sm:pl-0 pb-[15px] sm:text-[13px] lg:text-[14px] xl:text-[18px] font-medium text-[#616161]'>Contact Us</Link>
                        <Link href="#" className='hidden sm:block sm:!opacity-100 pl-[8px] sm:pl-0 pb-[15px] sm:text-[13px] lg:text-[14px] xl:text-[18px] font-medium text-[#616161]'>Career</Link>
                        <Link href="#" className='hidden sm:block sm:!opacity-100 pl-[8px] sm:pl-0 pb-[15px] sm:text-[13px] lg:text-[14px] xl:text-[18px] font-medium text-[#616161]'>News</Link>
                        <Link href="#" className='hidden sm:block sm:!opacity-100 pl-[8px] sm:pl-0 pb-[15px] sm:text-[13px] lg:text-[14px] xl:text-[18px] font-medium text-[#616161]'>Support</Link>
                    </div>
                    <div className='flex flex-col sm:h-auto'>
                        <h1 className='pt-[10px] sm:pt-0 pb-[16px] sm:pb-[32px] text-[15px] lg:text-[16px] xl:text-[20px] text-[#343434] font-extrabold'>Programs</h1>
                        <Link href="#" className='hidden sm:block sm:!opacity-100 pl-[8px] sm:pl-0 pb-[15px] sm:text-[13px] lg:text-[14px] xl:text-[18px] font-medium text-[#616161]'>Referral Program</Link>
                    </div>
                    <div className='flex flex-col sm:h-auto'>
                        <h1 className='pt-[10px] sm:pt-0 pb-[16px] sm:pb-[32px] text-[15px] lg:text-[16px] xl:text-[20px] text-[#343434] font-extrabold'>Legal</h1>
                        <Link href="#" className='hidden sm:block sm:!opacity-100 pl-[8px] sm:pl-0 pb-[15px] sm:text-[13px] lg:text-[14px] xl:text-[18px] font-medium text-[#616161]'>Privacy Policy</Link>
                        <Link href="#" className='hidden sm:block sm:!opacity-100 pl-[8px] sm:pl-0 pb-[15px] sm:text-[13px] lg:text-[14px] xl:text-[18px] font-medium text-[#616161]'>Terms of Service</Link>
                    </div>
                </div>
                <div className='flex flex-col sm:flex-row justify-between mx-auto mt-[49px] xl:mt-[55px] gap-4 lg:gap-5 xl:gap-0'>
                    <div className='flex flex-col items-center gap-2 lg:gap-3 sm:flex-row xl:gap-0'>
                        <Link href="#" onMouseEnter={() => setImageSrcApp('/appStore_hover.png')} onMouseLeave={() => setImageSrcApp('/appStore.png')}>
                            <img src={imageSrcApp} alt="app" className='w-[192px] h-[53px] sm:w-[120px] lg:w-[170px] xl:w-[192px] sm:h-[32px] lg:h-[40px] xl:h-[53px] mb-[18px] sm:mb-[0px] sm:mr-[24px]' />
                        </Link>
                        <Link href="#" onMouseEnter={() => setImageSrcGoogle('/googleStore_hover.png')} onMouseLeave={() => setImageSrcGoogle('/googleStore.png')}>
                            <img src={imageSrcGoogle} alt="google" className='w-[192px] h-[53px] sm:w-[120px] lg:w-[170px] xl:w-[192px] sm:h-[32px] lg:h-[40px] xl:h-[53px] mb-[18px] sm:mb-[0px] sm:mr-[24px]' />
                        </Link>
                        <Link href="#" onMouseEnter={() => setImageSrcApk('/apk_hover.png')} onMouseLeave={() => setImageSrcApk('/apk.png')}>
                            <img src={imageSrcApk} alt="apk" className='w-[192px] h-[53px] sm:w-[120px] lg:w-[170px] xl:w-[192px] sm:h-[32px] lg:h-[40px] xl:h-[53px] mb-[18px] sm:mb-[0px] sm:mr-[24px]' />
                        </Link>
                    </div>
                    <div className='flex sm:mx-auto mt-[41px] sm:mt-[0px] sm:mr-[8px] items-center justify-between sm:justify-around'>
                        <Link href="#">
                            <img src="/twitter.png" alt="twitter" className='w-[30px] h-[30px] sm:w-[20px] lg:w-[27px] sm:h-[20px] lg:h-[27px] xl:w-[35px] xl:h-[35px] cursor-pointer sm:ml-[24px]' />
                        </Link>
                        <Link href="#">
                            <img src="/facebook.png" alt="facebook" className='w-[30px] h-[30px] sm:w-[20px] lg:w-[27px] sm:h-[20px] lg:h-[27px] xl:w-[35px] xl:h-[35px] cursor-pointer sm:ml-[24px]' />
                        </Link>
                        <Link href="#">
                            <img src="/linkedIn.png" alt="linkedin" className='w-[30px] h-[30px] sm:w-[20px] lg:w-[27px] sm:h-[20px] lg:h-[27px] xl:w-[35px] xl:h-[35px] cursor-pointer sm:ml-[24px]' />
                        </Link>
                        <Link href="#">
                            <img src="/instagram.png" alt="instagram" className='w-[30px] h-[30px] sm:w-[20px] lg:w-[27px] sm:h-[20px] lg:h-[27px] xl:w-[35px] xl:h-[35px] cursor-pointer sm:ml-[24px]' />
                        </Link>
                        <Link href="#">
                            <img src="/reddit.png" alt="reddit" className='w-[30px] h-[30px] sm:w-[20px] lg:w-[27px] sm:h-[20px] lg:h-[27px] xl:w-[35px] xl:h-[35px] cursor-pointer sm:ml-[24px]' />
                        </Link>
                        <Link href="#">
                            <img src="/youtube.png" alt="youtube" className='w-[30px] h-[30px] sm:w-[20px] lg:w-[27px] sm:h-[20px] lg:h-[27px] xl:w-[35px] xl:h-[35px] cursor-pointer sm:ml-[24px]' />
                        </Link>
                    </div>
                </div>
                <div className='h-[1px] bg-[#D8D8D8] mt-[40px] sm:mt-[20px] lg:mt-[28px] xl:mt-[32px] mb-[26px] sm:mb-[20px] lg:mb-[26px]'></div>
                <div className='flex flex-col justify-center mx-auto lg:pr-[75px]'>
                    <div className='flex items-center lg:mr-[42px] mb-[24px] sm:mb-[0px] justify-center'>
                        <img src="/ca.png" alt="ca" className='h-[15px] xl:h-[24px] mr-[16px] sm:mr-[14px] lg:mr-[20px]' />
                        <p className='text-[14px] sm:text-[13px] lg:text-[14px] xl:text-[18px] text-[#616161]'>FINTRAC Registered MSB # M19955733 Restricted Dealer registered with CSA</p>
                    </div>
                </div>
            </div>
        </footer>
        </div>
    )
}

export default Footer

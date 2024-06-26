'use client'
import React, { useState } from 'react'
import { Dropdown, Menu, Collapse } from 'antd'

const { Panel } = Collapse;

const items = [
    { key: '1', label: 'English' },
    { key: '2', label: '简体中文' },
    { key: '3', label: 'Français' }
];

const menu = (
    <Menu items={items} />
);

const MenuBar = () => {

    const [activeDropdown, setActiveDropdown] = useState(null);
    const [isOpen, setIsOpen] = useState(false);

    const handleMouseEnter = (index) => {
        setActiveDropdown(index);
    };

    const handleMouseLeave = () => {
        setActiveDropdown(null);
    };

    const expandRotateClass = (isActive) => {
        return `transition-transform duration-300 ${isActive ? 'rotate-180' : ''}`
    }


    return (
        <div className='bg-[#F2F2F2]'>
            <div className='hidden container mx-auto justify-center py-[55px] z-50 bg-[#F2F2F2] sm:flex relative'>
                <div className='flex justify-between items-center z-50 w-[90%] xl:w-[95%] h-[60px] lg:h-[68px] xl:h-[93px] bg-white shadow-[0px_0px_25px_4px_rgba(234,234,234,0.8)] rounded-[50px] lg:mx-[4%] xl:mx-0 2xl:mx-[9%]'>
                    <a href="/">
                        <img alt="logo" className="ml-[19px] lg:ml-[23px] xl:ml-[49px] w-[110px] md:w-[130px] lg:w-[140px] xl:w-[193px]" src="/sX.jpg" />
                    </a>
                    <div className='text-[14px] xl:text-[18px] pr-[18px] lg:pr-[22px] xl:pr-[48px] flex'>
                        <div>
                            <span className='false cursor-pointer text-[#66617f] hover:text-[#66617f]' onMouseEnter={() => handleMouseEnter(1)}
                                onMouseLeave={() => handleMouseLeave()}>
                                Documents <img alt="downarrow" className="false ml-[4px] lg:ml-[10px] xl:ml-[15px] w-[8px] lg:w-[10px] xl:w-[12px] inline-block" src="/downarrow.svg" />
                            </span>
                            {activeDropdown === 1 && (
                                <>
                                    <div className='absolute bg-white top-[93px] lg:top-[97px] xl:top-[112px] left-[39px] lg:left-[50px] xl:left-[31px] 2xl:left-[138px] shadow-bottom-only rounded-b-[50px] w-[90%] xl:w-[95%] 2xl:w-[82%] h-[310px] lg:h-[378px] xl:h-[464px] z-10 pb-[30px]' onMouseEnter={() => handleMouseEnter(1)} onMouseLeave={() => handleMouseLeave()}></div>
                                    <div className='z-10 absolute left-[40px] lg:left-[50px] xl:left-[31px] 2xl:left-[139px] top-[141px] w-[90%] xl:w-[95%] 2xl:w-[82%] pt-[25px] lg:pt-[42px] px-[30px] xl:px-[86px] animate-fade-in flex justify-between' onMouseEnter={() => handleMouseEnter(1)} onMouseLeave={() => handleMouseLeave()}>
                                        <div className='w-[60%] xl:w-[50%]'>
                                            <h6 className="mb-[35px] lg:mb-[48px] font-bold text-[18px] lg:text-[20px] text-[#616161] nunitoBold">Crypto Trading</h6>
                                            <div>
                                                <div className='inline-block w-[210px]'>
                                                    <a className="my-[40px] align-middle text-[#616161] text-[16px] lg:text-[20px] Header_drop_down_a__QcFb6 font-medium hover:text-black hover:underline" href="/market"><img alt="market" className="mr-[10px] w-[43px] inline" src="/market.png" />Market</a>
                                                </div>
                                                <div className='inline-block'>
                                                    <a className="my-[40px] align-middle text-[#616161] text-[16px] lg:text-[20px] Header_drop_down_a__QcFb6 font-medium hover:text-black hover:underline" href="/crt-token"><img alt="security" className="mr-[10px] w-[43px] inline" src="/small-crt.png" />CRT Token</a>
                                                </div>
                                            </div>
                                            <div className='my-[35px] lg:my-[48px]'>
                                                <div className='inline-block min-w-[210px]'>
                                                    <a className="my-[48px] align-middle text-[#616161] text-[16px] lg:text-[20px] Header_drop_down_a__QcFb6 mr-[15px] font-medium hover:text-black hover:underline" href="#"><img alt="fees" className="mr-[10px] w-[43px] inline" src="/fees.png" />Fees &amp; Funding</a>
                                                </div>
                                                <div className='inline-block'>
                                                    <a className="my-[40px] align-middle text-[#616161] text-[16px] lg:text-[20px] Header_drop_down_a__QcFb6 font-medium hover:text-black hover:underline" href="#"><img alt="api" className="mr-[10px] w-[43px] inline" src="/api.png" />API</a>
                                                </div>
                                            </div>
                                        </div>
                                        <div className='w-[40%] xl:w-[50%]'>
                                            <a className="text-[#616161] inline-block font-bold text-[20px] lg:text-[24px] MatterBold Header_drop_down_a__QcFb6 font-medium hover:text-black hover:underline" href="#">Rewards
                                                <img alt="" className="mt-[25px] lg:mt-[10px] w-full" src="/gallery-img3.png" />
                                            </a>
                                        </div>
                                    </div>
                                </>
                            )}
                        </div>
                        <div>
                            <span className='false cursor-pointer text-[#66617f] hover:text-[#66617f] ml-[8px] md:ml-[10px] lg:ml-[15px] xl:ml-[26px]' onMouseEnter={() => handleMouseEnter(2)}
                                onMouseLeave={() => handleMouseLeave()}>
                                Top Traders <img alt="downarrow" className="false ml-[4px] lg:ml-[10px] xl:ml-[15px] w-[8px] lg:w-[10px] xl:w-[12px] inline-block" src="/downarrow.svg" />
                            </span>
                            {activeDropdown === 2 && (
                                <>
                                    <div className='absolute bg-white top-[93px] lg:top-[97px] xl:top-[112px] left-[39px] lg:left-[50px] xl:left-[31px] 2xl:left-[138px] shadow-bottom-only rounded-b-[50px] w-[90%] xl:w-[95%] 2xl:w-[82%] h-[325px] lg:h-[375px] xl:h-[434px] z-10 pb-[30px]' onMouseEnter={() => handleMouseEnter(2)}
                                        onMouseLeave={() => handleMouseLeave()}></div>
                                    <div className='z-10 absolute left-[40px] lg:left-[50px] xl:left-[31px] 2xl:left-[139px] top-[141px]  w-[90%] xl:w-[95%] 2xl:w-[82%] pt-[30px] xl:pt-[42px] px-[30px] xl:px-[86px] animate-fade-in flex justify-between' onMouseEnter={() => handleMouseEnter(2)}
                                        onMouseLeave={() => handleMouseLeave()}>
                                        <div className='w-full'>
                                        <h6 className="mb-[35px] lg:mb-[48px] font-bold text-[18px] lg:text-[20px] text-[#616161] nunitoBold">Cryptoken Board</h6>
                                            <div>
                                                <div className='inline-block'>
                                                <a className="my-[40px] align-middle text-[#616161] text-[16px] lg:text-[20px] Header_drop_down_a__QcFb6 font-medium hover:text-black hover:underline" href="#"><img alt="cryptoken" className="mr-[10px] w-[43px] inline" src="/cryptoken.png" />Leading Earners</a>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </>
                            )}
                        </div>
                        <div>
                            <span className='false cursor-pointer text-[#66617f] hover:text-[#66617f] ml-[8px] md:ml-[10px] lg:ml-[15px] xl:ml-[26px]' onMouseEnter={() => handleMouseEnter(3)}
                                onMouseLeave={() => handleMouseLeave()}>
                                DEX <img alt="downarrow" className="false ml-[4px] lg:ml-[10px] xl:ml-[15px] w-[8px] lg:w-[10px] xl:w-[12px] inline-block" src="/downarrow.svg" />
                            </span>
                            {activeDropdown === 3 && (
                                <>
                                    <div className='absolute bg-white top-[93px] lg:top-[97px] xl:top-[112px] left-[39px] lg:left-[50px] xl:left-[31px] 2xl:left-[138px] shadow-bottom-only rounded-b-[50px] w-[90%] xl:w-[95%] 2xl:w-[82%] h-[280px] lg:h-[327px] xl:h-[375px] z-10 pb-[30px]' onMouseEnter={() => handleMouseEnter(3)}
                                        onMouseLeave={() => handleMouseLeave()}></div>
                                    <div className='z-10 absolute left-[40px] lg:left-[50px] xl:left-[31px] 2xl:left-[139px] top-[141px] justify-between flex py-[20px] lg:py-[30px] xl:py-[40px] px-[25px] lg:px-[40px] xl:px-[60px] w-[90%] xl:w-[95%] 2xl:w-[82%] animate-fade-in' onMouseEnter={() => handleMouseEnter(3)}
                                        onMouseLeave={() => handleMouseLeave()}>
                                        <div className=' text-center w-[254px] h-[174px]'>
                                            <a className="text-[#616161] font-semibold text-[14px] lg:text-[16px] xl:text-[18px] MatterBold block Header_drop_down_a__QcFb6 hover:text-black hover:underline" href="#"><img className="mb-[20px]" src="/komodo-wallet.png" alt="learn" />Komodo Wallet</a>
                                        </div>
                                    </div>
                                </>
                            )}
                        </div>
                        <div>
                            <span className='false cursor-pointer text-[#66617f] hover:text-[#66617f] ml-[8px] md:ml-[10px] lg:ml-[15px] xl:ml-[26px]' onMouseEnter={() => handleMouseEnter(4)}
                                onMouseLeave={() => handleMouseLeave()}>
                                Gift Card <img alt="downarrow" className="false ml-[4px] lg:ml-[10px] xl:ml-[15px] w-[8px] lg:w-[10px] xl:w-[12px] inline-block" src="/downarrow.svg" />
                            </span>
                            {activeDropdown === 4 && (
                                <>
                                    <div className='absolute bg-white top-[93px] lg:top-[97px] xl:top-[112px] left-[39px] lg:left-[50px] xl:left-[31px] 2xl:left-[138px] shadow-bottom-only rounded-b-[50px] w-[90%] xl:w-[95%] 2xl:w-[82%] h-[300px] lg:h-[364px] xl:h-[416px] z-10 pb-[30px]' onMouseEnter={() => handleMouseEnter(4)}
                                        onMouseLeave={() => handleMouseLeave()}></div>
                                    <div className='z-10 absolute left-[40px] lg:left-[50px] xl:left-[31px] 2xl:left-[139px] top-[141px] justify-between flex py-[30px] lg:py-[50px] xl:py-[70px] px-[60px] lg:px-[100px] xl:px-[180px]  w-[90%] xl:w-[95%] 2xl:w-[82%] animate-fade-in' onMouseEnter={() => handleMouseEnter(4)}
                                        onMouseLeave={() => handleMouseLeave()}>
                                        
                                    </div>
                                </>
                            )}
                        </div>
                        <Dropdown
                            overlay={menu}
                            trigger={['click', 'hover']}
                            placement="bottom"
                            className='inline-block ml-[8px] md:ml-[10px] lg:ml-[15px] xl:ml-[20px]'
                        >
                            <div className='cursor-pointer text-[14px] xl:text-[18px]'><img src="/ca.png" alt="ca" className='inline w-[12px] h-[12px] lg:w-[16px] lg:h-[16px] mr-[5px] md:mr-[8px] lg:mr-[10px]' />EN<img alt="downarrow" src="/downarrow.svg" className="ml-[4px] lg:ml-[5px] w-[8px] lg:w-[10px] xl:w-[12px] inline-block" /></div>
                        </Dropdown>
                    </div>
                </div>
            </div>
            <div className='block sm:hidden'>
                <div className='px-[16px] py-[24px] bg-white flex justify-between'>
                    <a href="#"><img alt="" className="inline w-[150px] pt-[9px]" src="/sX.jpg" /></a>
                    <div className='inline-block pt-[8px] text-[18px] Matter text-[#919191]'>
                        <img alt="" src="/ca.png" className="inline w-[24px] h-[24px] mr-[10px]" /><span className="text-black MatterBold">EN</span>/<span className="false">中</span>/<span className="false">FR</span>
                    </div>
                    <div className='pt-[10px]'>
                        <span className="Header_hamburger_box__dO3xB" onClick={() => setIsOpen(!isOpen)}><span className={`${isOpen ? "Header_hamburger_inner_active__eI2HA" : "Header_hamburger_inner__IPaXe"}`}></span></span>
                    </div>
                </div>
            </div>
            <div className={`block sm:hidden px-[16px] h-[1px] animate-fade-in ${isOpen ? "" : "hidden"}`}>
                <div className='border-[#d3d9f7] border-[1px]'></div>
            </div>
            <div className={`block sm:hidden h-[calc(100%-87px)] bg-white overflow-auto  animate-fade-in ${isOpen ? "" : "hidden"}`}>
                <div className='pt-[16px]'>
                    <Collapse
                        accordion
                        expandIcon={({ isActive }) => <img src='/arrow_down_purple.svg' alt='downarrow' className={expandRotateClass(isActive)} />}
                        expandIconPosition='end'
                        ghost
                    >
                        <Panel header="Documents" key="1">
                            <div className='bg-[#F7F5FF] px-[16px] py-[12px]'>
                                <a className="block align-middle mt-[12px] mb-[26px] text-[#616161] font-semibold text-[18px] Header_drop_down_a__QcFb6" href="/market"><img alt="" className="mr-[18px] w-[26px] inline" src="/market.png" />Market</a>
                                <a className="block align-middle mb-[26px] text-[#616161] font-semibold text-[18px] Header_drop_down_a__QcFb6" href="/crt-token"><img alt="" className="mr-[18px] w-[26px] inline" src="/small-crt.png" /><font style={{ verticalAlign: "inherit" }}><font style={{ verticalAlign: "inherit" }}>CRT Token</font></font></a>
                                <a className="block align-middle mb-[26px] text-[#616161] font-semibold text-[18px] Header_drop_down_a__QcFb6" href="#"><img alt="" className="mr-[18px] w-[26px] inline" src="/fees.png" /><font style={{ verticalAlign: "inherit" }}><font style={{ verticalAlign: "inherit" }}>Rate Standard</font></font></a>
                                <a className="block align-middle mb-[26px] text-[#616161] font-semibold text-[18px] Header_drop_down_a__QcFb6" href="#"><img alt="" className="mr-[18px] w-[26px] inline" src="/api.png" /><font style={{ verticalAlign: "inherit" }}><font style={{ verticalAlign: "inherit" }}>API</font></font></a>
                                <a className="text-[#616161] font-semibold mb-[26px] inline-block text-[18px]  w-full Header_drop_down_a__QcFb6" href="#"><font style={{ verticalAlign: "inherit" }}><font style={{ verticalAlign: "inherit" }}>Rewards</font></font></a>
                            </div>
                        </Panel>
                        <Panel header="Top Traders" key="2">
                            <div className='bg-[#F7F5FF] px-[16px] py-[12px]'>
                                <a className="block mb-[24px] align-middle text-[#616161] font-semibold text-[18px]  Header_drop_down_a__QcFb6" href="#"><img alt="cryptoken" className="mr-[10px] w-[26px] inline" src="/cryptoken.png" />Leading Earners</a>
                            </div>
                        </Panel>
                        <Panel header="DEX" key="3">
                            <div className='py-[8px] px-[16px]'>
                                <a className="text-[#616161] font-semibold text-[18px] block Header_drop_down_a__QcFb6" href="#">Komodo Wallet<img className="w-full mt-[12px]" src="/komodo-wallet.png" alt="wallet" /></a>
                            </div>
                        </Panel>
                        <Panel header="Gift Card" key="4">
                            
                        </Panel>
                    </Collapse>
                </div>
            </div>
        </div>
    )
}

export default MenuBar

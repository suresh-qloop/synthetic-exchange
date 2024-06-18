import React from 'react'
import data from '@/data.json';
import Marquee from "react-fast-marquee";

const TopNavbar = () => {
    return (
        <div className='sm:fixed z-50 sm:top-0 sm:left-0 sm:right-0 sm:z-[100] bg-white !border-none !border-0'>
            <div className='flex items-center px-4 py-2 sm:px-12'>
                <img src="/final-logo.png" alt="" className='pr-1 w-9'/>
                <p className='hidden text-lg font-semibold sm:block text-header-2 sm:pr-4 NunitoBold'>Trending</p>
                <div className='flex flex-wrap overflow-x-auto h-7'></div>
                <Marquee pauseOnHover pauseOnClick>
                    {
                        data.data.map(item => (
                            <a key={item.id} href={item.link} className='mx-1 h-7 px-2 py-0.5 bg-light-purple bg-cx-light-purple text-content-1 rounded-[40px] flex items-center justify-between Matter text-base gap-1 cursor-pointer'>
                                <p>{item.id}</p>
                                <img src={item.image} alt="tag-img" className='w-5 h-5' />
                                <p>{item.tag}</p>
                            </a>
                        ))
                    }
                </Marquee>
            </div>
        </div>
    )
}

export default TopNavbar

import React from 'react'

const CRTExchange = () => {
  return (
    <div className='w-full pt-[4px] pb-[20px] bg-[#F7F5FF]'>
        <div className='container mx-auto'>
            <div className='grid grid-cols-1 sm:grid-cols-2 mx-[5%] lg:mx-[4%] xl:mx-0 2xl:mx-[9%]'>
                <div className='flex flex-col items-center justify-center'>
                    <div className='text-[#252526] font-medium text-[20px] sm:text-[24px] lg:text-[28px] xl:text-[34px] mb-[30px]'>
                        <p>One token to find them.</p>
                        <p>One Token to bring them all.</p>
                        <p>A one token to bind them.</p>
                        <p>And on DEX bring them all.</p>
                    </div>
                    <div className='flex justify-center'>
                        <img src="/crt-logo.png" alt="" className='w-[26%] lg:w-[30%]' />
                    </div>
                </div>
                <div>
                    <img src="/news-pc-banner.png" alt="news-banner" />
                </div>
            </div>
        </div>
    </div>
  )
}

export default CRTExchange

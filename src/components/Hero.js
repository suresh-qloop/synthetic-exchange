import React from 'react'
import { Carousel } from 'antd'

const Hero = () => {
  return (
    <div className='bg-[#F7F5FF] xl:w-full px-[40px] xl:px-0'>
      <div className='flex flex-col justify-center items-center Matter container mx-auto pb-[20px] sm:pb-[100px] pt-[60px] sm:pt-0 sm:pr-[50px] xl:pl-[90px] xl:pr-[90px]'>
        <div className='flex flex-col items-center sm:flex-row sm:justify-between lg:mx-[4%] xl:mx-0 2xl:mx-[9%]'>
            <div>
                <div className='flex flex-col' style={{transform: "translate(0px, 0px)", opacity: "1"}}>
                    <div className='text-[30px] lg:text-[45px] font-bold sm:text-left text-center'>
                        Power&#39;d by <span className="text-[30px] lg:text-[45px] font-bold bg-gradient-to-r from-green-500 via-orange-500 to-red-500 bg-clip-text text-transparent">CRT</span> Token <span className="text-[30px] lg:text-[45px] font-normal text-[#6b47ed]">Qtum</span> DeFi.
                    </div>
                    <a href="#" className=" !text-white w-[160px] lg:w-[218px] mt-[30px] lg:mt-[40px]"><div className="hidden sm:flex cursor-pointer bg-[#6B47ED] rounded-full w-[160px] lg:w-[218px] py-3 lg:py-4 justify-center font-semibold text-[14px] lg:text-[18px]" style={{transform: "none"}}>Download App</div></a>
                </div>
            </div>
            {/* carousel */}
            <div>
                <div className='relative w-screen gallery_m px-[20px] block sm:hidden mt-[30px]'>
                    <Carousel dots dotPosition='bottom'>
                        <div style={{ width: "0px"}}>
                        <a href="#"><img className="w-full rounded-[14px]" alt="gallery_img" src="https://virgocx.s3.ca-central-1.amazonaws.com/prod/2024/02/06/e702c4663fc4403187d4f5f84265f6e7.png"/></a>
                        </div>
                        <div style={{ width: "0px"}}>
                        <a href="#"><img className="w-full rounded-[14px]" alt="gallery_img" src="https://virgocx.s3.ca-central-1.amazonaws.com/prod/2024/02/06/e702c4663fc4403187d4f5f84265f6e7.png"/></a>
                        </div>
                        <div style={{ width: "0px"}}>
                        <a href="#"><img className="w-full rounded-[14px]" alt="gallery_img" src="https://virgocx.s3.ca-central-1.amazonaws.com/prod/2024/02/06/e702c4663fc4403187d4f5f84265f6e7.png"/></a>
                        </div>
                        <div style={{ width: "0px"}}>
                        <a href="#"><img className="w-full rounded-[14px]" alt="gallery_img" src="https://virgocx.s3.ca-central-1.amazonaws.com/prod/2024/02/06/e702c4663fc4403187d4f5f84265f6e7.png"/></a>
                        </div>
                        <div style={{ width: "0px"}}>
                        <a href="#"><img className="w-full rounded-[14px]" alt="gallery_img" src="https://virgocx.s3.ca-central-1.amazonaws.com/prod/2024/02/06/e702c4663fc4403187d4f5f84265f6e7.png"/></a>
                        </div>
                        <div style={{ width: "0px"}}>
                        <a href="#"><img className="w-full rounded-[14px]" alt="gallery_img" src="https://virgocx.s3.ca-central-1.amazonaws.com/prod/2024/02/06/e702c4663fc4403187d4f5f84265f6e7.png"/></a>
                        </div>
                    </Carousel>
                </div>
                <div className='gallery relative w-[260px] lg:w-[310px] xl:w-[426px] hidden sm:block'>
                    <div className='absolute w-full h-[120px] lg:h-[155px] xl:h-[180px] maskBefore'></div>
                    <div className='absolute w-full h-[120px] lg:h-[155px] xl:h-[180px] bottom-0 maskAfter'></div>
                    <Carousel 
                        vertical 
                        autoplay 
                        dots
                        dotPosition='right'
                        slidesToShow={3}
                        slidesToScroll={1}
                    >
                        <div>
                            <a href="#"><img className="w-[260px] lg:w-[310px] xl:w-[426px] h-[120px] lg:h-[155px] xl:h-[180px] rounded-[14px]" alt="gallery_img" src="https://virgocx.s3.ca-central-1.amazonaws.com/prod/2024/02/06/e702c4663fc4403187d4f5f84265f6e7.png"/></a>
                        </div>
                        <div>
                            <a href="#"><img className="w-[260px] lg:w-[310px] xl:w-[426px] h-[120px] lg:h-[155px] xl:h-[180px] rounded-[14px]" alt="gallery_img" src="https://virgocx.s3.ca-central-1.amazonaws.com/prod/2024/06/11/859ff43f5e304ee496d5af3a6f623750.png"/></a>
                        </div>
                        <div>
                            <a href="#"><img className="w-[260px] lg:w-[310px] xl:w-[426px] h-[120px] lg:h-[155px] xl:h-[180px] rounded-[14px]" alt="gallery_img" src="https://virgocx.s3.ca-central-1.amazonaws.com/prod/2024/02/06/e702c4663fc4403187d4f5f84265f6e7.png"/></a>
                        </div>
                        <div>
                            <a href="#"><img className="w-[260px] lg:w-[310px] xl:w-[426px] h-[120px] lg:h-[155px] xl:h-[180px] rounded-[14px]" alt="gallery_img" src="https://virgocx.s3.ca-central-1.amazonaws.com/prod/2024/02/06/e702c4663fc4403187d4f5f84265f6e7.png"/></a>
                        </div>
                        <div>
                            <a href="#"><img className="w-[260px] lg:w-[310px] xl:w-[426px] h-[120px] lg:h-[155px] xl:h-[180px] rounded-[14px]" alt="gallery_img" src="https://virgocx.s3.ca-central-1.amazonaws.com/prod/2024/02/06/e702c4663fc4403187d4f5f84265f6e7.png"/></a>
                        </div>
                        <div>
                            <a href="#"><img className="w-[260px] lg:w-[310px] xl:w-[426px] h-[120px] lg:h-[155px] xl:h-[180px] rounded-[14px]" alt="gallery_img" src="https://virgocx.s3.ca-central-1.amazonaws.com/prod/2024/02/06/e702c4663fc4403187d4f5f84265f6e7.png"/></a>
                        </div>
                    </Carousel>
                </div>
            </div>
            {/* button */}
            <div className='block sm:hidden'>
                <a href="#" className="bg-[#6B47ED] flex sm:hidden mt-[46px] cursor-pointer rounded-full w-[218px] py-4 justify-center text-[18px] font-semibold !text-white">Download App</a>
            </div>
        </div>
      </div>
    </div>
  )
}

export default Hero

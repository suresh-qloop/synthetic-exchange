import React from 'react'
import { Carousel } from 'antd'

const Hero = () => {
  return (
    <div className='bg-[#F2F2F2] xl:w-full px-[40px] xl:px-0'>
      <div className='flex flex-col justify-center items-center Matter container mx-auto pb-[20px] sm:pb-[100px] pt-[60px] sm:pt-0 sm:pr-[50px]'>
        <div className='flex flex-col items-center sm:flex-row sm:justify-between lg:mx-[4%] xl:mx-0 2xl:mx-[9%] sm:gap-[20px] xl:gap-[230px] 2xl:gap-[260px]'>
            <div>
                <div className='flex flex-col' style={{transform: "translate(0px, 0px)", opacity: "1"}}>
                    <div className='text-[30px] lg:text-[45px] font-bold sm:text-left text-center ubuntu-bold'>
                        Power&#39;d by <span className="text-[30px] lg:text-[45px] font-bold bg-gradient-to-r from-green-500 via-orange-500 to-red-500 bg-clip-text text-transparent ubuntu-bold">$CRT</span> Token <br /><span className="text-[30px] lg:text-[45px] font-bold text-[#0946F6] ubuntu-bold">Qtum</span> DeFi.
                    </div>
                    <a href="#" className="w-[160px] lg:w-[218px] mt-[30px] lg:mt-[40px]"><div className="hidden sm:flex cursor-pointer bg-[#ff914d] rounded-full w-[160px] lg:w-[218px] py-3 lg:py-4 justify-center font-semibold text-[14px] lg:text-[20px]" style={{transform: "none"}}>Download App</div></a>
                </div>
            </div>
            {/* carousel */}
            <div>
                <div className='relative w-screen gallery_m px-[20px] block sm:hidden mt-[30px]'>
                    <Carousel dots dotPosition='bottom'>
                        <div style={{ width: "0px"}}>
                        <a href="#"><img className="w-full rounded-[14px]" alt="gallery_img" src="gallery-img1.png"/></a>
                        </div>
                        <div style={{ width: "0px"}}>
                        <a href="#"><img className="w-full rounded-[14px]" alt="gallery_img" src="gallery-img2.png"/></a>
                        </div>
                        <div style={{ width: "0px"}}>
                        <a href="#"><img className="w-full rounded-[14px]" alt="gallery_img" src="gallery-img4.png"/></a>
                        </div>
                        <div style={{ width: "0px"}}>
                        <a href="#"><img className="w-full rounded-[14px]" alt="gallery_img" src="gallery-img5.png"/></a>
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
                            <a href="#"><img className="w-[260px] lg:w-[310px] xl:w-[426px] h-[120px] lg:h-[155px] xl:h-[180px] rounded-[14px]" alt="gallery_img" src="gallery-img1.png"/></a>
                        </div>
                        <div>
                            <a href="#"><img className="w-[260px] lg:w-[310px] xl:w-[426px] h-[120px] lg:h-[155px] xl:h-[180px] rounded-[14px]" alt="gallery_img" src="gallery-img2.png"/></a>
                        </div>
                        <div>
                            <a href="#"><img className="w-[260px] lg:w-[310px] xl:w-[426px] h-[120px] lg:h-[155px] xl:h-[180px] rounded-[14px]" alt="gallery_img" src="gallery-img4.png"/></a>
                        </div>
                        <div>
                            <a href="#"><img className="w-[260px] lg:w-[310px] xl:w-[426px] h-[120px] lg:h-[155px] xl:h-[180px] rounded-[14px]" alt="gallery_img" src="gallery-img5.png"/></a>
                        </div>
                    </Carousel>
                </div>
            </div>
            {/* button */}
            <div className='block sm:hidden'>
                <a href="#" className="bg-[#ff914d] flex sm:hidden mt-[46px] cursor-pointer rounded-full w-[218px] py-4 justify-center text-[20px] font-semibold">Download App</a>
            </div>
        </div>
      </div>
    </div>
  )
}

export default Hero

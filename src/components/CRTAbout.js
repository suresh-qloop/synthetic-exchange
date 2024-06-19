import React from 'react'

const CRTAbout = () => {
  return (
    <div className='w-full bg-[#F2F2F2]'>
        <div className='container mx-auto'>
            <div className='flex flex-col sm:flex-row sm:justify-between sm:items-center sm:gap-[15px] lg:gap-[30px] xl:gap-[40px] pt-[65px] pb-[65px] mx-[5%] lg:mx-[4%] xl:mx-0 2xl:mx-[9%]'>
                <div className='hidden sm:block sm:w-[60%]'>
                    <h1 className='text-[19px] lg:text-[25px] xl:text-[34px] text-black font-bold leading-[34px] lg:leading-[43px] xl:leading-[60px] ubuntu-bold'>Synthetic Chain <span className='text-[#6b47ed] ubuntu-bold'>$CRT</span> Token smart contracts<br />Begin with <span className='text-[#6b47ed] ubuntu-bold'>#Qtum</span> Decentralized Finance</h1>
                    <div class=" bg-[#6b47ed] h-[6px] w-[54px] my-[30px] lg:h-[8px] sm:w-[98px] sm:my-[20px] lg:my-[24px]"></div>
                    <div className='text-[#616161] text-[14px] lg:text-[16px] xl:text-[20px] font-medium text-justify'>CRT Token DAO (“Decentralized Autonomous Organization”) is a cutting-edge decentralized framework and educational platform, tailored specifically for the crypto community and digital assets, by leveraging layer 1 blockchain technology based on the Qtum virtual machine and the Qtum cryptocurrency (Ticker $Qtum).</div>
                    <div className='text-[#616161] text-[14px] lg:text-[16px] xl:text-[20px] font-medium mt-[10px] lg:mt-[25px] text-justify'>The CRT Token, a QRC20 tokenized smart contract, tokenized allows user a modular way to transact on Synthetic Exchange without any fees, cryptocurrency futures. Our approach is to help users with volatility management, hedging or speculating on the direction movement of the CRT Token supported pairs like BTC. ETH, BNB, SOL, XNO, LTC, QTUM and PAX G.</div>
                </div>
                <div className='hidden sm:block sm:w-[40%]'>
                    <img src="/device-1.svg" alt="" className='w-full h-auto sm:mt-[70px] lg:mt-[110px] xl:mt-[130px]' />
                </div>
                <div className='block sm:hidden'>
                <h1 className='text-[24px] text-black font-bold leading-[36px] ubuntu-bold'>Synthetic Chain <span className='text-[#6b47ed] ubuntu-bold'>$CRT</span> Token smart contracts<br />Begin with <span className='text-[#6b47ed] ubuntu-bold'>#Qtum</span> Decentralized Finance</h1>
                <div class=" bg-[#6b47ed] h-[6px] w-[54px] my-[25px]"></div>
                <div className='flex justify-center'>
                    <img src="/device-1.svg" alt="" className='w-[85%] h-auto mt-[10px]' />
                </div>
                <div className='text-[#616161] text-[18px] font-medium mt-[30px] text-justify'>CRT Token DAO (“Decentralized Autonomous Organization”) is a cutting-edge decentralized framework and educational platform, tailored specifically for the crypto community and digital assets, by leveraging layer 1 blockchain technology based on the Qtum virtual machine and the Qtum cryptocurrency (Ticker $Qtum).</div>
                <div className='text-[#616161] text-[18px] font-medium mt-[18px] text-justify'>The CRT Token, a QRC20 tokenized smart contract, tokenized allows user a modular way to transact on Synthetic Exchange without any fees, cryptocurrency futures. Our approach is to help users with volatility management, hedging or speculating on the direction movement of the CRT Token supported pairs like BTC. ETH, BNB, SOL, XNO, LTC, QTUM and PAX G.</div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default CRTAbout

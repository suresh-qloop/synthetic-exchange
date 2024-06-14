import React from 'react'

const About = () => {
    return (
        <div className='container w-full mx-auto bg-white'>
            <div className='sm:relative lg:mx-[4%] xl:mx-0 2xl:mx-[9%]'>
                <div className='flex flex-col items-center justify-center mx-auto sm:w-full Matter px-[40px] xl:px-0'>
                    <div className='grid items-center grid-cols-1 gap-[20px] lg:gap-[40px] xl:gap-[80px] sm:grid-cols-12 mb-[64px] sm:mb-[80px]'>
                        <div className='sm:col-span-7'>
                            <div className='text-[22px] lg:text-[30px] xl:text-[34px] font-bold text-[#262626]'>ABOUT US</div>
                            <p className='text-[14px] lg:text-[16px] xl:text-[18px] font-medium text-[#616161] mt-[10px] lg:mt-[20px] xl:mt-[30px] text-justify'>Synthetic Exchange is a decentralized smart contract platform, and non-custodial blockchain that is onboarding new users to Qtum ecosystem. We provide Decentralized Finance solution power&#39;ed by CRT Token, which enables users to place smart contrats on the most popular cryptocurrencies.
                            </p>
                        </div>
                        <div className='sm:col-span-5'>
                            <img src="/img3.png" alt="about" />
                        </div>
                    </div>
                    <div className='grid items-center grid-cols-1 gap-[20px] lg:gap-[40px] xl:gap-[80px] sm:grid-cols-12 lg:mt-[20px] xl:mt-[50px] mb-[64px] sm:mb-[80px]'>
                        <div className='order-2 sm:order-1 sm:col-span-5'>
                            <img src="/img3.png" alt="about" />
                        </div>
                        <div className='order-1 sm:order-2 sm:col-span-7'>
                            <div className='text-[22px] lg:text-[30px] xl:text-[34px] font-bold text-[#262626]'>SYNTHETIC CHAIN</div>
                            <p className='text-[14px] lg:text-[16px] xl:text-[18px] font-medium text-[#616161] mt-[10px] lg:mt-[20px] xl:mt-[30px] text-justify'>Synthetic Chain is QRC20 programmable smart contract, and Qtum supported virtual machine. Providing users with blockchain infrastructure to enter into smart contracts following the (8) leading Cryptocurrencies by the market capitalization, including Bitcoin, Ethereum, Binance, Solana, Nano, Qtum and PAX Gold. Synthetic Chain provides Full Node Qtum systems, ensuring un-interupted decentralized finance by using global standard in AWS to propagate all user transactions in real time. Synthetic Chain does&#39;t not charge fees.
                            </p>
                        </div>
                    </div>
                    <div className='grid items-center grid-cols-1 gap-[20px] lg:gap-[40px] xl:gap-[80px] sm:grid-cols-12 lg:mt-[20px] xl:mt-[50px] mb-[64px] sm:mb-[80px]'>
                        <div className='sm:col-span-7'>
                            <div className='text-[22px] lg:text-[30px] xl:text-[34px] font-bold text-[#262626]'>ELECTRUM WALLET</div>
                            <p className='text-[14px] lg:text-[16px] xl:text-[18px] font-medium text-[#616161] mt-[10px] lg:mt-[20px] xl:mt-[30px] text-justify'>Electrum is an encrypted wallet that allows users to password-protect their Bitcoin and Qtum (fork of utxo blockchain). Users are always in control of their keys and can export and use them in other Bitcoin-supported wallets if required. Synthetic Exchange deploys this technilogy in our application, proving users with a best in class cryptocurrency wallet.
                            </p>
                        </div>
                        <div className='sm:col-span-5'>
                            <img src="/img3.png" alt="about" />
                        </div>
                    </div>
                    <div className='grid items-center grid-cols-1 gap-[20px] lg:gap-[40px] xl:gap-[80px] sm:grid-cols-12 lg:mt-[20px] xl:mt-[50px] mb-[64px] sm:mb-[80px]'>
                        <div className='order-2 sm:order-1 sm:col-span-5'>
                            <img src="/img3.png" alt="about" />
                        </div>
                        <div className='order-1 sm:order-2 sm:col-span-7'>
                            <div className='text-[22px] lg:text-[30px] xl:text-[34px] font-bold text-[#262626]'>Official Partner CoinGecko</div>
                            <p className='text-[14px] lg:text-[16px] xl:text-[18px] font-medium text-[#616161] mt-[10px] lg:mt-[20px] xl:mt-[30px] text-justify'>Synthetic Chain smart contracts deploy user inscribed meta-data onto Qtum blockchain, for the oracles - we rely on CoinGecko API due to their long tenured committement to excellence and significant community contributions to the blockchain industry.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default About



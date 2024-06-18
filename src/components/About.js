import React from 'react'

const About = () => {
    return (
        <div className='container w-full mx-auto bg-white'>
            <div className='sm:relative lg:mx-[4%] xl:mx-0 2xl:mx-[9%]'>
                <div className='flex flex-col items-center justify-center mx-auto sm:w-full Matter px-[40px] xl:px-0'>
                    <div className='grid items-center grid-cols-1 gap-[20px] lg:gap-[40px] xl:gap-[80px] sm:grid-cols-12 mb-[64px] sm:mb-[80px]'>
                        <div className='sm:col-span-7'>
                            <div className='text-[22px] lg:text-[30px] xl:text-[34px] font-bold text-[#262626]'>ABOUT US</div>
                            <p className='text-[14px] lg:text-[16px] xl:text-[18px] font-medium text-[#616161] mt-[10px] lg:mt-[20px] xl:mt-[30px] text-justify'>Synthetic Exchange operates as a decentralized smart contract platform and non-custodial blockchain, currently welcoming new users into the Qtum ecosystem. Our platform offers a Decentralized Finance (DeFi) solution powered by the CRT Token, empowering users to deploy smart contracts on major cryptocurrencies seamlessly.
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
                            <p className='text-[14px] lg:text-[16px] xl:text-[18px] font-medium text-[#616161] mt-[10px] lg:mt-[20px] xl:mt-[30px] text-justify'>Synthetic Chain is a QRC20 programmable smart contract platform supported by the Qtum virtual machine. It offers users a smart chain infrastructure to engage in ‘option’ contracts on the top 8 cryptocurrencies by market capitalization. Price oracles are used to execute value of the synthetic contracts, supporting top (8) cryptocurrencies such as Bitcoin, Ethereum, Binance Coin, Solana, Nano, Qtum, and PAX Gold. standards to propagate all user transactions in real-time. Notably, Synthetic Chain does not charge any fees, and relies on Qtum blockchain and virtual machine to derive its utility.
                            </p>
                        </div>
                    </div>
                    <div className='grid items-center grid-cols-1 gap-[20px] lg:gap-[40px] xl:gap-[80px] sm:grid-cols-12 lg:mt-[20px] xl:mt-[50px] mb-[64px] sm:mb-[80px]'>
                        <div className='sm:col-span-7'>
                            <div className='text-[22px] lg:text-[30px] xl:text-[34px] font-bold text-[#262626]'>ELECTRUM WALLET</div>
                            <p className='text-[14px] lg:text-[16px] xl:text-[18px] font-medium text-[#616161] mt-[10px] lg:mt-[20px] xl:mt-[30px] text-justify'>Electrum is a blockchain wallet that enables a password-encrypted, institutional grade Bitcoin and Qtum (a fork of the UTXO blockchain) support, which is open source!With our implementation of Electrum, our users may retain full control of their keys and access their holdings from anywhere. Synthetic Exchange wallet modules platform, supports both Qtum and CRT-QRC20 wallet experience. CRT token smart contracts are seamlessly integrated with user wallets.
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
                            <p className='text-[14px] lg:text-[16px] xl:text-[18px] font-medium text-[#616161] mt-[10px] lg:mt-[20px] xl:mt-[30px] text-justify'>Synthetic Chain&#39;s smart contracts contain user embed metadata, including price oracles onto Qtum virtual machine with every transaction, making Synthetic Chain a digital utility. We leverage the CoinGecko API, known for its longstanding commitment to excellence and substantial contributions to our blockchain community. 
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default About



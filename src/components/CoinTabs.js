'use client'
import React, { useEffect, useState } from 'react'
import { Tabs, ConfigProvider } from 'antd'

const CoinTabs = () => {

    const [data, setData] = useState(null);
    const [activeKey, setActiveKey] = useState('1');

    useEffect(() => {
        const fetchData = async () => {

            try {
                const response = await fetch('/api/cryptoprices', {
                    method: 'GET',
                    headers: {
                        'Cache-Control': 'no-store, no-cache, must-revalidate, proxy-revalidate',
                        'Pragma': 'no-cache',
                        'Expires': '0'
                    }
                });
                if (!response.ok) {
                    throw new Error('Network response was not ok');
                }
                const result = await response.json();
                setData(result)
            } catch (error) {
                console.log(error)
            }
        }
        fetchData();

    }, [])

    const TabLabel = ({ image, symbol, id }) => {
        return (
            <div className='w-full flex flex-col items-center mr-[28px] lg:mr-[60px] pb-[20px] lg:pb-[28px] relative'>
                <img src={image} alt="" className='rounded-full w-7 h-7' />
                {activeKey === id && <img src="/coinBack.svg" alt="spin" className='absolute animate-spin w-[40px] top-[-6px] !opacity-100' />}
                <span className={`uppercase text-[20px] leading-[28px] mt-[9px] !font-medium ${activeKey === id ? "text-black" : "text-[#616161]"}`}>{symbol}</span>
            </div>
        )
    }

    return (
        <div className='bg-white rounded-t-[40px] sm:h-[226px]'>
            <div className='container mx-auto h-[100%] pb-[25px]'>
                <div className='lg:mx-[4%] xl:mx-0 2xl:mx-[9%] h-[100%] flex items-end justify-center'>
                    <ConfigProvider
                        theme={{
                            components: {
                                Tabs: {
                                    inkBarColor: '#6B47ED'
                                }
                            }
                        }}
                    >
                        <Tabs
                            defaultActiveKey='1'
                            centered
                            onChange={(key) => setActiveKey(key)}
                            items={data?.map((item, index) => {
                                const id = String(index + 1);
                                return {
                                    label: <TabLabel image={item.image} symbol={item.symbol} id={id} />,
                                    key: id
                                }
                            })}
                        />
                    </ConfigProvider>
                </div>
            </div>
        </div>
    )
}

export default CoinTabs


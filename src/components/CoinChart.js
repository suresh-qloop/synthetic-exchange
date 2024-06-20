'use client'
import React, { useEffect, useRef } from 'react'

const CoinChart = ({ activeIndex, symbol }) => {
    const container = useRef(null);

    useEffect(() => {

        if (container.current) {
            container.current.innerHTML = '';
        }

        const script = document.createElement("script");
        script.src =
            "https://s3.tradingview.com/external-embedding/embed-widget-advanced-chart.js";
        script.type = "text/javascript";
        script.async = true;
        script.innerHTML = JSON.stringify({
            symbol: symbol,
            interval: "15",
            timezone: "Etc/UTC",
            theme: "light",
            style: "1",
            locale: "en",
            allow_symbol_change: true,
            calendar: false,
            support_host: "https://www.tradingview.com",
        });

        container.current.appendChild(script);
    }, [symbol]);

    return (
        <div className={`tradingview-widget-container !w-[100%] !h-[400px] lg:!h-[520px] xl:!h-[570px] ${(activeIndex === 0 || activeIndex === 1) ? "" : "hidden"}`} ref={container}>
            <div className="tradingview-widget-container__widget" style={{ height: "100%", width: "100%" }}></div>
        </div>
    )
}

export default CoinChart

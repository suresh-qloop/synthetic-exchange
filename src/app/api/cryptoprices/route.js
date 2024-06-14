import { NextResponse } from "next/server";

export async function GET() {
    const url = 'https://pro-api.coingecko.com/api/v3/coins/markets?vs_currency=cad&ids=bitcoin%2Cethereum%2Cbinance-coin-wormhole%2Cnano%2Cqtum%2Csolana%2Cpax-gold&precision=2';
    const options = {
        method: 'GET',
        headers: {
            accept: 'application/json',
            'x-cg-pro-api-key': `${process.env.NEXT_COINGECKO_API_KEY}`,
            'Cache-Control': 'no-store, no-cache, must-revalidate, proxy-revalidate',
            'Pragma': 'no-cache',
            'Expires': '0'
        }
    }

    try {
        const response = await fetch(url, options);
        if (!response.ok) {
            throw new Error('Network response was not ok');
        }
        const data = await response.json();
        return NextResponse.json(data);
    } catch (error){
        return NextResponse.json({ error: error.message }, { status: 500 });
    }
}
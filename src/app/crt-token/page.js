import CRTAbout from '@/components/CRTAbout'
import CRTExchange from '@/components/CRTExchange'
import CoinTabs from '@/components/CoinTabs'
import Footer from '@/components/Footer'
import MenuBar from '@/components/MenuBar'
import TopNavbar from '@/components/TopNavbar'
import React from 'react'

const page = () => {
  return (
    <div>
        <TopNavbar />
        <MenuBar />
        <CRTExchange />
        <CoinTabs />
        <CRTAbout />
        <Footer />
    </div>
  )
}

export default page

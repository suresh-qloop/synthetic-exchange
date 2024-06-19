import Footer from '@/components/Footer'
import Market from '@/components/Market'
import MenuBar from '@/components/MenuBar'
import TopNavbar from '@/components/TopNavbar'
import React from 'react'

const page = () => {
  return (
    <div>
        <TopNavbar />
        <MenuBar />
        <Market />
        <Footer />
    </div>
  )
}

export default page

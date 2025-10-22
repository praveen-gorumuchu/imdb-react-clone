import Footer from '@/components/footer/footer'
import Header from '@/components/header/header'
import React from 'react'
import { Outlet } from 'react-router-dom'

export default function Layout() {
  return (
    <div>
        <Header></Header>
        <div className=''>
        <main> <Outlet/> </main>
        </div>
        <Footer></Footer>
    </div>
  )
}

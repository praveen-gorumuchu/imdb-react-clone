import { FooterMenuList } from '@/constants/menu-constant'
import React from 'react'
import { Link } from 'react-router-dom';

export default function Footer() {
    const menuList = FooterMenuList;
  return (
    <footer className='left-0 w-full p-5 footer-section bg-neutral-50'>
        <div className='container flex justify-center'>
            {
                menuList.map((list:any, index:number) => (
                    <Link to={list.url} key={index} className='p-3'> {list.name} </Link>
                ))
            }
        </div>
    </footer>
  )
}

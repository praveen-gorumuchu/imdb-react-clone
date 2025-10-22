import React from 'react'
import './loading.scss';

export default function Loading() {
  return (
    <section className='absolute inset-0 flex justify-center w-full m-auto align-middle loading-section'>
        <div className=''>
        <img src="/src/assets/loading.gif" alt="" />
        <h3 className='font-bold text-center'>Loading...</h3>
        </div>
    </section>
  )
}

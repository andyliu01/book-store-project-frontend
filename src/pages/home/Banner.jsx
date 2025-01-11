import React from 'react'

import bannerImg from "../../assets/banner.png"

const Banner = () => {
  return (
    <div className='flex flex-col md:flex-row-reverse py-16 justify-between items-center gap-12'>
      <div className='md:w-1/2 w-full flex items-center md:justify-end'>
        <img src={bannerImg} alt="" />
      </div>

      <div className='md:w-1/2 w-full'>
        <h1 className='md:text-5xl text-2xl font-medium mb-7'>書店門市活動優惠</h1>
        <p className='mb-10'>會員權益信每月10號(遇例假日則往後順延一天)出刊，專屬權益、消費通知即時了解消費狀況。特刊中心不定期出刊，會員獨享最新活動、個人選品/優惠訊息通知。</p>

        <button className='btn-primary'>Subscribe</button>
      </div>


    </div>
  )
}

export default Banner
import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { Pagination, Navigation } from 'swiper/modules';

import news1 from "../../assets/news/news-1.png"
import news2 from "../../assets/news/news-2.png"
import news3 from "../../assets/news/news-3.png"
import news4 from "../../assets/news/news-4.png"
import { Link } from 'react-router-dom';

const news = [
  {
    "id": 1,
    "title": "古典音樂百科",
    "description": "這本古典音樂書是對音樂理論、重要作曲家和開創性作品的影響進行深入淺出的介紹、針對該主題感興趣的成年人和希望獲得更多知識的學子們、都可以在這裡透過激勵人心的文字和大膽的圖形、發現從早期到現代著名作曲家的90多部作品。",
    "image": news1
  },
  {
    "id": 2,
    "title": "智慧建築評估手冊",
    "description": "為促進建築與資通訊產業整合、鼓勵善用資通訊主動感知技術、使建築物於使用階段的日常營運更具智慧、本所於93年建立「智慧建築標章」制度、內政部訂定發布「智慧建築標章申請審核認可及使用作業要點」、明定「智慧建築評估手冊」為評定基準。",
    "image": news2
  },
  {
    "id": 3,
    "title": "劇場技術手冊",
    "description": "全書分為七個章節：工具、五金零件、材料、電工電料、施工數學、建築及劇場。原書在美國出版後、不但被外國劇場教育界列為學生必備之書、也在專業劇場界成為解決爭議的聖經。",
    "image": news3
  },
  {
    "id": 4,
    "title": "我在拍電影時思考的事",
    "description": "本書是是枝裕和1987年從早稻田畢業開始拍攝紀錄片至今將近30年的創作生涯回顧、從紀錄片、電視劇、到電影、內容也逐漸從對社會議題的關注轉移到以日常生活片段探索家庭、回憶對人的意義。",
    "image": news4
  }

]

const News = () => {
  return (
    <div className='py-16'>
      <h2 className='text-3xl font-semibold mb-6'>精選好書</h2>

      <Swiper
        slidesPerView={1}
        spaceBetween={30}
        navigation={true}
        breakpoints={{
          640: {
            slidesPerView: 1,
            spaceBetween: 20,
          },
          768: {
            slidesPerView: 2,
            spaceBetween: 40,
          },
          1024: {
            slidesPerView: 2,
            spaceBetween: 50,
          },
        }}
        modules={[Pagination, Navigation]}
        className="mySwiper"
      >

        {
          news.map((item, index) => (
            <SwiperSlide key={index}>
              <div className='flex flex-col sm:flex-row sm:justify-between items-center gap-12'>
                {/* content */}
                <div className='py-4'>
                  <Link to="/">
                    <h3 className='text-lg font-medium hover:text-blue-500 mb-4'>{item.title}</h3>
                  </Link>
                  <div className='w-12 h-[4px] bg-primary mb-5'></div>
                  <p className='text-sm text-gray-600'>{item.description}</p>
                </div>

                <div className='flex-shrink-0'>
                  <img src={item.image} alt="" className='w-full object-cover' />
                </div>
              </div>
            </SwiperSlide>
          ))
        }
      </Swiper>
    </div>
  )
}

export default News
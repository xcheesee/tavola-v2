'use client'

import { useEffect } from "react"
import { Splide, SplideSlide } from '@splidejs/react-splide'
import '@splidejs/react-splide/css'

export default function Home() {

  return (
    <div className="h-full">
            <div className="w-full h-full grid items-center">
                <div className="w-[700px] h-[400px] self-center justify-self-center">
                    <Splide className="">
                        <SplideSlide >
                                <img src="https://picsum.photos/1920/1080" alt="" className="w-full h-full object-cover"/>
                        </SplideSlide>
                        <SplideSlide >
                                <img src="https://picsum.photos/2000/1080" alt="" className="w-full h-full object-cover"/>
                        </SplideSlide>
                    </Splide>
                </div>
            </div>
    </div>
  )
}

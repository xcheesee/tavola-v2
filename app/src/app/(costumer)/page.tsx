'use client'

import StyledHero from '@/components/styledHero'
import { HeroItem } from '@/utils/types'
import '@splidejs/react-splide/css'
import { Eagle_Lake as Almendra } from 'next/font/google'
import { useEffect, useState } from 'react'

export const almendra = Almendra({ 
    subsets: ['latin'],
    weight: '400'
})

export default function Home() {
    const [test, setTest] = useState(0)

    const heroVals: HeroItem[] = [
        {
            title: "Deleite-se com o Sabor",
            description: "uma fusão encantadora de ervas e especiarias raras, marinadas nos melhores destilados, e servidas com um toque de mistério. Da primeira mordida até o último pedaco, você será transportado a um reino onde cada sentido é aguçado, cada sabor é uma aventura. Embarque em uma jornada mística com uma única mordida.",
            src: "https://s1.1zoom.me/b5071/951/Fast_food_Hamburger_Buns_French_fries_Vegetables_566270_1920x1080.jpg",
            c2a: "Pedir Agora"
        },
        {
            title: "O Tesouro no Fim da Aventura",
            description: "De banquetes substanciosos a delícias delicadas, nosso cardápio é um testemunho de nossa dedicação à qualidade e inovação. Com uma variedade diversificada de pratos meticulosamente elaborados para atender a todos os paladares, você encontrará uma sinfonia de sabores esperando para serem descobertos.",
            src: "https://e1.pxfuel.com/desktop-wallpaper/617/911/desktop-wallpaper-beer-mug-food-foam-cutting-board-meat-products-churrasco-thumbnail.jpg",
            c2a: "Ver Menu"
        },
        {
            title: "Além da Comida",
            description: "não servimos apenas comida; criamos experiências. Nossa filosofia está enraizada na crença de que uma refeição é mais do que sustento - é uma ponte que conecta culturas, uma tela para a criatividade e uma homenagem à tradição.",
            src: "https://c4.wallpaperflare.com/wallpaper/413/702/427/fantasy-art-pointed-ears-tavern-candles-wallpaper-preview.jpg",
            c2a: "Sobre Nos"
        }
    ]

    useEffect(() => {
        let count = 1
        let last = heroVals.length
        setInterval(() => {
            setTest(count % last)
            count++
        }, 5000)
    }, [])

  return (
    <div className="h-full">
            <div className="w-full h-full grid">
                <div className='h-[calc(100vh-5rem)]  relative overflow-x-hidden'>
                    <div className='absolute w-full h-full'>
                        <div className='absolute bg-black w-full h-full opacity-50'></div>
                        <img src="/bg1.png" alt="" className='w-full h-full object-cover'/>
                    </div>

                    <div 
                        className={`h-full w-full grid content-center transition-all duration-1000 `}
                        style={{transform: `translateX(-${test * 100}%`}}
                    >
                        <div className='flex h-[600px] -translate-y-8 content-center'>
                            {heroVals.map( ele => {
                                return(
                                    <div className='grid justify-center content-center w-screen flex-none content-center'>
                                        <StyledHero {...ele} />
                                    </div>
                                )
                            })}
                        </div>
                    </div>
                        
                </div>
            </div>
    </div>
  )
}

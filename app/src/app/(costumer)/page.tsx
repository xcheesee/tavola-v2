'use client'

import '@splidejs/react-splide/css'
import { Eagle_Lake as Almendra } from 'next/font/google'

export const almendra = Almendra({ 
    subsets: ['latin'],
    weight: '400'
})
export default function Home() {

  return (
    <div className="h-full">
            <div className="w-full h-full grid">
                <div className="hero h-screen bg-neutral-300 relative">
                    <div className='absolute  w-full h-3/5 -top-20'>
                        <div className='absolute bg-black w-full h-full opacity-70'></div>
                        <img src="https://wallpapercave.com/wp/wp2361253.jpg" alt="" className='w-full h-full object-fill'/>
                    </div>
                    <div className="hero-content relative rounded-xl flex-col lg:flex-row-reverse">
                        <div className='absolute h-full w-full'>
                            <img src="/papiro3.png" alt="" className='w-full h-full object-fill' />
                        </div>
                        <div className='flex-[2_2_0%] z-10 pr-16 py-16'>
                            <img src="https://s1.1zoom.me/b5071/951/Fast_food_Hamburger_Buns_French_fries_Vegetables_566270_1920x1080.jpg" className="rounded-lg shadow-2xl" />
                        </div>
                        <div className='self-center flex-1 text-slate-900 z-10 pl-16 py-8'>
                            <h1 className={`text-5xl font-bold ${almendra.className}`}>Deleite-se com o Sabor</h1>
                            <p className="py-6 font-serif text-lg">uma fusão encantadora de ervas e especiarias raras, marinadas nos melhores destilados, e servidas com um toque de mistério. Da primeira mordida até o último pedaco, você será transportado a um reino onde cada sentido é aguçado, cada sabor é uma aventura. Embarque em uma jornada mística com uma única mordida.</p>
                            <button className="btn bg-yellow-950">Pedir Agora</button>
                        </div>
                    </div>
                </div>
                <div className="hero h-full bg-neutral-300">
                    <div className="hero-content rounded-xl relative flex-col lg:flex-row-reverse">
                        <div className='absolute h-full w-full'>
                            <img src="/papiro3.png" alt="" className='w-full h-full object-fill' />
                        </div>
                        <div className='self-center flex-1 z-10 pr-16 py-16 text-slate-900'>
                            <h1 className={`text-5xl font-bold ${almendra.className}`}>O Tesouro no Fim da Aventura</h1>
                            <p className="py-6 font-serif text-lg">De banquetes substanciosos a delícias delicadas, nosso cardápio é um testemunho de nossa dedicação à qualidade e inovação. Com uma variedade diversificada de pratos meticulosamente elaborados para atender a todos os paladares, você encontrará uma sinfonia de sabores esperando para serem descobertos.</p>
                            <button className="btn bg-yellow-950">Ver Menu</button>
                        </div>
                        <div className='flex-[2_2_0%] z-10 pl-16 py-16'>
                            <img src="https://e1.pxfuel.com/desktop-wallpaper/617/911/desktop-wallpaper-beer-mug-food-foam-cutting-board-meat-products-churrasco-thumbnail.jpg" className="rounded-lg shadow-2xl h-full w-full object-fill" />
                        </div>
                    </div>
                </div>
                <div className="hero h-full bg-neutral-800 py-8">
                    <div className="hero-content relative bg-base-900 rounded-xl flex-col lg:flex-row-reverse">
                        <div className='absolute h-full w-full'>
                            <img src="/papiro3.png" alt="" className='w-full h-full object-fill' />
                        </div>
                        <div className='flex-[2_2_0%] z-10 pr-16 py-16'>
                            <img src="https://c4.wallpaperflare.com/wallpaper/413/702/427/fantasy-art-pointed-ears-tavern-candles-wallpaper-preview.jpg" className="rounded-lg shadow-2xl h-full w-full object-fill" />
                        </div>
                        <div className='self-center flex-1 z-10 pl-16 py-8 text-slate-900'>
                            <h1 className={`text-5xl font-bold ${almendra.className}`}>Além da Comida</h1>
                            <p className="py-6 font-serif text-lg">não servimos apenas comida; criamos experiências. Nossa filosofia está enraizada na crença de que uma refeição é mais do que sustento - é uma ponte que conecta culturas, uma tela para a criatividade e uma homenagem à tradição.</p>
                            <button className="btn bg-yellow-950">Sobre Nos</button>
                        </div>
                    </div>
                </div>
                <footer className="footer footer-center p-4 bg-neutral-900 text-base-content">
                  <div>
                    <p>Copyright © 2023 - All right reserved by ReiDoSexo Industries Ltd</p>
                  </div>
                </footer>
            </div>
    </div>
  )
}

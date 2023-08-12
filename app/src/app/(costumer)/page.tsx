'use client'

import '@splidejs/react-splide/css'

export default function Home() {

  return (
    <div className="h-full">
            <div className="w-full h-full grid">
                <div className="hero h-[calc(100vh-80px)] landing">
                    <div className="hero-content relative rounded-xl flex-col lg:flex-row-reverse">
                        <div className='absolute h-full w-full'>
                            <img src="/papiro.png" alt="" className='w-full h-full object-fill' />
                        </div>
                        <div className='flex-[2_2_0%] z-10 p-8'>
                            <img src="https://s1.1zoom.me/b5071/951/Fast_food_Hamburger_Buns_French_fries_Vegetables_566270_1920x1080.jpg" className="rounded-lg shadow-2xl" />
                        </div>
                        <div className='self-center flex-1 text-slate-900 z-10 p-8'>
                            <h1 className="text-5xl font-bold">Deleite-se com o Sabor</h1>
                            <p className="py-6">uma fusão encantadora de ervas e especiarias raras, marinadas nos melhores destilados, e servidas com um toque de mistério. Da primeira mordida até o último pedaco, você será transportado a um reino onde cada sentido é aguçado, cada sabor é uma aventura. Embarque em uma jornada mística com uma única mordida.</p>
                            <button className="btn bg-yellow-950">Pedir Agora</button>
                        </div>
                    </div>
                </div>
                <div className="hero h-full bg-slate-900 py-8">
                    <div className="hero-content rounded-xl relative flex-col lg:flex-row-reverse">
                        <div className='absolute h-full w-full'>
                            <img src="/papiro.png" alt="" className='w-full h-full object-fill' />
                        </div>
                        <div className='self-center flex-1 z-10 p-8 text-slate-900'>
                            <h1 className="text-5xl font-bold">O Tesouro no Fim da Aventura</h1>
                            <p className="py-6">De banquetes substanciosos a delícias delicadas, nosso cardápio é um testemunho de nossa dedicação à qualidade e inovação. Com uma variedade diversificada de pratos meticulosamente elaborados para atender a todos os paladares, você encontrará uma sinfonia de sabores esperando para serem descobertos.</p>
                            <button className="btn bg-yellow-950">Ver Menu</button>
                        </div>
                        <div className='flex-[2_2_0%] z-10 p-8'>
                            <img src="https://e1.pxfuel.com/desktop-wallpaper/617/911/desktop-wallpaper-beer-mug-food-foam-cutting-board-meat-products-churrasco-thumbnail.jpg" className="rounded-lg shadow-2xl h-full w-full object-fill" />
                        </div>
                    </div>
                </div>
                <div className="hero h-full bg-slate-100 py-8">
                    <div className="hero-content relative bg-base-900 rounded-xl flex-col lg:flex-row-reverse">
                        <div className='absolute h-full w-full'>
                            <img src="/papiro.png" alt="" className='w-full h-full object-fill' />
                        </div>
                        <div className='flex-[2_2_0%] z-10 p-8'>
                            <img src="https://c4.wallpaperflare.com/wallpaper/413/702/427/fantasy-art-pointed-ears-tavern-candles-wallpaper-preview.jpg" className="rounded-lg shadow-2xl h-full w-full object-fill" />
                        </div>
                        <div className='self-center flex-1 z-10 p-8 text-slate-900'>
                            <h1 className="text-5xl font-bold">Além da Comida</h1>
                            <p className="py-6">não servimos apenas comida; criamos experiências. Nossa filosofia está enraizada na crença de que uma refeição é mais do que sustento - é uma ponte que conecta culturas, uma tela para a criatividade e uma homenagem à tradição.</p>
                            <button className="btn bg-yellow-950">Sobre Nos</button>
                        </div>
                    </div>
                </div>
                <footer className="footer footer-center p-4 bg-base-300 text-base-content">
                  <div>
                    <p>Copyright © 2023 - All right reserved by TR Industries Ltd</p>
                  </div>
                </footer>
            </div>
    </div>
  )
}

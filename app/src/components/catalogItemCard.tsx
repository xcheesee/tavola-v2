import { Almendra } from 'next/font/google'

export const almendra = Almendra({ 
    subsets: ['latin'],
    weight: '700',
    
})

export default function CatalogItemCard() {
    return(
        <div className="w-[380px] h-[300px] bg-neutral-500 rounded-xl relative overflow-hidden">
            <div className='w-full h-full absolute'>
                <img src="https://www.cnnbrasil.com.br/wp-content/uploads/sites/12/2022/12/hamburguer-unsplash.jpg?w=876&h=484&crop=1" alt="" className='w-full h-full object-fit'/>
            </div>
            <div className="absolute w-full h-full translate-y-3/4 hover:transform-none opacity-80 hover:opacity-70 rounded-t-xl transition-all z-10">
                <span className="absolute bg-black w-full h-full hover:opacity-50 transition-all rounded-t-xl bg"></span>
                <div className="absolute grid w-full h-full grid-rows-[max-content_1fr] z-10 px-4">
                    <h1 className={`pt-4 pb-8 ${almendra.className} text-3xl`}>O Guerreiro</h1>
                    <p>Um hambúrguer poderoso e saboroso que irá satisfazer sua fome como um guerreiro de verdade! Este hambúrguer vem com um pão macio e uma carne bovina suculenta de 180g, com queijo cheddar derretido por cima. Além disso, tem rodelas de tomate, folhas de alface, cebola caramelizada e molho barbecue para um sabor marcante e robusto.</p>
                </div>
            </div>
        </div>
    )
}
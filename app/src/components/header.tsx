import Link from "next/link"
import { Icon } from '@iconify-icon/react'

export default function Header() {
    return(
        <nav className="flex justify-around relative w-full  z-10 ">
            <div className="absolute w-full h-full backdrop-blur-3xl header-mask"></div>
            <div className="flex flex-1 relative pt-4">

            <div className="flex flex-1 justify-around z-20">
                <div className="px-4 self-center h-[64px] h-[64px]">
                    <img src="/tower-of-babel.png" alt="" className="w-full h-full"/>
                </div>
                <div className="flex flex-1 justify-around">
                    <Link href={'/catalog'}>
                        <div className="btn bg-yellow-950">Cardapio</div>
                    </Link>
                    <Link href={'/'}>
                        <div className="btn bg-yellow-950">Endereco</div>
                    </Link>
                </div>
            </div>
            <div className="rounded-full border-4 border-yellow-950 overflow-hidden absolute top-1/6 right-1/2 translate-x-1/2 w-24 h-24 max-xl:hidden z-20">
                <img src="/logo.jpeg" alt="" className="w-36 h-36 object-cover"/>
            </div>
            <div className="flex flex-1 justify-around z-20">
                <div className="flex flex-1 justify-around">
                    <Link href={'/'}>
                        <div className="btn bg-yellow-950">Contato</div>
                    </Link>
                    <Link href={'/'}>
                        <div className="btn bg-yellow-950">Sobre nos</div>
                    </Link>
                </div>
                <div className="flex gap-4 px-4">
                    <button className="btn bg-yellow-950">
                        <Icon icon="mdi:user" width={24}/>
                    </button>
                    <button className="btn bg-yellow-950">
                        <Icon icon="mdi:cart" width={24}/>
                    </button>
                </div>
            </div>
            </div>
        </nav>
    )
}
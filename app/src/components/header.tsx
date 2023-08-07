import Link from "next/link"

export default function Header() {
    return(
        <nav className="bg-neutral-500 flex justify-around w-full relative py-2">
            <div className="flex flex-1 justify-around">
                <div className="px-4 self-center">image</div>
                <div className="flex flex-1 justify-around">
                    <Link href={'/catalog'}>
                        <div className="btn">Cardapio</div>
                    </Link>
                    <Link href={'/'}>
                        <div className="btn">Endereco</div>
                    </Link>
                </div>
            </div>
            <div className="border border-red-500 rounded-full absolute top-1/6 w-24 h-24 max-xl:hidden">image</div>
            <div className="flex flex-1 justify-around">
                <div className="flex flex-1 justify-around">
                    <Link href={'/'}>
                        <div className="btn">Contato</div>
                    </Link>
                    <Link href={'/'}>
                        <div className="btn">Sobre nos</div>
                    </Link>
                </div>
                <div className="flex gap-4 px-4">
                    <button className="btn">U</button>
                    <button className="btn">C</button>
                </div>
            </div>
        </nav>
    )
}
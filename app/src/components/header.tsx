export default function Header() {
    return(
        <nav className="bg-neutral-500 flex justify-around w-full absolute py-2 mb-8">
            <div className="flex flex-1 justify-around">
                <div className="px-4 self-center">image</div>
                <div className="flex flex-1 justify-around">
                    <button className="btn">Cardapio</button>
                    <button className="btn">Endereco</button>
                </div>
            </div>
            <div className="border border-red-500 rounded-full absolute top-1/6 w-24 h-24 max-xl:hidden">image</div>
            <div className="flex flex-1 justify-around">
                <div className="flex flex-1 justify-around">
                    <button className="btn">Contato</button>
                    <button className="btn">Sobre Nos</button>
                </div>
                <div className="flex gap-4 px-4">
                    <button className="btn">U</button>
                    <button className="btn">C</button>
                </div>
            </div>
        </nav>
    )
}
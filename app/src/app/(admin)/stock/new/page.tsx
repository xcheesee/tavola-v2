import ProdutoForm from '@/components/produtoForm'
export default function Page() {

    return(
        <div className="grid grid-cols-1 justify-items-center items-center w-full h-full">
            <div className="bg-slate-100 lg:w-2/3 w-full rounded-xl drop-shadow-2xl pb-8">
                <ProdutoForm title='Adicionar Produto' action="add" />
            </div>
        </div>
    )
}
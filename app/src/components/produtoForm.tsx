'use client'

import { postProduto, putProduto } from "@/utils/api"
import { Icon } from "@iconify-icon/react/dist/iconify.js"
import Link from "next/link"
import { useRouter } from "next/navigation"

export default function ProdutoForm({ title="", produto={}, action }: { title: string, produto?: any, action: string }) {
    const router = useRouter()

    async function sendProduto({event, action}: {event: React.FormEvent<HTMLFormElement>, action: string}) {
        const formData = new FormData(event.currentTarget)
        let res;
        if (action === "add") {
            res = await postProduto({formData: formData})
        } else {
            res = await putProduto({formData: formData, id: produto.id})
        }

        if(res.ok) {
            router.push('/stock')
        }
    }

    return(
        <form onSubmit={(e) => {
            e.preventDefault()

            sendProduto({event: e, action: action })
        }}>
            <div className="text-3xl text-slate-700 pb-16 p-4 flex items-center">
                <Link href={'/stock'}>
                    <button className='flex items-center btn rounded-full p-2' >
                        <Icon icon="mdi:chevron-left" width={32}/>
                    </button>
                </Link>
                {title}
            </div>
            <div className="px-4 grid grid-cols-1 gap-8">
                <input 
                    type="text" 
                    placeholder="Nome" 
                    className="input input-bordered w-full" 
                    name='nome'
                    defaultValue={produto.nome ?? ""}
                />

                <input 
                    type="text" 
                    placeholder="Descricao" 
                    className="input input-bordered w-full" 
                    name='descricao'
                    defaultValue={produto.descricao ?? ""}
                />

                <div className="join w-full">
                    <div className="join-item flex items-center bg-slate-300 px-4 font-bold">R$</div>
                    <input 
                        type="text" 
                        placeholder="Valor" 
                        className="input input-bordered join-item w-full" 
                        name="valor"
                        defaultValue={produto.valor ?? ""}
                    />
                </div>

                <select 
                    className="select select-bordered w-full [&>*]:font-sans" 
                    defaultValue="categoria"
                    name='categoria'
                >
                    <option value="categoria" disabled hidden>Categoria</option>
                    <option value="bebida">Bebidas</option>
                </select>
                <button className="btn btn-outline btn-success" formAction="submit">Adicionar</button>
            </div>
        </form>
    )
}
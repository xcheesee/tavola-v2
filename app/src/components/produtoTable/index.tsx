import { useRouter } from "next/navigation"
import { Icon } from "@iconify-icon/react"
import type { Produto } from "@/utils/types"

export default function ProdutoTable({
    produtos, 
    setDelModalData
}: {
    produtos: Array<Produto>,
    setDelModalData: ({id}: {id: any}) => void 
}) {

    const router = useRouter()

    return(

        <div className="overflow-x-auto py-4 col-span-2">
            <table className="table bg-neutral-100 text-neutral-900">
              {/* head */}
              <thead className="">
                <tr className="text-neutral-400">
                  <th></th>
                  <th>Nome</th>
                  <th>Descricao</th>
                  <th>Valor</th>
                  <th>Categoria</th>
                  <th>Acao</th>
                </tr>
              </thead>
              <tbody>
                {produtos?.map( (produto: any, i: number) => (<tr key={`tr${i}`}>
                    <td>{produto.id}</td>
                    <td>{produto.nome}</td>
                    <td>{produto.descricao}</td>
                    <td>{new Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL'}).format(produto.valor)}</td>
                    <td>{produto.categoria.nome}</td>
                    <td className='flex gap-4'>
                      <div className='tooltip' data-tip="Editar">
                        <button onClick={() => {
                            router.push(`/stock/edit/${produto.id}`)
                        }}>
                            <Icon icon="mdi:pencil" width={24} className='text-neutral-600'/>
                        </button>
                      </div>
                        <div className='tooltip' data-tip="Excluir">
                          <button
                          
                            onClick={() => {
                              setDelModalData({
                                id: produto.id
                              })
                              let modal = document?.getElementById('del-modal') as HTMLDialogElement
                              modal.showModal()
                            }}
                          >
                            <Icon icon="mdi:delete" width={24} className='text-neutral-600'/>
                          </button>
                        </div>
                    </td>
                </tr>)
                )}
              </tbody>
            </table>
        </div> 
    )
}
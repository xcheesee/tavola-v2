'use client'

import DeleteModal from '@/components/deleteModal'
import FiltroDropdown from '@/components/filtroDropdown'
import { getAllProdutos } from '@/utils/api'
import { Icon } from '@iconify-icon/react'
import { useQuery } from '@tanstack/react-query'
import Link from 'next/link'
import { useRouter } from 'next/navigation'
import { useState } from 'react'

export default function Produtos() {
    const router = useRouter()

    const {data} = useQuery({
        queryKey: ['produtos'],
        queryFn: getAllProdutos,
    })

    const [delModalData, setDelModalData] = useState<{id?: string}>({})

    const [isCollapsed, setIsCollapsed] = useState(false)
    return (
        <>
            <div className="justify-self-start self-center"> 
              <Link href={"/stock/new"}>
                <button className="btn">
                    <Icon icon={"ph:plus-fill"} size={32} />
                    Adicionar
                </button>
              </Link>
            </div>
            <FiltroDropdown
                isCollapsed={isCollapsed}
                onClick={() => setIsCollapsed(prev => !prev)}
            >
                <input type="text" placeholder="Codigo" className="input input-bordered"/>
                <input type="text" placeholder="Nome" className="input input-bordered"/>
                <input type="text" placeholder="Quantidade" className="input input-bordered"/>
            </FiltroDropdown>
            <div className="overflow-x-auto py-4 col-span-2">
                <table className="table bg-neutral-100 text-neutral-900">
                  {/* head */}
                  <thead className="">
                    <tr className="text-neutral-400">
                      <th></th>
                      <th>Nome</th>
                      <th>Descricao</th>
                      <th>Valor</th>
                      <th>Acao</th>
                    </tr>
                  </thead>
                  <tbody>
                    {data?.map( (produto: any, i: number) => (<tr key={`tr${i}`}>
                        <td>{produto.id}</td>
                        <td>{produto.nome}</td>
                        <td>{produto.descricao}</td>
                        <td>{new Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL'}).format(produto.valor)}</td>
                        <td>
                            <button onClick={() => {
                                router.push(`/stock/edit/${produto.id}`)
                            }}>
                                <Icon icon="mdi:pencil" width={24} className='text-neutral-600'/>
                            </button>
                            <button
                              onClick={() => {
                                setDelModalData({
                                  id: produto.id
                                })
                                
                              }}  
                            ></button>
                        </td>
                    </tr>)
                    )}
                  </tbody>
                </table>
            </div> 

            <DeleteModal data={delModalData} id="del-modal" />
        </>
    )
}
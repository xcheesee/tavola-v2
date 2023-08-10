'use client'
import FiltroDropdown from "@/components/filtroDropdown";
import { useState } from "react";
import { Icon } from '@iconify-icon/react'

export default function Stock() {
    const [isCollapsed, setIsCollapsed] = useState(false)
    return(
        <div className="grid grid-cols-2 gap-8 px-4 py-2">
            <h2 className="font-bold col-span-2 text-3xl">Estoque</h2>
            <div className="justify-self-start self-center"> 
                <button className="btn">
                    <Icon icon={"ph:plus-fill"} />
                    Adicionar
                </button>
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
                      <th>Name</th>
                      <th>Job</th>
                      <th>Favorite Color</th>
                    </tr>
                  </thead>
                  <tbody>
                    {/* row 1 */}
                    <tr>
                      <th>1</th>
                      <td>Cy Ganderton</td>
                      <td>Quality Control Specialist</td>
                      <td>Blue</td>
                    </tr>
                    {/* row 2 */}
                    <tr>
                      <th>2</th>
                      <td>Hart Hagerty</td>
                      <td>Desktop Support Technician</td>
                      <td>Purple</td>
                    </tr>
                    {/* row 3 */}
                    <tr>
                      <th>3</th>
                      <td>Brice Swyre</td>
                      <td>Tax Accountant</td>
                      <td>Red</td>
                    </tr>
                  </tbody>
                </table>
            </div> 
        </div>
    )
}
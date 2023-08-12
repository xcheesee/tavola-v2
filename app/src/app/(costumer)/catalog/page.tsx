'use client'

import CatalogItemCard from "@/components/catalogItemCard"
import Link from "next/link"
import { useRouter } from "next/navigation"

export default function Catalog() {
    const categories = [1, 2, 3, 4]
    return(
        <div className="">
            <div className="flex justify-around bg-neutral-400 [&>*]:text-white py-2">
                {categories.map( 
                    category => (
                        <Link href={`/catalog?category_id=${category}`}>
                            <div> item {category} </div>
                        </Link>
                    )
                )}
            </div>
            <div className="grid items-center justify-center relative">
                <div className="absolute w-full h-full">
                        <div className="bg-black absolute w-full h-full opacity-30"></div>
                        <img src="/bg3.png" alt="" className="w-full h-full object-fill"/>
                </div>
                <div className="xl:w-[1200px] py-16 w-full grid xl:grid-cols-3 grid-flow-row gap-y-16 gap-x-4">
                        <div className="grid grid-rows-[max-content_min-content] gap-8 items-start">
                            <CatalogItemCard />
                            <div className="flex justify-end gap-4 z-10 pr-4">
                                <button className="btn bg-green-500 text-slate-900">Adicionar</button>
                                <input className="w-16 text-center bg-neutral-100 text-neutral-600 rounded" type="number"/>
                            </div>
                        </div>
                        <div className="grid grid-rows-[max-content_min-content] gap-8 items-start">
                            <CatalogItemCard />
                            <div className="flex justify-end gap-4 z-10 pr-4">
                                <button className="btn bg-green-500 text-slate-900">Adicionar</button>
                                <input className="w-16 text-center bg-neutral-100 text-neutral-600 rounded" type="number"/>
                            </div>
                        </div>
                        <div className="grid grid-rows-[max-content_min-content] gap-8 items-start">
                            <CatalogItemCard />
                            <div className="flex justify-end gap-4 z-10 pr-4">
                                <button className="btn bg-green-500 text-slate-900">Adicionar</button>
                                <input className="w-16 text-center bg-neutral-100 text-neutral-600 rounded" type="number"/>
                            </div>
                        </div>
                        <div className="grid grid-rows-[max-content_min-content] gap-8 items-start">
                            <CatalogItemCard />
                            <div className="flex justify-end gap-4 z-10 pr-4">
                                <button className="btn bg-green-500 text-slate-900">Adicionar</button>
                                <input className="w-16 text-center bg-neutral-100 text-neutral-600 rounded" type="number"/>
                            </div>
                        </div>
                </div>
            </div>
        </div>
    )
}
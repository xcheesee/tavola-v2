'use client'

import Link from "next/link"
import { useRouter } from "next/navigation"

export default function Catalog() {
    const categories = [1, 2, 3, 4]
    return(
        <div className="pt-16 grid grid-rows-[min-content_1fr] h-full">
            <div className="flex justify-around bg-neutral-400 [&>*]:text-white">
                {categories.map( 
                    category => (
                        <Link href={`/catalog?category_id=${category}`}>
                            <div> item {category} </div>
                        </Link>
                    )
                )}
            </div>
            <div className="flex justify-center items-center">
                main content
            </div>
        </div>
    )
}
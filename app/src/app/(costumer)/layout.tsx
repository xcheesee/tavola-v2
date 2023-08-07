import Header from "@/components/header";
import React from "react";

export default function ShopLayout({ children }: { children: React.ReactNode}) {
    return(
        <div className="grid grid-rows-[min-content_1fr] h-full auto-rows-fr">
            <Header />
            { children }
        </div>
    )
}
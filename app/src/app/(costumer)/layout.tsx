import Header from "@/components/header";
import React from "react";

export default function ShopLayout({ children }: { children: React.ReactNode}) {
    return(
        <div className="h-full">
            <Header />
            { children }
        </div>
    )
}
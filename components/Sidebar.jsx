import React from 'react';
import Logo from "@/components/elements/Logo";
import {Component} from "@/components/elements/Navigator11";
import Navigator from "@/components/elements/Navigator";


const Sidebar = ({children}) => {
    return (
        <div className="flex flex-row h-full">
            <nav className="hidden lg:block w-[240px] border-r-[1px] border-neutral-600">
                <div className="p-[24px]">
                    <Logo />
                </div>
                <div>
                    <Navigator />
                </div>
            </nav>
            <div className="flex-1">
            {children}
            </div>
        </div>
    )
}

export default Sidebar
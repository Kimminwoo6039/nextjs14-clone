"use client"
import Image from "next/image"
import useUIState from "@/hooks/useUIState";
import UserIcon from "@/components/UserIcon";
import PagePadding from "@/components/PagePadding";
import {FaChromecast} from "react-icons/fa";
import {FiSearch} from "react-icons/fi";
import {
    Drawer,
    DrawerClose,
    DrawerContent,
    DrawerDescription,
    DrawerFooter,
    DrawerHeader,
    DrawerTitle,
    DrawerTrigger,
} from "@/components/ui/drawer"
import Logo from "@/components/elements/Logo";
import Navigator from "@/components/elements/Navigator";
import React, {useEffect, useRef, useState} from "react";
import {cn} from "@/lib/utils";
import {Component} from "@/components/elements/Navigator11";

const HeaderDrawer = ({children}) => {

    const [isOpen, setIsOpen] = useState(false);

    return (
        <Drawer direction="left" open={isOpen} onOpenChange={setIsOpen}>
            <DrawerTrigger>{children}</DrawerTrigger>
            <DrawerContent className="w-[240px] h-full">
                {/* 로고 */}
                {/*  네비게이션 + 재생 목록 */}
                <div className="py-3">
                    <div className="px-3">
                        <Logo isInDrawer onClickClose={() => {
                            setIsOpen(false)
                        }}/>
                    </div>
                    <Navigator />
                </div>
            </DrawerContent>
        </Drawer>

    )
}


const Header = ({children}) => {

    const {headerImageSrc} = useUIState()

    const [isScrolled, setIsScrolled] = useState(false);
    const headRef = useRef();


    useEffect(() => {
        const handleScroll = () => {
            const scrollValue = headRef?.current?.scrollTop;
            console.log(scrollValue)
            setIsScrolled(scrollValue !== 0)
        }

        headRef?.current?.addEventListener("scroll", handleScroll);

        return () => {
            headRef?.current?.removeEventListener("scroll", handleScroll);
        }
    }, []);

    return (
        <header ref={headRef} className="relative overflow-y-auto w-full h-full">
            {/* bgSection */}
            <section className="absolute top-0 w-full ">
                <div className="relative h-[400px] w-full">
                    <Image fill
                           className="object-cover"
                           src={
                               headerImageSrc || "https://cdn.pixabay.com/photo/2024/04/08/14/09/nature-8683570_1280.jpg"
                           }
                           alt=""/>
                    <div className="absolute h-[400px] top-0 bg-white opacity-60 w-full"></div>
                    <div className="absolute h-[400px] top-0 bg-white from-black w-full"></div>
                </div>
            </section>
            {/* search section  (sticky 필요) */}
            <section className={
                cn("sticky top-0 left-0 z-10", isScrolled && "bg-black")
            }>
                <PagePadding>
                    <div className="h-[64px] flex flex-row justify-between items-center">
                        <article className="h-[42px] min-w-[480px] flex flex-row items-center hidden lg:flex
                        bg-[rgba(0,0,0,0.14)] rounded-2xl px-[16px] gap-[16px] border-neutral-500
                        ">
                            <div>
                                <FiSearch size={24}/>
                            </div>
                            <input className="h-full w-full
                            bg-transparent
                            " placeholder="노래, 앨범 , 아티스트 , 팟캐스트 검색" type="text"/>
                        </article>
                        <HeaderDrawer>
                            <article className="lg:hidden">
                                <Logo/>
                            </article>
                        </HeaderDrawer>
                        <article className="flex flex-row gap-4 items-center">
                            <FaChromecast size={26}/>
                            <UserIcon/>
                        </article>
                    </div>
                </PagePadding>
            </section>
            <section className="absolute w-full">{children}</section>
        </header>
    )
}

export default Header
import {sleep} from "@/lib/utils";
import React from 'react';
import Category from "@/app/(site)/components/Category";
import PagePadding from "@/components/PagePadding";
import PlayListCarousel from "@/components/PlayListCarousel";
import {dummyPlaylistArray} from "@/lib/dummyData";
import UserIcon from "@/components/UserIcon";
import Link from "next/link";
import {auth} from "@/app/auth";


const page = async () => {

    const dummyPlaylistArrary1 = [...dummyPlaylistArray]

    const session = await auth();
    return (
        <PagePadding>
            {/*카테고리*/}
            <div className="min-h-[600px]">
                <div className="mt-9"></div>
                <Category/>
                <div className="mt-12"></div>
                {/*캐러셀*/}
                <PlayListCarousel
                    playlistArray={[...dummyPlaylistArrary1]}
                    Thumnaill={
                        <div className="w-[56px] h-[56px]">
                            <UserIcon size={"lg"}/>
                        </div>
                    }
                    title="다시 듣기"
                    subTitle="미누"
                />
            </div>
            <div>
                <Link href="/login" >로그인 {session?.user?.name}</Link>
            </div>
        </PagePadding>

    )
};

export default page
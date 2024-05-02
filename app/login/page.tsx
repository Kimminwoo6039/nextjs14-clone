import {sleep} from "@/lib/utils";
import React from 'react';
import Category from "@/app/(site)/components/Category";
import PagePadding from "@/components/PagePadding";
import PlayListCarousel from "@/components/PlayListCarousel";
import {dummyPlaylistArray} from "@/lib/dummyData";
import UserIcon from "@/components/UserIcon";
import Link from "next/link";
import LoginModal from "@/app/login/component/LoginModal";
import {auth} from "@/app/auth";
import {redirect} from "next/navigation";


const page = async () => {

    const dummyPlaylistArrary1 = [...dummyPlaylistArray]

    const session = await auth();
    if (session?.user) {
        redirect('/');
        return null;
    }

    return (
       <div>
           <LoginModal />
       </div>
    )
};

export default page
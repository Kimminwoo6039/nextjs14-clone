"use client"
import React from "react";
import {Song} from "@/types";
import Image from "next/image"
import {getRandomElementFromArray} from "@/lib/utils";
import {useRouter} from "next/navigation";
import { MdMoreVert } from "react-icons/md";
import { FiPlay } from "react-icons/fi";
import IconButton from "@/components/elements/IconButton";

const PlayListCard = ({playlist}) => {

    const {push} = useRouter()

    const {
        id,
        owner,
        playlistName,
        songList,
    } = playlist

    const imgSrc = getRandomElementFromArray(songList).imageSrc

    let length = songList?.length;

    const onClickCard = () =>{
        push(`/playlist?list=${id}`)
    }

    return (
        <article className="h-[240px] cursor-pointer">
            <section onClick={onClickCard} className="relative h-[136px]">
                <Image className="object-cover" src={imgSrc} fill = {true} alt="thumbnail" />
                <div className="block relative relative group-hover:block bg-gradient-to-b from-[rgb(0,0,0,0.7)] top-0 w-full">
                    <div className=" absolute top-4 right-4">
                        <IconButton icon={ <MdMoreVert size={20}/>} />
                    </div>
                    <div>
                        <IconButton icon={ <FiPlay size={20}/>} />
                    </div>
                </div>
            </section>

            <section className="mt-2">
                <div>{playlistName}</div>
                <div className="text-neutral-500">{`${owner} - 트랙 ${length}개`}</div>
            </section>
        </article>
    )
}

export default PlayListCard



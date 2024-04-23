import {sleep} from "@/lib/utils";
import React from 'react';


const page = async () => {

    console.log("before")
    await sleep(4000);
    console.log("after")
        // await sleep(2000);
        // throw new Error("my error");
    return (
         <div>
            Home Page
        </div>
    )
};

export default page
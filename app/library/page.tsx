import React from 'react'
import {DataTable1} from "@/app/library/ReactTabulator";
import PagePadding from "@/components/PagePadding";

const page = () => {
    return (
        <div>
            <PagePadding>
            <DataTable1 />
            </PagePadding>
        </div>
    )
}

export default page
import React from 'react'

const page = (props: { searchParams: { list: string | number | bigint | boolean | React.ReactElement<any, string | React.JSXElementConstructor<any>> | Iterable<React.ReactNode> | React.ReactPortal | Promise<React.AwaitedReactNode> | null | undefined } }) => {
    // console.log(props)
    return (
        <div>
            playlist : {props.searchParams.list}
        </div>
    )
}

export default page
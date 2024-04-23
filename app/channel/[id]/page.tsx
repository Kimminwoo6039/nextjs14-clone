import React from 'react'

const page = (props: { params: { id: string | number | bigint | boolean | React.ReactElement<any, string | React.JSXElementConstructor<any>> | Iterable<React.ReactNode> | React.ReactPortal | Promise<React.AwaitedReactNode> | null | undefined } }) => {
    // console.log(props)
    return (
        <div>
            channel/[{props.params.id}]
        </div>
    )
}

export default page
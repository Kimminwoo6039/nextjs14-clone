import React from 'react'

// @ts-ignore
const layout = ({children}) => {
    return (
        <div>
            layout 이 먼저
            {children}
        </div>
    )
}

export default layout
import React from 'react'
import Header from '@/components/elements/Header'

// @ts-ignore
const layout = ({children}: {
    children: React.ReactNode
}) => {
    return (
        <div className="w-full h-full">
            <Header>
                {children}
            </Header>
        </div>
    )
}

export default layout
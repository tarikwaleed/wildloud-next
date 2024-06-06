import { CashoutCard } from '@/components/cashout-card'
import React from 'react'

type Props = {}

const page = (props: Props) => {
    const cashoutCards = Array(20).fill(null);
    return (
        <>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-4 gap-4 p-6">
                {cashoutCards.map((_, index) => (
                    <CashoutCard key={index} />
                ))}
            </div>
        </>


    )
}

export default page
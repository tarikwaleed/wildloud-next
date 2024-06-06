import { AdBanner } from '@/components/ad-banner'
import { DailyPoints } from '@/components/daily-points'
import React from 'react'

type Props = {}

const page = (props: Props) => {

    return (
        <>
            <DailyPoints />
            <div className="pb-10" />
            <div className="flex flex-row justify-center">
                <div></div>
                <AdBanner></AdBanner>
            </div>
            <div className="pb-10" />
            <DailyPoints />
            <div className="pb-10" />
            <div className="flex flex-row justify-center">
                <div></div>
                <AdBanner></AdBanner>
            </div>
        </>

    )
}

export default page
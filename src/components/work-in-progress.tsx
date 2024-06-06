import React from 'react';
import { Button } from './ui/button';
import Link from 'next/link';


const WorkInProgress = () => {
    return (
        <div className="flex flex-col items-center pt-20 h-screen">
            <img src="/undraw_work_in_progress.svg" alt="Work in Progress" className="w-200 h-200 mb-8" />
            <h1 className="text-2xl font-bold mb-4">We&apos;re Working on it!</h1>
            <p className="text-gray-600">This page is under construction. Please check back later.</p>
            <div className="pt-20">
                <Link href="/dashboard">
                    <Button variant="outline">
                        Back to home
                    </Button>
                </Link>
            </div>
        </div>
    );
};

export default WorkInProgress;

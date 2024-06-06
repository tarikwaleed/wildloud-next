"use client"
import { GiftIcon, HeartIcon, LayoutDashboard, SettingsIcon, ShoppingBag, StarIcon, StoreIcon } from "lucide-react";
import Link from "next/link";
import { useState } from "react";
import { ICONS_GREEN, ICONS_GRAY } from '@/lib/colors'

export default function SideBar() {
    const [selectedItem, setSelectedItem] = useState<string>('');

    const handleItemClick = (item: string) => {
        setSelectedItem(item);
    };
    return (
        <div className="flex flex-col  bg-gray-50 ">
            <Link href='/'
            >
                <div className="flex items-center justify-center h-32 ">
                    {/* <span className="text-2xl font-semibold text-gray-800 dark:text-white">Logo</span> */}
                    <img src="/wildloud-logo.png" alt="" className="w-64 h-auto" />
                </div>
            </Link>
            <nav className="ml-20 flex-grow mt-5   px-4 space-y-2 overflow-auto bg-white shadow-lg rounded-lg w-40 ">
                <Link
                    className={`${selectedItem === 'dashboard' && 'text-green-600'} flex flex-col items-center px-2 py-2 text-gray-700 hover:bg-gray-200  rounded-md`}
                    href="/dashboard"
                    onClick={() => handleItemClick('dashboard')}
                >
                    <LayoutDashboard
                        fill={selectedItem === 'dashboard' ? ICONS_GREEN : 'white'}
                        className="w-20 h-20"
                    />
                    <span className="ml-2 text-sm">Dashboard</span>
                </Link>
                <Link
                    className={`${selectedItem === 'points' && 'text-green-600'} flex flex-col items-center px-2 py-2 text-gray-700 dark:text-gray-200 hover:bg-gray-200 dark:hover:bg-gray-700 rounded-md`}
                    href="/dashboard/points-zone"
                    onClick={() => handleItemClick('points')}
                >
                    <StarIcon
                        className="w-20 h-20"
                        fill={selectedItem === 'points' ? ICONS_GREEN : 'white'}
                    />
                    <span className="ml-2 text-sm">Point Zone</span>
                </Link>
                <Link
                    className={`${selectedItem === 'store' && 'text-green-600'} flex flex-col items-center px-2 py-2 text-gray-700 dark:text-gray-200 hover:bg-gray-200 dark:hover:bg-gray-700 rounded-md`}
                    href="/dashboard/store"
                    onClick={() => handleItemClick('store')}
                >
                    <StoreIcon
                        className="w-20 h-20"
                        fill={selectedItem === 'store' ? ICONS_GREEN : 'white'}
                    />
                    <span className="ml-2 text-sm">Store</span>
                </Link>
                <Link
                    className={`${selectedItem === 'referral' && 'text-green-600'} flex flex-col items-center px-2 py-2 text-gray-700 dark:text-gray-200 hover:bg-gray-200 dark:hover:bg-gray-700 rounded-md`}
                    href="/dashboard/referral"
                    onClick={() => handleItemClick('referral')}
                >
                    <HeartIcon
                        className="w-20 h-20"
                        fill={selectedItem === 'referral' ? ICONS_GREEN : 'white'}
                    />
                    <span className="ml-2 text-sm">Referral</span>
                </Link>
                <Link
                    className={`${selectedItem === 'reward' && 'text-green-600'} flex flex-col items-center px-2 py-2 text-gray-700 dark:text-gray-200 hover:bg-gray-200 dark:hover:bg-gray-700 rounded-md`}
                    href="/dashboard/reward"
                    onClick={() => handleItemClick('reward')}
                >
                    <GiftIcon
                        className="w-20 h-20"
                        fill={selectedItem === 'reward' ? ICONS_GREEN : 'white'}
                    />
                    <span className="ml-2 text-sm">Reward</span>
                </Link>
                <Link
                    className={`${selectedItem === 'settings' && 'text-green-600'} flex flex-col items-center px-2 py-2 text-gray-700 dark:text-gray-200 hover:bg-gray-200 dark:hover:bg-gray-700 rounded-md`}
                    href="/dashboard/settings"
                    onClick={() => handleItemClick('settings')}
                >
                    <SettingsIcon
                        className="w-20 h-20"
                        fill={selectedItem === 'settings' ? ICONS_GREEN : 'white'}
                    />
                    <span className="ml-2 text-sm">Settings</span>
                </Link>
            </nav>

        </div>
    );
}

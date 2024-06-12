'use client';

import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import AuthLogo from '../public/icons/logo.svg'
import { sidebarLinks } from '@/constants'
import { usePathname, useRouter } from 'next/navigation'
import { cn } from '@/lib/utils';


const LeftSidebar = () => {


    const pathname = usePathname();
    const router = useRouter(); // there is another useRouter from next/Router but we need it from next/Navigation


    return (
        <section className='left_sidebar'>
            <nav className='flex flex-col gap-6 '>
                <Link href="/" className=' flex cursor-pointer items-center gap-2 pb-10 max-lg:justify-center'>
                    <Image src={AuthLogo} alt='AuthLogo'
                        width={23} height={27} />
                    <h1 className='text-24 font-extrabold text-white max-lg:hidden'>Podcastr</h1>
                </Link>


                {
                    sidebarLinks.map((Route, index) => {

                        // change the style of active link
                        const isActive = pathname === Route.route || pathname.startsWith(`${Route.route}/`);
                        return (
                            <Link key={index} href={Route.route} className={cn("flex cursor-pointer items-center gap-3 py-4  max-lg:px-4 justify-center lg:justify-start",{
                                'bg-nav-focus border-r-4 border-orange-1':isActive
                            })}>
                                <Image src={Route.imgURL} alt={`${Route.label}`}
                                    width={24} height={24} />
                                <p> {Route.label}</p>
                            </Link>
                        );
                    })
                }

            </nav>
        </section>
    )
}

export default LeftSidebar

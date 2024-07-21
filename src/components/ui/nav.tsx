'use client'

import clsx from 'clsx'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import React from 'react'

const Nav = React.forwardRef<HTMLDivElement, React.HTMLAttributes<HTMLDivElement>>(({ className, ...props }, ref) => {
  const pathname = usePathname()
  return (
    <nav className={clsx('flex items-center space-x-3 pl-4', className)} {...props} ref={ref}>
      <Link className={clsx('text-3xl font-bold', { 'border-b-2 border-black': pathname === '/post' })} href="/post">
        사진
      </Link>
      <Link
        className={clsx('text-3xl font-bold', { 'border-b-2 border-black': pathname === '/guestbook' })}
        href="/guestbook"
      >
        방명록
      </Link>
      <div className="flex-1" />
      {/* <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth={1.5}
        stroke="currentColor"
        className="w-7 h-7 cursor-pointer"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z"
        />
      </svg> */}
      <div className="w-[2px]" />
    </nav>
  )
})
Nav.displayName = 'nav'

export { Nav }

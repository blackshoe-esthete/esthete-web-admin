'use client'

import { useEffect } from 'react'
import { useRouter } from 'next/navigation'
import Cookies from 'js-cookie'

export default function Home() {
  const router = useRouter()

  useEffect(() => {
    // admin 쿠키 값 가져오기
    const adminCookie = Cookies.get('esthete_admin')
    if (adminCookie) {
      router.push('/post')
    } else {
      router.push('/login')
    }
  }, [])

  return <></>
}

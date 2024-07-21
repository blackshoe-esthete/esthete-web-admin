'use client'

import { useEffect } from 'react'
import { useRouter } from 'next/navigation'
import Cookies from 'js-cookie'

export default function Home() {
  const router = useRouter()

  useEffect(() => {
    // admin 쿠키 값 가져오기
    const cookies = Cookies.get()
    const adminCookie = cookies.esthete_admin

    if (adminCookie) {
      router.push('/post')
    } else {
      router.push('/login')
    }
  }, [router])

  return <></>
}

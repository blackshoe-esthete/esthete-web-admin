'use client'

import { useEffect } from 'react'
import { useRouter } from 'next/navigation'

export default function Home() {
  const router = useRouter()

  useEffect(() => {
    // admin 쿠키 값 가져오기
    const cookies = document.cookie.split('; ')
    const adminCookie = cookies.find((cookie) => cookie.startsWith('esthete_admin='))?.split('=')[1]

    if (adminCookie) {
      router.push('/post')
    } else {
      router.push('/login')
    }
  }, [router])

  return <></>
}

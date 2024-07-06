'use client'

import React from 'react'
import { Button } from '@/components/ui/button'
import { useMutation } from '@tanstack/react-query'
import { postLogin } from '@/api/login'
import { AxiosError } from 'axios'
import Cookies from 'js-cookie'
import { useRouter } from 'next/navigation'

const LoginPage = () => {
  const router = useRouter()
  const [email, setEmail] = React.useState('')
  const [password, setPassword] = React.useState('')

  // useMutation의 제네릭 타입을 단순화
  const mutation = useMutation<{ admin_id: string; jwt: string }, AxiosError, { email: string; password: string }>({
    mutationFn: postLogin,
    onSuccess: (data) => {
      console.log('onSuccess data:', data)
      Cookies.set('esthete_admin', data.jwt, {
        expires: 1, // 1일 후에 쿠키 만료 (일 단위)
        // secure: true, // HTTPS를 통해서만 전송
        // sameSite: 'Strict', // CSRF 방지를 위한 설정
      })
      alert('로그인 성공!')
      router.push('/post')
    },
    onError: (error) => {
      console.error('Login failed:', error)
      // alert(`Login failed: ${error.message}`)
    },
  })

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    mutation.mutate({ email, password })
  }

  return (
    <div className="flex min-h-screen items-center justify-center bg-gray-50 p-4">
      <div className="w-full max-w-md p-8 bg-white rounded-lg shadow-lg">
        <h2 className="mb-6 text-2xl font-bold text-gray-900">로그인</h2>
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label htmlFor="email" className="block text-sm font-medium text-gray-700">
              이메일
            </label>
            <input
              id="email"
              name="email"
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              autoComplete="email"
              required
              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
            />
          </div>
          <div className="mb-6">
            <label htmlFor="password" className="block text-sm font-medium text-gray-700">
              비밀번호
            </label>
            <input
              id="password"
              name="password"
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              autoComplete="current-password"
              required
              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
            />
          </div>
          <div>
            <Button type="submit" variant="default" size="default" className="w-full">
              로그인
            </Button>
          </div>
        </form>
      </div>
    </div>
  )
}

export default LoginPage

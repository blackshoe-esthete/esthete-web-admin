'use server'

import { cookies } from 'next/headers'

const BASE_URL = process.env.NEXT_PUBLIC_API_URL

const getAuthToken = () => {
  const cookieStore = cookies()
  return cookieStore.get('esthete_admin')?.value
}

const fetchWithAuth = async (url: string, options: RequestInit = {}) => {
  const token = getAuthToken()

  if (token) {
    options.headers = {
      ...options.headers,
      Authorization: `Bearer ${token}`,
    }
  }

  const response = await fetch(`${BASE_URL}${url}`, options)

  if (!response.ok) {
    console.error('Network response was not ok', response)
    throw new Error(`HTTP error! status: ${response.status}`)
  }

  // 응답 본문의 내용 타입 확인
  const contentType = response.headers.get('content-type')
  if (contentType && contentType.indexOf('application/json') !== -1) {
    try {
      return await response.json()
    } catch (error) {
      console.error('Error parsing JSON:', error)
      throw new Error('Invalid JSON response')
    }
  } else {
    // JSON이 아닌 경우, 텍스트로 반환
    return await response.text()
  }
}

export const instance = fetchWithAuth

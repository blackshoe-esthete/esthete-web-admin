'use server'

import { cookies } from 'next/headers'
import { instance } from './instance'

export async function loginAction(data: { email: string; password: string }) {
  const response = await instance('/admin/login', {
    method: 'POST',
    body: JSON.stringify(data),
    headers: {
      'Content-Type': 'application/json',
    },
  })

  cookies().set('esthete_admin', response.jwt, {
    maxAge: 60 * 60 * 24 * 7, // 7일
  })

  return response
}

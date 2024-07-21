'use server'

import { revalidatePath } from 'next/cache'
import { instance } from './instance'

// 방명록 페이징 조회
export const getGuestbooks = async () => {
  const response = await instance('/comment')
  return response // 200 상태 코드는 fetchWithAuth에서 처리됨
}

// 방명록 상세 조회
export const getGuestbook = async (comment_id: string) => {
  const response = await instance(`/comment/${comment_id}`)
  return response // 200 상태 코드는 fetchWithAuth에서 처리됨
}

// 방명록 삭제
export const deleteGuestbook = async (comment_id: string) => {
  const response = await instance(`/comment/${comment_id}`, {
    method: 'DELETE',
  })
  revalidatePath('/guestbook')
  return response
}

// 방명록 삭제 요청 반려
export const rejectGuestbook = async (comment_id: string) => {
  const response = await instance(`/comment/${comment_id}/reject`, {
    method: 'DELETE',
  })
  revalidatePath('/guestbook')
  return response
}

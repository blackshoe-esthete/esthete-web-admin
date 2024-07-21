'use server'

import { revalidatePath } from 'next/cache'
import { instance } from './instance'

// 사진 페이징 조회
export const getPhotos = async () => {
  try {
    const response = await instance('/photo')
    return response // 200 상태 코드는 fetchWithAuth에서 처리됨
  } catch (error) {
    console.error('Error getting photos:', (error as Error).message)
    throw error
  }
}

// 사진 상세 조회
export const getPhoto = async (photo_id: string) => {
  const response = await instance(`/photo/${photo_id}`)
  return response // 200 상태 코드는 fetchWithAuth에서 처리됨
}

// 사진 삭제
export const deletePhoto = async (photo_id: string) => {
  const response = await instance(`/photo/${photo_id}`, {
    method: 'DELETE',
  })
  revalidatePath('/post')
  return response // 200 상태 코드는 fetchWithAuth에서 처리됨
}

// 사진 삭제 요청 반려
export const rejectPhoto = async (photo_id: string) => {
  try {
    const response = await instance(`/photo/${photo_id}/reject`, {
      method: 'DELETE',
    })
    revalidatePath('/post')
    return response // 200 상태 코드는 fetchWithAuth에서 처리됨
  } catch (error) {
    // Handle error here
    console.error('Error rejecting photo:', error)
    throw error
  }
}

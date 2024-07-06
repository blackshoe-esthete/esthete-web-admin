import { instance } from './instance'

// 사진 페이징 조회
export const getPhotos = async () => {
  const response = await instance.get('/photo')
  if (response.status !== 200) {
    throw new Error('사진을 불러오는데 실패했습니다.')
  }
  return response.data
}

// 사진 상세 조회
export const getPhoto = async (photo_id: string) => {
  const response = await instance.get(`/photo/${photo_id}`)
  if (response.status !== 200) {
    throw new Error('사진을 불러오는데 실패했습니다.')
  }
  return response.data
}

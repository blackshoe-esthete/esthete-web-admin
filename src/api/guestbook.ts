import { instance } from './instance'

// 방명록 페이징 조회
export const getGuestbooks = async () => {
  const response = await instance.get('/comment')
  if (response.status !== 200) {
    throw new Error('방명록을 불러오는데 실패했습니다.')
  }
  return response.data
}

// 방명록 상세 조회
export const getGuestbook = async (comment_id: number) => {
  const response = await instance.get(`/comment/${comment_id}`)
  if (response.status !== 200) {
    throw new Error('방명록을 불러오는데 실패했습니다.')
  }
  return response.data
}

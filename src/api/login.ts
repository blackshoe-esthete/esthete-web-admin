import { instance } from './instance'

export const postLogin = async (data: { email: string; password: string }) => {
  const response = await instance.post('/admin/login', data)
  if (response.status !== 200) {
    throw new Error('로그인에 실패했습니다.')
  }
  return response.data
}

import axios from 'axios'

/** 인스턴스 생성 */
const BASE_URL = process.env.NEXT_PUBLIC_API_URL

/** 인증 토큰을 가져오는 함수 */
const getAuthToken = async () => localStorage.getItem('token')

/** Axios 기본 인스턴스 생성 */
const createAxiosInstance = (baseURL: string) => {
  const instance = axios.create({ baseURL })

  /* instance.interceptors.request.use(
    async config => {
      // 토큰을 가져옵니다.
      const token = await getAuthToken();

      // 토큰이 있으면 Authorization 헤더를 설정합니다.
      if (token) {
        config.headers.Authorization = `Bearer ${token}`;
      }

      return config;
    },
    error => Promise.reject(error),
  ); */

  return instance
}

/** 인스턴스를 내보냅니다. */
export const instance = createAxiosInstance(BASE_URL!)

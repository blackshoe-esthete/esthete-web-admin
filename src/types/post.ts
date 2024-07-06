export interface IPost {
  writer_id: string
  nickname: string
  profile_img_url: string
  photo_id: string
  photo_img_url: string
  exhibition_title: string
  description: string
}

export interface IPostDetail extends IPost {
  exhibition_title: string
  photo_id: string
  created_at: string // ISO 날짜 형식
  reported_at: string // ISO 날짜 형식
  description: string
  writer_id: string
  photo_img_url: string
  nickname: string
  profile_img_url: string
  photo_report_received_count: number
  user_report_received_count: number
}

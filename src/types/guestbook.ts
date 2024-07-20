export interface IGuestbook {
  comment_id: string
  writer_id: string
  nickname: string
  profile_img_url: string
  description: string
  comment_content: string
}

export interface IGuestbookDetail extends IGuestbook {
  comment_id: string
  created_at: string // ISO 날짜 형식
  reported_at: string // ISO 날짜 형식
  description: string
  profile_img_url: string
  nickname: string
  writer_id: string
  user_report_received_count: number
  comment_content: string
}

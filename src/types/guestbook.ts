export interface GuestbookType {
  guestbook_id: string
  photographer_id: string
  photographer_nickname: string
  photographer_profile_img: string
  guestbook_author_id: string
  guestbook_author_nickname: string
  guestbook_author_profile_img: string
  guestbook_content: string
  guestbook_created_at: string
  guestbook_abusing_report_count: number | null
}

import { Guestbook } from './Guestbook'
import { IGuestbook } from '@/types/guestbook'
import { getGuestbook } from '@/api/guestbook'

export async function GuestbookWithData({ data }: { data: IGuestbook }) {
  const detailData = await getGuestbook(data.comment_id)

  return <Guestbook data={data} detailData={detailData} />
}

import { getGuestbooks } from '@/api/guestbook'
import { Guestbook } from '@/components/guestbook/Guestbook'
import { GuestbookWithData } from '@/components/guestbook/GuestbookWithData'
import { IGuestbook } from '@/types/guestbook'

export default async function GuestBookPage() {
  const guestbooks = await getGuestbooks()

  return (
    <div className="flex flex-col min-h-screen mb-16">
      <main className="flex-1">
        <div className="container px-4 pb-6 pt-3 mx-auto space-y-6">
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            {guestbooks?.content.map((data: IGuestbook) => <GuestbookWithData data={data} key={data.writer_id} />)}
          </div>
        </div>
      </main>
    </div>
  )
}

import { Guestbook } from '@/components/guestbook/Guestbook'
import { GUESTBOOK_DUMMY_DATA } from '@/utils/dummy'

export default function GuestBookPage() {
  return (
    <div className="flex flex-col min-h-screen mb-16">
      <main className="flex-1">
        <div className="container px-4 pb-6 pt-3 mx-auto space-y-6">
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            {GUESTBOOK_DUMMY_DATA.map((data) => (
              <Guestbook data={data} key={data.guestbook_author_id} />
            ))}
          </div>
        </div>
      </main>
    </div>
  )
}

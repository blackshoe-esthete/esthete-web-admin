/**
 * This code was generated by v0 by Vercel.
 * @see https://v0.dev/t/AbJGfdo0WA0
 */
import { CardHeader, CardContent, CardFooter, Card } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import Image from 'next/image'
import { GUESTBOOK_DUMMY_DATA } from '@/utils/Dummy'

export function Guestbook() {
  return (
    <div className="flex flex-col min-h-screen mb-16">
      <main className="flex-1">
        <div className="container px-4 pb-6 pt-3 mx-auto space-y-6">
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            {GUESTBOOK_DUMMY_DATA.map((data) => (
              <Card key={data.guest_book_author_id} className="p-2">
                <CardContent className="p-3 flex space-x-4">
                  <Image
                    alt="Avatar"
                    className="rounded-full w-10 h-10"
                    src={data.guest_book_author_profile_img}
                    style={{
                      aspectRatio: '32/32',
                      objectFit: 'cover',
                    }}
                    width={32}
                    height={32}
                  />
                  <div>
                    <p className="font-semibold">
                      {data.guest_book_author_nickname}
                    </p>
                    <p className="text-sm text-gray-600">
                      {data.guest_book_content}
                    </p>
                  </div>
                </CardContent>
                <CardFooter className="p-3 pt-7 flex items-center space-x-2">
                  <Button className="ml-auto">삭제</Button>
                  <Button variant="outline">반려</Button>
                </CardFooter>
              </Card>
            ))}
          </div>
        </div>
      </main>
    </div>
  )
}

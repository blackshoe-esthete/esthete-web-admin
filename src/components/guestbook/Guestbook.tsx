/**
 * This code was generated by v0 by Vercel.
 * @see https://v0.dev/t/AbJGfdo0WA0
 */
'use client'

import { CardHeader, CardContent, CardFooter, Card } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import Image from 'next/image'
import { GuestbookType } from '@/types/guestbook'
import { useState } from 'react'
import { GuestbookDetailModal } from '../modal/GuestbookDetailModal'

export function Guestbook({ data }: { data: GuestbookType }) {
  const [isModalOpen, setIsModalOpen] = useState(false)

  function openModal() {
    setIsModalOpen(true)
  }

  function closeModal() {
    setIsModalOpen(false)
  }

  return (
    <>
      <Card key={data.guestbook_author_id} className="p-2">
        <CardContent className="p-3 flex space-x-4">
          <Image
            alt="Avatar"
            className="rounded-full w-10 h-10"
            src={data.guestbook_author_profile_img}
            style={{
              aspectRatio: '32/32',
              objectFit: 'cover',
            }}
            width={32}
            height={32}
          />
          <div>
            <p className="font-semibold">{data.guestbook_author_nickname}</p>
            <p className="text-sm text-gray-600">{data.guestbook_content}</p>
          </div>
        </CardContent>
        <CardFooter className="p-3 pt-7 flex items-center space-x-2">
          <Button variant="destructive">삭제</Button>
          <Button>반려</Button>
          <Button variant="outline" onClick={openModal}>
            상세
          </Button>
        </CardFooter>
      </Card>
      <GuestbookDetailModal
        guestbook_id={data.guestbook_id}
        isOpen={isModalOpen}
        closeModal={closeModal}
      />
    </>
  )
}

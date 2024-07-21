'use client'

import { CardHeader, CardContent, CardFooter, Card } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import Image from 'next/image'
import { useState } from 'react'
import { PostDetailModal } from '../modal/PostDetailModal'
import { IPost, IPostDetail } from '@/types/post'
import { deletePhoto, rejectPhoto } from '@/api/photo'
import { revalidatePath } from 'next/cache'

const dummyThumbnail = 'https://picsum.photos/400/225'
const dummyProfile = 'https://picsum.photos/32'

export function Post({ data, detailData }: { data: IPost; detailData: IPostDetail }) {
  const [isModalOpen, setIsModalOpen] = useState(false)

  const [isLoading, setIsLoading] = useState(false)

  async function handleDelete() {
    const confirm = window.confirm('삭제하시겠습니까?')
    if (!confirm) return
    setIsLoading(true)
    await deletePhoto(data.photo_id)
    alert('삭제되었습니다.')
    setIsLoading(false)
  }

  async function handleReject() {
    const confirm = window.confirm('반려하시겠습니까?')
    if (!confirm) return
    setIsLoading(true)
    await rejectPhoto(data.photo_id)
    alert('반려되었습니다.')
    setIsLoading(false)
  }

  function openModal() {
    setIsModalOpen(true)
  }

  function closeModal() {
    setIsModalOpen(false)
  }

  return (
    <>
      <Card key={data.photo_id}>
        <CardHeader className="p-3">
          <div className="flex items-center gap-1 space-x-2 mb-1 p-1">
            <Image
              alt="Avatar"
              className="rounded-full w-10 h-10"
              height={32}
              // src={data.profile_img_url}
              src={dummyProfile}
              style={{
                aspectRatio: '32/32',
                objectFit: 'cover',
              }}
              width={32}
            />
            <p className="font-semibold">{data.nickname}</p>
          </div>
          <div className="aspect-[16/9] overflow-hidden rounded-lg">
            <Image
              alt="Photo"
              className="object-cover w-full h-full"
              height={113}
              // src={data.photo_img_url}
              src={dummyThumbnail}
              style={{
                aspectRatio: '200/113',
                objectFit: 'cover',
              }}
              width={200}
            />
          </div>
        </CardHeader>
        <CardContent className="px-3 py-2">
          <p className="text-lg font-semibold mb-1">{data.exhibition_title}</p>
          <p className="text-gray-600">{data.description}</p>
        </CardContent>
        <CardFooter className="p-3 flex items-center space-x-2">
          <Button variant="destructive" onClick={handleDelete} disabled={isLoading}>
            {isLoading ? '처리 중...' : '삭제'}
          </Button>
          <Button onClick={handleReject} disabled={isLoading}>
            {isLoading ? '처리 중...' : '반려'}
          </Button>
          <Button variant="outline" onClick={openModal}>
            상세
          </Button>
        </CardFooter>
      </Card>
      <PostDetailModal
        photoData={detailData}
        isOpen={isModalOpen}
        isLoading={isLoading}
        handleDelete={handleDelete}
        handleReject={handleReject}
        closeModal={closeModal}
      />
    </>
  )
}

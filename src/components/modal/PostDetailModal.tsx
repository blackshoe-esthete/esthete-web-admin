'use client'

import { IPostDetail } from '@/types/post'
import Image from 'next/image'

const dummyThumbnail = 'https://picsum.photos/400/225'
const dummyProfile = 'https://picsum.photos/32'

export function PostDetailModal({
  photoData,
  isOpen,
  closeModal,
}: {
  photoData: IPostDetail
  isOpen: boolean
  closeModal: () => void
}) {
  if (!isOpen) return null

  return (
    isOpen && (
      <div
        className="w-screen h-screen fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-5"
        onClick={closeModal}
      >
        <div className="grid md:grid-cols-2 gap-6 mx-auto rounded-2xl py-9 pr-9 pl-10 bg-white w-[900px] shadow">
          <div className="space-y-4">
            <div className="space-y-2">
              <h1 className="text-2xl font-bold">{photoData?.exhibition_title}</h1>
              <p className="text-sm leading-none text-gray-500">사진 ID: {photoData?.photo_id}</p>
              <p className="text-sm leading-none text-gray-500">작성일: {photoData?.created_at}</p>
            </div>
            <div className="space-y-2">
              <h2 className="text-lg font-semibold">내용</h2>
              <p className="text-base leading-snug text-gray-500">{photoData?.description}</p>
            </div>
            <div className="space-y-2">
              <h2 className="text-lg font-semibold">작가</h2>
              <div className="flex items-center space-x-2">
                <Image
                  alt="Avatar"
                  className="rounded-full"
                  height={32}
                  // src={photoData!.profile_img_url}
                  src={dummyProfile}
                  style={{
                    aspectRatio: '32/32',
                    objectFit: 'cover',
                  }}
                  width={32}
                />
                <div className="space-y-0.5">
                  <p className="text-sm font-medium leading-none">@{photoData?.nickname}</p>
                  <p className="text-xs leading-none text-gray-500">ID: {photoData?.writer_id}</p>
                </div>
              </div>
            </div>
            <div className="space-y-2">
              <h2 className="text-lg font-semibold">신고건수</h2>
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <h3 className="font-semibold">사진</h3>
                  <p className="text-sm text-gray-500">{photoData?.photo_report_received_count}건</p>
                </div>
                <div>
                  <h3 className="font-semibold">작가</h3>
                  <p className="text-sm text-gray-500">{photoData?.user_report_received_count}건</p>
                </div>
              </div>
            </div>
          </div>
          <div className="space-y-4 flex items-center">
            <Image
              alt="Photo"
              className="aspect-3/2 object-cover rounded-lg overflow-hidden border border-gray-200"
              height={533}
              // src={photoData!.photo_img_url}
              src={dummyThumbnail}
              width={800}
            />
          </div>
        </div>
      </div>
    )
  )
}

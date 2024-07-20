'use client'

import { IGuestbookDetail } from '@/types/guestbook'
import Image from 'next/image'

const dummyProfile = 'https://picsum.photos/32'

export function GuestbookDetailModal({
  guestbookData,
  isOpen,
  closeModal,
}: {
  guestbookData: IGuestbookDetail
  isOpen: boolean
  closeModal: () => void
}) {
  console.log(guestbookData)
  return (
    isOpen && (
      <div
        className="w-screen h-screen fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-5"
        onClick={closeModal}
      >
        <div className="mx-auto rounded-3xl p-9 pb-10 bg-white w-[400px] shadow">
          <div className="space-y-4">
            <div className="space-y-2">
              <h1 className="text-xl font-bold">{guestbookData?.description}</h1>
              <p className="text-sm leading-none text-gray-500">방명록 ID: {guestbookData?.comment_id}</p>
              <p className="text-sm leading-none text-gray-500">작성일: {guestbookData?.created_at}</p>
            </div>
            <div className="space-y-2">
              <h2 className="text-lg font-semibold">내용</h2>
              <p className="text-base leading-snug text-gray-500">{guestbookData?.comment_content}</p>
            </div>
            <div className="grid grid-cols-2 gap-5">
              <div className="space-y-2">
                <h2 className="text-lg font-semibold">작성자</h2>
                <div className="flex items-center space-x-2">
                  <Image
                    alt="Avatar"
                    className="rounded-full"
                    height={32}
                    // src={guestbookData?.profile_img_url || ''}
                    src={dummyProfile}
                    style={{
                      aspectRatio: '32/32',
                      objectFit: 'cover',
                    }}
                    width={32}
                  />
                  <div className="space-y-0.5">
                    <p className="text-sm font-medium leading-none">@{guestbookData?.nickname}</p>
                    <p className="text-xs leading-none text-gray-500">ID: {guestbookData?.writer_id} </p>
                  </div>
                </div>
              </div>
              {/* <div className="space-y-2">
                <h2 className="text-xl font-semibold">작가</h2>
                <div className="flex items-center space-x-2">
                  <Image
                    alt="Avatar"
                    className="rounded-full"
                    height={32}
                    src={guestbookData.photographer_profile_img}
                    style={{
                      aspectRatio: '32/32',
                      objectFit: 'cover',
                    }}
                    width={32}
                  />
                  <div className="space-y-0.5">
                    <p className="text-sm font-medium leading-none dark:text-gray-100">
                      @{guestbookData.photographer_nickname}
                    </p>
                    <p className="text-xs leading-none text-gray-500 dark:text-gray-400">
                      ID: {guestbookData.photographer_id}
                    </p>
                  </div>
                </div>
              </div> */}
            </div>
            <div className="space-y-2">
              <h2 className="text-lg font-semibold">접수 신고 건수</h2>
              <div className="grid grid-cols-2 gap-5">
                <div>
                  <p className="text-gray-500">{guestbookData?.user_report_received_count}건</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  )
}

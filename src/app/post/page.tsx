'use client'

import { getPhotos } from '@/api/photo'
import { Post } from '@/components/post/Post'
import { IPost } from '@/types/post'
// import { POST_DUMMY_DATA } from '@/utils/dummy'
import { useQuery } from '@tanstack/react-query'

export default function PostPage() {
  const { data: posts, error } = useQuery({
    queryKey: ['photos'],
    queryFn: getPhotos,
  })

  return (
    <div className="flex flex-col min-h-screen mb-16">
      <main className="flex-1">
        <div className="container px-4 pb-6 pt-3 mx-auto space-y-6">
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            {posts?.content.map((data: IPost) => <Post key={data.photo_id} data={data} />)}
          </div>
        </div>
      </main>
    </div>
  )
}

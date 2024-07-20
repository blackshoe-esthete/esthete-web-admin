import { getPhotos } from '@/api/photo'
import { PostWithData } from '@/components/post/PostWithData'
import { IPost } from '@/types/post'

export default async function PostPage() {
  const posts = await getPhotos()

  return (
    <div className="flex flex-col min-h-screen mb-16">
      <main className="flex-1">
        <div className="container px-4 pb-6 pt-3 mx-auto space-y-6">
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            {posts?.content.map((data: IPost) => <PostWithData key={data.photo_id} data={data} />)}
          </div>
        </div>
      </main>
    </div>
  )
}

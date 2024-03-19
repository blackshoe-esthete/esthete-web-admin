import { Post } from '@/components/post/Post'
import { POST_DUMMY_DATA } from '@/utils/dummy'

export default function PostPage() {
  return (
    <div className="flex flex-col min-h-screen mb-16">
      <main className="flex-1">
        <div className="container px-4 pb-6 pt-3 mx-auto space-y-6">
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            {POST_DUMMY_DATA.map((data) => (
              <Post key={data.photo_id} data={data} />
            ))}
          </div>
        </div>
      </main>
    </div>
  )
}

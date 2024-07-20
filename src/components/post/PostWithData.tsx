import { getPhoto } from '@/api/photo'
import { Post } from '@/components/post/Post'
import { IPost } from '@/types/post'

export async function PostWithData({ data }: { data: IPost }) {
  const detailData = await getPhoto(data.photo_id)

  return <Post data={data} detailData={detailData} />
}

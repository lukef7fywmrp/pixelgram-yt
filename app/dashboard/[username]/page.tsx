import PostsGrid from "@/components/PostsGrid";
import { fetchPostsByUsername } from "@/lib/data";

async function ProfilePage({
  params: { username },
}: {
  params: { username: string };
}) {
  const posts = await fetchPostsByUsername(username);

  return <PostsGrid posts={posts} />;
}

export default ProfilePage;

import PostsGrid from "@/components/PostsGrid";
import { fetchSavedPostsByUsername } from "@/lib/data";

async function SavedPosts({
  params: { username },
}: {
  params: { username: string };
}) {
  const savedPosts = await fetchSavedPostsByUsername(username);
  const posts = savedPosts?.map((savedPost) => savedPost.post);

  return <PostsGrid posts={posts} />;
}

export default SavedPosts;

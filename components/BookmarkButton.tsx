"use client";

import { bookmarkPost } from "@/lib/actions";
import { PostWithExtras } from "@/lib/definitions";
import { cn } from "@/lib/utils";
import ActionIcon from "@/components/ActionIcon";
import { SavedPost } from "@prisma/client";
import { Bookmark } from "lucide-react";
import { useOptimistic } from "react";

type Props = {
  post: PostWithExtras;
  userId?: string;
};

function BookmarkButton({ post, userId }: Props) {
  const predicate = (bookmark: SavedPost) =>
    bookmark.userId === userId && bookmark.postId === post.id;
  const [optimisticBookmarks, addOptimisticBookmark] = useOptimistic<
    SavedPost[]
  >(
    post.savedBy,
    // @ts-ignore
    (state: SavedPost[], newBookmark: SavedPost) =>
      state.find(predicate)
        ? //   here we check if the bookmark already exists, if it does, we remove it, if it doesn't, we add it
          state.filter((bookmark) => bookmark.userId !== userId)
        : [...state, newBookmark]
  );

  return (
    <form
      action={async (formData: FormData) => {
        const postId = formData.get("postId");
        addOptimisticBookmark({ postId, userId });
        await bookmarkPost(postId);
      }}
      className="ml-auto"
    >
      <input type="hidden" name="postId" value={post.id} />

      <ActionIcon>
        <Bookmark
          className={cn("h-6 w-6", {
            "dark:fill-white fill-black": optimisticBookmarks.some(predicate),
          })}
        />
      </ActionIcon>
    </form>
  );
}

export default BookmarkButton;

import { FollowingWithExtras } from "@/lib/definitions";
import { useSession } from "next-auth/react";
import Link from "next/link";
import FollowButton from "./FollowButton";
import UserAvatar from "./UserAvatar";

function Following({ following }: { following: FollowingWithExtras }) {
  const { data: session } = useSession();
  const isFollowing = following.following.followedBy.some(
    (user) => user.followerId === session?.user.id
  );
  const isCurrentUser = session?.user.id === following.followingId;

  if (!session) return null;

  return (
    <div className="p-4 flex items-center justify-between gap-x-3">
      <Link
        href={`/dashboard/${following.following.username}`}
        className="flex items-center gap-x-3"
      >
        <UserAvatar user={following.following} className="h-10 w-10" />
        <p className="font-bold text-sm">{following.following.username}</p>
      </Link>
      {!isCurrentUser && (
        <FollowButton
          profileId={following.followingId}
          isFollowing={isFollowing}
          buttonClassName={
            isFollowing ? "bg-neutral-700 dark:hover:bg-neutral-700/40" : ""
          }
        />
      )}
    </div>
  );
}

export default Following;

"use client";

import Follower from "@/components/Follower";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import useMount from "@/hooks/useMount";
import { FollowerWithExtras } from "@/lib/definitions";
import { usePathname, useRouter } from "next/navigation";
import { ScrollArea } from "./ui/scroll-area";

function FollowersModal({
  followers,
  username,
}: {
  followers: FollowerWithExtras[] | undefined;
  username: string;
}) {
  const mount = useMount();
  const pathname = usePathname();
  const router = useRouter();
  const isFollowersPage = pathname === `/dashboard/${username}/followers`;

  if (!mount) return null;

  return (
    <Dialog
      open={isFollowersPage}
      onOpenChange={(isOpen) => !isOpen && router.back()}
    >
      <DialogContent className="dialogContent">
        <DialogHeader className="border-b border-zinc-300 dark:border-neutral-700 py-2 w-full">
          <DialogTitle className="mx-auto font-bold text-base">
            Followers
          </DialogTitle>
        </DialogHeader>

        {followers?.length === 0 && (
          <p className="p-4 text-sm font-medium">This user has no followers.</p>
        )}

        <ScrollArea className="min-h-fit max-h-[350px]">
          {followers?.map((follower) => (
            <Follower key={follower.followerId} follower={follower} />
          ))}
        </ScrollArea>
      </DialogContent>
    </Dialog>
  );
}

export default FollowersModal;

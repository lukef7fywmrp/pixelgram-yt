import FollowingModal from "@/components/FollowingModal";
import { fetchProfile } from "@/lib/data";

async function FollowingPage({
  params: { username },
}: {
  params: {
    username: string;
  };
}) {
  const profile = await fetchProfile(username);
  const following = profile?.following;

  return <FollowingModal following={following} username={username} />;
}

export default FollowingPage;

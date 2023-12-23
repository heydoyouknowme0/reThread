import PostThread from "@/app/components/forms/PostThread";
import { getUser } from "@/lib/actions/user.actions";
import { currentUser } from "@clerk/nextjs";
import { redirect } from "next/navigation";

const Page = async () => {
  const user = await currentUser();

  if (!user) return null;

  const userInfo = await getUser(user.id);
  console.log(userInfo);

  if (userInfo?.onboarded) return redirect("/onboarding");

  return (
    <>
      <h1 className="head-text">Create Thread</h1>
      <PostThread userId={userInfo._id} />
    </>
  );
};
export default Page;

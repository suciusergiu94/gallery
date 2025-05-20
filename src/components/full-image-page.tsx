import { deleteImage, getImage } from "@/server/db/queries";
import {clerkClient} from "@/server/clerk/clerkClient";
import { Button } from "@/components/ui/button";

export default async function FullPageImageView(props: {id: number}) {
  const image = await getImage(props.id)

  const user = await clerkClient.users.getUser(image.userId);

  return (
    <div className={"flex w-full h-full min-w-0"}>
      <div className="shrink flex justify-center items-center">
        <img src={image.url} alt={image.name} className={"shrink object-contain"} />
      </div>
      <div className={"flex w-48 shrink-0 flex-col border-l"}>
        <div className={"border-b p2 text-center text-lg"}>{image.name}</div>
        <div className={"flex flex-col p-2"}>
          <div>Uploaded By</div>
          <div>{user.fullName}</div>
        </div>
        <div className={"flex flex-col p-2"}>
          <div>Uploaded at</div>
          <div>{new Date(image.createdAt).toLocaleDateString()}</div>
        </div>
        <div className={"p-2"}>
          <form action={async () => {
            "use server"

            await deleteImage(image.id)
          }}>
            <Button variant={"destructive"} type={"submit"}>Delete</Button>
          </form>
        </div>
      </div>
  </div>
  )
}
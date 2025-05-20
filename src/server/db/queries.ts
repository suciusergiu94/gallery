import "server-only"
import { db } from "@/server/db/index";
import { auth } from "@clerk/nextjs/server";


export async function getMyImages() {
  const user = await auth()

  if(!user.userId) throw new Error("Unauthorized");

  return await db.query.image.findMany({
    where: (model, {eq}) => eq(model.userId, user.userId),
    orderBy: (model, { desc }) => desc(model.id)
  })
}

export async function getImage(id: number) {
  const user = await auth();

  if(!user.userId) throw new Error("Unauthorized");

  const image = await db.query.image.findFirst({
    where: (model, { eq }) => eq(model.id, id),
  })

  if(!image) throw new Error("No image found");

  return image;
}
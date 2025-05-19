import "server-only"
import { db } from "@/server/db/index";
import { auth } from "@clerk/nextjs/server";


export async function getMyImages() {
  const {userId} = await auth()

  if(!userId) throw new Error("Unauthorized");

  return await db.query.image.findMany({
    where: (model, {eq}) => eq(model.userId, userId),
    orderBy: (model, { desc }) => desc(model.id)
  })
}
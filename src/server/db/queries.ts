import "server-only"
import { db } from "@/server/db/index";
import { auth } from "@clerk/nextjs/server";


export async function getMyImages() {
  const user = await auth()

  // if(!user.userId) throw new Error("Unauthorized");

  return await db.query.image.findMany({
    // where: (model, {eq}) => eq(model.userId, user.userId),
    orderBy: (model, { desc }) => desc(model.id)
  })
}
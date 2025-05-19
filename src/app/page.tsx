import Link from "next/link";
import { db } from "@/server/db";



export const dynamic = "force-dynamic";

export default async function HomePage() {
  const images = await db.query.image.findMany({
    orderBy: (model, {desc}) => desc(model.id)
  })

  return (
    <main>
      <div className="flex flex-wrap gap-4">
        {[...images, ...images].map((image, index) => (
          <div key={index + 1}>
            <img src={image.url} height={400} width={400} alt="image" />
            <div>{image.name}</div>
          </div>
        ))}
      </div>
    </main>
  );
}

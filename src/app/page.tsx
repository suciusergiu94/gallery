import Link from "next/link";
import { db } from "@/server/db";
import { SignedIn, SignedOut } from "@clerk/nextjs";
import Image from "next/image";



export const dynamic = "force-dynamic";

export default async function HomePage() {
  const images = await db.query.image.findMany({
    orderBy: (model, { desc }) => desc(model.id)
  })

  return (
    <main>
      <SignedOut>
        <div className="h-full w-full text-2xl">Please sign in to view photos</div>
      </SignedOut>
      <SignedIn>
        <div className="flex flex-wrap gap-4">
          {[...images, ...images].map((image, index) => (
            <div key={index + 1}>
              <Image src={image.url} height={400} width={400} alt="image" />
              <div>{image.name}</div>
            </div>
          ))}
        </div>
      </SignedIn>
    </main>
  );
}

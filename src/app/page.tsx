import Link from "next/link";
import { db } from "@/server/db";
import { SignedIn, SignedOut } from "@clerk/nextjs";
import Image from "next/image";
import { getMyImages } from "@/server/db/queries";

export const dynamic = "force-dynamic";

export default async function HomePage() {
  const images = await getMyImages()

  return (
    <main>
      <SignedOut>
        <div className="h-full w-full text-2xl">Please sign in to view photos</div>
      </SignedOut>
      <SignedIn>
        <div className="flex flex-wrap gap-4 justify-center">
          {images.map((image) => (
            <div key={image.id} style={{width: "300px", height: "300px", position: "relative"}}>
              <Image src={image.url} fill alt="image" />
              <div>{image.name}</div>
            </div>
          ))}
        </div>
      </SignedIn>
    </main>
  );
}

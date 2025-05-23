import { SignedIn, SignedOut } from "@clerk/nextjs";
import Image from "next/image";
import { getMyImages } from "@/server/db/queries";
import Link from "next/link";

export const dynamic = "force-dynamic";

async function Images() {
  const images = await getMyImages()

  return (
    <div className="flex flex-wrap gap-4 p-4 justify-center items-center gap-4 p-4">
      {images.map((image) => (
        <Link key={image.id} href={`/img/${image.id}`}>
          <div className={"flex flex-col gap-4"}>
            <div style={{width: "300px", height: "300px", position: "relative"}} >
              <Image src={image.url} alt="image" fill/>
            </div>
            <div className={"wrap-break-word"}>{image.name}</div>
          </div>
        </Link>
      ))}
    </div>
  );
}

export default async function HomePage() {
  return (
    <main>
      <SignedOut>
        <div className="h-full w-full text-2xl flex justify-center">Please sign in to view photos</div>
      </SignedOut>
      <SignedIn>
        <Images/>
      </SignedIn>
    </main>
  );
}

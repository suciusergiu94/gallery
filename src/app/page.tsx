import { SignedIn, SignedOut } from "@clerk/nextjs";
import Image from "next/image";
import { getMyImages } from "@/server/db/queries";

export const dynamic = "force-dynamic";

async function Images() {
  const images = await getMyImages()

  return (
    <div className="flex flex-wrap gap-4 justify-center items-center">
      {images.map((image) => (
        <div key={image.id} className={"flex flex-col gap-4"}>
          <div  style={{width: "300px", height: "300px", position: "relative"}} >
            <Image src={image.url} alt="image" fill/>
          </div>
          <div className={"wrap-break-word"}>{image.name}</div>
        </div>

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

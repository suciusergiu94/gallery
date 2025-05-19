'use client'

import { SignedIn, SignedOut, SignInButton, SignOutButton } from "@clerk/nextjs";
import { UploadButton } from "@/utils/uploadthings";
import { useRouter } from "next/navigation";

export default function TopNav() {
  const router = useRouter();

  return (
    <nav className="flex items-center justify-between p-4 text-xl font-semibold border-b">
      <div>Gallery</div>
      <div className="flex flex-row gap-4">
        <SignedOut>
          <SignInButton mode={'redirect'}>Sign In</SignInButton>
        </SignedOut>
        <SignedIn>
          <UploadButton endpoint={"imageUploader"} onClientUploadComplete={() => {
            router.refresh()
          }}></UploadButton>
          <SignOutButton>Sign Out</SignOutButton>
        </SignedIn>
      </div>
    </nav>
  )
}
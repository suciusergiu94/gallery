'use client'

import { SignedIn, SignedOut, SignInButton, UserButton } from "@clerk/nextjs";
import { useRouter } from "next/navigation";
import Link from "next/link";
import SimpleUploadButton from "@/app/_components/simple-upload-button";

export function TopNav() {
  const router = useRouter();

  return (
    <nav className="flex items-center justify-between p-4 text-xl font-semibold border-b">
      <Link href={"/"}>Gallery</Link>
      <div className="flex flex-row gap-4 items-center">
        <SignedOut>
          <SignInButton mode={'redirect'}>Sign In</SignInButton>
        </SignedOut>
        <SignedIn>
          <SimpleUploadButton/>
          <UserButton />
        </SignedIn>
      </div>
    </nav>
  )
}
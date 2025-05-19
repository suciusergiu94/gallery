import { SignedIn, SignedOut, SignInButton, SignOutButton } from "@clerk/nextjs";

export default function TopNav() {
  return (
    <nav className="flex items-center justify-between p-4 text-xl font-semibold border-b">
      <div>Gallery</div>
      <SignedOut>
        <SignInButton mode={'redirect'}>Sign In</SignInButton>
      </SignedOut>
      <SignedIn>
        <SignOutButton>Sign Out</SignOutButton>
      </SignedIn>
    </nav>
  )
}
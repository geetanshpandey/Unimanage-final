import {
  SignInButton,
  SignUpButton,
  SignedIn,
  SignedOut,
  UserButton,
} from "@clerk/nextjs";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import HeaderMenu from "@/components/header-menu";

const PageHeader = () => {
  return (
    <header className="sticky inset-x-0 top-0 z-30 w-full transition-all bg-[#1a1a1a] backdrop-blur-md border-b border-gray-800">
      <div className="w-full max-w-screen-xl px-2.5 lg:px-20 relative mx-auto pt-2 pb-2">
        <div className="flex h-14 items-center justify-between">
          <a href="/">
            {/* add a logo here */}
            {/* <Image src="/logo.png" alt="Logo" width={120} height={200} /> */}
            <div className="flex items-center space-x-3 mb-6 md:mb-0">
              <div className="w-8 h-8 rounded-full bg-white text-black flex items-center justify-center text-xl font-bold">
                <span className="text-xl">⬢</span>
              </div>
              <span className="text-xl font-semibold tracking-wide text-white">UNIMANAGE</span>
            </div>
          </a>
          <div className="mt-2">
            <SignedOut>
              <SignInButton>
                <Button className="bg-black">Sign In</Button>
              </SignInButton>
              <SignUpButton>
                <Button className="bg-black ml-2">Sign Up</Button>
              </SignUpButton>
            </SignedOut>
            <SignedIn>
              <HeaderMenu />
              <UserButton />
            </SignedIn>
          </div>
        </div>
      </div>
    </header>
  );
};

export default PageHeader;

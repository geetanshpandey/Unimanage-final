import { SignIn } from "@clerk/nextjs";
 
export default function Page() {
  return <div className="h-[56vh] mt-10"><SignIn /></div>;
}
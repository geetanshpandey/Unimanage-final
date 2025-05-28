import React from "react";
import { currentUser } from "@clerk/nextjs/server";
import LandingPage from "../landing-page/index";
import { redirect } from "next/navigation";

const page = async () => {
  const user = await currentUser();

  if (!user) {
    redirect("/");
  }

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24 bg-black -mt-28">
      <LandingPage />
    </main>
  );
};

export default page;

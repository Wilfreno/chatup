import CreateServerSession from "@/components/page/auth/CreateServerSession";
import MainHeader from "@/components/page/main/MainHeader";
import MainSideBar from "@/components/page/main/MainSideBar";
import { redirect } from "next/navigation";
import React from "react";

export default function layout({ children }: { children: React.ReactNode }) {
  return (
    <CreateServerSession>
      <section className="flex">
        <MainSideBar />
        <div className="grid grid-rows-[auto_1fr] grow">
          <MainHeader />
          {children}
        </div>
      </section>
    </CreateServerSession>
  );
}

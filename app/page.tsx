'use client';

import Header from "@/components/header";
import NewspaperList from "@/components/newspaper-list";

export default function Home() {
  return (
    <main className="w-full min-h-screen flex flex-col items-center">
      <Header activeId={ 1 } />
      <NewspaperList />
    </main>
  );
}

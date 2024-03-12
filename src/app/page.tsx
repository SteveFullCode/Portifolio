"use client";

import Contato from "@/components/contato";
import Content from "@/components/content";
import Projetos from "@/components/projetos/Projetos";

import Sobre from "@/components/sobre";

export default function Home() {
  return (
    <main className="h-full w-full pb-5 container">
      <Content />
      <Sobre />
      <Projetos />
      <Contato />
    </main>
  );
}

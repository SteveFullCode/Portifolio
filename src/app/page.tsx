"use client";
import Contato from "@/components/contato";
import Content from "@/components/content";

import ProjetoUm from "@/components/projetos/projetoUm";
import Sobre from "@/components/sobre";

export default function Home() {
  return (
    <main className="h-full w-full pb-5">
      <Content />
      <Sobre />
      <ProjetoUm />
      <Contato />
    </main>
  );
}

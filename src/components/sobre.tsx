import Eu from "@/assets/perfil.png";
import Image from "next/image";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

export default function Sobre() {
  return (
    <section
      className="h-auto w-full flex flex-col md:flex-row justify-center items-center gap-10 py-8 my-8"
      id="sobre"
    >
      <div className="rounded-xl">
        <Image
          src={Eu}
          alt="Eu"
          height={350}
          width={350}
          title="Foto"
          className="flex justify-center rounded-full"
        />
      </div>
      <div className="md:w-1/2 mx-10">
        <div className="my-5">
          <h2 className="font-bold text-blue-500">Sobre Mim</h2>
          <p className="mt-5 text-justify">
            Sou um entusiasta da tecnologia com paixão por resolver problemas e
            criar soluções inovadoras. Com uma sólida base em programação e um
            desejo contínuo de aprendizado, estou sempre buscando expandir
            minhas habilidades e me manter atualizado com as últimas tendências
            e tecnologias do setor.
          </p>
        </div>
        <Accordion type="single" collapsible>
          <AccordionItem value="item-1">
            <AccordionTrigger className="font-bold text-blue-500">
              Habilidades Técnicas
            </AccordionTrigger>
            <AccordionContent className="text-justify">
              Linguagens de Programação: Possuo proficiência em{" "}
              <span>JavaScript</span>, <span>Figma</span>, <span>Html</span>,{" "}
              <span>CSS</span>. Frameworks e Bibliotecas: Familiarizado com{" "}
              <span>React.js</span>, <span>Next.js</span>,{" "}
              <span>Tailwind CSS</span> . Bancos de Dados: Estou começando a
              desenvolver <span>PostgreSQL</span> . Desenvolvimento Web:
              Habilidades sólidas em <span>HTML</span>, <span>CSS</span>,{" "}
              <span>JavaScript</span> e experiência com <span>ui.shadcn</span>,{" "}
              <span>Material Tailwind</span>, <span>Material.ui</span>.
              Versionamento de Código: Proficiente em
              <span>Git</span> e <span>GitHub</span> para controle de versão e
              colaboração em equipe.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-2">
            <AccordionTrigger className="font-bold text-blue-500">
              Vontade de Aprender
            </AccordionTrigger>
            <AccordionContent className="text-justify">
              Estou comprometido em expandir meu conhecimento e habilidades em
              programação, e estou sempre disposto a enfrentar novos desafios.
              Sou um aprendiz ávido e estou constantemente buscando
              oportunidades para me aprimorar e crescer profissionalmente. Estou
              entusiasmado em explorar novas tecnologias e abordagens de
              desenvolvimento, e estou aberto a receber feedback e orientação
              para melhorar minhas habilidades.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-3">
            <AccordionTrigger className="font-bold text-blue-500">
              Objetivos Profissionais
            </AccordionTrigger>
            <AccordionContent className="text-justify">
              Procuro oportunidades desafiadoras em que eu possa aplicar minhas
              habilidades técnicas enquanto continuo a aprender e crescer como
              desenvolvedor de software. Estou interessado em oportunidades que
              me permitam contribuir para projetos significativos e colaborar
              com uma equipe talentosa em um ambiente de trabalho estimulante.
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      </div>
    </section>
  );
}

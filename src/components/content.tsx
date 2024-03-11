"use client";

import Eu from "@/assets/animaction-eu.png";
import Image from "next/image";
import AllFavTechs from "@/components/icons/moticon";
import AllLearningTechs from "@/components/icons/moticont";
import { Button } from "@/components/ui/button";
import Git from "@/assets/github.svg";
import Linke from "@/assets/link.svg";
import Face from "@/assets/face.svg";
import Discor from "@/assets/discor.svg";
import { TypeAnimation } from "react-type-animation";
import Link from "next/link";
export default function Content() {
  return (
    <section className="h-auto md:h-screen flex flex-col gap-7 items-center pt-2 mt-20 pb-4">
      <div className=" flex flex-col gap-10 sm:gap-16 lg:gap-52 items-center md:flex-row-reverse ">
        <Image
          src={Eu}
          alt="Eu"
          height={300}
          width={300}
          className="rounded-full"
        />
        <div className="flex flex-col max-w-xl">
          <h1 className=" text-4xl tracking-tight lg:text-5xl text-center md:text-start font-semibold">
            <strong>Eu sou</strong>
            <br />
            <TypeAnimation
              sequence={[1000, " Desenvolvedor", 1000, " Front-End.", 1000]}
              wrapper="strong"
              speed={50}
              style={{ display: "inline-block" }}
              repeat={Infinity}
            />
          </h1>
          <p className=" text-center mb-4">
            Oi, eu sou Steve Herison. Um entusiasmado por Front-end, residencia
            Fortaleza-ce Brasil <strong className="animate-pulse">📍</strong>
          </p>
          <div className="flex justify-between ">
            <Link href="https://wa.me/+558599673669?text=" target="_blank">
              <Button className="font-semibold">Contate-me</Button>
            </Link>
            <div className="flex gap-2">
              <Link
                href="https://www.linkedin.com/in/isthivi-h-8277a7271/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Image
                  src={Linke}
                  alt="Eu"
                  height={30}
                  title="Linkedin"
                  className="cursor-pointer"
                />
              </Link>
              <Link
                href="https://github.com/SteveHerison"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Image
                  src={Git}
                  alt="Eu"
                  height={30}
                  title="GitHub"
                  className="cursor-pointer"
                />
              </Link>
              <Link
                href="https://www.facebook.com/Isthive/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Image
                  src={Face}
                  alt="Eu"
                  height={30}
                  title="Facebook"
                  className="cursor-pointer"
                />
              </Link>
              <Link
                href="https://www.linkedin.com/in/isthivi-h-8277a7271/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Image
                  src={Discor}
                  alt="Eu"
                  height={30}
                  title="Discord"
                  className="cursor-pointer"
                />
              </Link>
            </div>
          </div>
        </div>
      </div>
      <div className="flex flex-col gap-2 items-center">
        <AllFavTechs />
        <AllLearningTechs />
      </div>
    </section>
  );
}

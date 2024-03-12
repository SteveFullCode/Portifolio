"use client";
import { motion } from "framer-motion";
import ProjetoAmanda from "./projetoAmanda";

const animation = {
  hide: { x: -8, opacity: 0 },
  show: { x: 0, opacity: 1 },
};

export default function Projetos() {
  return (
    <section className="h-screen w-full  bg-zinc-50 dark:bg-slate-900 p-8 my-8">
      <motion.h2
        className="text-xl text-center text-gray-400 mb-20"
        initial={animation.hide}
        animate={animation.show}
        transition={{ delay: 0.6 }}
      >
        Novos Pretos em breve
      </motion.h2>
      <motion.div
        className="text-base text-center lg:text-start  text-gray-400 "
        initial={animation.hide}
        animate={animation.show}
        transition={{ delay: 0.6 }}
      >
        <ProjetoAmanda />{" "}
      </motion.div>
    </section>
  );
}

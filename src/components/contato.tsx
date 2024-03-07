import Link from "next/link";
import Image from "next/image";
import Git from "@/assets/github.svg";
import Linke from "@/assets/link.svg";

const Contato = () => {
  return (
    <section
      id="contato"
      className="grid md:grid-cols-2 my-12 md:my-12 py-24 gap-4 relative"
    >
      <div className="bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-primary-900 to-transparent rounded-full h-80 w-80 z-0 blur-lg absolute top-3/4 -left-4 transform -translate-x-1/2 -translate-1/2"></div>
      <div className="z-10">
        <h5 className="text-xl font-bold my-2">Vamos nós Conectar</h5>
        <p className=" mb-4 max-w-md text-justify">
          {" "}
          Atualmente estou procurando novas oportunidades, minha caixa de E-mail
          está sempre aberta. Se você tem uma pergunta ou só quer dizer oi,
          farei o meu melhor para responder!
        </p>
        <div className="socials flex flex-row gap-2">
          <Link
            href="https://github.com/SteveHerison"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Image src={Git} alt="Ícone do Github" width={30} />
          </Link>
          <Link
            href="https://www.linkedin.com/in/isthivi-h-8277a7271/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Image src={Linke} alt="Ícone do Linkedin" width={30} />
          </Link>
        </div>
      </div>
      <div>
        <form className="flex flex-col">
          <div className="mb-6">
            <label htmlFor="email" className=" block mb-2 text-sm font-medium">
              Seu email
            </label>
            <input
              name="email"
              type="email"
              id="email"
              required
              className="bg-[#18191E] border border-[#33353F] placeholder-[#9CA2A9] text-sm rounded-lg block w-full p-2.5 text-white"
              placeholder="Email@google.com"
            />
          </div>
          <div className="mb-6">
            <label
              htmlFor="subject"
              className=" block text-sm mb-2 font-medium"
            >
              Assunto
            </label>
            <input
              name="subject"
              type="text"
              id="subject"
              required
              className="bg-[#18191E] border border-[#33353F] placeholder-[#9CA2A9] text-sm rounded-lg block w-full p-2.5 text-white"
              placeholder="Oi"
            />
          </div>
          <div className="mb-6">
            <label
              htmlFor="message"
              className=" block text-sm mb-2 font-medium"
            >
              Mensagem
            </label>
            <textarea
              name="message"
              id="message"
              className="bg-[#18191E] border border-[#33353F] placeholder-[#9CA2A9] text-sm rounded-lg block w-full p-2.5 text-white"
              placeholder="Vamos conversar sobre..."
            />
          </div>
          <button
            type="submit"
            className="bg-slate-800 hover:bg-slate-600 font-medium py-2.5 px-5 rounded-lg w-full text-white"
          >
            Enviar Mensagem
          </button>
          <h4 className="text-red-300">
            Está em desenvolvimento, por favor use as minhas redes sociais!
          </h4>
        </form>
      </div>
    </section>
  );
};

export default Contato;

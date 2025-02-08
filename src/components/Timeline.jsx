export default function Timeline() {
  return (
    <section className="mt-28">
      <h2 className="text-4xl font-bold dark:text-white max-w-[1280px] mx-auto mb-6">
        Minha timeline
      </h2>
      <div className="timeline relative max-w-[1200px] mx-auto after:content-[''] after:absolute after:w-[5px] after:h-full after:bg-[#2A508D] after:top-0 after:left-1/2 after:z-[-1] after:transform after:-translate-x-1/2">
        <div className="py-3 px-12 relative w-1/2 left-0 text-white">
          <span className="absolute w-6 h-6 rounded-[50%] -right-3 top-8 bg-[#2A508D] z-10"></span>
          <div className="py-5 px-8 ring-2 ring-blue-500/50 bg-[#131313] relative rounded-md text-sm  transition-transform">
            <h2 className="font-bold text-xl ">
              Sistemas para internet - UNIPÊ
            </h2>
            <small className="mb-4 inline-block text-xs">Fev 2023</small>
            <p>
              Ínicio da minha jornada em TI, iniciei minha graduação em Sistemas
              para internet na UNIPÊ
            </p>
          </div>
        </div>
        <div className="py-3 px-12 relative w-1/2 left-1/2 text-white">
          <span className="absolute w-6 h-6 rounded-[50%] -left-3 top-8 bg-[#2A508D] z-10"></span>
          <div className="py-5 px-8 ring-2 ring-blue-500/50 bg-[#131313] relative rounded-md text-sm">
            <h2 className="font-bold text-xl">
              Estágio Front End - Ubtech Office
            </h2>
            <small className="mb-4 inline-block text-xs">Ago 2023</small>
            <p>
              Neste estágio volúntario pude contribuir com meus conhecimentos em
              front end, fui um dos responsáveis pelo frontend de um site para
              biblioteca da justiça federal da paraiba
            </p>
          </div>
        </div>
        <div className="py-3 px-12 relative w-1/2 left-0 text-white">
          <span className="absolute w-6 h-6 rounded-[50%] -right-3 top-8 bg-[#2A508D] z-10"></span>
          <div className="py-5 px-8 ring-2 ring-blue-500/50 bg-[#131313] relative rounded-md text-sm">
            <h2 className="font-bold text-xl">
              Estágio TI - GMI Distribuidora
            </h2>
            <small className="mb-4 inline-block text-xs">Fev 2024</small>
            <p>
              Neste estágio fui capaz de melhorar minhas habilidades gerais em
              TI, de hardware, redes, sistemas e etc. Além disso, pude melhorar
              minha capacidade de comunicação, de trabalho em equipe e de rápido
              aprendizado
            </p>
          </div>
        </div>
        <div className="py-3 px-12 relative w-1/2 left-1/2 text-white">
          <span className="absolute w-6 h-6 rounded-[50%] -left-3 top-8 bg-[#2A508D] z-10"></span>
          <div className="py-5 px-8 ring-2 ring-blue-500/50 bg-[#131313] relative rounded-md text-sm">
            <h2 className="font-bold text-xl">Estudos Trailhead</h2>
            <small className="mb-4 inline-block text-xs">Jul 2024</small>
            <p>
              Comecei a estudar desenvolvimento salesforce a partir da
              plataforma trailhead.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

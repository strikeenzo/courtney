function Home() {
  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="first-bg flex items-center" aria-label="Home Section">
      <div className="container mx-auto px-6 mt-20">
        <div className="max-w-5xl">
          <h1 className="text-3xl md:text-4xl font-bold mb-4">
            <span className="bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-500 bg-clip-text text-transparent">
              Welcome to Courtney Business
            </span>
          </h1>

          <div className="w-40 h-1 bg-gradient-to-r from-cyan-400 via-purple-500 to-orange-400 rounded-full mb-8"></div>

          <p className="text-slate-300 text-xl max-w-2xl mb-10 leading-relaxed">
            We help businesses grow through innovative technology solutions,
            expert consulting, and reliable IT support. Your success is powered
            by our expertise.
          </p>

          <div className="flex gap-4 flex-wrap">
            <div className="flex flex-wrap gap-3">
              <button
                type="button"
                onClick={() => scrollTo("contact")}
                className="inline-flex items-center rounded-2xl bg-sky-500 px-6 py-3 text-sm font-semibold text-slate-950 transition hover:bg-sky-400"
              >
                Contact Me
              </button>
              <button
                type="button"
                onClick={() => scrollTo("projects")}
                className="inline-flex items-center rounded-2xl border border-white/10 bg-white/5 px-6 py-3 text-sm font-semibold text-white transition hover:border-sky-400 hover:text-sky-200"
              >
                View Projects
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Home;

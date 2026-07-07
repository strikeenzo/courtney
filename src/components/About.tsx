function About() {
  return (
    <section
      id="about"
      className="relative overflow-hidden bg-white text-slate-900 py-20"
    >
      <div className="pointer-events-none absolute -right-24 top-16 h-72 w-72 rounded-full bg-sky-400/20 blur-3xl" />
      <div className="pointer-events-none absolute left-10 bottom-10 h-56 w-56 rounded-full bg-violet-400/10 blur-3xl" />

      <div className="max-w-6xl mx-auto px-6">
        <div className="grid gap-12 lg:grid-cols-2 items-center">
          {/* Company Overview */}
          <div className="space-y-8">
            <div>
              <p className="text-sm uppercase tracking-[0.35em] text-sky-600">
                About Us
              </p>

              <h1 className="mt-6 text-4xl font-bold leading-tight text-slate-900 sm:text-5xl">
                Building smarter technology solutions for modern businesses.
              </h1>

              <p className="mt-6 max-w-xl text-slate-600 leading-relaxed">
                We are an IT consulting company dedicated to helping businesses
                solve complex technology challenges. Our team delivers scalable
                software solutions, cloud strategies, and digital transformation
                services that improve performance and drive growth.
              </p>
            </div>

            <div className="grid gap-4 sm:grid-cols-3">
              <div className="rounded-3xl bg-slate-50 border border-slate-200 p-5">
                <p className="text-3xl font-bold text-slate-900">10+</p>
                <p className="mt-2 text-sm text-slate-500">Years Experience</p>
              </div>

              <div className="rounded-3xl bg-slate-50 border border-slate-200 p-5">
                <p className="text-3xl font-bold text-slate-900">100+</p>
                <p className="mt-2 text-sm text-slate-500">
                  Projects Delivered
                </p>
              </div>

              <div className="rounded-3xl bg-slate-50 border border-slate-200 p-5">
                <p className="text-3xl font-bold text-slate-900">24/7</p>
                <p className="mt-2 text-sm text-slate-500">Technical Support</p>
              </div>
            </div>
          </div>

          {/* Technology & Mission Panel */}
          <div className="rounded-[2rem] border border-slate-200 bg-slate-50 p-8 shadow-xl shadow-slate-200/50">
            <div className="mb-8">
              <span className="inline-flex rounded-full bg-sky-100 px-4 py-2 text-sm font-semibold text-sky-700">
                Our Approach
              </span>

              <h2 className="mt-5 text-3xl font-bold text-slate-900">
                Technology built around your business goals.
              </h2>

              <p className="mt-4 text-slate-600">
                We combine technical expertise with business strategy to create
                solutions that are secure, scalable, and ready for the future.
              </p>
            </div>

            <div className="space-y-4">
              {[
                {
                  title: "Strategic Consulting",
                  text: "Technology planning designed around your business objectives.",
                },
                {
                  title: "Custom Development",
                  text: "Modern applications built for performance and growth.",
                },
                {
                  title: "Cloud & Security",
                  text: "Reliable infrastructure with strong protection.",
                },
              ].map((item) => (
                <div
                  key={item.title}
                  className="rounded-2xl bg-white border border-slate-200 p-5"
                >
                  <h3 className="font-semibold text-slate-900">{item.title}</h3>

                  <p className="mt-2 text-sm text-slate-600">{item.text}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;

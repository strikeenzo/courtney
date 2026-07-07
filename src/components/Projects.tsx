import { content } from "../lib/content";

const Projects = () => {
  return (
    <section
      id="projects"
      className="py-20 bg-orange-50 text-slate-900"
      aria-label="Projects Section"
    >
      <div className="max-w-6xl mx-auto px-6">
        <header className="mb-12 text-center">
          <p className="text-sm uppercase tracking-[0.35em] text-sky-600">
            Case Studies
          </p>

          <h2 className="mt-4 text-4xl font-bold">
            Technology Solutions That Deliver Results
          </h2>

          <p className="mt-4 text-slate-600 max-w-2xl mx-auto">
            Explore how we help businesses improve operations, modernize
            technology, and achieve growth through innovative IT solutions.
          </p>
        </header>

        <div className="grid gap-8 md:grid-cols-2">
          {content.project.projects.map((p) => (
            <article
              key={p.title}
              className="group overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-sm hover:shadow-xl transition"
            >
              {/* Project Image */}
              <div className="overflow-hidden">
                <img
                  src={p.image}
                  alt={p.alt}
                  className="w-full h-56 object-cover transition duration-500 group-hover:scale-105"
                />
              </div>

              <div className="p-7">
                <div className="mb-3">
                  <span className="inline-flex rounded-full bg-sky-100 px-4 py-1 text-sm font-semibold text-sky-700">
                    IT Solution
                  </span>
                </div>

                <h3 className="text-2xl font-bold text-slate-900">{p.title}</h3>

                <p className="mt-3 text-slate-600 leading-relaxed">{p.desc}</p>

                {/* Business Impact */}
                <div className="mt-6 rounded-2xl bg-slate-50 p-5">
                  <p className="text-sm font-semibold text-slate-500 uppercase tracking-wider">
                    Business Impact
                  </p>

                  <p className="mt-2 text-slate-700">
                    Improved efficiency, optimized workflows, and created a
                    scalable technology foundation for future growth.
                  </p>
                </div>

                {/* Technologies */}
                <div className="mt-6 flex flex-wrap gap-2">
                  {p.tech.map((t) => (
                    <span
                      key={t}
                      className="rounded-full bg-slate-100 px-3 py-1 text-sm text-slate-700"
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;

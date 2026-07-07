const Footer = () => {
  return (
    <footer className="bg-slate-900 text-white">
      <div className="max-w-6xl mx-auto px-6 py-12">
        <div className="grid gap-10 md:grid-cols-4">
          {/* Company */}
          <div className="md:col-span-2">
            <h2 className="text-2xl font-bold">Courtney Business Solutions</h2>

            <p className="mt-4 max-w-md text-slate-400 leading-relaxed">
              We provide innovative IT consulting services, custom software
              solutions, cloud technology, and digital transformation strategies
              to help businesses grow and succeed.
            </p>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-lg font-semibold">Services</h3>

            <ul className="mt-4 space-y-3 text-slate-400">
              <li>IT Consulting</li>
              <li>Software Development</li>
              <li>Cloud Solutions</li>
              <li>Cybersecurity</li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-lg font-semibold">Contact</h3>

            <ul className="mt-4 space-y-3 text-slate-400">
              <li>
                5345 Lena Street
                <br />
                Philadelphia, PA 19144
              </li>

              <li>
                <a
                  href="mailto:admin@courtneybns.com"
                  className="hover:text-sky-400 transition"
                >
                  admin@courtneybns.com
                </a>
              </li>

              <li>
                <a
                  href="tel:2247887397"
                  className="hover:text-sky-400 transition"
                >
                  (224) 788-7397
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom */}
        <div className="mt-12 border-t border-white/10 pt-6 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
          <p className="text-sm text-slate-500">
            © {new Date().getFullYear()} Courtney Business Solutions. All rights
            reserved.
          </p>

          <div className="flex gap-6 text-sm text-slate-400">
            <a href="#about" className="hover:text-sky-400 transition">
              About
            </a>

            <a href="#projects" className="hover:text-sky-400 transition">
              Solutions
            </a>

            <a href="#contact" className="hover:text-sky-400 transition">
              Contact
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

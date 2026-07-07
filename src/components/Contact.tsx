import { useRef, useState } from "react";
import emailjs from "@emailjs/browser";

const Contact = () => {
  const form = useRef<HTMLFormElement>(null);
  const [status, setStatus] = useState("");

  const sendEmail = (e: React.FormEvent) => {
    e.preventDefault();

    if (!form.current) return;

    emailjs
      .sendForm(
        "YOUR_SERVICE_ID",
        "YOUR_TEMPLATE_ID",
        form.current,
        "YOUR_PUBLIC_KEY",
      )
      .then(
        () => {
          setStatus("Your message has been sent successfully.");
          form.current?.reset();
        },
        () => {
          setStatus("Something went wrong. Please try again.");
        },
      );
  };

  return (
    <section
      id="contact"
      className="bg-slate-50 text-slate-900 py-20"
      aria-label="Contact Section"
    >
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid gap-12 lg:grid-cols-[1fr_0.9fr]">
          {/* Contact Information */}
          <div className="space-y-8">
            <div>
              <p className="text-sm uppercase tracking-[0.3em] text-sky-600">
                Contact Us
              </p>

              <h2 className="mt-5 text-4xl font-bold sm:text-5xl">
                Let&apos;s discuss your next technology project
              </h2>

              <p className="mt-6 max-w-xl text-slate-600 leading-relaxed">
                Whether you need software development, cloud solutions,
                cybersecurity improvements, or IT consulting, our team is ready
                to help you build reliable technology solutions for your
                business.
              </p>
            </div>

            <div className="grid gap-4">
              <div className="rounded-2xl border border-slate-200 bg-white p-5">
                <p className="text-sm uppercase tracking-wider text-slate-400">
                  Address
                </p>

                <p className="mt-2 font-medium text-slate-900">
                  5345 Lena Street
                  <br />
                  Philadelphia, PA 19144
                </p>
              </div>

              <a
                href="mailto:admin@courtneybns.com"
                className="rounded-2xl border border-slate-200 bg-white p-5 transition hover:border-sky-400"
              >
                <p className="text-sm uppercase tracking-wider text-slate-400">
                  Email
                </p>

                <p className="mt-2 font-medium text-slate-900">
                  admin@courtneybns.com
                </p>
              </a>

              <a
                href="tel:2247887397"
                className="rounded-2xl border border-slate-200 bg-white p-5 transition hover:border-sky-400"
              >
                <p className="text-sm uppercase tracking-wider text-slate-400">
                  Phone
                </p>

                <p className="mt-2 font-medium text-slate-900">
                  (224) 788-7397
                </p>
              </a>
            </div>
          </div>

          {/* Contact Form */}
          <form
            ref={form}
            onSubmit={sendEmail}
            className="space-y-6 rounded-3xl border border-slate-200 bg-white p-8 shadow-lg"
          >
            <div>
              <label className="text-sm font-medium text-slate-700">Name</label>

              <input
                name="from_name"
                type="text"
                required
                placeholder="Your name"
                className="mt-3 w-full rounded-2xl border border-slate-200 px-4 py-3 outline-none focus:border-sky-500"
              />
            </div>

            <div>
              <label className="text-sm font-medium text-slate-700">
                Email
              </label>

              <input
                name="from_email"
                type="email"
                required
                placeholder="you@example.com"
                className="mt-3 w-full rounded-2xl border border-slate-200 px-4 py-3 outline-none focus:border-sky-500"
              />
            </div>

            <div>
              <label className="text-sm font-medium text-slate-700">
                Message
              </label>

              <textarea
                name="message"
                rows={6}
                required
                placeholder="Tell us about your project or IT needs"
                className="mt-3 w-full rounded-2xl border border-slate-200 px-4 py-3 outline-none focus:border-sky-500"
              />
            </div>

            <button
              type="submit"
              className="w-full rounded-2xl bg-sky-600 px-6 py-3 font-semibold text-white transition hover:bg-sky-500"
            >
              Send Message
            </button>

            {status && (
              <p className="text-center text-sm text-slate-600">{status}</p>
            )}
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;

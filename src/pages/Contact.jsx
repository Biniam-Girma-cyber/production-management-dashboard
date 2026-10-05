import { useState } from "react";

const initialForm = {
  fullName: "",
  email: "",
  subject: "",
  message: "",
};

function Contact() {
  const [form, setForm] = useState(initialForm);
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (event) => {
    const { name, value } = event.target;
    setForm((previous) => ({
      ...previous,
      [name]: value,
    }));
    setSubmitted(false);
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    console.log("Contact form submitted:", form);
    setSubmitted(true);
    setForm(initialForm);
  };

  return (
    <section className="mx-auto max-w-3xl px-4 py-16 sm:px-6 lg:px-8">
      <div className="mb-8">
        <p className="text-sm font-bold uppercase tracking-wider text-slate-500">
          Get in touch
        </p>
        <h1 className="mt-2 text-4xl font-black">Contact us</h1>
        <p className="mt-3 text-slate-500">
          Send us a message using the form below.
        </p>
      </div>

      {submitted && (
        <div className="mb-6 rounded-xl border border-green-200 bg-green-50 p-4 font-semibold text-green-800">
          Your message was submitted successfully!
        </div>
      )}

      <form
        onSubmit={handleSubmit}
        className="space-y-5 rounded-2xl border border-slate-200 bg-white p-6 shadow-sm sm:p-8"
      >
        <div>
          <label htmlFor="fullName" className="mb-2 block text-sm font-semibold">
            Full Name
          </label>
          <input
            id="fullName"
            name="fullName"
            required
            value={form.fullName}
            onChange={handleChange}
            className="w-full rounded-xl border border-slate-300 px-4 py-3 outline-none focus:border-slate-900 focus:ring-2 focus:ring-slate-200"
          />
        </div>

        <div>
          <label htmlFor="email" className="mb-2 block text-sm font-semibold">
            Email
          </label>
          <input
            id="email"
            name="email"
            type="email"
            required
            value={form.email}
            onChange={handleChange}
            className="w-full rounded-xl border border-slate-300 px-4 py-3 outline-none focus:border-slate-900 focus:ring-2 focus:ring-slate-200"
          />
        </div>

        <div>
          <label htmlFor="subject" className="mb-2 block text-sm font-semibold">
            Subject
          </label>
          <input
            id="subject"
            name="subject"
            required
            value={form.subject}
            onChange={handleChange}
            className="w-full rounded-xl border border-slate-300 px-4 py-3 outline-none focus:border-slate-900 focus:ring-2 focus:ring-slate-200"
          />
        </div>

        <div>
          <label htmlFor="message" className="mb-2 block text-sm font-semibold">
            Message
          </label>
          <textarea
            id="message"
            name="message"
            required
            rows="6"
            value={form.message}
            onChange={handleChange}
            className="w-full resize-y rounded-xl border border-slate-300 px-4 py-3 outline-none focus:border-slate-900 focus:ring-2 focus:ring-slate-200"
          />
        </div>

        <button
          type="submit"
          className="w-full rounded-xl bg-slate-900 px-5 py-3 font-bold text-white hover:bg-slate-700"
        >
          Submit
        </button>
      </form>
    </section>
  );
}
export default Contact;
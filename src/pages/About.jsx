function About() {
  return (
    <section className="mx-auto max-w-5xl px-4 py-16 sm:px-6 lg:px-8">
      <div className="rounded-3xl bg-slate-900 p-8 text-white sm:p-12">
        <p className="text-sm font-bold uppercase tracking-wider text-slate-400">
          About PRODEXA Store
        </p>
        <h1 className="mt-3 text-4xl font-black sm:text-5xl">
          Simple shopping, organized clearly.
        </h1>
        <p className="mt-6 max-w-3xl text-lg leading-8 text-slate-300">
          Nexus Store is a learning-focused online store dashboard built with
          React. It demonstrates reusable components, state management, forms,
          API integration, filtering, and navigation.
        </p>
      </div>

      <div className="mt-8 grid gap-6 md:grid-cols-3">
        <article className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
          <h2 className="text-xl font-bold">Mission</h2>
          <p className="mt-3 leading-7 text-slate-500">
            Make product discovery simple through a clean and responsive user
            experience.
          </p>
        </article>

        <article className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
          <h2 className="text-xl font-bold">Vision</h2>
          <p className="mt-3 leading-7 text-slate-500">
            Build maintainable web applications that can grow with new
            features and real business needs.
          </p>
        </article>

        <article className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
          <h2 className="text-xl font-bold">Team</h2>
          <p className="mt-3 leading-7 text-slate-500">
            A Nexus Academy student group practicing real development
            workflows and GitHub collaboration.
          </p>
        </article>
      </div>
    </section>
  );
}

export default About;
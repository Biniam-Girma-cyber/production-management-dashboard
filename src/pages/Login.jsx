import { useState } from "react";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();

    setMessage(`Login request received for ${email}. Real authentication is not required for this assignment.`);
  };

  return (
    <section className="mx-auto max-w-md px-4 py-16 sm:px-6 lg:px-8">
      <div className="mb-8 text-center">
        <p className="text-sm font-bold uppercase tracking-wider text-slate-500">
          Account
        </p>
        <h1 className="mt-2 text-4xl font-black">Welcome back</h1>
        <p className="mt-3 text-slate-500">
          Sign in to continue to the dashboard.
        </p>
      </div>

      {message && (
        <div className="mb-6 rounded-xl border border-blue-200 bg-blue-50 p-4 text-sm font-semibold text-blue-800">
          {message}
        </div>
      )}

      <form
        onSubmit={handleSubmit}
        className="space-y-5 rounded-2xl border border-slate-200 bg-white p-6 shadow-sm"
      >
        <div>
          <label htmlFor="login-email" className="mb-2 block text-sm font-semibold">
            Email
          </label>
          <input
            id="login-email"
            type="email"
            required
            value={email}
            onChange={(event) => setEmail(event.target.value)}
            className="w-full rounded-xl border border-slate-300 px-4 py-3 outline-none focus:border-slate-900 focus:ring-2 focus:ring-slate-200"
          />
        </div>

        <div>
          <label htmlFor="login-password" className="mb-2 block text-sm font-semibold">
            Password
          </label>
          <input
            id="login-password"
            type="password"
            required
            value={password}
            onChange={(event) => setPassword(event.target.value)}
            className="w-full rounded-xl border border-slate-300 px-4 py-3 outline-none focus:border-slate-900 focus:ring-2 focus:ring-slate-200"
          />
        </div>

        <button
          type="submit"
          className="w-full rounded-xl bg-slate-900 px-5 py-3 font-bold text-white hover:bg-slate-700"
        >
          Login
        </button>
      </form>
    </section>
  );
}

export default Login;
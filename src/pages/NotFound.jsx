import { Link } from "react-router-dom";
import { ArrowLeft } from "lucide-react";
import { Button } from "../components/Button";

export function NotFound() {
  return (
    <section className="pt-32 pb-20 min-h-screen flex items-center">
      <div className="mx-auto max-w-3xl px-6 text-center">
        <p className="text-sm font-medium tracking-wide uppercase text-indigo-600 dark:text-indigo-400 mb-4">
          404
        </p>
        <h1 className="text-2xl sm:text-3xl font-bold text-zinc-900 dark:text-zinc-50 mb-3">
          Page not found
        </h1>
        <p className="text-zinc-500 dark:text-zinc-400 mb-8">
          The page you're looking for doesn't exist or has moved.
        </p>
        <Link to="/">
          <Button variant="primary" size="md">
            <ArrowLeft size={16} strokeWidth={2} />
            Back to Home
          </Button>
        </Link>
      </div>
    </section>
  );
}

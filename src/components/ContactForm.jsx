import { useState } from "react";
import { Send, CheckCircle2, AlertCircle } from "lucide-react";
import { Button } from "./Button";
import { cn } from "../utils/cn";

/**
 * Replace with your own Formspree endpoint:
 * 1. Sign up free at https://formspree.io
 * 2. Create a new form, copy its endpoint (looks like https://formspree.io/f/xxxxxxx)
 * 3. Paste it below in place of the placeholder.
 */
const FORMSPREE_ENDPOINT = "https://formspree.io/f/moeqpzjd";

const inputClasses = cn(
  "w-full px-4 py-2.5 text-sm rounded-lg",
  "border border-zinc-200 dark:border-zinc-800",
  "bg-white dark:bg-zinc-900",
  "text-zinc-900 dark:text-zinc-50",
  "placeholder:text-zinc-400 dark:placeholder:text-zinc-600",
  "focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 dark:focus-visible:outline-indigo-400",
  "transition-colors duration-200"
);

export function ContactForm() {
  const [status, setStatus] = useState("idle"); // idle | submitting | success | error
  const [formData, setFormData] = useState({ name: "", email: "", phone: "", message: "" });

  const handleChange = (e) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handlePhoneChange = (e) => {
    const digitsOnly = e.target.value.replace(/\D/g, "").slice(0, 10);
    setFormData((prev) => ({ ...prev, phone: digitsOnly }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus("submitting");

    try {
      const response = await fetch(FORMSPREE_ENDPOINT, {
        method: "POST",
        headers: { Accept: "application/json", "Content-Type": "application/json" },
        body: JSON.stringify({
          ...formData,
          phone: formData.phone ? `+91${formData.phone}` : "",
        }),
      });

      if (response.ok) {
        setStatus("success");
        setFormData({ name: "", email: "", phone: "", message: "" });
      } else {
        setStatus("error");
      }
    } catch {
      setStatus("error");
    }
  };

  return (
    <form onSubmit={handleSubmit} className="max-w-xl space-y-4">
      <div>
        <label htmlFor="name" className="sr-only">
          Name
        </label>
        <input
          id="name"
          name="name"
          type="text"
          required
          placeholder="Your name"
          value={formData.name}
          onChange={handleChange}
          className={inputClasses}
        />
      </div>

      <div>
        <label htmlFor="email" className="sr-only">
          Email
        </label>
        <input
          id="email"
          name="email"
          type="email"
          required
          placeholder="your.email@example.com"
          value={formData.email}
          onChange={handleChange}
          className={inputClasses}
        />
      </div>

      <div>
        <label htmlFor="phone" className="sr-only">
          Phone number (optional)
        </label>
        <div className="flex">
          <span
            className={cn(
              "inline-flex items-center px-3 rounded-l-lg border border-r-0",
              "border-zinc-200 dark:border-zinc-800",
              "bg-zinc-50 dark:bg-zinc-800",
              "text-sm text-zinc-500 dark:text-zinc-400"
            )}
          >
            +91
          </span>
          <input
            id="phone"
            name="phone"
            type="tel"
            inputMode="numeric"
            pattern="[0-9]{10}"
            title="Enter a 10-digit mobile number"
            maxLength={10}
            placeholder="Mobile number (optional)"
            value={formData.phone}
            onChange={handlePhoneChange}
            className={cn(inputClasses, "rounded-l-none")}
          />
        </div>
      </div>

      <div>
        <label htmlFor="message" className="sr-only">
          Message
        </label>
        <textarea
          id="message"
          name="message"
          required
          rows={5}
          placeholder="What would you like to talk about?"
          value={formData.message}
          onChange={handleChange}
          className={cn(inputClasses, "resize-none")}
        />
      </div>

      <div className="flex items-center gap-4">
        <Button type="submit" variant="primary" size="md" disabled={status === "submitting"}>
          <Send size={16} strokeWidth={2} />
          {status === "submitting" ? "Sending..." : "Send Message"}
        </Button>

        {status === "success" && (
          <span className="inline-flex items-center gap-1.5 text-sm text-emerald-600 dark:text-emerald-400">
            <CheckCircle2 size={16} strokeWidth={1.5} />
            Message sent — thank you!
          </span>
        )}
        {status === "error" && (
          <span className="inline-flex items-center gap-1.5 text-sm text-red-600 dark:text-red-400">
            <AlertCircle size={16} strokeWidth={1.5} />
            Something went wrong. Try again or email me directly.
          </span>
        )}
      </div>
    </form>
  );
}

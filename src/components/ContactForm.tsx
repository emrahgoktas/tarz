"use client";

import { useSearchParams } from "next/navigation";
import { useState } from "react";
import { services } from "@/lib/services";
import { whatsappHref } from "@/lib/site";

type Props = {
  defaultService?: string;
  source?: string;
};

export function ContactForm({ defaultService = "", source }: Props) {
  const params = useSearchParams();
  const fromQuery = services.find((service) => service.slug === params.get("hizmet"))?.title;
  const initial = defaultService || fromQuery || "";
  const [error, setError] = useState("");
  const [ready, setReady] = useState("");

  function onSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = event.currentTarget;
    const data = new FormData(form);
    if (String(data.get("website") || "").trim()) {
      setReady("ok");
      return;
    }

    const name = String(data.get("name") || "").trim();
    const phone = String(data.get("phone") || "").trim();
    const service = String(data.get("service") || "").trim();
    const message = String(data.get("message") || "").trim();
    const digits = phone.replace(/\D/g, "");

    if (name.length < 2) {
      setError("Lütfen adınızı yazın.");
      return;
    }
    if (digits.length < 10 || digits.length > 13) {
      setError("Lütfen geçerli bir telefon numarası yazın.");
      return;
    }

    const params = new URLSearchParams(window.location.search);
    const campaign = ["utm_source", "utm_campaign", "utm_term"]
      .map((key) => {
        const value = params.get(key);
        return value ? `${key.replace("utm_", "")}: ${value}` : "";
      })
      .filter(Boolean);

    const lines = [
      "Merhaba, ücretsiz keşif talep ediyorum.",
      `Ad: ${name}`,
      `Telefon: ${phone}`,
      service ? `Hizmet: ${service}` : "",
      source ? `Sayfa: ${source}` : "",
      message ? `Not: ${message}` : "",
      campaign.length ? `Reklam: ${campaign.join(", ")}` : "",
    ].filter(Boolean);

    const url = whatsappHref(lines.join("\n"));
    setError("");
    setReady(url);
    window.open(url, "_blank", "noopener,noreferrer");
    form.reset();
  }

  if (ready && ready !== "ok") {
    return (
      <div className="border border-gold/50 bg-soft p-6" role="status">
        <p className="text-lg font-semibold text-dark">Mesajınız hazır.</p>
        <p className="mt-2 text-sm leading-relaxed text-muted">
          WhatsApp açılmadıysa aşağıdaki bağlantıdan gönderebilirsiniz. Numaranız yalnızca dönüş için kullanılır.
        </p>
        <a
          href={ready}
          target="_blank"
          rel="noopener noreferrer"
          className="mt-5 inline-flex min-h-12 items-center bg-gold px-6 text-sm font-semibold text-dark hover:bg-gold-dark"
        >
          WhatsApp’ta aç
        </a>
      </div>
    );
  }

  return (
    <form onSubmit={onSubmit} className="grid gap-4" noValidate>
      <div className="absolute -left-[9999px] h-0 w-0 overflow-hidden" aria-hidden>
        <label>
          Website
          <input name="website" tabIndex={-1} autoComplete="off" />
        </label>
      </div>
      <div className="grid gap-4 sm:grid-cols-2">
        <Field label="Ad" name="name" autoComplete="name" required />
        <Field label="Telefon" name="phone" type="tel" autoComplete="tel" inputMode="tel" required />
      </div>
      <label className="block text-sm font-medium text-dark">
        Hizmet
        <select
          name="service"
          defaultValue={initial}
          className="mt-2 w-full border border-black/10 bg-white px-4 py-3 text-sm text-ink"
        >
          <option value="">Seçin</option>
          {services.map((service) => (
            <option key={service.slug} value={service.title}>
              {service.title}
            </option>
          ))}
          <option value="Henüz karar vermedim">Henüz karar vermedim</option>
        </select>
      </label>
      <label className="block text-sm font-medium text-dark">
        Mesaj
        <textarea
          name="message"
          rows={4}
          placeholder="İlçe, kat ve kabaca ölçü"
          className="mt-2 w-full resize-y border border-black/10 bg-white px-4 py-3 text-sm text-ink placeholder:text-muted"
        />
      </label>
      {error ? (
        <p className="text-sm text-dark" role="alert">
          {error}
        </p>
      ) : null}
      <button
        type="submit"
        className="inline-flex min-h-12 items-center justify-center bg-gold px-6 text-sm font-semibold text-dark transition-colors hover:bg-gold-dark"
      >
        Ücretsiz Keşif Al
      </button>
      <p className="text-xs leading-relaxed text-muted">
        Gönderince WhatsApp açılır ve mesajınız hazır gelir. Bilgileriniz yalnızca keşif dönüşü için kullanılır.
      </p>
    </form>
  );
}

function Field({
  label,
  name,
  type = "text",
  autoComplete,
  inputMode,
  required,
}: {
  label: string;
  name: string;
  type?: string;
  autoComplete?: string;
  inputMode?: "tel" | "text";
  required?: boolean;
}) {
  return (
    <label className="block text-sm font-medium text-dark">
      {label}
      <input
        name={name}
        type={type}
        autoComplete={autoComplete}
        inputMode={inputMode}
        required={required}
        className="mt-2 w-full border border-black/10 bg-white px-4 py-3 text-sm font-normal text-ink"
      />
    </label>
  );
}

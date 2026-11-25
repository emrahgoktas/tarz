import Image from "next/image";
import { Breadcrumb, type Crumb } from "@/components/Breadcrumb";

export function PageHero({
  title,
  description,
  image,
  alt,
  crumbs,
}: {
  title: string;
  description?: string;
  image: string;
  alt: string;
  crumbs: Crumb[];
}) {
  return (
    <section className="relative flex min-h-[300px] items-end bg-dark text-white sm:min-h-[380px]">
      <Image src={image} alt={alt} fill priority className="object-cover" sizes="100vw" />
      <div className="absolute inset-0 bg-dark/75" />
      <div className="relative mx-auto w-full max-w-6xl px-5 py-14 sm:px-6 sm:py-16">
        <Breadcrumb items={crumbs} />
        <h1 className="mt-4 max-w-3xl text-4xl font-bold tracking-tight sm:text-5xl">{title}</h1>
        {description ? (
          <p className="mt-4 max-w-2xl text-base leading-relaxed text-white/80 sm:text-lg">
            {description}
          </p>
        ) : null}
      </div>
    </section>
  );
}

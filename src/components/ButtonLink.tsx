import Link from "next/link";

type Variant = "gold" | "outline" | "outlineDark";

const variants: Record<Variant, string> = {
  gold: "bg-gold text-dark hover:bg-gold-dark",
  outline: "border border-white text-white hover:bg-white hover:text-dark",
  outlineDark: "border border-dark/20 text-dark hover:border-dark hover:bg-dark hover:text-white",
};

type Props = {
  href: string;
  children: React.ReactNode;
  variant?: Variant;
  className?: string;
};

export function ButtonLink({ href, children, variant = "gold", className = "" }: Props) {
  const classes = `inline-flex min-h-12 items-center justify-center px-6 text-sm font-semibold transition-colors ${variants[variant]} ${className}`;
  const external = href.startsWith("http") || href.startsWith("tel:") || href.startsWith("mailto:");

  if (external) {
    const blank = href.startsWith("http");
    return (
      <a
        href={href}
        className={classes}
        {...(blank ? { target: "_blank", rel: "noopener noreferrer" } : {})}
      >
        {children}
      </a>
    );
  }

  return (
    <Link href={href} className={classes}>
      {children}
    </Link>
  );
}

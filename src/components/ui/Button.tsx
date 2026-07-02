import Link from "next/link";

interface ButtonProps {
  href?: string;
  children: React.ReactNode;
  className?: string;
}

export function Button({ href, children, className = "" }: ButtonProps) {
  const base = "inline-flex items-center justify-center rounded-none border border-base-800 bg-base-900 px-4 py-2 font-mono text-[11px] uppercase tracking-[0.24em] text-white transition hover:border-white hover:bg-black";

  if (href) {
    return (
      <Link href={href} className={`${base} ${className}`}>
        {children}
      </Link>
    );
  }

  return <button className={`${base} ${className}`}>{children}</button>;
}

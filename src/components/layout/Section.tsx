import React from "react";

interface SectionProps {
  children: React.ReactNode;
  className?: string;
  noBorder?: boolean;
  borderClassName?: string;
}

export function Section({ children, className = "", noBorder = false, borderClassName = "bg-base-800" }: SectionProps) {
  const sanitizedClassName = className
    .split(" ")
    .filter(
      (token) =>
        !token.startsWith("border") && !token.startsWith("rounded") && !token.startsWith("bg-")
    )
    .join(" ");

  return (
    <section className={`relative overflow-visible ${sanitizedClassName}`.trim()}>
      <div className="px-4 py-10 sm:px-6 sm:py-14 lg:px-8 lg:py-16">{children}</div>
      {!noBorder && (
        <div className={`absolute bottom-0 left-[calc(-50vw+50%)] right-[calc(-50vw+50%)] z-10 h-px ${borderClassName}`} />
      )}
    </section>
  );
}

export default Section;

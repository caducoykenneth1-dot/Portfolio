interface BadgeProps {
  children: React.ReactNode;
}

export function Badge({ children }: BadgeProps) {
  return (
    <span className="border border-base-800 px-2 py-1 font-mono text-[10px] uppercase tracking-[0.24em] text-base-300">
      {children}
    </span>
  );
}

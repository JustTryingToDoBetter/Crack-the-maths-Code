import { cn } from "@/cn";

export default function Button({
  as = "button",
  className,
  children,
  ...props
}: any) {
  const Cmp: any = as;
  return (
    <Cmp
      className={cn(
        "inline-flex items-center justify-center rounded-2xl px-6 py-3 font-semibold",
        "bg-brand-mint text-[#0A0718] shadow-neon transition",
        "hover:scale-[1.02] hover:shadow-glow active:scale-[0.99] focus:outline-none focus:ring-2 focus:ring-brand-blue/60",
        className
      )}
      {...props}
    >
      {children}
    </Cmp>
  );
}

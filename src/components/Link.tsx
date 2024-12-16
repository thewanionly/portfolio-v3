import { cn } from "@/lib/utils";
import type React from "react";

type LinkProps = {
  className?: string;
  children: React.ReactNode;
  href: string;
};

export const Link = ({ className, children, href }: LinkProps) => {
  return (
    <a href={href} target="_blank" className={cn("hover:underline", className)}>
      {children}
    </a>
  );
};

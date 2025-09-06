import { cn } from "@/lib/utils";
import type { SVGProps } from "react";

export function CinnamonStickIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      {...props}
      className={cn("text-foreground", props.className)}
    >
      <path d="M8.5 4.5C12.5 4.5 14.5 5.5 15.5 10C16.5 14.5 15.5 15.5 11.5 15.5" />
      <path d="M8.5 6.5C11.5 6.5 12.5 7 13.5 10C14.5 13 13.5 14 10.5 14" />
      <path d="M8.5 8.5C10 8.5 11.5 9.5 12 10.5" />
      <path d="M15.5 10.5C14 12 13 12.5 11 13" />
      <path d="M11.5 16C10 17.5 9 18.5 8 19.5" />
      <path d="M15.5 9.5C17.5 8 18.5 7.5 19.5 7" />
    </svg>
  );
}

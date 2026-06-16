import type { LucideIcon } from "lucide-react";

interface SecondaryButtonProps {
  Icon?: LucideIcon;
  text: string;
}

export default function SecondaryButton({ Icon, text }: SecondaryButtonProps) {
  return (
    <a
      href="/CV-2026.pdf"
      download="YanaZubalCV.pdf"
      className="
      group px-4 max-h-[50px] flex items-center justify-center gap-x-2
      border-2 border-[#f5f5f5]/70 rounded-[16px] cursor-pointer
      transition-all duration-200
      shadow-[0_0_8px_rgba(245,245,245,0.1)]
      hover:border-[#f5f5f5]/95
      hover:shadow-[0_0_12px_rgba(245,245,245,0.4),0_0_24px_rgba(245,245,245,0.15)]
      hover:bg-[rgba(245,245,245,0.05)]
    "
    >
      {Icon && (
        <Icon
          className="
        text-[#f5f5f5]/70
        transition-all duration-200
        group-hover:text-[#f5f5f5]/95
        group-hover:[filter:drop-shadow(0_0_4px_rgba(245,245,245,0.7))]
        w-[20px] h-[20px]
      "
        />
      )}
      <h3
        className="
        uppercase text-[#f5f5f5]/70 text-[16px] font-bold
        transition-all duration-200
        group-hover:text-[#f5f5f5]/95
        group-hover:[text-shadow:0_0_8px_rgba(245,245,245,0.5)]
      "
      >
        {text}
      </h3>
    </a>
  );
}

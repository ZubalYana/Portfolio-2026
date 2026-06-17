import type { LucideIcon } from "lucide-react";

interface PrimaryButtonProps {
  Icon?: LucideIcon;
  text: string;
  link: string;
}

export default function PrimaryButton({ Icon, text, link }: PrimaryButtonProps) {
  return (
    <a
      className="
      group px-4 py-3 max-h-[50px] flex items-center justify-center gap-x-2
      border-2 border-[#008CFF] rounded-[16px] cursor-pointer
      transition-all duration-200
      shadow-[0_0_8px_rgba(0,140,255,0.3)]
      hover:shadow-[0_0_12px_rgba(0,140,255,0.6),0_0_24px_rgba(0,140,255,0.2)]
      hover:bg-[rgba(0,140,255,0.08)]
    "
    href={link}
    >
      {Icon && (
        <Icon
          className="
        text-[#008CFF]
        transition-filter duration-200
        group-hover:[filter:drop-shadow(0_0_4px_rgba(0,140,255,0.9))]
        w-[20px] h-[20px]
      "
        />
      )}
      <h3
        className="
        uppercase text-[#008CFF] text-[16px] font-bold
        transition-all duration-200
        group-hover:[text-shadow:0_0_8px_rgba(0,140,255,0.6)]
      "
      >
        {text}
      </h3>
    </a>
  );
}

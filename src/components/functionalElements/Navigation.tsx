const links = ["About Me", "Projects", "Experiences", "Technologies"];

export default function Navigation() {
  return (
    <div className="w-full flex items-center justify-end gap-x-7">
      {links.map((link, index) => (
        <a
          key={index}
          className="
    relative text-[12px] tracking-[0.07em] font-normal
    text-white/45 cursor-pointer no-underline pb-[3px]
    transition-[color,text-shadow,filter] duration-200
    after:content-[''] after:absolute after:bottom-0
    after:left-1/2 after:right-1/2 after:h-px
    after:bg-white/50
    after:transition-[left,right,box-shadow] after:duration-250
    hover:text-white/95
    hover:[text-shadow:0_0_8px_rgba(255,255,255,0.4)]
    hover:[filter:drop-shadow(0_0_6px_rgba(0,140,255,0.8))_drop-shadow(0_0_12px_rgba(0,140,255,0.5))]
    hover:after:left-0 hover:after:right-0
    hover:after:[box-shadow:0_0_6px_rgba(255,255,255,0.5)]
  "
        >
          {link}
        </a>
      ))}
    </div>
  );
}

import gitHub from "../../assets/socialMedia/github.svg";

export default function GithubButton() {
  return (
    <a
      href="https://github.com/ZubalYana"
      target="_blank"
      className="
      group px-4 py-3 max-h-[50px] flex items-center justify-center gap-x-2
      border-2 border-[#f5f5f5]/70 rounded-[16px] cursor-pointer
      transition-all duration-200
      shadow-[0_0_8px_rgba(245,245,245,0.1)]
      hover:border-[#f5f5f5]/95
      hover:shadow-[0_0_12px_rgba(245,245,245,0.4),0_0_24px_rgba(245,245,245,0.15)]
      hover:bg-[rgba(245,245,245,0.05)]
    "
    >
      <div>
        <img
          src={gitHub}
          alt="gitHub svg"
          className="
        text-[#f5f5f5]/70
        transition-all duration-200
        group-hover:text-[#f5f5f5]/95
        group-hover:[filter:drop-shadow(0_0_4px_rgba(245,245,245,0.7))]
        w-[20px] h-[20px]"
        />
      </div>
    </a>
  );
}

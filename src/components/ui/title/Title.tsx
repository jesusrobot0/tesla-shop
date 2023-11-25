import { titleFont } from "@/config/fonts";

interface Props {
  title: string;
  subtitle?: string;
  className?: string;
}
export function Title({ title, subtitle, className }: Props) {
  return (
    <div className={`mt-10 ${className}`}>
      <h1
        className={`${titleFont.className} antialiased text-3xl font-semibold my-7 capitalize`}
      >
        {title}
      </h1>
      {subtitle && <h2 className="text-xl mb-5">{subtitle}</h2>}
    </div>
  );
}

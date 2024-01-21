import { Poppins } from "next/font/google";
import { cn } from "@/lib/utils";
import { LiaDumbbellSolid } from "react-icons/lia";

const font = Poppins({ subsets: ["latin"], weight: ["600"] });

interface HeaderProps {
  label: string;
}

export const Header = ({ label }: HeaderProps) => {
  return (
    <div
      className={cn(
        "w-full flex flex-col gap-y-4 items-center gap-4 justify-center",
        font.className
      )}
    >
      <h1
        className={cn(
          "flex items-center gap-1 text-3xl font-semibold",
          font.className
        )}
      >
        <div>
          <LiaDumbbellSolid className="text-primary -ms-1" size={50} />
        </div>
        <div>
          Built<span className="text-primary">4</span>Life
        </div>
      </h1>
      <p className="text-muted-foreground text-sm">{label}</p>
    </div>
  );
};

import { Poppins } from "next/font/google";
import { cn } from "@/lib/utils";
import { LiaDumbbellSolid } from "react-icons/lia";
import { Button } from "@/components/ui/button";
import { LoginButton } from "@/components/auth/login-button";

const font = Poppins({ subsets: ["latin"], weight: ["600"] });

const Home = () => (
  <main className="flex h-screen flex-col items-center justify-center">
    <div className="space-y-6 text-center flex flex-col items-center min-[430px]:border min-[430px]:border-primary p-8 rounded-lg min-[430px]:shadow-lg min-[430px]:shadow-primary">
      <h1
        className={cn(
          "flex items-center gap-1 text-6xl font-semibold text-white drop-shadow-md",
          font.className
        )}
      >
        <div>
          <LiaDumbbellSolid className="text-primary -ms-3 " size={100} />
        </div>
        <div>
          Built<span className="text-primary">4</span>Life
        </div>
      </h1>
      <p className="text-gray-300 text-lg font-semibold w-80">
        A workout app to track your workouts
      </p>
      <LoginButton>
        <Button className={"w-40 text-lg font-semibold"} size={"lg"}>
          Sign in
        </Button>
      </LoginButton>
    </div>
  </main>
);

export default Home;

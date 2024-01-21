"use client";

import { FaGithub } from "react-icons/fa";
import { FcGoogle } from "react-icons/fc";
import { Button } from "../ui/button";

export const Social = () => {
  return (
    <div className="flex items-center justify-center gap-x-2 w-full">
      <Button
        size={"lg"}
        className="w-32 border border-gray-400 hover:bg-zinc-900"
        variant={"ghost"}
        onClick={() => {}}
      >
        <FcGoogle className="h-5 w-5" />
      </Button>
      <Button
        size={"lg"}
        className="w-32 border border-gray-400  hover:bg-zinc-900"
        variant={"ghost"}
        onClick={() => {}}
      >
        <FaGithub className="h-5 w-5" />
      </Button>
    </div>
  );
};

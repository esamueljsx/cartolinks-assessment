import Link from "next/link";
import {
  AssetsIcon,
  Avatar,
  EditIcon,
  Enhancer,
  Home,
  ImageIcon,
  Logo,
  RealTime,
  VideoIcon,
} from "../common/icons";
import { Tabs, TabsList, TabsTrigger } from "../common/tabs";
import { Button } from "../common/button";
import { ThemeSwitcher } from "../common/theme-toggle";
import { ArrowDown, ChevronDown } from "lucide-react";

const Navbar = () => {
  return (
    <header className="fixed top-0 left-0 z-50 w-full ">
      <div className="flex items-center justify-between gap-6 py-2 px-7">
        <Link href="/" className=" block select-none outline-none">
          <Logo className="text-black dark:text-white" />
        </Link>
        <div className="flex cursor-pointer items-center space-x-2">
          <Avatar className="size-6" />
          <p className="text-primary-gray-700 flex items-center space-x-1 dark:text-gray-200">
            <span>esamueljsx</span>
            <span className="mt-1">
              <ChevronDown />
            </span>
          </p>
        </div>

        <Tabs defaultValue="home" className="lg:flex hidden">
          <TabsList className="py-1.5 px-1.5 bg-[#f5f5f5] dark:bg-[#202020] rounded-2xl backdrop-blur-2xl select-none z-81 mx-auto flex w-fit origin-center transform justify-center">
            <TabsTrigger value="home" className="h-10 w-13 flex rounded-xl">
              <Home className="size-4.5" />
            </TabsTrigger>
            <TabsTrigger value="image" className="h-10 w-13 flex rounded-xl">
              <ImageIcon className="size-4.5" />
            </TabsTrigger>
            <TabsTrigger value="video" className="h-10 w-13 flex rounded-xl">
              <VideoIcon className="size-4.5" />
            </TabsTrigger>
            <TabsTrigger value="enhancer" className="h-10 w-13 flex rounded-xl">
              <Enhancer className="size-4.5" />
            </TabsTrigger>
            <TabsTrigger value="realtime" className="h-10 w-13 flex rounded-xl">
              <RealTime className="size-4.5" />
            </TabsTrigger>
            <TabsTrigger value="edit" className="h-10 w-13 flex rounded-xl">
              <EditIcon className="size-4.5" />
            </TabsTrigger>
            <TabsTrigger value="asset" className="h-10 w-13 flex rounded-xl">
              <AssetsIcon className="size-4.5" />
            </TabsTrigger>
          </TabsList>
        </Tabs>

        <div className="lg:justify-end flex items-center gap-4">
          <ThemeSwitcher />
          <Button variant="ghost" className="bg-[#f5f5f5] dark:bg-[#202020]">
            <ImageIcon className="size-5" />
            Gallery
          </Button>
          <Avatar className="size-7" />
        </div>
      </div>
    </header>
  );
};

export default Navbar;

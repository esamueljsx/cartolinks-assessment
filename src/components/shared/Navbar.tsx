import Link from "next/link";
import { Button } from "../common/button";
import {
  AssetsIcon,
  Avatar,
  EditIcon,
  Enhancer,
  Home,
  ImageIcon,
  Logo,
  Notification,
  RealTime,
  Support,
  VideoIcon,
} from "../common/icons";
import { Tabs, TabsList, TabsTrigger } from "../common/tabs";
import { ThemeSwitcher } from "../common/theme-toggle";
import { ProfileList } from "./ProfileList";

const Navbar = () => {
  return (
    <header className="fixed top-0 left-0 z-50 w-full">
      <div className="flex items-center justify-between gap-6 py-2.5 px-5 lg:px-7">
        {/* Logo x Dropdown */}
        <div className="flex items-center gap-5 backdrop-blur-2xl p-1.5 rounded-2xl ">
          {/* Logo */}
          <Link href="/" className="block select-none outline-none">
            <Logo className="text-black dark:text-white" />
          </Link>

          {/* Dropdown */}
          <ProfileList />
        </div>

        {/* Nav Tabs */}
        <Tabs defaultValue="home" className="lg:flex hidden">
          <TabsList className="p-1.5 bg-[#f5f5f5] dark:bg-[#202020] rounded-2xl backdrop-blur-2xl select-none z-81 mx-auto flex w-fit origin-center transform justify-center">
            <TabsTrigger value="home" className="h-10 w-13 flex rounded-xl">
              <Home className="size-4.5" />
            </TabsTrigger>
            <TabsTrigger
              value="image"
              className="h-10 w-13 flex rounded-xl"
              disabled
            >
              <ImageIcon className="size-4.5" />
            </TabsTrigger>
            <TabsTrigger
              value="video"
              className="h-10 w-13 flex rounded-xl"
              disabled
            >
              <VideoIcon className="size-4.5" />
            </TabsTrigger>
            <TabsTrigger
              value="enhancer"
              className="h-10 w-13 flex rounded-xl"
              disabled
            >
              <Enhancer className="size-4.5" />
            </TabsTrigger>
            <TabsTrigger
              value="realtime"
              className="h-10 w-13 flex rounded-xl"
              disabled
            >
              <RealTime className="size-4.5" />
            </TabsTrigger>
            <TabsTrigger
              value="edit"
              className="h-10 w-13 flex rounded-xl"
              disabled
            >
              <EditIcon className="size-4.5" />
            </TabsTrigger>
            <TabsTrigger
              value="asset"
              className="h-10 w-13 flex rounded-xl"
              disabled
            >
              <AssetsIcon className="size-4.5" />
            </TabsTrigger>
          </TabsList>
        </Tabs>

        <div className="lg:justify-end flex items-center gap-2">
          <Button
            variant="ghost"
            className="lg:flex hidden bg-[#f5f5f5] dark:bg-[#202020]"
          >
            <ImageIcon className="size-5" />
            Gallery
          </Button>
          <Button
            variant="ghost"
            className="lg:flex hidden bg-[#f5f5f5] dark:bg-[#202020]"
          >
            <Support className="size-5" />
            Support
          </Button>
          <Button
            variant="ghost"
            size="icon"
            className="bg-[#f5f5f5] dark:bg-[#202020]"
          >
            <Notification className="size-5" />
          </Button>
          <ThemeSwitcher />
          <Avatar className="size-8" />
        </div>
      </div>
    </header>
  );
};

export default Navbar;

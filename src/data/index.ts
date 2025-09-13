import { Slider, Tools } from "@/types";
import slide1 from "@/assets/images/slide1.webp";
import slide2 from "@/assets/images/slide2.webp";
import slide3 from "@/assets/images/slide3.webp";

export const tools: Tools[] = [
  {
    // icon: <BsImage className="h-5 w-5 text-blue-600" />,
    title: "Image",
    description: "Generate images with custom styles in Flux and Ideogram.",
    action: "Open",
    bg: "bg-blue-100",
    isNew: true,
  },
  {
    // icon: <FaEdit className="h-5 w-5 text-purple-600" />,
    title: "Edit",
    description: "Add objects, change style, or expand photos and generations.",
    action: "Open",
    bg: "bg-purple-100",
    isNew: true,
  },
  {
    // icon: <HiVideoCamera className="h-5 w-5 text-green-600" />,
    title: "Video",
    description: "Generate videos with Haiper, Pika, Runway, Luma, and more.",
    action: "Open",
    bg: "bg-green-100",
  },
  {
    // icon: <BsMusicNoteBeamed className="h-5 w-5 text-orange-600" />,
    title: "Video Lipsync",
    description: "Lip sync any video to any audio.",
    action: "Open",
    bg: "bg-orange-100",
    isNew: true,
  },
  {
    // icon: <RiCpuLine className="h-5 w-5 text-sky-600" />,
    title: "Realtime",
    description: "Realtime AI rendering on a canvas. Instant feedback loops.",
    action: "Open",
    bg: "bg-sky-100",
  },
  {
    // icon: <TbSwitchHorizontal className="h-5 w-5 text-rose-600" />,
    title: "Motion Transfer",
    description: "Transfer motion to images and animate characters.",
    action: "Open",
    bg: "bg-rose-100",
    isNew: true,
  },
  {
    // icon: <FaMagic className="h-5 w-5 text-indigo-600" />,
    title: "Enhancer",
    description: "Upscale and enhance images and videos up to 22K.",
    action: "Open",
    bg: "bg-indigo-100",
    isNew: true,
  },
  {
    // icon: <FaBrain className="h-5 w-5 text-gray-600" />,
    title: "Train",
    description: "Teach Krea to replicate your style, products, or characters.",
    action: "Open",
    bg: "bg-gray-200",
  },
];

export const carouselItems: Slider[] = [
  {
    id: 1,
    title: "WAN 2.2 Image generation",
    description:
      "Generate complex images with the latest new and powerful WAN 2.2 model. Exceptional prompt adherence and ultra-realistic results.",
    buttonText: "Try WAN 2.2",
    image: slide1,
    badge: "FEATURED MODEL",
  },
  {
    id: 2,
    title: "FLUX1 Krea",
    description:
      "We've made it fast compared to our FLUX1 Krea model which delivers exceptional quality. Download it from our model explorer and use the technical report of our model.",
    buttonText: "Try FLUX1",
    image: slide2,
    badge: "AI MODEL",
  },
  {
    id: 3,
    title: "Open Source",
    description:
      "Explore our collection of open source models and tools. Build, customize, and deploy your own AI solutions.",
    buttonText: "Explore",
    image: slide3,
    badge: "OPEN SOURCE",
  },
];

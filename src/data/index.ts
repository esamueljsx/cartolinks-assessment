import slide1 from "@/assets/images/slide1.webp";
import slide2 from "@/assets/images/slide2.webp";
import slide3 from "@/assets/images/slide3.webp";
import {
  EditIcon,
  Enhancer,
  ImageIcon,
  LipSync,
  MotionIcon,
  RealTime,
  VideoIcon,
} from "@/components/common/icons";
import { CarouselProps, ToolCardProps } from "@/types";

export const tools: ToolCardProps[] = [
  {
    title: "Image",
    description: "Generate images with custom styles in Flux and Ideogram.",
    icon: ImageIcon,
    iconBg: "bg-gradient-to-t from-[#d0e3f1] to-[#294962]",
    isNew: true,
  },
  {
    title: "Video",
    description: "Generate videos with Haiper, Pika, Runway, Luma, and more.",
    icon: VideoIcon,
    iconBg: "bg-[#ffa700]",
  },
  {
    title: "Realtime",
    description: "Realtime AI rendering on a canvas. Instant feedback loops.",
    icon: RealTime,
    iconBg: "bg-gradient-to-t from-[#cef6ff] via-[#00d2ff] to-[#009df1]",
  },
  {
    title: "Enhancer",
    description: "Upscale and enhance images and videos up to 22K.",
    icon: Enhancer,
    iconBg: "bg-gradient-to-t from-[#888] to-[#000]",
    isNew: true,
  },
  {
    title: "Edit",
    description: "Add objects, change style, or expand photos and generations.",
    icon: EditIcon,
    iconBg: "bg-gradient-to-t from-[#AE91CA] via-[#592A85] to-[#180728]",
    isNew: true,
  },
  {
    title: "Video Lipsync",
    description: "Lip sync any video to any audio.",
    icon: LipSync,
    iconBg: "bg-gradient-to-t from-[#BBCA91] via-[#3C878F] to-[#07280F]",
    isNew: true,
  },
  {
    title: "Motion Transfer",
    description: "Transfer motion to images and animate characters.",
    icon: MotionIcon,
    iconBg: "bg-[#1B1C1D]",
    isNew: true,
  },
  {
    title: "Train",
    description: "Teach Krea to replicate your style, products, or characters.",
    // icon: <FaBrain className="h-5 w-5 text-gray-600" />,
    iconBg: "bg-gray-200",
  },
];

export const carouselItems: CarouselProps[] = [
  {
    id: 1,
    title: "WAN 2.2 Image generation",
    description:
      "Generate complex images with the brand new and powerful WAN 2.2 model. Exceptional prompt adherence and ultra-realistic textures.",
    buttonText: "Try WAN 2.2",
    image: slide1,
    badge: "NEW IMAGE MODEL",
  },
  {
    id: 2,
    title: "FLUX.1 Krea",
    description:
      "We've making the weights to out FLUX.1 Krea model open-source. Download and run our model weights, read the technical report, or generate with it in Krea Image.",
    buttonText: "Try FLUX.1",
    image: slide2,
    badge: "NEW IMAGE MODEL",
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
  {
    id: 4,
    title: "WAN 2.2 Image generation",
    description:
      "Explore our collection of open source models and tools. Build, customize, and deploy your own AI solutions.",
    buttonText: "Explore",
    image: slide1,
    badge: "OPEN SOURCE",
  },
];

import slide1 from '@/assets/images/slide1.webp'
import slide2 from '@/assets/images/slide2.webp'
import slide3 from '@/assets/images/slide3.webp'
import slide4 from '@/assets/images/slide4.webp'
import slide5 from '@/assets/images/slide5.webp'
import {
  EditIcon,
  Enhancer,
  ImageIcon,
  LipSync,
  MotionIcon,
  RealTime,
  TrainIcon,
  VideoIcon,
} from '@/components/common/icons'
import type { CarouselProps, ToolCardProps } from '@/types'

export const tools: ToolCardProps[] = [
  {
    title: 'Image',
    description: 'Generate images with custom styles in Flux and Ideogram.',
    icon: <ImageIcon className="size-6 text-white" />,
    iconBg: 'bg-gradient-to-t from-[#d0e3f1] to-[#294962]',
    isNew: true,
  },
  {
    title: 'Video',
    description: 'Generate videos with Haiper, Pika, Runway, Luma, and more.',
    icon: <VideoIcon className="size-6 text-white" />,
    iconBg: 'bg-[#ffa700]',
  },
  {
    title: 'Realtime',
    description: 'Realtime AI rendering on a canvas. Instant feedback loops.',
    icon: <RealTime className="size-6 text-white" />,
    iconBg: 'bg-gradient-to-t from-[#cef6ff] via-[#00d2ff] to-[#009df1]',
  },
  {
    title: 'Enhancer',
    description: 'Upscale and enhance images and videos up to 22K.',
    icon: <Enhancer className="size-6 text-white" />,
    iconBg: 'bg-gradient-to-t from-[#888] to-[#000]',
    isNew: true,
  },
  {
    title: 'Edit',
    description: 'Add objects, change style, or expand photos and generations.',
    icon: <EditIcon className="size-6 text-white" />,
    iconBg: 'bg-gradient-to-t from-[#AE91CA] via-[#592A85] to-[#180728]',
    isNew: true,
  },
  {
    title: 'Video Lipsync',
    description: 'Lip sync any video to any audio.',
    icon: <LipSync className="size-6 text-white" />,
    iconBg: 'bg-gradient-to-t from-[#BBCA91] via-[#3C878F] to-[#07280F]',
    isNew: true,
  },
  {
    title: 'Motion Transfer',
    description: 'Transfer motion to images and animate characters.',
    icon: <MotionIcon className="size-10 text-white" />,
    iconBg: 'bg-[#1B1C1D]',
    isNew: true,
  },
  {
    title: 'Train',
    description: 'Teach Krea to replicate your style, products, or characters.',
    icon: <TrainIcon className="size-8 text-white" />,
    iconBg: 'bg-black',
  },
]

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
      "We're making the weights to our FLUX.1 Krea model open-source. Download and run our model weights, read the technical report, or generate with it in Krea Image.",
    buttonText: "Try FLUX.1",
    image: slide2,
    badge: "NEW IMAGE MODEL",
  },
  {
    id: 3,
    title: "Real-Time Video Generation",
    description:
      "Announcing Realtime Video. Generate videos in real-time. Fully frame-consistent, controllable video clips.",
    buttonText: "Explore",
    image: slide3,
    badge: "OPEN SOURCE",
  },
  {
    id: 4,
    title: "Seedream 4.0",
    description:
      "Try the brand new and record-breaking image generation model Seedream 4.0 by ByteDance.",
    buttonText: "Start Generating",
    image: slide4,
    badge: "OPEN SOURCE",
  },
  {
    id: 5,
    title: "Introducing Motion Transfer",
    description:
      "Bring motion into your characters. Upload any image, record a video of yourself, and make your characters smile, talk, and dance. Powered by Runway Act.",
    buttonText: "Start Generating",
    image: slide5,
    badge: "OPEN SOURCE",
  },
  {
    id: 6,
    title: "DreamFusion 3D Model",
    description:
      "Transform your 2D images into stunning 3D models with DreamFusion. Experience seamless text-to-3D generation for creative and professional projects.",
    buttonText: "Try DreamFusion",
    image: "https://placehold.co/810x426?font=raleway&text=DreamFusion+3D",
    badge: "NEW AI MODEL",
  },
  {
    id: 7,
    title: "MuseNet Audio Synthesis",
    description:
      "Compose original music and soundscapes with MuseNet. Generate high-fidelity audio tracks from simple prompts using advanced AI.",
    buttonText: "Generate Audio",
    image: "https://placehold.co/810x426?font=raleway&text=MuseNet+Audio",
    badge: "AI AUDIO",
  },
  {
    id: 8,
    title: "PolyBrush 3D Sculptor",
    description:
      "Effortlessly sculpt and paint 3D models from text or sketches. PolyBrush uses AI to turn your ideas into detailed, ready-to-use 3D assets for games, art, and animation.",
    buttonText: "Create 3D Model",
    image: "https://placehold.co/810x426?font=raleway&text=PolyBrush+3D",
    badge: "AI 3D MODEL",
  },
];

export const profiles = ['benevolentrimblebat', 'designteamworkspace']

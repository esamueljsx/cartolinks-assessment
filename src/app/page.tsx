import Carousel from "@/components/layouts/Carousel";
import { Gallery } from "@/components/layouts/Gallery";
import Generation from "@/components/layouts/Generation";

export default function Home() {
  return (
    <main className="min-h-screen w-full relative ">
      <Carousel />
      <Generation />
      <Gallery />
    </main>
  );
}

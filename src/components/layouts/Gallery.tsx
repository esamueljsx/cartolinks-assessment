import Image from "next/image";
import { Button } from "../common/button";
import { CreditCard, Newspaper } from "../common/icons";

export function Gallery() {
  return (
    <section className="py-10">
      {/* Header */}
      <div className="mb-5 flex items-center justify-between">
        <h2 className="text-xl font-medium">Gallery</h2>

        <div className="flex items-center gap-2">
          <Button variant="ghost" className="bg-[#f5f5f5] dark:bg-[#202020]">
            <Newspaper className="size-5" />
            Legal
          </Button>
          <Button variant="ghost" className="bg-[#f5f5f5] dark:bg-[#202020]">
            <CreditCard className="size-5" />
            Pricing
          </Button>
        </div>
      </div>

      {/* Gallery Grid */}
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5 lg:gap-6">
        {Array.from({ length: 8 }).map((_, index) => (
          <div
            key={index}
            className="ring-3 ring-black/10 dark:ring-white/10 aspect-square bg-black/5 dark:bg-white/5 rounded-xl overflow-hidden"
          >
            <Image
              src={`/placeholder.svg?height=160&width=160&query=Krea AI Art ${
                index + 1
              }`}
              alt={`Krea AI Art ${index + 1}`}
              width={160}
              height={160}
              className="w-full h-full object-cover"
            />
          </div>
        ))}
      </div>
    </section>
  );
}

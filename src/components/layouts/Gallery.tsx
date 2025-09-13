import { CreditCard, User } from 'lucide-react'
import Image from 'next/image'
import { Button } from '../common/button'

export function Gallery() {
  return (
    <section className="py-10">
      {/* Header */}
      <div className="mb-5 flex items-center justify-between">
        <h2 className="text-xl font-medium">Gallery</h2>

        <div className="flex items-center gap-2">
          <Button
            variant="ghost"
            size="sm"
            className="text-gray-400 hover:text-white"
          >
            <User className="w-4 h-4 mr-2" />
            Legal
          </Button>
          <Button
            variant="ghost"
            size="sm"
            className="text-gray-400 hover:text-white"
          >
            <CreditCard className="w-4 h-4 mr-2" />
            Pricing
          </Button>
        </div>
      </div>

      {/* Gallery Grid */}
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {Array.from({ length: 8 }).map((_, index) => (
          <div
            key={index}
            className="aspect-square bg-black/5 dark:bg-white/5  rounded-lg overflow-hidden  transition-colors cursor-pointer"
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
  )
}

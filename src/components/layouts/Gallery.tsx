import { User, Printer } from "lucide-react";
import { Button } from "../common/button";

export function Gallery() {
  return (
    <section className="mb-8">
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-2xl">Gallery</h2>
        <div className="flex items-center gap-2">
          <Button
            variant="ghost"
            size="sm"
            className="text-gray-400 hover:text-white"
          >
            <User className="w-4 h-4 mr-2" />
            User
          </Button>
          <Button
            variant="ghost"
            size="sm"
            className="text-gray-400 hover:text-white"
          >
            <Printer className="w-4 h-4 mr-2" />
            Pricing
          </Button>
        </div>
      </div>

      {/* Gallery grid would go here */}
      <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4">
        {Array.from({ length: 12 }).map((_, index) => (
          <div
            key={index}
            className="aspect-square bg-gray-900/50 border border-gray-800 rounded-lg overflow-hidden hover:border-gray-700 transition-colors cursor-pointer"
          >
            <img
              src={`/placeholder.svg?height=200&width=200&query=AI generated art ${
                index + 1
              }`}
              alt={`Gallery item ${index + 1}`}
              className="w-full h-full object-cover"
            />
          </div>
        ))}
      </div>
    </section>
  );
}

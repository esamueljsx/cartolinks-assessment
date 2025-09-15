'use client'
import { ChevronDown, ChevronUp } from 'lucide-react'
import { useState } from 'react'
import { tools } from '@/data'
import { Button } from '../common/button'
import ToolCard from '../common/tools-card'

export default function Generation() {
  const [showAll, setShowAll] = useState(false)

  return (
    <section className="py-10">
      {/* Header */}
      <div className="mb-5   flex items-center justify-between">
        <h2 className="text-xl font-medium">Generate</h2>

        <Button
          variant="link"
          onClick={() => setShowAll(!showAll)}
          className="text-sm font-medium text-[#006eff]/80 hover:text-text-[#006eff] "
        >
          {!showAll ? (
            <ChevronDown className="size-5" />
          ) : (
            <ChevronUp className="size-5" />
          )}
          <span>{showAll ? 'Show less' : 'Show all'}</span>
        </Button>
      </div>

      {/* Grid of Tools */}
      <div className="grid grid-cols-1 gap-5 lg:gap-6 md:grid-cols-3 lg:grid-cols-4 items-center">
        {tools.map((tool) => (
          <ToolCard
            key={tool.title}
            title={tool.title}
            description={tool.description}
            icon={tool.icon}
            iconBg={tool.iconBg}
            isNew={tool.isNew}
          />
        ))}
      </div>
    </section>
  )
}

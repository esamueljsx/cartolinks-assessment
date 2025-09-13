import type { StaticImageData } from 'next/image'
import type { ComponentType, SVGProps } from 'react'

export interface ToolCardProps {
  title: string
  description: string
  icon?: ComponentType<SVGProps<SVGSVGElement>>
  iconBg?: string
  isNew?: boolean
  className?: string
}

export interface CarouselProps {
  id: number
  title: string
  description: string
  buttonText: string
  image: StaticImageData
  badge: string
}

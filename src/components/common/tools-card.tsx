import { cn } from '@/lib/utils'
import type { ToolCardProps } from '@/types'
import { Button } from './button'

export default function ToolCard({
  title,
  description,
  icon: Icon,
  iconBg,
  isNew = false,
  className,
}: ToolCardProps) {
  return (
    <div
      className={cn('grid grid-cols-[1fr_auto] items-center gap-6', className)}
    >
      {/* Icon and Text */}
      <div className="grid grid-cols-[auto_1fr] items-center gap-2.5">
        {Icon && (
          <div
            className={cn(
              'aspect-square flex size-12 flex-shrink-0 items-center justify-center rounded-[10px] inset-ring-[0.5px] shadow-[inset_0_1px_1px_rgba(255,255,255,0.1),inset_0_1px_5px_rgba(255,255,255,0.1)] inset-ring-black/10',
              iconBg,
            )}
          >
            <Icon className="size-6 text-white" />
          </div>
        )}

        <div className="block space-y-0.5">
          <div className="flex items-center gap-2">
            <p className="font-medium text-black dark:text-white text-sm">
              {title}
            </p>

            {isNew && (
              <span className="rounded-md bg-[#006eff] px-2 py-0.5 text-xs font-semibold text-white">
                New
              </span>
            )}
          </div>
          <p className="text-xs opacity-80">{description}</p>
        </div>
      </div>

      {/* Button */}
      <Button
        variant="ghost"
        className="bg-[#f5f5f5] dark:bg-[#202020] rounded-full text-xs px-6 py-2 h-fit"
      >
        Open
      </Button>
    </div>
  )
}

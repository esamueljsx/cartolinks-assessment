'use client'
import { useState } from 'react'
import { ChevronDown } from 'lucide-react'
import { Avatar } from '../common/icons'
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from '../common/dropdown-menu'
import { Button } from '../common/button'
import { profiles } from '@/data'

export function ProfileList() {
  const [selected, setSelected] = useState(profiles[0])

  return (
    <div className="hidden lg:flex">
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <Button variant="ghost">
            <Avatar className="size-7" />
            <span className="text-sm opacity-80">{selected}</span>
            <ChevronDown />
          </Button>
        </DropdownMenuTrigger>

        <DropdownMenuContent align="start" className="w-56">
          <DropdownMenuLabel>Switch Profile</DropdownMenuLabel>
          <DropdownMenuSeparator />
          {profiles.map((profile) => (
            <DropdownMenuItem
              key={profile}
              onSelect={() => setSelected(profile)}
              className="flex items-center space-x-2"
            >
              <Avatar className="size-7" />
              {profile}
            </DropdownMenuItem>
          ))}
        </DropdownMenuContent>
      </DropdownMenu>
    </div>
  )
}

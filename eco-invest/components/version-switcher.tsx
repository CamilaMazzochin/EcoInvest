"use client"

import * as React from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"
import { ChevronDown } from "lucide-react"

interface VersionSwitcherProps {
  versions: string[]
  defaultVersion: string
}

export function VersionSwitcher({ versions, defaultVersion }: VersionSwitcherProps) {
  const [version, setVersion] = React.useState(defaultVersion)

  return (
    <div className="flex items-center gap-2">
      <Link href="/" className="flex items-center">
        <span className="text-xl font-bold">eco-Invest</span>
      </Link>
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <Button variant="ghost" size="sm" className="gap-1 text-sm font-normal">
            {version}
            <ChevronDown className="h-4 w-4" />
          </Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent align="start">
          {versions.map((v) => (
            <DropdownMenuItem key={v} onClick={() => setVersion(v)}>
              {v}
            </DropdownMenuItem>
          ))}
        </DropdownMenuContent>
      </DropdownMenu>
    </div>
  )
}


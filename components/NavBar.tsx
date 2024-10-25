'use client'

import * as React from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { cn } from '@/lib/utils'
import { Button } from '@/components/ui/button'
import {
  NavigationMenu,
//   NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
//   NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from '@/components/ui/navigation-menu'
import { Input } from '@/components/ui/input'
import { GithubIcon, SearchIcon } from 'lucide-react'
import { ModeToggle } from './ModeToggel'

const navItems = [
  {
    title: 'Docs',
    href: '/docs',
  },
  {
    title: 'Learn',
    href: '/learn',
  },
  {
    title: 'Templates',
    href: '/templates',
  },
  {
    title: 'Deploy',
    href: '/deploy',
  },
]

export default function NavBar() {
  const pathname = usePathname()

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-14 items-center">
        <NavigationMenu>
          <NavigationMenuList>
            <NavigationMenuItem>
              <Link href="/" legacyBehavior passHref>
                <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 180 180"
                    fill="none"
                    className="mr-2"
                  >
                    <mask
                      id="mask0_408_134"
                      style={{ maskType: 'alpha' }}
                      maskUnits="userSpaceOnUse"
                      x="0"
                      y="0"
                      width="180"
                      height="180"
                    >
                      <circle cx="90" cy="90" r="90" fill="black" />
                    </mask>
                    <g mask="url(#mask0_408_134)">
                      <circle cx="90" cy="90" r="90" fill="black" />
                      <path
                        d="M149.508 157.52L69.142 54H54V125.97H66.1136V69.3836L139.999 164.845C143.333 162.614 146.509 160.165 149.508 157.52Z"
                        fill="url(#paint0_linear_408_134)"
                      />
                      <rect
                        x="115"
                        y="54"
                        width="12"
                        height="72"
                        fill="url(#paint1_linear_408_134)"
                      />
                    </g>
                    <defs>
                      <linearGradient
                        id="paint0_linear_408_134"
                        x1="109"
                        y1="116.5"
                        x2="144.5"
                        y2="160.5"
                        gradientUnits="userSpaceOnUse"
                      >
                        <stop stopColor="white" />
                        <stop offset="1" stopColor="white" stopOpacity="0" />
                      </linearGradient>
                      <linearGradient
                        id="paint1_linear_408_134"
                        x1="121"
                        y1="54"
                        x2="120.799"
                        y2="106.875"
                        gradientUnits="userSpaceOnUse"
                      >
                        <stop stopColor="white" />
                        <stop offset="1" stopColor="white" stopOpacity="0" />
                      </linearGradient>
                    </defs>
                  </svg>
                  Next.js
                </NavigationMenuLink>
              </Link>
            </NavigationMenuItem>
            {navItems.map((item) => (
              <NavigationMenuItem key={item.href}>
                <Link href={item.href} legacyBehavior passHref>
                  <NavigationMenuLink
                    className={cn(
                      navigationMenuTriggerStyle(),
                      pathname === item.href &&
                        'bg-accent text-accent-foreground'
                    )}
                  >
                    {item.title}
                  </NavigationMenuLink>
                </Link>
              </NavigationMenuItem>
            ))}
          </NavigationMenuList>
        </NavigationMenu>
        <div className="ml-auto flex items-center space-x-4">
          <form className="hidden lg:block">
            <div className="relative">
              <SearchIcon className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
              <Input
                type="search"
                placeholder="Search documentation..."
                className="w-64 pl-8"
              />
            </div>
          </form>
          <nav className="flex items-center space-x-2">
            <Button variant="ghost" size="icon">
              <GithubIcon className="h-5 w-5" />
              <span className="sr-only">GitHub</span>
            </Button>
          
              <ModeToggle />
           
          </nav>
        </div>
      </div>
    </header>
  )
}
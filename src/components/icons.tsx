import {
    AlertTriangle,
    ChevronLeft,
    ChevronRight,
    Laptop,
    Loader2,
    LucideIcon,
    LucideProps,
    Moon,
    MoreVertical,
    Pencil,
    Plus,
    SunMedium,
    Trash,
    User,
    X,
  } from "lucide-react"
  
  export type Icon = LucideIcon
  
  export const Icons = {
    logo: (props: LucideProps) => (
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 256" {...props}>
        <rect width="256" height="256" fill="none" />
        <line
          x1="208"
          y1="128"
          x2="128"
          y2="208"
          fill="none"
          stroke="currentColor"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="16"
        />
        <line
          x1="192"
          y1="40"
          x2="40"
          y2="192"
          fill="none"
          stroke="currentColor"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="16"
        />
      </svg>
    ),
    close: X,
    spinner: Loader2,
    chevronLeft: ChevronLeft,
    chevronRight: ChevronRight,
    trash: Trash,
    ellipsis: MoreVertical,
    add: Plus,
    warning: AlertTriangle,
    user: User,
    sun: SunMedium,
    moon: Moon,
    laptop: Laptop,
    edit : Pencil
  }
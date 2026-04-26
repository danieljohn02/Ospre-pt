import { cn } from "@/lib/utils"
import { Avatar, AvatarFallback } from "@/components/ui/avatar"
import { Star } from "lucide-react"

export interface TestimonialAuthor {
  name: string
  handle: string
}

export interface TestimonialCardProps {
  author: TestimonialAuthor
  text: string
  href?: string
  className?: string
}

function getInitials(name: string) {
  return name
    .split(" ")
    .slice(0, 2)
    .map((n) => n[0])
    .join("")
    .toUpperCase()
}

export function TestimonialCard({
  author,
  text,
  href,
  className,
}: TestimonialCardProps) {
  const Card = href ? "a" : "div"

  return (
    <Card
      {...(href ? { href } : {})}
      className={cn(
        "flex flex-col rounded-xl border border-slate-100",
        "bg-gradient-to-b from-slate-50 to-white",
        "p-5 sm:p-6 text-start",
        "hover:shadow-md transition-shadow duration-300",
        "w-[300px] sm:w-[360px] shrink-0",
        className
      )}
    >
      {/* Stars */}
      <div className="flex gap-0.5 mb-3" aria-label="5 out of 5 stars">
        {[1, 2, 3, 4, 5].map((s) => (
          <Star key={s} size={14} className="text-yellow-400 fill-yellow-400" aria-hidden="true" />
        ))}
      </div>

      {/* Review text */}
      <p className="text-sm sm:text-base text-slate-600 leading-relaxed flex-1">
        &ldquo;{text}&rdquo;
      </p>

      {/* Author */}
      <div className="flex items-center gap-3 mt-4 pt-4 border-t border-slate-100">
        <Avatar className="h-10 w-10 shrink-0">
          <AvatarFallback className="bg-teal-100 text-teal-700 font-semibold text-sm">
            {getInitials(author.name)}
          </AvatarFallback>
        </Avatar>
        <div>
          <p className="font-bold text-slate-900 text-sm leading-tight">{author.name}</p>
          <p className="text-slate-400 text-xs mt-0.5">{author.handle}</p>
        </div>
      </div>
    </Card>
  )
}

import { cn } from "@/lib/utils"
import { TestimonialCard, TestimonialAuthor } from "@/components/ui/testimonial-card"
import { MarqueeStrip } from "@/components/ui/marquee-strip"

interface TestimonialsSectionProps {
  testimonials: Array<{
    author: TestimonialAuthor
    text: string
    href?: string
  }>
  className?: string
}

export function TestimonialsSection({
  testimonials,
  className,
}: TestimonialsSectionProps) {
  return (
    <div className={cn("w-full py-4", className)}>
      <MarqueeStrip speed={65}>
        {[...testimonials, ...testimonials].map((testimonial, i) => (
          <TestimonialCard key={i} {...testimonial} />
        ))}
      </MarqueeStrip>
    </div>
  )
}

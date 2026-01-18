import { Clock } from "lucide-react"
import { siteConfig } from "@/content/site"

const HoursBadge = () => {
  return (
    <div className="inline-flex items-center gap-2 bg-red/20 border border-red/50 rounded-lg px-4 py-2">
      <Clock className="w-4 h-4 text-red" />
      <div className="text-sm">
        <div className="font-semibold">{siteConfig.hours.weekday}</div>
        <div className="text-white/70 text-xs">{siteConfig.hours.weekend}</div>
      </div>
    </div>
  )
}

export default HoursBadge

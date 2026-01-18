import { User, Target, Apple, Dumbbell, Users, type LucideIcon } from "lucide-react"

export interface Service {
  id: string
  icon: LucideIcon
  title: string
  description: string
  features: string[]
  link: string
}

export const services: Service[] = [
  {
    id: "personal-training",
    icon: User,
    title: "Personal Training (1:1)",
    description: "Customized one-on-one training sessions tailored to your specific goals and fitness level.",
    features: [
      "Strength and conditioning programs",
      "Mobility and flexibility training",
      "Proper form and technique coaching",
      "Progress tracking and adjustments",
      "Personalized workout plans",
    ],
    link: "/schedule",
  },
  {
    id: "program-design",
    icon: Target,
    title: "Program Design for Specific Goals",
    description: "Strategic training programs designed around your unique objectives.",
    features: [
      "Fat loss and body composition",
      "Muscle gain and hypertrophy",
      "Sports performance enhancement",
      "Bone density and general health",
      "Functional fitness for daily life",
    ],
    link: "/schedule",
  },
  {
    id: "nutrition",
    icon: Apple,
    title: "Weight Loss & Nutrition",
    description: "Comprehensive nutrition coaching and meal planning for sustainable results.",
    features: [
      "Customized meal plans (vegetarian/vegan/flexible)",
      "Habit coaching and behavior change",
      "Cardio programming for fat loss",
      "Supplement recommendations",
      "Accountability and support",
    ],
    link: "/schedule",
  },
  {
    id: "boxing",
    icon: Dumbbell,
    title: "Boxing Training",
    description: "Expert boxing instruction from a certified USA Boxing coach.",
    features: [
      "Technique and fundamentals",
      "Self-defense skills",
      "Competition preparation",
      "Boxing-specific conditioning",
      "Pad work and bag training",
      "Optional sparring (with safety protocols)",
    ],
    link: "/schedule",
  },
  {
    id: "group-training",
    icon: Users,
    title: "Group Training",
    description: "High-energy group sessions and boxing classes for all fitness levels.",
    features: [
      "Small group personal training",
      "Boxing bootcamp classes",
      "Partner training sessions",
      "Team building workouts",
      "Motivating group atmosphere",
    ],
    link: "/schedule",
  },
]

export interface BlogPost {
  id: number
  slug: string
  title: string
  excerpt: string
  date: string
  tags: string[]
  image: string | null
  content: string
}

export const blogPosts: BlogPost[] = [
  {
    id: 1,
    slug: "boxing-fundamentals-beginners",
    title: "Boxing Fundamentals Every Beginner Should Master",
    excerpt:
      "Learn the essential boxing techniques and stances that form the foundation of effective training and self-defense.",
    date: "March 15, 2024",
    tags: ["Boxing", "Beginners", "Technique"],
    image: null,
    content: "Full blog post content goes here...",
  },
  {
    id: 2,
    slug: "pad-work-tips-better-training",
    title: "Pad Work Tips for More Effective Training Sessions",
    excerpt:
      "Maximize your boxing training with these expert tips on pad work technique, timing, and communication with your coach.",
    date: "March 10, 2024",
    tags: ["Boxing", "Training Tips", "Technique"],
    image: null,
    content: "Full blog post content goes here...",
  },
  {
    id: 3,
    slug: "strength-training-boxing",
    title: "Building Strength for Boxing: A Complete Guide",
    excerpt:
      "Discover how to develop the specific strength and power needed for boxing performance and injury prevention.",
    date: "March 5, 2024",
    tags: ["Boxing", "Strength Training", "Performance"],
    image: null,
    content: "Full blog post content goes here...",
  },
  {
    id: 4,
    slug: "weight-loss-myths-debunked",
    title: "Weight Loss Myths Debunked: What Really Works",
    excerpt:
      "Separate fact from fiction with this evidence-based look at common weight loss myths and what actually delivers results.",
    date: "February 28, 2024",
    tags: ["Weight Loss", "Nutrition", "Myths"],
    image: null,
    content: "Full blog post content goes here...",
  },
  {
    id: 5,
    slug: "nutrition-basics-fitness",
    title: "Nutrition Basics for Fitness Success",
    excerpt:
      "Master the fundamental nutrition principles that support your training goals, from macros to meal timing.",
    date: "February 20, 2024",
    tags: ["Nutrition", "Fitness", "Health"],
    image: null,
    content: "Full blog post content goes here...",
  },
  {
    id: 6,
    slug: "mobility-training-fighters",
    title: "Mobility Training for Fighters: Why It Matters",
    excerpt:
      "Learn why mobility work is crucial for boxing performance and how to incorporate it into your training routine.",
    date: "February 15, 2024",
    tags: ["Mobility", "Boxing", "Training"],
    image: null,
    content: "Full blog post content goes here...",
  },
  {
    id: 7,
    slug: "start-boxing-any-age",
    title: "How to Start Boxing at Any Age: A Beginner's Guide",
    excerpt:
      "It's never too late to start boxing. Here's everything you need to know about beginning your boxing journey as an adult.",
    date: "February 10, 2024",
    tags: ["Boxing", "Beginners", "Fitness"],
    image: null,
    content: "Full blog post content goes here...",
  },
]

export interface Testimonial {
  id: number
  name: string
  goal: string
  rating: number
  quote: string
}

export const testimonials: Testimonial[] = [
  {
    id: 1,
    name: "Sarah M.",
    goal: "Weight Loss & Strength",
    rating: 5,
    quote:
      "Training with West County Fitness completely transformed my life. I lost 30 pounds and gained confidence I never knew I had. The boxing workouts are intense but incredibly rewarding.",
  },
  {
    id: 2,
    name: "Mike T.",
    goal: "Boxing Skills & Conditioning",
    rating: 5,
    quote:
      "As someone who wanted to learn boxing for self-defense, I couldn't have asked for a better coach. The technique instruction is top-notch and the conditioning work has me in the best shape of my life.",
  },
  {
    id: 3,
    name: "Jennifer L.",
    goal: "Overall Fitness",
    rating: 5,
    quote:
      "The personalized attention and custom workout plans make all the difference. Every session is challenging but achievable. I've never been more motivated to stick with a fitness routine.",
  },
  {
    id: 4,
    name: "David R.",
    goal: "Muscle Gain",
    rating: 5,
    quote:
      "The program design is incredible. I've put on 15 pounds of muscle in six months while staying lean. The nutrition guidance was exactly what I needed to break through my plateau.",
  },
  {
    id: 5,
    name: "Amanda K.",
    goal: "Athletic Performance",
    rating: 5,
    quote:
      "Training here improved my performance in my sport dramatically. The combination of strength training and boxing conditioning gave me an edge I didn't have before. Highly recommend!",
  },
]

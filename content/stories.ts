export interface Story {
  id: number
  name: string
  before: number
  after: number
  duration: string
  story: string
  image: string | null
}

export const stories: Story[] = [
  {
    id: 1,
    name: 'Fernando',
    before: 312,
    after: 217,
    duration: '9 months',
    story:
      "Fernando came to West County Fitness with a goal to lose significant weight and improve his overall health. Through consistent training sessions combining boxing cardio, strength training, and nutritional guidance, he lost 95 pounds in 9 months. His transformation wasn't just physical – he gained energy, confidence, and a new lease on life. Fernando now maintains his weight and continues training to build strength and endurance.",
    image: '/2-11.jpg',
  },
  {
    id: 2,
    name: 'Paula',
    before: 205,
    after: 150,
    duration: '5 months',
    story:
      "Paula's journey focused on sustainable weight loss through a combination of personalized training and nutrition coaching. She lost 55 pounds in just 5 months by following a customized meal plan and attending regular training sessions. Her dedication to both the workouts and nutrition plan resulted in remarkable transformation. Paula reports feeling healthier, more energetic, and more confident than she has in years.",
    image: '/2-9.jpg',
  },
  {
    id: 3,
    name: 'Marcus',
    before: 185,
    after: 165,
    duration: '4 months',
    story:
      'Marcus wanted to get lean while maintaining his strength for his amateur boxing career. Through strategic program design focusing on boxing-specific conditioning and targeted strength work, he dropped 20 pounds of body fat while improving his performance in the ring. His increased speed and endurance have made him a more competitive fighter, and he continues to train with us as he prepares for upcoming matches.',
    image: '/2-10.jpg',
  },
]

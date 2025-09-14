// src/data.js

export const DATA = {
  workouts: [
    {
      id: "w1",
      title: "Beginner Full Body",
      category: "Full Body",
      level: "Beginner",
      duration: 30,
      description: "A gentle full body routine for beginners. No equipment.",
      exercises: [
        { name: "Bodyweight Squat", reps: "3x12" },
        { name: "Incline Pushup", reps: "3x10" },
        { name: "Plank", reps: "3x30s" },
      ],
      isPremium: false,
    },
    {
      id: "w2",
      title: "HIIT Fat Burner",
      category: "HIIT",
      level: "Intermediate",
      duration: 20,
      description: "High intensity interval training to boost cardio.",
      exercises: [
        { name: "Burpees", reps: "5x30s" },
        { name: "Mountain Climbers", reps: "5x30s" },
        { name: "Jump Squats", reps: "5x20" },
      ],
      isPremium: true,
    },
    {
      id: "w3",
      title: "Stretch & Recover",
      category: "Flexibility",
      level: "All",
      duration: 15,
      description: "Stretch routine for mobility and recovery.",
      exercises: [
        { name: "Hamstring Stretch", reps: "2x30s each" },
        { name: "Cat-Cow", reps: "2x30s" },
        { name: "Child Pose", reps: "2x30s" },
      ],
      isPremium: false,
    },
    {
      id: "w4",
      title: "Upper Body Strength",
      category: "Strength",
      level: "Intermediate",
      duration: 40,
      description:
        "Focused upper body session with progressive overload (use dumbbells).",
      exercises: [
        { name: "Dumbbell Bench Press", reps: "4x8" },
        { name: "Bent-over Row", reps: "4x8" },
        { name: "Shoulder Press", reps: "3x10" },
      ],
      isPremium: true,
    },
    {
      id: "w5",
      title: "Quick Cardio Blast",
      category: "Cardio",
      level: "All", // <-- FIX: This was "leve" before
      duration: 12,
      description:
        "Short cardio routine to get your heart rate up — perfect for busy days.",
      exercises: [
        { name: "Jumping Jacks", reps: "3x45s" },
        { name: "High Knees", reps: "3x30s" },
        { name: "Butt Kicks", reps: "3x30s" },
      ],
      isPremium: false,
    },
  ],
  tips: [
    {
      id: "t1",
      title: "Hydrate First",
      text: "Drink water before and after workouts.",
    },
    {
      id: "t2",
      title: "Protein Intake",
      text: "Include a protein source after resistance training to support recovery.",
    },
    {
      id: "t3",
      title: "Sleep Well",
      text: "Aim for 7-9 hours to help muscle repair and energy.",
    },
  ],
};

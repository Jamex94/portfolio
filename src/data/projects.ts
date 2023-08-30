export interface ProjectType {
  name: string
  description: string
  image: string
  codeUrl?: string
  demoUrl?: string
  tools: string[]
}

export const projectsList: ProjectType[] = [
  {
    name: 'Pato Click',
    description:
      'Duck-click is an idle game!',
    image: 'wordle.webp',
    codeUrl: 'https://github.com/Jamex94/pato-click',
    demoUrl: 'https://pato-click-jamex.vercel.app',
    tools: ['Nuxt 3', 'Uno CSS', 'Vercel']
  },
  {
    name: 'Dev Blog',
    description: 'My personal blog where I share some of my coding knowledge and experience.',
    image: 'devBlog.webp',
    codeUrl: 'https://github.com/Jamex94/Dev-Blog',
    demoUrl: 'https://dev-blog-jamex.vercel.app',
    tools: ['Typescript', 'NextJS', 'Tailwind CSS', 'MDX']
  },
  {
    name: 'Art Gallery',
    description:
      'Art portfolio website that I built for the pintor Alberto Revelo.\nA place to showcase her art and connect with her audience.',
    image: 'artPortfolio.webp',
    codeUrl: 'https://github.com/Jamex94/art-gallery',
    demoUrl: 'https://art-gallery-jamex.vercel.app',
    tools: ['Typescript', 'NextJS', 'Tailwind CSS']
  },
  {
    name: 'Code Toolkit @Jamex',
    description:
      'My own code utilities and two React libraries. Published on NPM and available for use.\nEmpowering developers to build faster and better!',
    image: 'npmLibraries.webp',
    codeUrl: 'https://github.com/Jamex94/Jamex',
    tools: ['Typescript', 'React', 'NPM', 'Turborepo']
  }
]

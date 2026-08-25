export default defineAppConfig({
  global: {
    meetingLink: 'https://cal.com/your-link',
    available: true,
  },
  profile: {
    name: 'Your Name',
    job: 'Developer & Designer',
    email: 'you@example.com',
    phone: '(+66) 0 000 000 0',
    picture: 'https://ui-avatars.com/api/?name=Your+Name&background=282828&color=ededed&size=512',
  },
  socials: {
    github: 'https://github.com/your-username',
    twitter: 'https://twitter.com/your-username',
    linkedin: 'https://www.linkedin.com/in/your-username',
    instagram: 'https://www.instagram.com/your-username',
    spotify: 'https://open.spotify.com/user/your-username',
  },
  seo: {
    title: 'Portfolio',
    description: 'Portfolio of Your Name — developer and designer. Built with Nuxt.',
    url: 'https://example.com',
  },
  ui: {
    colors: {
      primary: 'emerald',
      neutral: 'neutral',
    },
    notifications: {
      position: 'top-0 bottom-auto',
    },
    notification: {
      progress: {
        base: 'absolute bottom-0 end-0 start-0 h-0',
        background: 'bg-transparent dark:bg-transparent',
      },
    },
    button: {
      slots: {
        base: 'cursor-pointer',
      },
      defaultVariants: {
        color: 'neutral',
      },
    },
    input: {
      defaultVariants: {
        color: 'neutral',
      },
    },
    textarea: {
      defaultVariants: {
        color: 'neutral',
      },
    },
    icons: {
      loading: 'lucide:loader',
    },
  },
  link: [
    {
      rel: 'icon',
      type: 'image/x-icon',
      href: '/favicon.ico',
    },
    {
      rel: 'apple-touch-icon',
      sizes: '180x180',
      href: '/apple-touch-icon.png',
    },
    {
      rel: 'icon',
      type: 'image/png',
      sizes: '32x32',
      href: '/favicon-32x32.png',
    },
    {
      rel: 'icon',
      type: 'image/png',
      sizes: '16x16',
      href: '/favicon-16x16.png',
    },
    {
      rel: 'manifest',
      href: '/site.webmanifest',
    },
  ],
})

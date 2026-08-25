export default defineAppConfig({
  global: {
    meetingLink: 'https://fastwork.co/user/dinsorkot',
    available: true,
  },
  profile: {
    name: 'Sirichai Kasemsuk',
    job: 'Full-Stack Developer',
    email: 'you@example.com',
    phone: '',
    picture: '/avatar.jpg',
  },
  socials: {
    github: 'https://github.com/dinsorkot-sk',
    fastwork: 'https://fastwork.co/user/dinsorkot',
  },
  seo: {
    title: 'Sirichai Kasemsuk — Portfolio',
    description: 'Full-stack developer portfolio: web apps, REST APIs and system migration. React, Vue, Next.js, Laravel, FastAPI. Available for hire on Fastwork.',
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

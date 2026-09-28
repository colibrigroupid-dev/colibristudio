import StudioPage from '../components/StudioPage'

export const metadata = {
  title: 'Colibri Studio — films in development',
  description:
    'Colibri Studio — film studio of the new cinema: live action × neural production. Six projects in development: BRO, БӨРІ, MATKA, NECTARIUM, BABY SHARP, THE YACHT. Jakarta · Bali · Almaty.',
  alternates: { canonical: 'https://colibristudio.ai/' },
  openGraph: {
    title: 'Colibri Studio — films in development',
    description:
      'Live action × neural production. Six films and series in development, each with a named director or author.',
    url: 'https://colibristudio.ai/',
    siteName: 'Colibri Studio',
    images: ['/assets/slate/bro.jpg'],
    type: 'website',
  },
}

// Разметка для поисковиков и ИИ-ответов: кто мы, что делаем, ответы на частые вопросы.
const ld = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'Organization',
      '@id': 'https://colibristudio.ai/#studio',
      name: 'Colibri Studio',
      url: 'https://colibristudio.ai/',
      description:
        'Film studio working between Jakarta, Bali and Almaty. Feature films, commercials and music films made with live action and neural production.',
      areaServed: ['Indonesia', 'Kazakhstan', 'Singapore'],
      sameAs: [
        'https://www.instagram.com/colibristudio.ai/',
        'https://www.youtube.com/@colibri_indonesia',
      ],
    },
    {
      '@type': 'ItemList',
      name: 'Colibri Studio — projects in development',
      itemListElement: [
        ['BRO', 'Movie', 'Adventure comedy: two boys and a rooster cross the whole of Java.', 'Ара Аруш'],
        ['БӨРІ', 'Movie', 'After his sister is brutally murdered, a student named Medet and his friends set out to help investigate a series of killings in the foothill village of Boltirik, where the prime suspect becomes a mysterious forest ranger who may turn out to be a werewolf — “böri”.', 'Куаныш Стаханов'],
        ['MATKA', 'Movie', 'Drama in which nature answers back.', 'Елена Лисасина'],
        ['NECTARIUM', 'CreativeWork', 'Animated universe of a bee civilisation, grown out of a novel.', 'Владимир Григорьев'],
        ['BABY SHARP', 'TVSeries', 'Animated series about a shark pup who is alone from day one.', 'Ара Аруш'],
        ['THE YACHT', 'Movie', 'Metaphysical drama about a woman on the border between life and death.', 'Котляров · Былинский'],
      ].map(([name, type, description, author], i) => ({
        '@type': 'ListItem',
        position: i + 1,
        item: {
          '@type': type,
          name,
          description,
          creator: { '@type': 'Person', name: author },
          productionCompany: { '@id': 'https://colibristudio.ai/#studio' },
        },
      })),
    },
    {
      '@type': 'FAQPage',
      mainEntity: [
        [
          'What is Colibri Studio?',
          'Colibri Studio is a film studio working between Jakarta, Bali and Almaty. We develop and shoot feature films, commercials and music films, and we finish them with neural production inside the Neyra ecosystem. Six projects are in development right now, each with a named director or author.',
        ],
        [
          'What does “live action × neural production” mean?',
          'It means we shoot real actors and real locations, and build everything a small budget cannot shoot — crowds, creatures, cities, impossible camera moves — with neural tools. The actor, the voice and the performance stay human. The scale around them is produced, not rented.',
        ],
        [
          'Which projects are in development?',
          'Six: BRO, an adventure comedy shot in Indonesia; БӨРІ, a Kazakh thriller; MATKA, a drama; NECTARIUM, an animated universe; BABY SHARP, an animated series; and THE YACHT, a metaphysical drama. Each card names the director or author and the stage the project has reached.',
        ],
        [
          'Can a brand order a commercial from the studio?',
          'Yes. We take commercials and brand films from the director’s treatment through to the final master, and we work the same way as on features: real shooting plus neural production. Write a few lines about the project in the form on the site and we answer within one working day.',
        ],
        [
          'Where does the studio work?',
          'Jakarta, Bali and Almaty. Production in Indonesia runs through PT Colibri Group Indonesia together with Neyra Vision Studio; projects in Kazakhstan run with Taurus Asia Production. The technology comes from Neyra Labs in Singapore.',
        ],
      ].map(([q, a]) => ({
        '@type': 'Question',
        name: q,
        acceptedAnswer: { '@type': 'Answer', text: a },
      })),
    },
  ],
}

export default function Home() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(ld) }} />
      <StudioPage />
    </>
  )
}

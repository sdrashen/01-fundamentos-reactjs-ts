import { Header } from './components/Header'
import { Post, PostType } from './components/Post'
import { Sidebar } from './components/Sidebar'
import styles from './App.module.css'

import './global.css'

const posts: PostType[] = [
  {
    id: 1,
    author: {
      avatarUrl: 'https://github.com/sdrashen.png',
      name: 'Sabrina Drashen',
      role: 'Desenvolvedora Front End'
    },
    content: [
      { type: 'paragraph', content: 'Fala, gente boa e bonita!' },
      { type: 'paragraph', content: 'Acabei de subir mais um projeto no meu portifolio.' },
      { type: 'link', content: 'health.life/fitnesslife' },
    ],
    publishedAt: new Date('2023-07-28 20:15:00'),
  },
  // {
  //   id: 2,
  //   author: {
  //     avatarUrl: 'https://github.com/sdrashen.png',
  //     name: 'Luiza Fernandes',
  //     role: 'CTO @Health&Happiness'
  //   },
  //   content: [
  //     { type: 'paragraph', content: 'Fala, gente boa e bonita!' },
  //     { type: 'paragraph', content: 'Acabei de subir mais um projeto no meu portifolio.' },
  //     { type: 'link', content: 'jane.design/doctorcare' },
  //   ],
  //   publishedAt: new Date('2023-07-29 20:20:05'),
  // },
]

export function App() {
  return (
    <div>
      <Header />
      <div className={styles.wrapper}>
        <Sidebar />
        <main>
          {posts.map(post => {
            return (
              <Post
                key={post.id}
                post={post}
              />
            )
          })}
        </main>
      </div>

    </div>
  )
}

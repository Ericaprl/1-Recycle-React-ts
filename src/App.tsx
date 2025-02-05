import Header from './compoments/Header';
import { Post, PostType } from './compoments/Post';
import { Sidebar } from './compoments/Sidebar';
import styles from './App.module.css';
import './global.css';


// author { avatar_url: "", name:"", role: ""}
// PublishedAt: Date
// content: string


const posts:PostType[] = [ 
  {
    id:1,
    author: { 
      avatarUrl: "https://avatars.githubusercontent.com/u/116949403?v=4", 
      name:"Erica Pereira", 
      role: "Web Developer"
    },
    content: [
      { type: 'paragraph', content: 'Fala galera 👋' },
      { type: 'paragraph', content: 'Acabei de subir mais um projeto no meu portifa. É um projeto que fiz no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀' },
      { type: 'link', content: 'jane.design/doctorcare' },
    ],
    publishedAt: new Date('2025-02-05 10:00:00'),
  },
  {
    id:2,
    author: { 
      avatarUrl: "https://avatars.githubusercontent.com/u/116949404?v=4", 
      name:"Carlos Santos", 
      role: "Backend Developer"
    },
    content: [
      { type: 'paragraph', content: 'Tksss' },
      { type: 'paragraph', content: 'dsfdsfdsfafdsfdsfdsfdsfadfdsfadsfasfdsfsafdsfdasf 🚀' },
      { type: 'link', content: 'dfdsfsdfdsaf/sdfdsfdsaf' },
    ],
    publishedAt: new Date('2025-02-04 16:00:00'),
  },

];

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

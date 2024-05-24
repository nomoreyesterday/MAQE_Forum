import { useEffect, useState } from 'react'
import './App.css'
import Card from './components/Card'

type AuthorProps = {
  id: number
  name: string
  role: string
  place: string
  avatar_url: string
}

type PostProps = {
  id: number
  author_id: number
  title: string
  body: string
  image_url: string
  created_at: string
}

type ContentProps = {
  author: AuthorProps;
  post: PostProps;
 };

function App() {
  const [content, setContent] = useState<ContentProps[]>([]);
  
  const authorURL = "https://maqe.github.io/json/authors.json"
  const postURL = "https://maqe.github.io/json/posts.json"

  useEffect(() => {
    const fetchData = async () => {
      try {
        const authorResponse = await fetch(authorURL);
        const authorData = await authorResponse.json();
 
        const postResponse = await fetch(postURL);
        const postData = await postResponse.json();
 
        const contentData: ContentProps[] = postData.map((post: PostProps) => {
          const author = authorData.find((author: AuthorProps) => author.id === post.author_id);
          return { author: author || null, post };
        });
 
        setContent(contentData);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };
 
    fetchData();
  }, []);

  return (
    <>
      <main className='w-[1280px] h-full px-[130px] py-[32px]'>
        <div className='flex flex-col items-start justify-start gap-y-6'>
          <h1 className='text-[32px] font-[700] text-[#01040d]'>MAQE Forum</h1>
          <p className='text-[#01040d]'>Your current timezone is: Asia/Bangkok</p>
        </div>
        <div className='flex flex-col gap-y-4 mt-5'>
          {content.map((post: ContentProps) => {
            return (
              <Card
                key={post.post.id}
                profileSrc={post.author?.avatar_url || ''}
                name={post.author?.name || ''}
                create={post.post.created_at}
                imageContent={post.post.image_url}
                header={post.post.title}
                content={post.post.body}
              />
            )
          })}
        </div>
      </main>
    </>
  )
}

export default App

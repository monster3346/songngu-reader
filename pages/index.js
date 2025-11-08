
import Link from 'next/link';
import sampleStories from '../data/sample-stories.json';
export default function Home() {
  return (
    <div style={{padding:'2rem'}}>
      <h1>SongNgữ Reader</h1>
      {sampleStories.map(story => (
        <div key={story.slug}>
          <Link href={'/story/'+story.slug}>{story.title}</Link>
        </div>
      ))}
      <p><Link href='/admin'>Admin Page</Link></p>
    </div>
  )
}

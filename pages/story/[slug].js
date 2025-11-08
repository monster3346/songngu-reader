
import { useRouter } from 'next/router';
import sampleStories from '../../data/sample-stories.json';
export default function Story() {
  const router = useRouter();
  const { slug } = router.query;
  const story = sampleStories.find(s => s.slug === slug);
  if(!story) return <div>Story not found</div>;
  return (
    <div style={{padding:'2rem'}}>
      <h1>{story.title}</h1>
      {story.content.map((c,i)=>(
        <p key={i}><strong>{c.zh}</strong><br/>{c.vi}</p>
      ))}
    </div>
  )
}

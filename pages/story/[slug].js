import { useRouter } from 'next/router';
import sampleStories from '../../data/sample-stories.json';

export default function Story() {
  const router = useRouter();
  const { slug } = router.query;
  const story = sampleStories.find(s => s.slug === slug);
  if(!story) return <div>Story not found</div>;
  return (
    <div className="p-8 max-w-4xl mx-auto">
      <h1 className="text-3xl font-bold mb-6">{story.title}</h1>
      {story.content.map((c,i)=><p key={i} className="mb-4"><strong>{c.zh}</strong><br/>{c.vi}</p>)}
    </div>
  )
}

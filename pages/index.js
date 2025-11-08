import StoryCard from '../components/StoryCard';
import sampleStories from '../data/sample-stories.json';

export default function Home() {
  return (
    <div className="p-8 max-w-4xl mx-auto">
      <h1 className="text-3xl font-bold mb-6">SongNgữ Reader</h1>
      {sampleStories.map(story => <StoryCard key={story.slug} story={story}/>)}
      <p className="mt-4"><a href="/admin" className="text-blue-500">Admin Panel</a></p>
    </div>
  );
}

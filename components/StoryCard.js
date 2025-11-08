import Link from 'next/link';
export default function StoryCard({story}){
  return (
    <Link href={'/story/'+story.slug} className="block p-4 mb-2 border rounded shadow hover:shadow-lg transition">
      <h3 className="font-bold">{story.title}</h3>
      <p className="text-sm text-gray-600">{story.author}</p>
    </Link>
  )
}

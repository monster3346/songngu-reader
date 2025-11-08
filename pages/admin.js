import { useState } from 'react';
import sampleStories from '../data/sample-stories';
import Header from '../components/Header';
import Footer from '../components/Footer';

export default function Admin() {
  const [stories, setStories] = useState([...sampleStories]);
  const [form, setForm] = useState({
    slug: '',
    title: '',
    author: '',
    content: [{ zh: '', vi: '' }]
  });

  const handleChange = (e, index, field) => {
    if (field === 'zh' || field === 'vi') {
      const newContent = [...form.content];
      newContent[index][field] = e.target.value;
      setForm({ ...form, content: newContent });
    } else {
      setForm({ ...form, [field]: e.target.value });
    }
  };

  const addContentLine = () => {
    setForm({ ...form, content: [...form.content, { zh: '', vi: '' }] });
  };

  const removeContentLine = (index) => {
    const newContent = form.content.filter((_, i) => i !== index);
    setForm({ ...form, content: newContent });
  };

  const addStory = () => {
    setStories([...stories, form]);
    setForm({ slug: '', title: '', author: '', content: [{ zh: '', vi: '' }] });
    alert('Đã thêm truyện mới (chỉ local, cần deploy để cập nhật online)');
  };

  const removeStory = (slug) => {
    setStories(stories.filter(s => s.slug !== slug));
  };

  return (
    <div className="bg-gray-100 dark:bg-gray-900 min-h-screen">
      <Header />
      <div className="max-w-4xl mx-auto p-6">
        <h1 className="text-3xl font-bold mb-6 text-gray-900 dark:text-white text-center">
          Admin Panel
        </h1>

        <div className="mb-8">
          <h2 className="text-xl font-semibold mb-2 text-gray-900 dark:text-white">Thêm truyện mới</h2>
          <div className="space-y-2">
            <input
              type="text"
              placeholder="Slug"
              value={form.slug}
              onChange={e => handleChange(e, null, 'slug')}
              className="w-full p-2 rounded border"
            />
            <input
              type="text"
              placeholder="Title"
              value={form.title}
              onChange={e => handleChange(e, null, 'title')}
              className="w-full p-2 rounded border"
            />
            <input
              type="text"
              placeholder="Author"
              value={form.author}
              onChange={e => handleChange(e, null, 'author')}
              className="w-full p-2 rounded border"
            />
            {form.content.map((line, index) => (
              <div key={index} className="flex space-x-2">
                <input
                  type="text"
                  placeholder="ZH"
                  value={line.zh}
                  onChange={e => handleChange(e, index, 'zh')}
                  className="flex-1 p-2 rounded border"
                />
                <input
                  type="text"
                  placeholder="VI"
                  value={line.vi}
                  onChange={e => handleChange(e, index, 'vi')}
                  className="flex-1 p-2 rounded border"
                />
                <button
                  onClick={() => removeContentLine(index)}
                  className="bg-red-500 text-white px-2 rounded"
                >
                  X
                </button>
              </div>
            ))}
            <button onClick={addContentLine} className="bg-blue-500 text-white px-4 py-2 rounded mt-2">
              Thêm dòng nội dung
            </button>
            <button onClick={addStory} className="bg-green-500 text-white px-4 py-2 rounded mt-2 ml-2">
              Thêm truyện
            </button>
          </div>
        </div>

        <div>
          <h2 className="text-xl font-semibold mb-2 text-gray-900 dark:text-white">Danh sách truyện</h2>
          <ul className="space-y-2">
            {stories.map(s => (
              <li key={s.slug} className="flex justify-between items-center bg-white dark:bg-gray-800 p-2 rounded shadow-sm">
                <span>{s.title} ({s.slug})</span>
                <button
                  onClick={() => removeStory(s.slug)}
                  className="bg-red-500 text-white px-2 py-1 rounded"
                >
                  Xóa
                </button>
              </li>
            ))}
          </ul>
        </div>

      </div>
      <Footer />
    </div>
  )
}

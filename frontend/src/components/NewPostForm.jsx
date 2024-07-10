import React, { useState } from 'react';

const NewPostForm = () => {
  const [post, setPost] = useState({
    title: '',
    description: '',
    date: '',
  });

  const onChange = (e) => {
    setPost({ ...post, [e.target.name]: e.target.value });
  };

  const createPost = async () => {
    const res = await fetch('YOUR_BACKEND_URL_HERE/api/blogs/post', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(post),
    });
    const data = await res.json();
    alert(data.success);
  };

  return (
    <div className="flex justify-center items-center pt-32 pb-12 bg-gray-800 bg-center bg-cover" style={{ backgroundImage: "url('/images/tree.png')" }}>
      <div className="w-full max-w-screen-lg  text-white rounded-md shadow-md">
        <h2 className="text-2xl font-semibold mb-6 text-center">Create a New Post</h2>
        <form>
          <div className="mb-4">
            <label htmlFor="title" className="block text-sm font-medium text-gray-400">Title</label>
            <input
              type="text"
              id="title"
              name="title"
              value={post.title}
              onChange={onChange}
              required
              className="w-full mt-2 p-2.5 bg-gray-700 text-white rounded-md border border-gray-600 focus:border-blue-500 focus:ring focus:ring-blue-500 focus:ring-opacity-50"
            />
          </div>
          <div className="mb-4">
            <label htmlFor="description" className="block text-sm font-medium text-gray-400">Description</label>
            <textarea
              id="description"
              name="description"
              value={post.description}
              onChange={onChange}
              rows="4"
              required
              className="w-full mt-2 p-2.5 bg-gray-700 text-white rounded-md border border-gray-600 focus:border-blue-500 focus:ring focus:ring-blue-500 focus:ring-opacity-50"
            ></textarea>
          </div>
          <div className="mb-4">
            <label htmlFor="date" className="block text-sm font-medium text-gray-400">Date</label>
            <input
              type="date"
              id="date"
              name="date"
              value={post.date}
              onChange={onChange}
              required
              className="w-full mt-2 p-2.5 bg-gray-700 text-white rounded-md border border-gray-600 focus:border-blue-500 focus:ring focus:ring-blue-500 focus:ring-opacity-50"
            />
          </div>
          <div className="flex justify-center">
            <button
              type="button"
              onClick={createPost}
              className="w-full py-2 px-4 bg-red-600 text-white font-semibold rounded-md hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-opacity-50"
            >
              Submit
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default NewPostForm;

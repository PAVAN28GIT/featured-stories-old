import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import post1 from "../assets/naruto.jpg"; // Placeholder image

// Post Component
function Post({ image, date, readingTime, title, description }) {
  const formattedDate = date.slice(0, 10);

  return (
    <div className="post-card bg-black text-white p-6 rounded-lg shadow-lg flex flex-col items-center">
      <img src={image || post1} alt={title} className="post-image w-full h-64 object-cover mb-4 rounded-md" />
      <div className="text-xs mb-2">{formattedDate}</div>
      <h2 className="text-xl font-bold mb-2 text-center">{title}</h2>
      <p className="text-sm text-center">{description}</p>
    </div>
  );
}

// PostList Component
function PostList() {
  const [posts, setPosts] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const response = await fetch('https://featured-stories.onrender.com/api/blogs'); // Adjust this URL to match your backend
        const data = await response.json();
        setPosts(data.blogs);
        setIsLoading(false);
      } catch (error) {
        console.error('Error fetching posts:', error);
        setIsLoading(false);
      }
    };

    fetchPosts();
  }, []);

  const handleGetStartedClick = () => {
    navigate('/newpost');
  };

  return (
    <div className="w-full mx-auto p-8 pt-24 bg-center bg-cover" style={{ backgroundImage: "url('/images/tree.png')" }}>
      <div className="flex justify-center mb-8">
        <button className='bg-[#00df9a] w-[200px] rounded-md font-medium py-3 text-black' onClick={handleGetStartedClick}>Add Post</button>
      </div>
      {isLoading ? (
        <div className="text-center text-white">Loading...</div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {posts.map((post, index) => (
            <Post key={index} {...post} />
          ))}
        </div>
      )}
    </div>
  );
}

export default PostList;

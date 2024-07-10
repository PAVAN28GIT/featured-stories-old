import React from 'react';
import { useNavigate } from 'react-router-dom';
import post1 from "../assets/post1.jpeg";

function Post({ image, date, readingTime, title, description }) {
  return (
    <div className="mt-12 post bg-black text-white p-4">
      <img src={image} alt={title} className="w-80 mb-4" />
      <div className="text-xs mb-2">{date} • {readingTime} min</div>
      <h2 className="text-xl font-bold mb-2">{title}</h2>
      <p className="text-sm">{description}</p>
    </div>
  );
}

function PostList() {
  const posts = [
    {
      image: post1,
      date: 'Mar 22, 2023',
      readingTime: '1',
      title: 'My Top 5 Movies of All Times',
      description: 'Create a blog post subtitle that summarizes your post in a few short, punchy sentences and entices your audience to continue reading...',
    },
    {
      image: post1,
      date: 'Mar 22, 2023',
      readingTime: '2',
      title: 'New Movies to Stream from Home This Week',
      description: 'Create a blog post subtitle that summarizes your post in a few short, punchy sentences and entices your audience to continue reading...',
    },
    {
      image: post1,
      date: 'Mar 22, 2023',
      readingTime: '3',
      title: 'Exploring the Mountains',
      description: 'Join us as we explore the majestic mountains and discover the wonders they hold...',
    },
    {
      image: post1,
      date: 'Mar 22, 2023',
      readingTime: '4',
      title: 'Life in a Cabin',
      description: 'Discover the simplicity and charm of life in a cozy cabin nestled in the woods...',
    },
    {
      image: post1,
      date: 'Mar 22, 2023',
      readingTime: '5',
      title: 'Stargazing at Night',
      description: 'Unwind and relax as you gaze at the stars and contemplate the mysteries of the universe...',
    },
    // Add 4 more posts with similar structure
  ];
  
  const navigate = useNavigate();

  const handleGetStartedClick = () => {
    navigate('/newpost');
  };

  return (
    <div className=" w-full mx-auto p-8 pt-24 h-full bg-center bg-cover" style={{ backgroundImage: "url('/images/tree.png')" }}>
      <div className="flex justify-center"> {/* Added a wrapper div with flex and justify-end */}
        <button className='bg-[#00df9a] w-[200px] rounded-md font-medium my-6 py-3 text-black' onClick={handleGetStartedClick}>Add Post</button>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {posts.map((post, index) => (
          <Post key={index} {...post} />
        ))}
      </div>
    </div>
  );
}

export default PostList;

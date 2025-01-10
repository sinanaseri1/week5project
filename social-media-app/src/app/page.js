"use client";

import PostCard from "../components/PostCard";
import { useState, useEffect } from "react";

export default function Home() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    try {
      const storedPosts = localStorage.getItem("posts");
      if (storedPosts) {
        setPosts(JSON.parse(storedPosts));
        console.log(storedPosts);
      }
    } catch (error) {
      console.log("There was an error");
    }
  }, []);

  return (
    <div className="m-5 flex flex-col items-center justify-center gap-4">
      {posts
        .slice()
        .reverse()
        .map((post) => (
          <PostCard
            key={post.id}
            username={post.user_name}
            description={post.description_}
            imageURL={post.image_URL}
          />
        ))}
    </div>
  );
}

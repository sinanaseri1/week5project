"use client";
import Image from "next/image";
import PostCard from "../components/PostCard";
import { useState, useEffect } from "react";


export default function Home() {

  const [counters, setCounters] = useState([{ id: 0, title: "Likes" }]);

  const [posts, setPosts] = useState([]);

  useEffect(() => {
    try {
      const storedPosts = localStorage.getItem("posts");
      if (storedPosts) {
        setPosts(JSON.parse(storedPosts));
      }
    } catch (error) {
      console.log("There was an error")
    }
  }, []);

  const generatePostcard = () => {
    return counters.map((counter) => {
      return <TallyCounter key={counter.id} title={counter.title} 
        updateStateInParent={(title) => setCounters(title)}
      />;
    });
  };

  posts.forEach((post) => console.log(post));
  console.log(JSON.parse(localStorage.getItem("posts")));

  return (
    <div className="m-5">
{posts.map((post) => 
        (
        <PostCard key={post.id} username={post.user_name}  description={post.description_} imageURL={post.image_URL} />)
        )
      }
    </div>
  );
}


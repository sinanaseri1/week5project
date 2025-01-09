"use client";
import Image from "next/image";
import PostCard from "../components/PostCard";
import { useState } from "react";



export default function Home() {

  const [counters, setCounters] = useState([{ id: 0, title: "Likes" }]);

  const generatePostcard = () => {
    return counters.map((counter) => {
      return <TallyCounter key={counter.id} title={counter.title} 
        updateStateInParent={(title) => setCounters(title)}
      />;
    });
  };

  return (
    <div className="m-5">
      <PostCard />
    </div>
  );
}


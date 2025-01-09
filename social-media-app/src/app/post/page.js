// src/app/post/post.js
"use client";

import React, { useEffect, useState } from "react";
import Notification from "@/components/Notification";

export default function PostPage() {
  const [username, setUsername] = useState("");
  const [imageURL, setImageURL] = useState("");
  const [description, setDescription] = useState("");

  const [notification, setNotification] = useState({
    type: "",
    message: "",
  });

  /*const [post, setPost] = useState({
    user_name: "",
    image_URL: "",
    description_: ""
  });*/

  function handleSubmit(e) {
    e.preventDefault();

    // Validation logic
    if (!username.trim() || !imageURL.trim() || !description.trim()) {
      setNotification({
        type: "error",
        message: "Please fill out all fields before submitting.",
      });
      return;
    }

    // If successful
    setNotification({
      type: "success",
      message: "Post has been successfully added!",
    });

    // Set local storage

    const localStoragePosts = localStorage.getItem("posts");

    const post = {
      user_name: username,
      image_URL: imageURL,
      description_: description,
      id: localStoragePosts ? JSON.parse(localStoragePosts.length + 1) : 0
    }

    if(localStoragePosts) {
    localStorage.setItem(
      "posts", 
      JSON.stringify(
        [...JSON.parse(localStoragePosts),
          post
        ]
      )
    )
   } else {
    localStorage.setItem(
      "posts", 
      JSON.stringify([ post ])
    )
  }

   // Reset fields
   setUsername("");
   setImageURL("");
   setDescription("");
  
  }

  return (
    <div className="max-w-md mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">Create a New Post</h1>

      {/* Notification Component */}
      <Notification
        type={notification.type}
        message={notification.message}
        onClose={() => setNotification({ type: "", message: "" })}
      />

      <form onSubmit={handleSubmit} className="space-y-4">
        {/* Username */}
        <div>
          <label htmlFor="username" className="block mb-1 font-semibold">
            Username
          </label>
          <input
            id="username"
            className="w-full px-3 py-2 border border-gray-300 rounded"
            type="text"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
        </div>

        {/* Image URL */}
        <div>
          <label htmlFor="imageURL" className="block mb-1 font-semibold">
            Image URL
          </label>
          <input
            id="imageURL"
            className="w-full px-3 py-2 border border-gray-300 rounded"
            type="text"
            value={imageURL}
            onChange={(e) => setImageURL(e.target.value)}
          />
        </div>

        {/* Description */}
        <div>
          <label htmlFor="description" className="block mb-1 font-semibold">
            Description
          </label>
          <textarea
            id="description"
            className="w-full px-3 py-2 border border-gray-300 rounded"
            rows={4}
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          />
        </div>

        <button
          type="submit"
          className="bg-green-600 text-white py-2 px-4 rounded hover:bg-orange-400"
        >
          Submit Post
        </button>
      </form>
    </div>
  );
}

// src/app/post/post.js
"use client"; 

import React, { useState } from "react";

export default function PostPage() {
  const [username, setUsername] = useState("");
  const [imageURL, setImageURL] = useState("");
  const [description, setDescription] = useState("");

  function handleSubmit(e) {
    e.preventDefault();

    // For now, just console log.
    console.log("New Post Data:", {
      username,
      imageURL,
      description,
    });

    // Reset fields or keep them—your choice.
    setUsername("");
    setImageURL("");
    setDescription("");
  }

  return (
    <div className="max-w-md mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">Create a New Post</h1>

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
          className="bg-blue-600 text-white py-2 px-4 rounded hover:bg-blue-500"
        >
          Submit Post
        </button>
      </form>
    </div>
  );
}

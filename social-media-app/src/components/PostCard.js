"use client";
import * as React from "react";

import { useState, useEffect } from "react";
import PostPage from "@/app/post/page";

import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

const PostCard = ({ username, description, imageURL, updateStateInParent }) => {

  const [count, setCount] = useState(0);

  const buttonHandler = () => {
    setCount(count + 1);
  };

  return (
    <Card className="w-[450px] shadow-xl">
      <CardHeader>
        <CardTitle>{username}</CardTitle>
        <CardDescription>
          {description}
        </CardDescription>
      </CardHeader>
      <CardContent>
        <form>
          <div className="grid w-full items-center gap-4">
            <div className="flex flex-col space-y-1.5">
              <img
                alt="social media picture"
                className="object-cover rounded-xl"
                src={imageURL}
                fill="true"
              />
            </div>
          </div>
        </form>
      </CardContent>
      <CardFooter className="flex justify-between">
        <Button className="bg-[#8ea604]"
        onClick={buttonHandler}>Like</Button>
        <Button className="bg-[#bf3100]"
        onClick={buttonHandler}>Dislike</Button>
        <div className="flex gap-1">
          <p className="font-semibold text-[#8ea604] text-small">{count}</p>
          <p className="text-[#8ea604] text-small">Liked</p>
        </div>
        <div className="flex gap-1">
          <p className="font-semibold text-[#bf3100] text-small">{count}</p>
          <p className="text-[#bf3100] text-small">Disliked</p>
        </div>
      </CardFooter>
    </Card>
  );
};

export default PostCard;

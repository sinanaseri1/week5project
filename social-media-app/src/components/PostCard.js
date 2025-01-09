"use client";
import * as React from "react";
import Image from "next/image";

import { useState } from "react";

import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

import { Label } from "@/components/ui/label";

const PostCard = ({ title, updateStateInParent }) => {
  const [count, setCount] = useState(0);

  const buttonHandler = () => {
    setCount(count + 1);
  };

  return (
    <Card className="w-[450px] shadow-xl">
      <CardHeader>
        <CardTitle>Post Title</CardTitle>
        <CardDescription>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean vel
          justo vel lorem volutpat faucibus.{" "}
        </CardDescription>
      </CardHeader>
      <CardContent>
        <form>
          <div className="grid w-full items-center gap-4">
            <div className="flex flex-col space-y-1.5">
              <img
                alt="social media picture"
                className="object-cover rounded-xl"
                src="https://i.ibb.co/8dV8jS3/card-robot.jpg"
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
          <p className="font-semibold text-[#8ea604] text-small">?</p>
          <p className="text-[#8ea604] text-small">Liked</p>
        </div>
        <div className="flex gap-1">
          <p className="font-semibold text-[#bf3100] text-small">?</p>
          <p className="text-[#bf3100] text-small">Disliked</p>
        </div>
      </CardFooter>
    </Card>
  );
};

export default PostCard;

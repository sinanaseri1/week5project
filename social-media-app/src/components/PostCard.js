import * as React from "react"
import Image from "next/image";

import { Button } from "@/components/ui/button"
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"

import { Label } from "@/components/ui/label"

const PostCard = () => {
  return (
    <Card className="w-[350px] shadow-xl">
      <CardHeader>
        <CardTitle>Post Title</CardTitle>
        <CardDescription>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean vel justo vel lorem volutpat faucibus. </CardDescription>
        </CardHeader>
        <CardContent> 
        <form>
          <div className="grid w-full items-center gap-4">
            <div className="flex flex-col space-y-1.5">
              <Label htmlFor="name">Image</Label>
              <img
                alt="Card background"
                className="object-cover rounded-xl"
                src="https://cdn-icons-png.flaticon.com/512/2065/2065203.png"
                height={70}
                width={70}
              />
            </div>
          </div>
        </form>
      </CardContent>
      <CardFooter className="flex justify-between">
        <Button
        className=""
        >Like
        </Button>
        <Button
        className= ""
        >Dislike
        </Button>
        <div className="flex gap-1">
           <p className="font-semibold text-[#8ea604] text-small">{}</p>
           <p className="text-[#8ea604] text-small">Liked</p>
         </div>
         <div className="flex gap-1">
           <p className="font-semibold text-[#bf3100] text-small">{}</p>
           <p className="text-[#bf3100] text-small">Disliked</p>
        </div>
      </CardFooter>
    </Card>
  )
};

export default PostCard



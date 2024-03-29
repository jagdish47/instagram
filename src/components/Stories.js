"use client";

import minifaker, { username } from "minifaker";
import "minifaker/locales/en";
import Story from "./Story";

import { useEffect, useState } from "react";

const Stories = () => {
  const [storyUsers, setStoryUsers] = useState([]);

  useEffect(() => {
    const storyUsers = minifaker.array(20, (i) => ({
      username: minifaker.username({ locale: "en" }).toLowerCase(),
      img: `https://i.pravatar.cc/150?img=${Math.ceil(Math.random() * 70)}`,
      id: i,
    }));
    setStoryUsers(storyUsers);

    console.log(storyUsers);
  }, []);

  return (
    <div className="flex space-x-2 p-6 bg-white mt-8 border-gray-200 border overflow-x-scroll rounded-sm scrollbar-none">
      {storyUsers.map((story) => (
        <Story username={story.username} img={story.img} id={story.id} />
      ))}
    </div>
  );
};

export default Stories;

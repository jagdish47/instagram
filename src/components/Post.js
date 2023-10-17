import { BsThreeDots, BsBookmark } from "react-icons/bs";
import { AiOutlineHeart } from "react-icons/ai";
import { IoChatbubbleEllipsesOutline } from "react-icons/io5";
import { BiHappyAlt } from "react-icons/bi";

const Post = ({ post }) => {
  return (
    <div className="bg-white my-7 border rounded-md">
      {/* Post Header */}
      <div className="flex items-center p-5">
        <img
          className="h-12 w-12 rounded-full object-cover border p-1 mr-3"
          src={post?.userImg}
          alt={post.username}
        />
        <p className="font-bold flex-1">{post?.username}</p>
        <BsThreeDots className="h-5" />
      </div>
      {/* Post Image */}
      <img
        className="object-cover w-full"
        src={post?.img}
        alt={post?.username}
      />
      {/* Post Button */}
      <div className="flex justify-between px-4 pt-4">
        <div className="flex space-x-4">
          <AiOutlineHeart className="btn" />
          <IoChatbubbleEllipsesOutline className="btn" />
        </div>
        <BsBookmark className="btn" />
      </div>

      {/* Post Comments */}
      <p className="p-5 truncate ">
        <span className="font-bold mr-2">{post?.username}</span>
        {post?.caption}
      </p>

      {/* Post Input box */}
      <form action="" className="flex items-center p-4">
        <BiHappyAlt className="h-7" />
        <input
          className="border-none flex-1 focus:ring-0"
          type="text"
          placeholder="Enter your comment..."
        />
        <button className="text-blue-400 font-bold">Post</button>
      </form>
    </div>
  );
};

export default Post;

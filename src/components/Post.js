import { BsThreeDots } from "react-icons/bs";
import { AiOutlineHeart } from "react-icons/ai";
import { IoChatbubbleEllipsesOutline } from "react-icons/io5";
import { BsBookmark } from "react-icons/bs";

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
    </div>
  );
};

export default Post;

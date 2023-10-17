import Image from "next/image";

const Story = ({ username, img, id }) => {
  return (
    <div>
      <img
        className="h-14 rounded-full p-[1.5px] border-red-500 border-2 cursor-pointer hover:scale-110 transition-transform duration-200 ease-out"
        src={img}
        alt={`user-image-${username}`}
      />
      <p className="text-xs w-14 truncate">{username}</p>
    </div>
  );
};

export default Story;

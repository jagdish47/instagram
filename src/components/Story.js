import Image from "next/image";

const Story = ({ username, img, id }) => {
  return (
    <>
      <h1>{username}</h1>
      <img src={img} alt="user-Image" />
      <h2>{id}</h2>
    </>
  );
};

export default Story;

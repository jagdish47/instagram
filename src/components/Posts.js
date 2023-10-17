import Post from "./Post";

const Posts = () => {
  const posts = [
    {
      id: "1",
      username: "codewithJassii",
      userImg:
        "https://images.unsplash.com/photo-1575936123452-b67c3203c357?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8aW1hZ2V8ZW58MHx8MHx8fDA%3D&w=1000&q=80",
      img: "https://images.unsplash.com/photo-1696635102402-a75df7af23a8?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
      caption: "Nice Picture",
    },
    {
      id: "2",
      username: "jassii.kumawat",
      userImg:
        "https://randomwordgenerator.com/img/picture-generator/55e5dd454d52ab14f1dc8460962e33791c3ad6e04e507440742a7ed09445c3_640.jpg",
      img: "https://images.unsplash.com/photo-1697081544000-9d9edc53dd4b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2071&q=80",
      caption: "Nice Picture",
    },
  ];

  return (
    <div>
      {posts.map((post) => (
        <Post post={post} />
      ))}
    </div>
  );
};

export default Posts;

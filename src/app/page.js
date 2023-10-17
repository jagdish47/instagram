import Image from "next/image";
import Header from "@/components/Header";
import Feed from "@/components/Feed";
import Stories from "@/components/Stories";

export default function Home() {
  return (
    <div className="bg-gray-50 min-h-screen">
      {/* Header */}
      <Header />

      {/* Feed */}
      <Feed />

      {/* Stories */}
    </div>
  );
}

"use client";

import { useRouter } from "next/navigation";
// import { cookies } from "next/headers";
import { useAuth } from "@clerk/nextjs";

import ThumbUpIcon from '@mui/icons-material/ThumbUp';
import ThumbDownIcon from '@mui/icons-material/ThumbDown';


const ToggleSeen = (
  { user_id, movie_id, recommend }: { user_id: String | null, movie_id: Number, recommend: String }
) => {
  const router = useRouter();

  if (!user_id) {
    return null;
  }

  const { getToken } = useAuth();

  const handleRecommend = async (newRecommend: String) => {
    const token = await getToken();
    const res = await fetch("http://localhost:3000/api/demo/updateRating", {
      method: "POST",
      headers: {
        // "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },


      body: JSON.stringify({
        movie_id,
        recommend: newRecommend,
      }),
    });

    if (!res.ok) {
      throw new Error("Failed to update rating");
    }

    router.refresh();
  }

  return (
    <div className="flex flex-row items-center justify-end gap-2">
      <button
        className={`border-2 rounded-full p-3 ${recommend === "yes" ? "border-green-500" : "border-gray-300"} flex flex-col items-center justify-center`}
        onClick={() => handleRecommend("yes")}

      >
        <div className="flex flex-row items-center">
          <ThumbUpIcon className={`text-2xl ${recommend === "yes" ? "text-green-500" : "text-gray-300"}`} />
          <span className="ml-2 text-sm">Recommend</span>
        </div>
      </button>
      <button
        className={`border-2 rounded-full p-3 ${recommend === "no" ? "border-red-500" : "border-gray-300"} flex flex-col items-center justify-center`}
        onClick={() => handleRecommend("no")}

      >
        <div className="flex flex-row items-center">
          <ThumbDownIcon className={`text-2xl ${recommend === "no" ? "text-red-500" : "text-gray-300"}`} />
          <span className="ml-2 text-sm">Don't recommend</span>
        </div>
      </button>
    </div>

  );
}

export default ToggleSeen;
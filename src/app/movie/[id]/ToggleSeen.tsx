"use client";

import { useRouter } from "next/navigation";

import CheckIcon from '@mui/icons-material/Check';
import CloseIcon from '@mui/icons-material/Close';


const ToggleSeen = (
  { user_id, movie_id, seen }: { user_id: String | null, movie_id: Number, seen: String }
) => {
  if (!user_id) {
    return null;
  }

  const router = useRouter();

  const handleToggleSeen = async () => {
    const res = await fetch("http://localhost:3000/api/demo/updateRating", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        // Cookie: cookies().toString(),
        //         cache: 'no-store',
      },
      body: JSON.stringify({
        movie_id,
        seen: seen === "yes" ? "no" : "yes",
      }),
    });
    
    if (!res.ok) {
      throw new Error("Failed to update rating");
    }

    router.refresh();
  }

  return (
    <button
      className={`border-2 rounded-full p-3 ${seen === "yes" ? "border-green-500" : "border-gray-300"} flex flex-col items-center justify-center`}
      onClick={handleToggleSeen}

    >
      {seen === "yes" ? (
        <div className="flex flex-row items-center">
          <p className="text-sm">Seen</p>
          <CheckIcon className="text-green-500" />
        </div>
      ) : (
        <div className="flex flex-row items-center">
          <p className="text-sm">Not seen</p>
          <CloseIcon className="text-gray-300" />
        </div>
      )}

    </button>
  );
}

export default ToggleSeen;
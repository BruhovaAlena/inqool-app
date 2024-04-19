import Button from "@/components/shared/Button";
import type { NextPage } from "next";
import { useRouter } from "next/router";
import { FaHeart } from "react-icons/fa6";

const Home: NextPage = () => {
  const { push } = useRouter();

  return (
    <div className="flex flex-col gap-6 items-center w-full justify-between pb-6 h-screen bg-blue-100">
      <div className="flex flex-col gap-20">
        <div className="flex flex-col w-full mt-20">
          <span className="text-4xl text-gray-700 font-bold">
            InQool Frontend Interview Project
          </span>
          <span className="text-2xl text-gray-700 font-semibold mt-3">
            Alena Brůhová
          </span>
        </div>
        <div className="flex gap-4 justify-center">
          <Button
            title="Animals"
            onClick={() => push("/animals")}
            className="hover:border hover:border-blue-500 hover:bg-white"
          />
          <Button
            title="Users"
            onClick={() => push("/users")}
            className="hover:border hover:border-blue-500 hover:bg-white"
          />
        </div>
      </div>
      <div className="flex gap-1">
        <span>Crafted with </span>
        <FaHeart className="mt-[4px] text-red-600" />
        <span> from Prešov, Slovakia</span>
      </div>
    </div>
  );
};

export default Home;

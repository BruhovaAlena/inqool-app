import React from "react";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";

const SkeletonLoading = () => {
  return (
    <div className="px-2 pt-16 w-[800px]">
      <div className="flex justify-end">
        <Skeleton count={1} width={200} height={30} />
      </div>
      <Skeleton count={20} containerClassName="flex-1" height={30} />
    </div>
  );
};

export default SkeletonLoading;

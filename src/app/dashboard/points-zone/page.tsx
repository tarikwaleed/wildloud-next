import React from "react";
import SubmitList from "@/components/submit-list";

type Props = {};

const page = (props: Props) => {
  return (
    <>
      <h1 className="text-8xl font-black">Points Zone</h1>
      <SubmitList />
    </>
  );
};

export default page;

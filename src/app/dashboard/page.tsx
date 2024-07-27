import React from "react";
import { HomeSection1 } from "@/components/home-section1";
import { SubmitsForm } from "@/components/submits-form";
import { HomeSection3 } from "@/components/home-section3";

type Props = {};

const page = (props: Props) => {
  return (
    <>
      {/* <section> */}
      {/*   <HomeSection1></HomeSection1> */}
      {/* </section> */}
      <div className="pb-10" />
      <section>
        <SubmitsForm />
      </section>
      <div className="pb-20" />
      {/* <section> */}
      {/*   <HomeSection3></HomeSection3> */}
      {/* </section> */}
    </>
  );
};

export default page;


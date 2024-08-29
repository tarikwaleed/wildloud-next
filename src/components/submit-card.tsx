import React from "react";
import { Card } from "@/components/ui/card";

type Props = {
  url: string;
  platform: string;
  impression: string;
  points: number;
};

const SubmitCard = (props: Props) => {
  return (
    <Card className="flex items-center p-4 bg-white rounded-lg shadow-md">
      <img
        alt="Coin Stack"
        className="rounded-lg"
        height="80"
        src={`/social/${props.platform}.png`}
        style={{
          aspectRatio: "80/80",
          objectFit: "cover",
        }}
        width="80"
      />
      <div className="ml-4">
        <div className="text-lg font-bold">
          {props.impression}
        </div>
        <div className="text-m font-md text-gray-500">
          {props.url}
        </div>
        <div className="text-sm text-green-600">{props.points}</div>
      </div>
    </Card>
  );
};

export default SubmitCard;

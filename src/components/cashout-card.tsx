/**
* This code was generated by v0 by Vercel.
* @see https://v0.dev/t/67QxmYSoivh
* Documentation: https://v0.dev/docs#integrating-generated-code-into-your-nextjs-app
*/
import { Card } from "@/components/ui/card"

const images = [
  "/gold/gold1.png",
  "/gold/gold2.png",
  "/gold/box1.jpg",
  "/gold/box2.png",
  "/gold/box3.png",
];

function getRandomImage() {
  const randomIndex = Math.floor(Math.random() * images.length);
  return images[randomIndex];
}
export function CashoutCard() {
  const randomImage = getRandomImage();
  return (
    <Card className="flex items-center p-4 bg-white rounded-lg shadow-md">
      <img
        alt="Coin Stack"
        className="rounded-lg"
        height="80"
        src={randomImage}
        style={{
          aspectRatio: "80/80",
          objectFit: "cover",
        }}
        width="80"
      />
      <div className="ml-4">
        <div className="text-lg font-semibold">$5 Cashout</div>
        <div className="text-sm text-green-600">4500 Point</div>
      </div>
    </Card>
  )
}
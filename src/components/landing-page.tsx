import { Button } from "@/components/ui/button"
import Link from "next/link"
import { SignInButton, SignUpButton, SignedIn, SignedOut } from "@clerk/nextjs"
import { Footer } from "./footer"
import { Card, CardDescription, CardTitle } from './ui/card'


export function LandingPage() {
  return (
    <>
      <section className="relative w-full h-screen bg-gray-100">
        <img
          alt="Background"
          className="absolute inset-0 object-cover w-full h-full "
          height={1080}
          src="/landing-page-bg.png"
          style={{
            aspectRatio: "1920/1080",
            objectFit: "cover",
          }}
          width={1920}
        />
        <div className="pt-10"></div>
        <div className="relative flex flex-row text-center justify-between p-10">
          <div className="absolute inset-0 bg-black opacity-30"></div>
          <div className="relative z-10 flex flex-row justify-between w-full">
            <div>
              <img src='/wildloud-logo.png' alt="Logo" />
            </div>
            <div className="flex flex-row items-center">
              <SignedOut>
                <div className="flex flex-row justify-center gap-4">
                  <SignUpButton mode="modal" afterSignUpUrl="/">
                    <Button className="bg-green-700 text-white rounded-md px-6 py-2 hover:bg-gray-700 transition-colors duration-200">
                      Register
                    </Button>
                  </SignUpButton>
                  <SignInButton mode="modal" afterSignInUrl="/">
                    <Button className="text-black rounded-md px-6 py-2 hover:bg-gray-700 transition-colors duration-200" variant="outline">
                      Sign in
                    </Button>
                  </SignInButton>
                </div>
              </SignedOut>
              <SignedIn>
                <Link href="/dashboard">
                  <Button className="text-white bg-green-800 rounded-md px-6 py-2 hover:bg-gray-700 transition-colors duration-200">
                    Dashboard
                  </Button>
                </Link>
              </SignedIn>
            </div>
          </div>
        </div>
        <div className="flex flex-row justify-center">
          <div className="relative flex flex-col w-1/4 text-white p-10">
            <div className="absolute inset-0 bg-black opacity-30"></div>
            <div className="relative z-10">
              <div></div>
              <span className="text-4xl text-white font-bold">
                Let&apos;s get Viral
              </span>
              <Button className="bg-green-700 mt-4">
                <span>Try For Free Now &#x21;</span>
              </Button>
            </div>
          </div>
        </div>
      </section>
      <section>
        <div className="bg-white p-32">
          <div className="flex justify-center mb-16">
            <Button variant="outline">What Do We Provide</Button>
          </div>
          <div className="grid grid-cols-2 gap-8">
            <Card className="flex items-center space-x-4 ">
              <img src="/social/fb.png" alt="Facebook" className="w-16 h-16" />
              <div>
                <CardTitle>Facebook</CardTitle>
                <CardDescription>Likes, Share, Followers, Post Likes, Post Share</CardDescription>
              </div>
            </Card>

            <Card className="flex items-center space-x-4 ">
              <img src="/social/youtube.png" alt="YouTube" className="w-16 h-16" />
              <div>
                <CardTitle>YouTube</CardTitle>
                <CardDescription>Views, Video Likes, Subscribe</CardDescription>
              </div>
            </Card>

            <Card className="flex items-center space-x-4 ">
              <img src="/social/twitter.png" alt="Twitter" className="w-16 h-16" />
              <div>
                <CardTitle>Twitter</CardTitle>
                <CardDescription>Followers, Tweets, reTweets, Likes</CardDescription>
              </div>
            </Card>

            <Card className="flex items-center space-x-4 ">
              <img src="/social/tiktok.png" alt="TikTok" className="w-16 h-16" />
              <div>
                <CardTitle>TikTok</CardTitle>
                <CardDescription>Followers, Video Likes, Video Views</CardDescription>
              </div>
            </Card>

            <Card className="flex items-center space-x-4">
              <img src="/social/twitch.png" alt="Twitch" className="w-16 h-16" />
              <div>
                <CardTitle>Twitch</CardTitle>
                <CardDescription>Followers</CardDescription>
              </div>
            </Card>

            <Card className="flex items-center space-x-4">
              <img src="/social/reddit.jpg" alt="Reddit" className="w-16 h-16" />
              <div>
                <CardTitle>Reddit</CardTitle>
                <CardDescription>Posts Upvotes, Comments Upvotes</CardDescription>
              </div>
            </Card>

            <Card className="flex items-center space-x-4">
              <img src="/social/website-hits.PNG" alt="Website hits" className="w-16 h-16" />
              <div>
                <CardTitle>Website hits</CardTitle>
                <CardDescription>Earn Money from viewing sites.</CardDescription>
              </div>
            </Card>

            <Card className="flex items-center space-x-4">
              <img src="/social/pintrest.png" alt="PINTEREST" className="w-16 h-16" />
              <div>
                <CardTitle>PINTEREST</CardTitle>
                <CardDescription>Followers, rePins</CardDescription>
              </div>
            </Card>

            <Card className="flex items-center space-x-4">
              <img src="/social/soundcloud.png" alt="SoundCloud" className="w-16 h-16" />
              <div>
                <CardTitle>SoundCloud</CardTitle>
                <CardDescription>Followers, Likes, Music Plays</CardDescription>
              </div>
            </Card>

            <Card className="flex items-center space-x-4">
              <img src="/social/insta.webp" alt="Instagram" className="w-16 h-16" />
              <div>
                <CardTitle>Instagram</CardTitle>
                <CardDescription>Followers, Photo Likes</CardDescription>
              </div>
            </Card>

          </div>
        </div>
      </section>
      <section className="relative bg-white py-16">
        <div className="absolute inset-0 overflow-hidden">
          <img src="/landing-page-bg-2.png" alt="" className="h-full w-full object-cover" />
        </div>
        <div className="relative container mx-auto px-4">
          <div className="max-w-xl mx-auto text-center">
            <h2 className="text-3xl font-bold">Our Journey</h2>
          </div>
          <div className="mt-12 grid grid-cols-1 gap-8 md:grid-cols-3 lg:gap-16">
            <div className="flex flex-col items-center justify-center bg-[#00C853] p-6 text-white shadow-lg">
              <p className="text-5xl font-bold">152,435</p>
              <p className="mt-2 text-xl">Users Activity</p>
            </div>
            <div className="flex flex-col items-center justify-center bg-[#00C853] p-6 text-white shadow-lg">
              <p className="text-5xl font-bold">456,541,385</p>
              <p className="mt-2 text-xl">Went Viral</p>
            </div>
            <div className="flex flex-col items-center justify-center bg-[#00C853] p-6 text-white shadow-lg">
              <p className="text-5xl font-bold">$46,452</p>
              <p className="mt-2 text-xl">Withdrawals</p>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </>



  )
}
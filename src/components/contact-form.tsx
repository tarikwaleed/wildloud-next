/**
* This code was generated by v0 by Vercel.
* @see https://v0.dev/t/os9WoxCiqmt
* Documentation: https://v0.dev/docs#integrating-generated-code-into-your-nextjs-app
*/
export function ContactForm() {
  return (
    <div className="bg-white p-8 rounded-lg shadow max-w-md mx-auto my-8">
      <div className="mb-4">
        <img
          alt="Decorative header"
          className="w-full h-auto rounded-lg mb-4"
          height="150"
          src="/placeholder.svg"
          style={{
            aspectRatio: "300/150",
            objectFit: "cover",
          }}
          width="300"
        />
        <h2 className="text-3xl font-bold text-center mb-4">Contact Us</h2>
        <p className="text-center text-sm mb-8">Have any questions or suggestion? We&apos;d love to hear from you.</p>
      </div>
      <form className="space-y-6">
        <div>
          <label className="block text-sm font-medium mb-2" htmlFor="username">
            Username
          </label>
          <input
            className="w-full border-b-2 border-gray-300 focus:outline-none focus:border-green-500"
            id="username"
            placeholder="Loreen Larm#3843"
            type="text"
          />
        </div>
        <div>
          <label className="block text-sm font-medium mb-2" htmlFor="email">
            Email
          </label>
          <input
            className="w-full border-b-2 border-gray-300 focus:outline-none focus:border-green-500"
            id="email"
            placeholder="Enter email address"
            type="email"
          />
        </div>
        <div>
          <label className="block text-sm font-medium mb-2" htmlFor="title">
            Title
          </label>
          <input
            className="w-full border-b-2 border-gray-300 focus:outline-none focus:border-green-500"
            id="title"
            placeholder="Your Comment Title"
            type="text"
          />
        </div>
        <div>
          <label className="block text-sm font-medium mb-2" htmlFor="message">
            Message
          </label>
          <textarea
            className="w-full border-b-2 border-gray-300 focus:outline-none focus:border-green-500"
            id="message"
            placeholder="Your Comment"
            rows={4}
          />
        </div>
        <button
          className="w-full bg-green-500 text-white font-bold py-2 px-4 rounded hover:bg-green-600 focus:outline-none focus:shadow-outline"
          type="submit"
        >
          Submit
        </button>
      </form>
    </div>
  )
}

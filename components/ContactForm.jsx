import { useState } from "react"

export default function ContactForm() {
  const [status, setStatus] = useState("")

  const handleSubmit = async (e) => {
    e.preventDefault()
    const data = new FormData(e.target)

    const response = await fetch("https://formspree.io/f/xvgwlzjk", {
      method: "POST",
      body: data,
      headers: {
        Accept: "application/json",
      },
    })

    if (response.ok) {
      setStatus("SUCCESS")
      e.target.reset()
    } else {
      setStatus("ERROR")
    }
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="max-w-lg mx-auto bg-white p-6 shadow-md rounded-xl space-y-4"
    >
      <div>
        <label className="block text-left font-medium text-gray-700">Name</label>
        <input
          type="text"
          name="name"
          required
          className="mt-1 w-full border border-black-300 rounded-md p-2 focus:ring-indigo-500 focus:border-black"
        />
      </div>

      <div>
        <label className="block text-left font-medium text-gray-700">Email</label>
        <input
          type="email"
          name="email"
          required
          className="mt-1 w-full border border-black-300 rounded-md p-2 focus:ring-indigo-500 focus:border-black"
        />
      </div>

      <div>
        <label className="block text-left font-medium text-gray-700">Message</label>
        <textarea
          name="message"
          rows="4"
          required
          className="mt-1 w-full border border-black-300 rounded-md p-2 focus:ring-indigo-500 focus:border-black"
        ></textarea>
      </div>

      <button
        type="submit"
        className="w-full py-2 px-4 bg-[#1E88E5] text-white rounded-md font-medium hover:bg-indigo-700 transition"
      >
        Send Message
      </button>

      {status === "SUCCESS" && (
        <p className="text-green-600 text-center mt-2">Message sent successfully ✅</p>
      )}
      {status === "ERROR" && (
        <p className="text-red-600 text-center mt-2">Oops! Something went wrong.</p>
      )}
    </form>
  )
}

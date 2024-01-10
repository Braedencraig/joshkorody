// @ts-nocheck

"use client";
import { useState } from "react";
import Navbar from "../../components/Navbar";
import localFont from "next/font/local";

const myFont = localFont({ src: "../../../public/assets/neuropol.otf" });

export default function Contact() {
  // const [formData, setFormData] = useState({
  //   name: "",
  //   email: "",
  //   message: "",
  // });
  // const [formStatus, setFormStatus] = useState(null);

  // const handleInputChange = (e) => {
  //   const { name, value } = e.target;
  //   setFormData((prevState) => ({ ...prevState, [name]: value }));
  // };

  // const handleSubmit = async (e) => {
  //   e.preventDefault();
  //   try {
  //     const response = await fetch("/api/sendMail", {
  //       method: "POST",
  //       headers: { "Content-Type": "application/json" },
  //       body: JSON.stringify(formData),
  //     });

  //     if (response.ok) {
  //       setFormStatus("Success! Thank you for reaching out.");
  //       setFormData({
  //         name: "",
  //         email: "",
  //         message: "",
  //       });
  //     } else {
  //       throw new Error("There was an issue submitting the form.");
  //     }
  //   } catch (error) {
  //     setFormStatus(`Error: ${error.message}`);
  //   }
  // };

  return (
    <div className="bg-white text-black h-full">
      <Navbar />
      <main className="px-4 py-8 md:px-8 md:py-10 max-w-screen-xl mx-auto">
        <h1
          className={`${myFont.className} text-4xl md:text-6xl text-center font-semibold mb-10`}
        >
          CONTACT
        </h1>
        <a
          className=" text-2xl text-center m-auto flex justify-center"
          href="mailto:joshkorody@gmail.com"
        >
          joshkorody@gmail.com
        </a>
        {/* <form
          onSubmit={handleSubmit}
          className="space-y-6 max-w-[600px] m-auto"
        >
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleInputChange}
            placeholder="Name"
            className="w-full border border-black p-2 placeholder-black"
            required
          />
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleInputChange}
            placeholder="Email"
            className="w-full border border-black p-2 placeholder-black"
            required
          />
          <textarea
            name="message"
            value={formData.message}
            onChange={handleInputChange}
            placeholder="Message"
            rows="5"
            className="w-full border border-black p-2 placeholder-black"
            required
          ></textarea>
          <button
            type="submit"
            className="w-full bg-black text-white p-2 hover:bg-white hover:text-black border border-black transition-colors duration-300"
          >
            Submit
          </button>
        </form>
        {formStatus && <p className="mt-6 text-center">{formStatus}</p>} */}
      </main>
    </div>
  );
}

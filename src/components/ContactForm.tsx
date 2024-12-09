"use client";

import { FC, useState } from "react";
import { useForm } from "react-hook-form";
import { sendEmail } from "../app/utils/sendEmail";
import localFont from "next/font/local";
const myFont = localFont({ src: "../../public/assets/neuropol.otf" });

export type FormData = {
  name: string;
  email: string;
  message: string;
  subject: string;
};

interface ContactFormProps {
  literacyLab?: boolean;
}

const ContactForm: FC<ContactFormProps> = () => {
  const { register, handleSubmit, reset } = useForm<FormData>();
  const [success, setSuccess] = useState(false);

  async function onSubmit(data: FormData) {
    const result = await sendEmail(data);
    if (result) {
      setSuccess(true);
      reset();
    }
  }

  if (success) {
    return (
      <div className={`text-black text-center `}>
        <h1 className="text-2xl font-semibold">Thank you for reaching out!</h1>
        <p className="text-lg">
          I&apos;ll get back to you as soon as possible.
        </p>
      </div>
    );
  }

  return (
    <>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className={` mb-5`}>
          <label
            htmlFor="name"
            className="mb-3 block text-base font-medium text-white"
          >
            Full Name
          </label>
          <input
            type="text"
            placeholder="Full Name"
            className="w-full rounded-md border border-gray-300 bg-white py-3 px-6 text-base font-medium text-gray-700 outline-none focus:border-black focus:shadow-md"
            {...register("name", { required: true })}
          />
        </div>
        <div className={` mb-5`}>
          <label
            htmlFor="email"
            className="mb-3 block text-base font-medium text-white"
          >
            Email Address
          </label>
          <input
            type="email"
            placeholder="example@domain.com"
            className="w-full rounded-md border border-gray-300 bg-white py-3 px-6 text-base font-medium text-gray-700 outline-none focus:border-black focus:shadow-md"
            {...register("email", { required: true })}
          />
        </div>
        <div className={` mb-5`}>
          <label
            htmlFor="subject"
            className="mb-3 block text-base font-medium text-white"
          >
            Subject
          </label>
          <input
            type="subject"
            placeholder="Subject"
            className="w-full rounded-md border border-gray-300 bg-white py-3 px-6 text-base font-medium text-gray-700 outline-none focus:border-black focus:shadow-md"
            {...register("subject", { required: true })}
          />
        </div>
        <div className={`mb-5 `}>
          <label
            htmlFor="message"
            className="mb-3 block text-base font-medium text-white"
          >
            Message
          </label>
          <textarea
            rows={4}
            placeholder="Type your message"
            className="w-full resize-none rounded-md border border-gray-300 bg-white py-3 px-6 text-base font-medium text-gray-700 outline-none focus:border-black focus:shadow-md"
            {...register("message", { required: true })}
          ></textarea>
        </div>
        <div>
          <button
            className={` hover:shadow-form rounded-md my-4 bg-black py-3 px-8 w-full md:w-auto text-base font-semibold text-white outline-none`}
          >
            Submit
          </button>
        </div>
      </form>
    </>
  );
};

export default ContactForm;

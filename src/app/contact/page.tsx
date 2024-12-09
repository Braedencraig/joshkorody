// @ts-nocheck

"use client";
import { useState } from "react";
import Navbar from "../../components/Navbar";
import localFont from "next/font/local";
import ContactForm from "@/components/ContactForm";

const myFont = localFont({ src: "../../../public/assets/neuropol.otf" });

export default function Contact() {
  return (
    <div className="bg-white text-black h-full">
      <Navbar />
      <main className="px-4 py-8 md:px-8 md:py-10 max-w-screen-xl mx-auto">
        <h1
          className={`${myFont.className} text-4xl md:text-6xl text-center font-semibold mb-10`}
        >
          CONTACT
        </h1>
        <ContactForm />
      </main>
    </div>
  );
}

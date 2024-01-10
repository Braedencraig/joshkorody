// @ts-nocheck
export const revalidate = 0;

import Navbar from "../../components/Navbar";
import RecordGrid from "../../components/RecordGrid";
import { createClient } from "contentful";
import localFont from "next/font/local";

async function getData() {
  const client = createClient({
    space: process.env.CONTENTFUL_SPACE_ID,
    accessToken: process.env.CONTENTFUL_ACCESS_TOKEN,
  });

  const response = await client.getEntries({
    content_type: "discography",
  });

  const records = response.items
    ? response.items.map((item) => item.fields)
    : [];

  return records;
}

const myFont = localFont({ src: "../../../public/assets/neuropol.otf" });

export default async function Discography() {
  const data = await getData();
  const title = data[0].title;
  const records = data[0].albums;

  return (
    <div className="bg-white text-black">
      <Navbar />
      <main className="px-4 py-8 md:px-8 md:py-10 max-w-screen-xl mx-auto">
        <h1
          className={`${myFont.className} text-4xl md:text-6xl text-center font-semibold mb-10`}
        >
          {title.toUpperCase()}
        </h1>
        <RecordGrid records={records} />
      </main>
    </div>
  );
}

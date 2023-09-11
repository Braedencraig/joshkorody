// @ts-nocheck
export const revalidate = 0;

import Image from "next/image";
import Navbar from "../components/Navbar";
import RecordGrid from "../components/RecordGrid";
import { createClient } from "contentful";

async function getData() {
  const client = createClient({
    space: process.env.CONTENTFUL_SPACE_ID,
    accessToken: process.env.CONTENTFUL_ACCESS_TOKEN,
  });

  const response = await client.getEntries({
    content_type: "recentWorks",
  });

  const records = response.items
    ? response.items.map((item) => item.fields)
    : [];

  return records;
}

export default async function Home() {
  const data = await getData();
  const title = data[0].title;
  const records = data[0].albums;

  return (
    <div className="bg-white text-black">
      <Navbar />
      <main className="px-4 py-8 md:px-8 md:py-10 max-w-screen-xl mx-auto">
        {/* Header */}
        <h1 className="text-4xl md:text-6xl text-center font-semibold mb-10">
          JOSH KORODY
        </h1>

        {/* Image */}
        <div className="flex justify-center mb-12">
          <div className="w-full sm:w-2/3 md:w-1/2 lg:w-1/3 m-auto flex justify-center">
            <Image
              className="border-black border"
              src="/assets/josh.jpg"
              alt="Josh Korody"
              width={592}
              height={592}
            />
          </div>
        </div>

        {/* Bio */}
        <div className="space-y-4 text-lg mt-10 mb-10 px-2 md:px-0">
          <p>
            Josh Korody is a Mixer/Producer/Engineer and Artist based in Toronto
            with over 15 years of experience in Studio Production as well as
            releasing music under his projects Breeze, Nailbiter and Beliefs.
            Josh is also known for running the legendary &quot;Candle Recording
            Studio&quot; for over 10 years in Toronto, constantly working with
            some of Canada&apos;s buzziest and successful Independent
            bands/artists, some who have been nominated for Juno&apos;s and
            Polaris awards.
          </p>

          <p>
            Josh wears every hat you need him to wear with extensive knowledge
            of the complete recording process including engineering, editing,
            mixing, production, and performing. He believes what makes him a
            &quot;in demand person&quot; all these years is his ability to make
            artists feel at home and being an absolute music freak that really
            takes the time to understand what someone is looking to do sonically
            and knows how to achieve that no matter what the genre.
          </p>
          <p>
            Specializing in Alternative / Indie / Electronic Korody has been
            behind the boards for many Independent artists in different
            production capacities such as Dilly Dally, Tess Parks, Fucked Up,
            Weaves, Japandroids, The Beaches, The Dirty Nil, Traitrs, Bonnie
            Trash and has also worked with Dean Blunt, Cadence Weapon, and Tanya
            Tagaq.
          </p>
        </div>

        <h2 className="text-2xl md:text-4xl text-center font-semibold mb-10">
          {title.toUpperCase()}
        </h2>

        <RecordGrid records={records} />
      </main>
    </div>
  );
}

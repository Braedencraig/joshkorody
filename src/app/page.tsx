// @ts-nocheck
export const revalidate = 0;

import localFont from "next/font/local";
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

const myFont = localFont({ src: "../../public/assets/neuropol.otf" });

export default async function Home() {
  const data = await getData();
  const title = data[0].title;
  const records = data[0].albums;

  return (
    <div className="bg-white text-black">
      <Navbar />
      <main className="px-4 py-8 md:px-8 md:py-10 max-w-screen-xl mx-auto">
        {/* Header */}
        <h1
          className={`${myFont.className} text-4xl md:text-6xl text-center font-semibold mb-10`}
        >
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
            Josh Korody is a Producer-Mixer-Engineer-Artist who has been a
            staple figure in the Canadian music world for the last decade.
            Korody built and operated the acclaimed studio “Candle Recording”
            for 10 years with great success watching bands/artists from every
            level enter its doors from Gordon Downie (The Tragically Hip) and
            Jeremy Taggart (Our Lady Peace) to young artists making their first
            album.
          </p>
          <p>
            Josh has worked with Juno & Polaris winners and nominees
            Japandroids, Fucked Up, The Dirty Nil, The Beaches, Cadence Weapon,
            Tanya Tagaq, Dilly Dally, Zoon and Weaves as well as Socan Music
            Prize winners Partner. He’s managed to work with UK’s Dean Blunt
            (Rough Trade) and the Barcelona band Mourn (Captured Tracks).
            Exclaim named Dilly Dally&apos;s sore one of the best records of the
            decade as well as Rough Trade named Tallies S/T Debut in the best
            albums of 2019. In 2022 he saw success with his project Breeze for
            his “Only Up” album receiving positive reviews from Pitchfork and
            AllMusic, a KEXP appearance and nonstop radioplay in the US. Korody
            likes to also work closely with the independent label Hand Drawn
            Dracula. He has mixed both full length albums by the psych
            songwriter Tess Parks and has also produced every release by the
            goth duo Traitrs both who have had much international success.
          </p>
          <p>
            Korody is also an artist as well releasing music with his Indie Brit
            Pop inspired project Breeze, his Techno/Electronic based project
            Nailbiter and his former Shoegaze/Alternative band Beliefs. He Also
            runs his own Techno focused label Nodding Heads as well as a monthly
            radio show on ISO radio. In 2022 Now Magazine called Korody the
            unsung hero of the Toronto music scene. Being a musician and
            songwriter himself, he has a knack for understanding
            musicians/artists and offers a decade of studio and
            creative-decision expertise; finding a balance between lifting an
            artists potential, nurturing their strengths and tackling the
            difficult decisions one needs to make in the creative process.
          </p>
        </div>

        <h2
          className={`${myFont.className} text-2xl md:text-4xl text-center font-semibold mb-10`}
        >
          {title.toUpperCase()}
        </h2>

        <div className="mt-12 mb-12 px-0">
          <iframe
            src="https://open.spotify.com/embed/playlist/4INitOByXqxFSdqR0gXiNA?utm_source=generator"
            width="100%"
            height="352"
            frameBorder="0"
            allowfullscreen=""
            allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
            loading="lazy"
          ></iframe>
        </div>

        <RecordGrid records={records} />
      </main>
    </div>
  );
}

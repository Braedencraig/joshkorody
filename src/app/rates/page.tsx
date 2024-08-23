// @ts-nocheck

"use client";
import { useState } from "react";
import Navbar from "../../components/Navbar";
import localFont from "next/font/local";

const myFont = localFont({ src: "../../../public/assets/neuropol.otf" });

export default function Rates() {
  return (
    <div className="bg-white text-black">
      <Navbar />
      <main className="px-4 py-8 md:px-8 md:py-10 max-w-screen-xl mx-auto">
        <h1
          className={`${myFont.className} text-4xl md:text-6xl text-center font-semibold mb-10`}
        >
          Rates
        </h1>
        <div className="space-y-4 text-lg mt-10 mb-10 px-2 md:px-0">
          <div className="space-y-4 text-lg mt-10 mb-10 px-2 md:px-0">
            <h2
              className={`${myFont.className} text-xl md:text-2xl text-left font-semibold mb-4`}
            >
              Recording / Producing
            </h2>
            <ul className="list-disc ml-4 text-left">
              <li>
                Price Per Day in the studio at Wychwood Sound with Josh $525
                plus HST (8 hours)
              </li>
              <li>
                Price Per Half Day in the studio at Wychwood Sound with Josh
                $350 plus HST (4 hours)
              </li>
            </ul>
          </div>
          <div className="space-y-4 text-lg mt-10 mb-10 px-2 md:px-0">
            <h2
              className={`${myFont.className} text-xl md:text-2xl text-left font-semibold mb-4`}
            >
              Mixing
            </h2>
            <ul className="list-disc ml-4 text-left">
              <li>1-3 songs Mixed $450 per song plus HST</li>
              <li>
                4-6 songs mixed (EP’s) $400 per song plus HST 7-10+ songs mixed
                $360 per song plus HST
              </li>
            </ul>
            <p className="pt-8 text-base">
              Note price per mix is reflected of how many songs you send at
              once. So sending 1 song at a time over the course of a year
              regardless of how you release it doesn’t fall under the 7+ song
              based price.
            </p>
            <p className="text-base">
              A 50% deposit is required on all payments. The remaining 50% must
              be paid out within 2 weeks of completion of sessions or finals
              mixes. E-transfered to{" "}
              <a className="underline" href="mailto:joshkorody@gmail.com">
                joshkorody@gmail.com
              </a>
              .
            </p>
            <p className="text-base">
              This not only secures your time/project but allows me to have more
              stable income as well as easier for book keeping. It’s also a
              safety net incase we need to push dates/ time/schedule.
            </p>
            <p className="text-base">
              Note price per mix is reflected on how many songs you send at
              once. So sending 1 song at a time over the course of a year
              regardless of how you release it doesn’t fall under the 7+ song
              based price. A general rule of thumb is 3 revisions max. If it
              goes beyond that there may be some additional charges.{" "}
            </p>
            <p className="text-base">
              A 50% deposit is required on all payments. The remaining 50% must
              be paid out within 2 weeks of completion of sessions or finals
              mixes. E-transferred to joshkorody@gmail.com. This not only
              secures your time/project but allows me to have more consistent
              income as well as easier bookkeeping. It’s also a safety net
              incase we need to push dates/ time/schedule.
            </p>
            <p className="text-base">
              Please note that I mix from my home studio. Revisions ideally take
              place between email or zoom etc. However if a sit down is
              necessarily in person I can do 1 free (up to 4 hour) in person
              session at Wychwood Sound for the project. Any additional in
              person revisions sessions will be at the cost of the client at my
              day rate.
            </p>
            <p className="text-base">
              If you’re sending me files to mix please send me 24 bit and
              whichever sample rate the session was recorded in (48 or 44.1
              etc). Use 48k if it was recorded that high but don’t convert your
              44.1 session to 48k. WAV file’s please.
            </p>
            <p className="text-base">
              If there are tracks that are not actually stereo (so say a kick
              drum) don’t print all your files as stereo wavs. You may have to
              print the mono tracks and stereo tracks separately. Only send me a
              stereo file if it’s actually stereo (so a stereo synth would fall
              under this but many/most other tracks don’t).
            </p>
            <p className="text-base">
              Print any wet fx you think are really special / creative to your
              production or generally feel would be taking us too far back
              without your processing. If you are mostly happy with your eq and
              compression etc you can send me tracks with those on and I can
              work from there but I may ask for dry versions just in case.
            </p>
            <p className="text-base">
              Please reach out if you have any additional questions or concerns.
            </p>
          </div>
        </div>
      </main>
    </div>
  );
}

// @ts-nocheck

import Image from "next/image";

function RecordGrid({ records }) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
      {records.map((record, index) => (
        <div key={index} className="relative">
          <div className="relative w-full aspect-w-1 aspect-h-1">
            {/* Making sure the URL is an absolute URL */}
            <Image
              src={`https:${record.fields.albumArt.fields.file.url}`} // prefixing with https:
              alt={record.title}
              layout="fill"
              objectFit="cover"
            />
          </div>
          <p className="mt-2 text-center">{record.fields.title}</p>
          <p className="mt-2 text-center">{record.fields.credit}</p>
        </div>
      ))}
    </div>
  );
}

export default RecordGrid;

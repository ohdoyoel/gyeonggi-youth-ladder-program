import path from "path";
import fs from "fs/promises";
import ContentItem from "@/components/ContentItem";

export default async function Page({
  params,
}: {
  params: Promise<{ id: number }>;
}) {
  const id = (await params).id;
  const jsonFilePath = path.join(
    process.cwd(),
    "public",
    "programs/detail",
    `${id}.json`
  );

  try {
    const jsonData = await fs.readFile(jsonFilePath, "utf8");
    const data = JSON.parse(jsonData);

    const contents = data.contents
      .reverse()
      .map((item: { _id: number; title: string; link: string }) => (
        <ContentItem
          key={item._id}
          id={id}
          _id={item._id}
          title={item.title}
          link={item.link}
        />
      ));
    const people = data.people.map(
      (item: { name: string; contact: string }) => (
        <a
          key={item.name}
          href={item.contact ? item.contact : ""}
          target={item.contact ? "_blank" : "_self"}
          className="text-xl font-medium hover:text-slate-700 transition ease-in-out duration-300"
        >
          {item.name}
        </a>
      )
    );

    return (
      <div className="flex flex-col gap-10 pb-32">
        <img
          className="h-72 object-top object-cover"
          src={`/programs/covers/${id}.jpg`}
          alt={`/programs/covers/${id}.jpg`}
        />
        <div className="flex flex-col gap-10 px-60 mt-10">
          <p className="text-5xl font-bold">{data.title}</p>
          <div className="flex justify-between items-end">
            <p className="text-3xl font-semibold">{data.subtitle}</p>
            <p className="text-xl font-semibold">
              {data.start} ~ {data.end}
            </p>
          </div>
        </div>
        <div className="flex flex-col gap-10 px-60 mt-10">
          <p className="text-4xl font-bold">컨텐츠</p>
          <div className="grid grid-cols-4 gap-10 ">{contents}</div>
        </div>
        <div className="flex flex-col gap-10 px-60 mt-10">
          <p className="text-4xl font-bold">피플</p>
          <div className="flex flex-wrap justify-center gap-6">{people}</div>
        </div>
      </div>
    );
  } catch (error) {
    console.log(error);
    return (
      <div
        className="px-60 py-32 flex w-full justify-center items-center text-5xl font-bold"
        style={{
          height: "calc(100vh - 64px)",
        }}
      >
        데이터 오픈 준비 중이에요. 🤔
      </div>
    );
  }
}

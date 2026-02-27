import path from "path";
import fs from "fs/promises";
import ContentItem from "@/components/ContentItem";
import ScrollReveal from "@/components/ScrollReveal";

export default async function Page({
  params,
}: {
  params: Promise<{ id: number }>;
}) {
  const id = (await params).id;
  const jsonFilePath = path.join(
    process.cwd(),
    "public",
    "programs",
    `${id}`,
    "detail.json"
  );

  try {
    const jsonData = await fs.readFile(jsonFilePath, "utf8");
    const data = JSON.parse(jsonData);

    const contents = data.contents.map(
      (item: { _id: number; title: string; link: string }, index: number) => (
        <ScrollReveal
          key={item._id}
          variant="scale-up"
          delay={index * 40}
        >
          <ContentItem
            id={id}
            _id={item._id}
            title={item.title}
            link={item.link}
          />
        </ScrollReveal>
      )
    );
    const people = data.people.map(
      (item: { name: string; contact: string }, index: number) => (
        <ScrollReveal key={item.name} variant="fade-up" delay={index * 20}>
          <a
            href={item.contact ? item.contact : ""}
            target={item.contact ? "_blank" : "_self"}
            className="text-xl font-medium hover:text-slate-700 transition ease-in-out duration-300"
          >
            {item.name}
          </a>
        </ScrollReveal>
      )
    );

    return (
      <div className="flex flex-col gap-10 pb-32">
        <ScrollReveal variant="fade-in" duration={1000}>
          <img
            className="h-72 object-top object-cover hidden sm:block"
            src={`/programs/${id}/banner.png`}
            alt={`/programs/${id}/banner.png`}
          />
        </ScrollReveal>
        <div className="flex flex-col gap-4 sm:gap-10  px-4 md:px-16 lg:px-32 xl:px-60 mt-10">
          <ScrollReveal variant="fade-up">
            <p className="text-4xl sm:text-5xl font-bold">{data.title}</p>
          </ScrollReveal>
          <ScrollReveal variant="fade-up" delay={50}>
            <div className="flex flex-col sm:flex-row justify-between items-end">
              <p className="text-xl sm:text-3xl font-semibold">
                {data.subtitle}
              </p>
              <p className="text-xs sm:text-xl font-semibold">
                {data.start} ~ {data.end}
              </p>
            </div>
          </ScrollReveal>
        </div>
        <div className="flex flex-col gap-10 px-4 md:px-16 lg:px-32 xl:px-60 sm:mt-10">
          <ScrollReveal variant="fade-right">
            <p className="text-3xl sm:text-4xl font-bold">컨텐츠</p>
          </ScrollReveal>
          <div className="flex flex-wrap justify-between gap-y-6">
            {contents}
          </div>
        </div>
        <div className="flex flex-col gap-10 px-4 md:px-16 lg:px-32 xl:px-60 mt-10">
          <ScrollReveal variant="fade-right">
            <p className="text-3xl sm:text-4xl font-bold">피플</p>
          </ScrollReveal>
          <div className="grid grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-y-2 gap-x-12 justify-between">
            {people}
          </div>
        </div>
      </div>
    );
  } catch (error) {
    console.log(error);
    return (
      <div
        className="px-4 md:px-16 lg:px-32 xl:px-60  py-32 flex w-full justify-center items-center text-5xl text-center font-bold"
        style={{
          height: "calc(100vh - 64px)",
        }}
      >
        데이터 오픈 준비 중이에요. 🤔
      </div>
    );
  }
}

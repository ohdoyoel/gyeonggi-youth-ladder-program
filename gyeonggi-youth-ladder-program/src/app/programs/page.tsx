import { Icon } from "@iconify/react";
import ProgramItem from "@/components/ProgramItem";
import programs from "./programs.json";
import { dateStringToDate } from "@/utils/date";
import Pagination from "@/components/Pagenation";
import Link from "next/link";

export default function Page() {
  const programList = programs
    .sort((a, b) => b.start.localeCompare(a.start))
    .map((item) => (
      <ProgramItem
        key={item.id}
        id={item.id}
        title={item.title}
        subtitle={item.subtitle}
        start={dateStringToDate(item.start)}
        end={dateStringToDate(item.end)}
      />
    ));

  return (
    <div className="flex flex-col gap-10">
      <div className="flex gap-20 px-60 py-32 ">
        <div className="flex flex-col gap-10 w-1/2">
          <img
            src="/programs/img1.jpg"
            alt="/programs/img1.jpg"
            className="h-72 bg-cover shadow-sm rounded-lg blur-sm"
          />
          <img
            src="/programs/img2.jpg"
            alt="/programs/img2.jpg"
            className="h-72 bg-cover shadow-sm rounded-lg blur-sm"
          />
          <img
            src="/programs/img3.jpg"
            alt="/programs/img3.jpg"
            className="h-72 bg-cover shadow-sm rounded-lg blur-sm"
          />
          <img
            src="/programs/img4.jpg"
            alt="/programs/img4.jpg"
            className="h-72 bg-cover shadow-sm rounded-lg blur-sm"
          />
        </div>
        <div className="relative flex flex-col w-1/2 pb-48 items-center ">
          <div className="sticky top-1/2 flex flex-col gap-4 items-center">
            <p className="text-4xl font-bold">경기청년사다리프로그램의 기록</p>
            <p className="text-2xl font-medium">
              프로그램의 연수 내용을 기록합니다.
            </p>
          </div>
        </div>
      </div>
      <div className="flex flex-col gap-20 px-60 py-32 bg-slate-900 text-white">
        <p className="text-4xl font-bold">경기청년사다리프로그램의 피드</p>
        <Pagination data={programList} num={5} />
        <Link
          href="/programs"
          className="relative flex flex-row gap-2 px-4 py-2 w-fit justify-center items-center text-white bg-slate-600 rounded-lg"
        >
          <Icon icon="material-symbols:link" className="text-2xl" />
          <p className="font-semibold text-xl ">경기청년사다리프로그램</p>
          <div className="bg-slate-400 rounded-full w-2 h-2 animate-ping absolute top-0 right-0"></div>
        </Link>
      </div>
    </div>
  );
}

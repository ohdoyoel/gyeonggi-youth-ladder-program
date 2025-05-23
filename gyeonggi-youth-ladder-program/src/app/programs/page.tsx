"use client";

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
    <div className="flex flex-col">
      <div
        className="flex gap-8 py-32 px-4 md:px-16 lg:px-32 xl:px-60 items-center justify-center bg-slate-900"
        style={{
          height: "calc(100vh - 64px)",
        }}
      >
        <img
          src="/programs/img1.jpg"
          alt="/programs/img1.jpg"
          className="h-72 bg-cover shadow-sm rounded-lg w-1/2 hidden sm:block"
        />
        <div className="relative flex flex-col gap-4 w-full sm:w-1/2 items-center justify-center text-white">
          <p className="text-2xl sm:text-4xl font-bold">사다리즈의 기록</p>
          <p className="text-lg sm:text-2xl font-medium">
            연수 내용을 기록합니다.
          </p>
        </div>
      </div>
      <div className=" flex flex-col gap-20 py-32 px-4 md:px-16 lg:px-32 xl:px-60  bg-slate-900 text-white">
        <p className="text-2xl sm:text-4xl font-bold">
          NZ 오클랜드 사다리즈의 이야기
        </p>
        <Pagination data={programList} num={5} />
        <div className="flex flex-row justify-center w-full">
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
    </div>
  );
}

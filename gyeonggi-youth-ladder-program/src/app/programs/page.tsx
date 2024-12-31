"use client";

import { Icon } from "@iconify/react";
import ProgramItem from "@/components/ProgramItem";
import programs from "./programs.json";
import { dateStringToDate } from "@/utils/date";
import Pagination from "@/components/Pagenation";
import { useCallback, useState } from "react";

export default function Page() {
  const [imageOrderLeft, setImageOrderLeft] = useState([1, 2, 3, 4, 1]);

  const updateImageOrderLeft = useCallback(() => {
    setImageOrderLeft((prevOrder) => {
      const newOrder = [...prevOrder];
      newOrder.shift();
      const firstImage = newOrder[0];
      if (firstImage !== undefined) {
        newOrder.push(firstImage);
      }
      return newOrder;
    });
  }, []);

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
      <div className="flex flex-col gap-20 mx-48 pt-16 pb-32 overflow-hidden items-center">
        <div className=" flex flex-col w-1/2 py-16 items-center ">
          <div className="sticky top-1/3 flex flex-col gap-4 items-center">
            <p className="text-4xl font-bold">경기청년사다리프로그램의 기록</p>
            <p className="text-2xl font-medium">
              프로그램의 연수 내용을 기록합니다.
            </p>
            <button className="flex w-fit gap-2 px-4 py-2 items-center text-white bg-slate-900 rounded-lg opacity-70">
              <Icon icon="material-symbols:link" className="text-2xl" />
              <p className="text-xl ">버튼이올시다</p>
            </button>
          </div>
        </div>
        <div
          className="h-72 flex animate-slide-left justify-around bg-black py-12"
          onAnimationIteration={updateImageOrderLeft}
          style={{
            width: "calc(125vw)",
          }}
        >
          {imageOrderLeft.map((item, index) => (
            <img
              key={index}
              src={`/programs/img${item}.jpg`}
              alt={`/programs/img${item}.jpg`}
              className="h-full w-1/6 object-cover shadow-sm rounded-lg"
            />
          ))}
        </div>
      </div>
      <div className="flex flex-col gap-20 px-60 py-32 bg-slate-900 text-white">
        <p className="text-4xl font-bold">경기청년사다리프로그램의 피드</p>
        <Pagination data={programList} num={5} />
      </div>
    </div>
  );
}

"use client";

import { JSX, useState } from "react";

interface PaginationProps {
  num: number;
  data: JSX.Element[];
}

export default function Pagination({ num, data }: PaginationProps) {
  const [page, setPage] = useState(1);

  const pageBtns = [...Array(Math.ceil(data.length / num))].map((_, idx) => (
    <button
      key={idx}
      className={`rounded-full w-8 h-8 text-lg font-semibold ${page === idx + 1 ? "bg-slate-700" : "text-slate-300"}`}
      onClick={() => setPage(idx + 1)}
    >
      {idx + 1}
    </button>
  ));

  return (
    <div className="flex flex-col gap-10">
      {data.slice((page - 1) * num, page * num)}
      <div className="flex gap-2">{pageBtns}</div>
    </div>
  );
}

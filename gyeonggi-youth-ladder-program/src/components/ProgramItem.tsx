import Link from "next/link";
import { format } from "date-fns";

interface ProgramItemProps {
  id: number;
  title: string;
  subtitle: string;
  start: Date;
  end: Date;
}

export default function ProgramItem({
  id,
  title,
  subtitle,
  start,
  end,
}: ProgramItemProps) {
  return (
    <Link
      href={`/programs/${id}`}
      className="flex justify-between items-center group transition ease-in-out duration-300 hover:-translate-y-1 hover:scale-105 "
    >
      <div className="flex flex-col gap-2">
        <p className="text-3xl font-semibold transition ease-in-out duration-300 group-hover:text-slate-300">
          {title}
        </p>
        <p className="text-xl font-medium">{subtitle}</p>
        <p className="text-lg font-normal">
          {format(start, "yyyy.MM.dd")} ~ {format(end, "yyyy.MM.dd")}
        </p>
      </div>
      <img
        src={`/programs/covers/${id}.jpg`}
        alt={`/programs/covers/${id}.jpg`}
        className="h-48 w-72 rounded-lg"
      />
    </Link>
  );
}

import Link from "next/link";

export default function Header() {
  return (
    <div className="sticky top-0 z-20 flex items-center justify-between h-16 bg-white drop-shadow-sm px-4 md:px-16 lg:px-32 xl:px-60">
      <Link href="/" className="text-xl font-semibold">
        경기청년사다리프로그램
      </Link>
      <Link
        href="/programs"
        className="px-4 py-2 font-medium rounded-lg hover:bg-slate-100"
      >
        이야기
      </Link>
    </div>
  );
}

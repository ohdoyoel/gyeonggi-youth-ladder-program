import Link from "next/link";

export default function Header() {
  return (
    <div className="sticky top-0 flex justify-between items-center drop-shadow-sm h-16 bg-white px-60">
      <Link href="/" className="text-xl font-semibold">
        경기청년사다리프로그램
      </Link>
      <Link href="/programs">아카이브</Link>
    </div>
  );
}

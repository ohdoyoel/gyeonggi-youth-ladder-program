import Link from "next/link";

export default function Header() {
  return (
    <div className="flex flex-col">
      <div className="flex justify-around">
        <Link href="/">경기청년사다리프로그램</Link>
        <Link href="/programs">아카이브</Link>
      </div>
    </div>
  );
}

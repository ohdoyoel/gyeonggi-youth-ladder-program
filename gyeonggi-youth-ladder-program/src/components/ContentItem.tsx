interface ContentItemProps {
  id: number;
  _id: number;
  title: string;
  link: string;
}

export default function ContentItem({
  id,
  _id,
  title,
  link,
}: ContentItemProps) {
  return (
    <a
      href={link}
      className="relative h-36 sm:h-72 w-[104px] sm:w-52 bg-cover bg-center transition ease-in-out duration-300 hover:-translate-y-1 hover:scale-105 "
      style={{
        backgroundImage: `url('/programs/contents/${id}_${_id}.jpg')`,
      }}
    >
      <div className="absolute inset-0 bg-black opacity-60 backdrop-blur-md"></div>
      <p className="absolute bottom-2 sm:bottom-10 text-xs sm:text-lg mx-4 font-bold text-white">
        {title}
      </p>
    </a>
  );
}

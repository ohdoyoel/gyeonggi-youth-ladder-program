import { Icon } from "@iconify/react";

export default function Home() {
  return (
    <div className="flex flex-col">
      <div
        className="relative flex flex-col items-center justify-center w-full gap-10 bg-center bg-cover grayscale brightness-200"
        style={{
          backgroundImage: "url('/hero.png')",
          height: "calc(100vh - 64px)",
        }}
      >
        <div className="flex flex-col gap-2 font-semibold text-7xl">
          <p>경기청년</p>
          <p>사다리즈</p>
          <p>프로그램</p>
        </div>
        <button className="px-4 py-2 text-xl text-white bg-gray-900 rounded-lg opacity-70">
          버튼버튼
        </button>
        <Icon
          icon="material-symbols:arrow-drop-down-rounded"
          className="absolute text-5xl text-gray-900 ease-in-out bottom-10 animate-bounce opacity-70"
        />
      </div>
      <div className="flex flex-col items-center justify-center gap-4 text-3xl font-semibold p-60 bg-gray-50">
        <p>꿈을 현실로. 해외 연수와 글로벌 경험, 이제 바로 시작하세요.</p>
        <p>
          새로운 도전과 성장이 기다립니다. 당신의 가능성, 더 넓은 세상에서
          펼쳐집니다.
        </p>
        <p>경기청년사다리프로그램에 참여하고, 꿈을 향해 나아가세요.</p>
      </div>
      <div className="relative p-60 h-[60rem] flex flex-col gap-10 bg-white">
        <p className="text-2xl font-semibold text-gray-800">지원 대상</p>
        <div className="flex flex-col gap-6 text-5xl font-bold">
          <p>경기도에 거주하는</p>
          <p>청년이라면 누구나!!</p>
        </div>
        <div className="absolute flex flex-col items-end gap-2 text-lg bottom-60 right-60">
          <p>
            공고일 기준 경기도(또는 특정 시)에 거주하는 19세 이상 39세 이하
            청년이어야 해요.
          </p>
          <p>
            비자 발급에 결격사유가 없고, 해외 출국이 가능한 사람이어야 해요.
          </p>
          <p>
            사전 교육 및 성과공유회 등 프로그램 전 일정에 참여가 가능해야 해요.
          </p>
        </div>
      </div>
      <div className="relative p-60 h-[60rem] flex flex-col gap-10 bg-gray-50">
        <p className="text-2xl font-semibold text-gray-800">지원 대상</p>
        <div className="flex flex-col gap-6 text-5xl font-bold">
          <p>경기도에 거주하는</p>
          <p>청년이라면 누구나!!</p>
        </div>
        <div className="absolute flex flex-col items-end gap-2 text-lg bottom-60 right-60">
          <p>
            공고일 기준 경기도(또는 특정 시)에 거주하는 19세 이상 39세 이하
            청년이어야 해요.
          </p>
          <p>
            비자 발급에 결격사유가 없고, 해외 출국이 가능한 사람이어야 해요.
          </p>
          <p>
            사전 교육 및 성과공유회 등 프로그램 전 일정에 참여가 가능해야 해요.
          </p>
        </div>
      </div>
    </div>
  );
}

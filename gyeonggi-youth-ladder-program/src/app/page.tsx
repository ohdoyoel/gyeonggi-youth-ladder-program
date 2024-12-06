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
        <button className="flex gap-2 px-4 py-2 items-center text-white bg-gray-900 rounded-lg opacity-70">
          <Icon icon="material-symbols:link" className="text-2xl" />
          <p className="text-xl ">버튼이올시다</p>
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
      <div className="relative p-60 h-[72rem] flex flex-col gap-10 bg-white">
        <p className="text-2xl font-semibold text-gray-800">지원 대상</p>
        <div className="flex flex-col gap-6 text-5xl font-bold">
          <p>경기도에 거주하는</p>
          <p>청년이라면 누구나!!</p>
        </div>
        <img src="/youth.jpg" alt="youth.jpg" className="mt-6" />
        <div className="absolute flex flex-col items-end gap-1 font-medium text-lg bottom-60 right-60">
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
      <div className="relative p-60 flex flex-col gap-10 bg-gray-50">
        <p className="text-2xl font-semibold text-gray-800">지원 내용</p>
        <div className="flex flex-col gap-6 text-5xl font-bold">
          <p>준비는 다 해두었으니,</p>
          <p>편하게 몸만 오세요.</p>
        </div>
        <div className="grid grid-cols-2 w-full gap-20 mt-10">
          <div className="flex flex-col gap-6">
            <Icon icon="twemoji:airplane" className="text-9xl" />
            <p className="text-3xl font-semibold">항공권</p>
            <p className="text-xl font-medium text-gray-500">
              n00만원 상당의 비행기 티켓값을 지원해요.
            </p>
          </div>
          <div className="flex flex-col gap-6">
            <Icon icon="twemoji:school" className="text-9xl" />
            <p className="text-3xl font-semibold">해외대학연수비</p>
            <p className="text-xl font-medium text-gray-500">
              해외 유명 대학 어학원에서 수업을 들을 수 있어요.
            </p>
          </div>
          <div className="flex flex-col gap-6">
            <Icon icon="twemoji:house-with-garden" className="text-9xl" />
            <p className="text-3xl font-semibold">숙식비</p>
            <p className="text-xl font-medium text-gray-500">
              어학원 주변 숙소와 식비를 지원해요.
            </p>
          </div>
          <div className="flex flex-col gap-6">
            <Icon icon="twemoji:oncoming-bus" className="text-9xl" />
            <p className="text-3xl font-semibold">교통패스</p>
            <p className="text-xl font-medium text-gray-500">
              연수 기간 동안 어디든 갈 수 있도록, 교통비를 지원해요.
            </p>
          </div>
          <div className="flex flex-col gap-6">
            <Icon icon="twemoji:safety-vest" className="text-9xl" />
            <p className="text-3xl font-semibold">현지 보험</p>
            <p className="text-xl font-medium text-gray-500">
              낯선 해외에서 무슨 일이 생겨도 안전해요.
            </p>
          </div>
          <div className="flex flex-col gap-6">
            <Icon icon="twemoji:rocket" className="text-9xl" />
            <p className="text-3xl font-semibold">네트워킹 및 사후 관리</p>
            <p className="text-xl font-medium text-gray-500">
              프로그램이 끝난 후에도 연수 경험의 가치는 계속돼요.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

import { Icon } from "@iconify/react";
import Link from "next/link";

export default function Home() {
  return (
    <div className="flex flex-col">
      <div
        className="relative flex flex-col items-center justify-center w-full gap-10 bg-center bg-cover"
        style={{
          backgroundImage: "url('/home/hero.png')",
          height: "calc(100vh - 64px)",
        }}
      >
        <div className="absolute inset-0 backdrop-blur-md"></div>
        <div className="z-10 flex flex-col gap-2 font-semibold text-7xl">
          <p>경기청년</p>
          <p>사다리즈</p>
          <p>프로그램</p>
        </div>
        <button className="flex gap-2 px-4 py-2 items-center text-white bg-slate-900 rounded-lg opacity-70">
          <Icon icon="material-symbols:link" className="text-2xl" />
          <p className="text-xl ">버튼이올시다</p>
        </button>
        <Icon
          icon="material-symbols:arrow-drop-down-rounded"
          className="absolute text-5xl text-slate-900 ease-in-out bottom-10 animate-bounce opacity-70"
        />
      </div>
      <div className="flex flex-col items-center justify-center gap-4 text-3xl font-semibold p-60 bg-slate-50 animate-pulse">
        <p>경기청년사다리프로그램은 최고입니다.</p>
        <p>경기청년사다리프로그램은 최고라구요.</p>
        <p>경기청년사다리프로그램은 최고라니깐요?!</p>
      </div>
      <div className="relative p-60 h-[72rem] flex flex-col gap-10 bg-white">
        <p className="text-2xl font-semibold text-slate-800">지원 대상</p>
        <div className="flex flex-col gap-6 text-5xl font-bold">
          <p>경기도에 거주하는</p>
          <p>청년이라면 누구나!</p>
        </div>
        <img src="/home/youth.jpg" alt="youth.jpg" className={`mt-6 blur-sm`} />
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
      <div className="relative p-60 flex flex-col gap-10 bg-slate-50">
        <p className="text-2xl font-semibold text-slate-800">지원 내용</p>
        <div className="flex flex-col gap-6 text-5xl font-bold">
          <p>준비는 다 해두었으니,</p>
          <p>편하게 몸만 오세요.</p>
        </div>
        <div className="grid grid-cols-2 w-full gap-20 mt-10">
          <div className="flex flex-col gap-6">
            <Icon icon="twemoji:airplane" className="text-9xl" />
            <p className="text-3xl font-semibold">항공권</p>
            <p className="text-xl font-medium text-slate-500">
              n00만원 상당의 비행기 티켓값을 지원해요.
            </p>
          </div>
          <div className="flex flex-col gap-6">
            <Icon icon="twemoji:school" className="text-9xl" />
            <p className="text-3xl font-semibold">해외대학연수비</p>
            <p className="text-xl font-medium text-slate-500">
              해외 유명 대학 어학원에서 수업을 들을 수 있어요.
            </p>
          </div>
          <div className="flex flex-col gap-6">
            <Icon icon="twemoji:house-with-garden" className="text-9xl" />
            <p className="text-3xl font-semibold">숙식비</p>
            <p className="text-xl font-medium text-slate-500">
              어학원 주변 숙소와 식비를 지원해요.
            </p>
          </div>
          <div className="flex flex-col gap-6">
            <Icon icon="twemoji:oncoming-bus" className="text-9xl" />
            <p className="text-3xl font-semibold">교통패스</p>
            <p className="text-xl font-medium text-slate-500">
              연수 기간 동안 어디든 갈 수 있도록, 교통비를 지원해요.
            </p>
          </div>
          <div className="flex flex-col gap-6">
            <Icon icon="twemoji:safety-vest" className="text-9xl" />
            <p className="text-3xl font-semibold">현지 보험</p>
            <p className="text-xl font-medium text-slate-500">
              낯선 해외에서 무슨 일이 생겨도 안전해요.
            </p>
          </div>
          <div className="flex flex-col gap-6">
            <Icon icon="twemoji:rocket" className="text-9xl" />
            <p className="text-3xl font-semibold">네트워킹 및 사후 관리</p>
            <p className="text-xl font-medium text-slate-500">
              프로그램이 끝난 후에도 연수 경험의 가치는 계속돼요.
            </p>
          </div>
        </div>
      </div>
      <div className="relative p-60 flex flex-col gap-10 bg-white">
        <p className="text-2xl font-semibold text-slate-800">선발 과정</p>
        <div className="flex flex-col gap-6 text-5xl font-bold">
          <p>누구나 지원할 수 있다고 해서,</p>
          <p>아무나 뽑힐 수 있는 것은 아닙니다.</p>
        </div>
        <div className="flex flex-col gap-20 mt-20">
          <div className="flex gap-10 h-48">
            <img
              className=" h-full w-1/3 bg-cover rounded-lg shadow-lg blur-sm"
              src="/home/step1.jpg"
              alt="/step1.jpg"
            />
            <div className="flex flex-col gap-6 justify-center w-2/3">
              <p className="text-4xl font-semibold">0 온라인 접수</p>
              <p className="text-2xl font-medium text-slate-500">
                각종 서류들을 온라인으로 접수합니다. (자기계발계획서 등)
              </p>
            </div>
          </div>
          <div className="flex flex-row-reverse gap-10 h-48">
            <img
              className=" h-full w-1/3 bg-cover rounded-lg shadow-lg blur-sm"
              src="/home/step2.jpg"
              alt="/step2.jpg"
            />
            <div className="flex flex-col gap-6 justify-center w-2/3">
              <p className="text-4xl font-semibold">1 서류 평가</p>
              <p className="text-2xl font-medium text-slate-500">
                자기개발계획서 내용을 바탕으로 발전 가능성을 평가합니다.
              </p>
            </div>
          </div>
          <div className="flex gap-10 h-48">
            <img
              className=" h-full w-1/3 bg-cover rounded-lg shadow-lg blur-sm"
              src="/home/step3.jpg"
              alt="/step3.jpg"
            />
            <div className="flex flex-col gap-6 justify-center w-2/3">
              <p className="text-4xl font-semibold">2 면접 평가</p>
              <p className="text-2xl font-medium text-slate-500">
                다대다 면접 방식으로 평가합니다.
              </p>
            </div>
          </div>
          <div className="flex flex-col items-end">
            <p className="text-lg font-medium text-slate-500">
              * 사전 교육, 해외 대학 연수, 성과 공유회, 사후 관리 프로그램 등 전
              일정에 참여가 가능한 청년으로 선발합니다.
            </p>
            <p className="text-lg font-medium text-slate-500">
              ** 어학 능력은 선발 기준에 포함되지 않습니다.
            </p>
          </div>
          <div className="flex flex-row-reverse gap-10 h-48">
            <img
              className=" h-full w-1/3 bg-cover rounded-lg shadow-lg blur-sm"
              src="/home/step4.jpg"
              alt="/step4.jpg"
            />
            <div className="flex flex-col gap-6 justify-center w-2/3">
              <p className="text-4xl font-semibold">3 사전 교육</p>
              <p className="text-2xl font-medium text-slate-500">
                대면/비대면 교육으로 해외 연수를 준비합니다.
              </p>
            </div>
          </div>
          <div className="flex gap-10 h-48">
            <img
              className=" h-full w-1/3 bg-cover rounded-lg shadow-lg blur-sm"
              src="/home/step5.jpg"
              alt="/step5.jpg"
            />
            <div className="flex flex-col gap-6 justify-center w-2/3">
              <p className="text-4xl font-semibold">4 해외 대학 연수</p>
              <p className="text-2xl font-medium text-slate-500">
                해외 대학을 연수하며 활동을 진행합니다.
              </p>
            </div>
          </div>
        </div>
        <div className="flex flex-row-reverse gap-10 h-48">
          <img
            className=" h-full w-1/3 bg-cover rounded-lg shadow-lg blur-sm"
            src="/home/step6.jpg"
            alt="/step6.jpg"
          />
          <div className="flex flex-col gap-6 justify-center w-2/3">
            <p className="text-4xl font-semibold">5 성과 공유회</p>
            <p className="text-2xl font-medium text-slate-500">
              연수의 성과를 높으신 분들 앞에서 발표합니다.
            </p>
          </div>
        </div>
      </div>
      <div className="bg-slate-50 p-60 h-[30rem] flex flex-col gap-6 items-center justify-center">
        <p className="font-bold text-4xl">
          경기청년사다리프로그램의 새 소식을 들어보세요.
        </p>
        <Link
          href="/programs"
          className="relative flex gap-2 px-4 py-2 items-center text-white bg-slate-900 rounded-lg opacity-70"
        >
          <Icon icon="material-symbols:link" className="text-2xl" />
          <p className="font-semibold text-xl ">아카이브</p>
          <div className="bg-slate-400 rounded-full w-2 h-2 animate-ping absolute top-0 right-0"></div>
        </Link>
      </div>
      <footer className="bg-slate-800 h-40 px-60 py-10 flex items-center justify-around text-white">
        <div className="flex flex-col gap-2">
          <p className="font-bold text-lg">개발자</p>
          <p className="font-medium text-base">
            포천시 경기청년사다리 1기 오도열
          </p>
        </div>
        <div className="flex flex-col gap-2">
          <p className="font-bold text-lg">도움</p>
          <p className="font-medium text-base">경기도일자리재단</p>
        </div>
      </footer>
    </div>
  );
}

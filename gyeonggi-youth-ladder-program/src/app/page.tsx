import { Icon } from "@iconify/react";
import Link from "next/link";

export default function Home() {
  return (
    <div className="flex flex-col">
      <div
        className="relative flex flex-col items-center justify-center w-full gap-10 bg-center bg-cover brightness-200"
        style={{
          backgroundImage: "url('/home/hero.png')",
          height: "calc(100vh - 64px)",
        }}
      >
        <div className="absolute inset-0 backdrop-blur-md"></div>
        <div className="z-10 flex flex-col gap-2 font-bold text-7xl">
          <p>경기청년</p>
          <p>사다리즈</p>
          <p>프로그램</p>
        </div>
        <div className="flex gap-6">
          <button className="flex gap-2 px-4 py-2 items-center text-white bg-slate-900 rounded-lg opacity-70 text-lg">
            <Icon icon="material-symbols:link" />
            <p>지원하기</p>
          </button>
          <Link
            href="/programs"
            className="relative flex gap-2 px-4 py-2 items-center w-fit text-white bg-slate-900 rounded-lg opacity-70 text-lg"
          >
            <Icon icon="material-symbols:link" />
            <p>피드</p>
            <div className="bg-slate-400 rounded-full w-2 h-2 animate-ping absolute top-0 right-0"></div>
          </Link>
        </div>
        <Icon
          icon="material-symbols:arrow-drop-down-rounded"
          className="absolute text-5xl text-slate-900 ease-in-out bottom-10 animate-bounce opacity-70"
        />
      </div>
      <div className="flex flex-col items-center justify-center gap-1 sm:gap-4 text-base sm:text-3xl font-semibold py-32 sm:py-60 px-4 md:px-16 lg:px-32 xl:px-60 bg-slate-50 animate-pulse">
        <p>경기청년사다리, 도전과 성장을 위한 여정!</p>
        <p>해외 대학 탐방과 다양한 활동을 통해</p>
        <p>새로운 시각과 경험을 제공합니다.</p>
      </div>
      <div className="relative py-32 sm:py-60  px-4 md:px-16 lg:px-32 xl:px-60 sm:h-[72rem] flex flex-col gap-10 bg-white">
        <p className="text-xl sm:text-2xl font-semibold text-slate-800">
          지원 대상
        </p>
        <div className="flex flex-col gap-1 sm:gap-6 text-3xl sm:text-5xl font-bold">
          <p>경기도에 거주하는</p>
          <p>청년이라면 누구나!</p>
        </div>
        <div className="flex flex-col gap-12">
          <img src="/home/youth.jpg" alt="youth.jpg" className={`mt-6`} />
          <div className="flex flex-col items-end gap-1 font-medium text-[8px] sm:text-lg bottom-60  right-4 md:right-16 lg:right-32 xl:right-60">
            <p>
              경기도에 거주하는 19세 이상 39세 이하 청년이라면 누구나 참여할 수
              있어요.
            </p>
            <p>
              공고일 기준 경기도(또는 특정 시)에 거주하고, 비자 발급 및 해외
              출국에 결격 사유가 없어야 합니다.
            </p>
            <p>
              사전 교육부터 성과 공유회까지 모든 프로그램 일정에 참여 가능한
              분을 기다립니다.
            </p>
          </div>
        </div>
      </div>

      <div className="relative py-32 sm:py-60 px-4 md:px-16 lg:px-32 xl:px-60 flex flex-col gap-10 bg-slate-50">
        <p className="text-xl sm:text-2xl font-semibold text-slate-800">
          선발 과정
        </p>
        <div className="flex flex-col gap-1 sm:gap-6 text-2xl sm:text-5xl font-bold">
          <p>철저한 검증을 통해,</p>
          <p>경기도의 청년 인재를 찾습니다.</p>
        </div>
        <div className="flex flex-col sm:mt-20">
          <div className="flex gap-4 sm:gap-10 h-24 sm:h-48 my-4 sm:my-10">
            <img
              className=" h-full w-1/3 bg-cover rounded-lg shadow-lg object-cover"
              src="/home/step1.jpg"
              alt="/step1.jpg"
            />
            <div className="flex flex-col gap-2 sm:gap-6 justify-center w-2/3">
              <p className="text-xl sm:text-4xl font-semibold">1 온라인 접수</p>
              <p className="text-sm sm:text-2xl font-medium text-slate-500 text-pretty">
                필요한 서류를 온라인으로 접수합니다. (자기계발계획서 등)
              </p>
            </div>
          </div>
          <div className="flex flex-row-reverse gap-4 sm:gap-10 h-24 sm:h-48  my-4 sm:my-10">
            <img
              className=" h-full w-1/3 bg-cover rounded-lg shadow-lg object-cover"
              src="/home/step2.jpg"
              alt="/step2.jpg"
            />
            <div className="flex flex-col gap-2 sm:gap-6  justify-center w-2/3">
              <p className="text-xl sm:text-4xl font-semibold">2 서류 평가</p>
              <p className="text-sm sm:text-2xl font-medium text-slate-500 text-pretty">
                제출한 자기개발계획서를 바탕으로 성장 가능성을 평가합니다.
              </p>
            </div>
          </div>
          <div className="flex gap-4 sm:gap-10 h-24 sm:h-48  my-4 sm:my-10">
            <img
              className=" h-full w-1/3 bg-cover rounded-lg shadow-lg object-cover"
              src="/home/step3.jpg"
              alt="/step3.jpg"
            />
            <div className="flex flex-col gap-2 sm:gap-6 justify-center w-2/3">
              <p className="text-xl sm:text-4xl font-semibold">3 면접 평가</p>
              <p className="text-sm sm:text-2xl font-medium text-slate-500 text-pretty">
                지원자의 역량, 태도, 그리고 잠재력을 종합적으로 판단합니다.
              </p>
            </div>
          </div>
          <div className="flex flex-col items-end text-[8px] sm:text-base font-medium text-slate-500 my-4 sm:my-10">
            <p className="text-right text-balance">
              * 사전 교육, 해외 대학 연수, 성과 공유회, 사후 관리 프로그램 등 전
              일정에 참여가 가능한 청년으로 선발합니다.
            </p>
            <p>** 어학 능력은 선발 기준에 포함되지 않습니다.</p>
          </div>
          <div className="flex flex-row-reverse gap-4 sm:gap-10 h-24 sm:h-48  my-4 sm:my-10">
            <img
              className=" h-full w-1/3 bg-cover rounded-lg shadow-lg object-cover"
              src="/home/step4.jpg"
              alt="/step4.jpg"
            />
            <div className="flex flex-col gap-2 sm:gap-6  justify-center w-2/3">
              <p className="text-xl sm:text-4xl font-semibold">4 사전 교육</p>
              <p className="text-sm sm:text-2xl  font-medium text-slate-500 text-pretty">
                대면/비대면 교육으로 해외 연수를 준비합니다.
              </p>
            </div>
          </div>
          <div className="flex gap-4 sm:gap-10 h-24 sm:h-48  my-4 sm:my-10">
            <img
              className=" h-full w-1/3 bg-cover rounded-lg shadow-lg object-cover"
              src="/home/step5.jpg"
              alt="/step5.jpg"
            />
            <div className="flex flex-col gap-2 sm:gap-6  justify-center w-2/3">
              <p className="text-xl sm:text-4xl font-semibold">
                5 해외 대학 연수
              </p>
              <p className="text-sm sm:text-2xl font-medium text-slate-500 text-pretty">
                해외 대학에서 현지 활동과 학습을 통해 전문성을 강화합니다.
              </p>
            </div>
          </div>
          <div className="flex flex-row-reverse gap-4 sm:gap-10 h-24 sm:h-48  my-4 sm:my-10">
            <img
              className=" h-full w-1/3 bg-cover rounded-lg shadow-lg object-cover"
              src="/home/step6.jpg"
              alt="/step6.jpg"
            />
            <div className="flex flex-col gap-2 sm:gap-6 justify-center w-2/3">
              <p className="text-xl sm:text-4xl font-semibold">6 성과 공유회</p>
              <p className="text-sm sm:text-2xl font-medium text-slate-500 text-pretty">
                프로젝트나 활동의 결과를 공유하고 발표합니다.
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="relative py-32 sm:py-60 px-4 md:px-16 lg:px-32 xl:px-60 flex flex-col gap-10 bg-white">
        <p className="text-xl sm:text-2xl font-semibold text-slate-800">
          지원 내용
        </p>
        <div className="flex flex-col gap-1 sm:gap-6 text-2xl sm:text-5xl font-bold">
          <p>준비는 다 해두었으니,</p>
          <p>편하게 몸만 오세요.</p>
        </div>
        <div className="grid grid-cols-2 w-full gap-6 sm:gap-20 mt-4 sm:mt-10">
          <div className="flex flex-col sm:flex-row gap-6 items-center">
            <Icon icon="twemoji:airplane" className="text-7xl sm:text-8xl" />
            <div className="flex flex-col gap-2">
              <p className="text-sm sm:text-3xl font-semibold">항공권</p>
              <p className="text-xs sm:text-lg font-medium text-slate-500">
                n00만원 상당의 비행기 티켓값을 지원해요.
              </p>
            </div>
          </div>
          <div className="flex flex-col sm:flex-row gap-6 items-center">
            <Icon icon="twemoji:school" className="text-7xl sm:text-8xl" />
            <div className="flex flex-col gap-2">
              <p className="text-sm sm:text-3xl font-semibold">
                해외대학연수비
              </p>
              <p className="text-xs sm:text-lg font-medium text-slate-500">
                해외 유명 대학 어학원에서 수업을 지원해요.
              </p>
            </div>
          </div>
          <div className="flex flex-col sm:flex-row  gap-6 items-center">
            <Icon
              icon="twemoji:house-with-garden"
              className="text-7xl sm:text-8xl"
            />
            <div className="flex flex-col gap-2">
              <p className="text-sm sm:text-3xl font-semibold">숙식비</p>
              <p className="text-xs sm:text-lg font-medium text-slate-500">
                어학원 주변 숙소와 식비를 지원해요.
              </p>
            </div>
          </div>
          <div className="flex flex-col sm:flex-row  gap-6 items-center">
            <Icon
              icon="twemoji:oncoming-bus"
              className="text-7xl sm:text-8xl"
            />
            <div className="flex flex-col gap-2">
              <p className="text-sm sm:text-3xl font-semibold">교통패스</p>
              <p className="text-xs sm:text-lg font-medium text-slate-500">
                어디든 갈 수 있도록, 교통비를 지원해요.
              </p>
            </div>
          </div>
          <div className="flex flex-col sm:flex-row  gap-6 items-center">
            <Icon icon="twemoji:safety-vest" className="text-7xl sm:text-8xl" />
            <div className="flex flex-col gap-2">
              <p className="text-sm sm:text-3xl font-semibold">현지보험</p>
              <p className="text-xs sm:text-lg font-medium text-slate-500">
                낯선 해외에서 무슨 일이 생겨도 안전해요.
              </p>
            </div>
          </div>
          <div className="flex flex-col sm:flex-row  gap-6 items-center">
            <Icon icon="twemoji:rocket" className="text-7xl sm:text-8xl" />
            <div className="flex flex-col gap-2">
              <p className="text-sm sm:text-3xl font-semibold">
                네트워킹 및 사후 관리
              </p>
              <p className="text-xs sm:text-lg font-medium text-slate-500">
                프로그램이 이후에도 경험의 가치는 계속돼요.
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="bg-slate-50 py-32 sm:py-60 px-4 md:px-16 lg:px-32 xl:px-60  h-[30rem] flex flex-col gap-6 items-center justify-center">
        <p className="font-bold text-center text-4xl hidden sm:block">
          경기청년사다리프로그램의 새 소식을 들어보세요.
        </p>
        <div className="font-bold text-center text-2xl block sm:hidden">
          <p>경기청년사다리프로그램의</p>
          <p>새 소식을 들어보세요.</p>
        </div>
        <Link
          href="/programs"
          className="relative flex gap-2 px-4 py-2 items-center text-white bg-slate-900 rounded-lg opacity-70"
        >
          <Icon icon="material-symbols:link" className="text-2xl" />
          <p className="font-semibold text-xl ">스토리</p>
          <div className="bg-slate-400 rounded-full w-2 h-2 animate-ping absolute top-0 right-0"></div>
        </Link>
      </div>
      <footer className="bg-slate-800 h-40 px-4 md:px-16 lg:px-32 xl:px-60 py-10 flex items-center justify-around text-white">
        <div className="flex flex-col gap-2">
          <p className="font-bold text-sm sm:text-lg">페이지 제작</p>
          <div className="flex flex-col gap-1 font-medium text-xs sm:text-base">
            <p>Dev By 오도열</p>
            <p>Design By 안가연</p>
          </div>
        </div>
        <div className="flex flex-col gap-2">
          <p className="font-bold text-sm sm:text-lg">도움</p>
          <p className="font-medium text-xs sm:text-base">경기도일자리재단</p>
        </div>
      </footer>
    </div>
  );
}

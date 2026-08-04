import type { Metadata } from "next";
import { notFound } from "next/navigation";
import {
  ProjectHero,
  Section,
  MetricGrid,
  Callout,
  BeforeAfter,
  NextProject,
} from "@/components/project/case-study";
import { allProjects, getProject } from "@/lib/projects";

const SLUG = "petcarelab";

export const metadata: Metadata = {
  title: "PetcareLab · 반려동물 헬스케어 서비스",
};

export default function Page() {
  const project = getProject(SLUG);
  if (!project) notFound();

  return (
    <>
      <ProjectHero project={project} />

      <Section number="01" title="Overview">
        <p>
          반려견 건강 모니터링을 중심으로 한 헬스케어 플랫폼 리뉴얼
          프로젝트입니다. 기존 앱의 산책 중심 UI를 <strong>건강관리 중심의
          IA로 재설계</strong>하고, 소변검사·건강 히스토리·이상징후 확인 등
          핵심 기능의 접근성을 개선했습니다.
        </p>

        <Callout variant="warning" label="정직하게 밝힙니다">
          이 프로젝트는 회사 사정으로 <strong>서비스 오픈에 이르지
          못했습니다.</strong> 따라서 실제 사용자 데이터로 검증할 기회는 없었고,
          이 케이스 스터디는 <strong>리서치 → IA 재설계 → 프로토타입까지의
          과정</strong>에 대한 기록입니다.
        </Callout>
      </Section>

      <Section number="02" title="Research — 문제의 정의">
        <p>
          중장년내일센터 상담사들의 설문 데이터와 반려견 보호자 대상 2차 자료를
          기반으로, 반려견 건강관리에서 발생하는 실질적 문제를 도출했습니다.
        </p>

        <MetricGrid
          items={[
            { value: "고비용", label: "병원 진료·검사 비용", sub: "월 평균" },
            {
              value: "제한적",
              label: "병원 접근성",
              sub: "장소·시간 제약",
            },
            {
              value: "부재",
              label: "통합 건강 데이터",
              sub: "일상 모니터링 어려움",
            },
          ]}
        />

        <p>
          핵심 인사이트: <strong>보호자는 병원에 가기 전에 반려견의 상태를
          미리 파악하고 싶어한다.</strong> 하지만 기존 서비스는 산책 기록 중심
          UI라 건강 데이터가 부차적이었습니다.
        </p>
      </Section>

      <Section number="03" title="IA Redesign — 산책 중심에서 건강 중심으로">
        <p>
          기존 앱의 정보 구조는 산책 버튼이 중심이었고, 건강 관련 정보는 하위
          메뉴로 흩어져 있었습니다. 사용자 여정을 다시 그려보니, 실제로 가장
          자주 확인하고 싶은 것은 <strong>"오늘 우리 아이 건강 괜찮은가"</strong>
          였습니다.
        </p>

        <BeforeAfter
          before={{
            title: "AS-IS (산책 중심)",
            items: [
              "홈 화면: 여러 기능 혼합 노출로 시선 분산",
              "건강 기록: 수기 입력 위주 · 필드 나열형",
              "건강 히스토리: 표 기반, 이상 상태 시각화 부족",
              "산책 버튼이 하단, 부가 요소와 혼재",
            ],
          }}
          after={{
            title: "TO-BE (건강 중심)",
            items: [
              "홈 화면: 핵심 요약 정보만 강조 · 컬러로 상태 직관 파악",
              "건강 기록: 항목별 구분으로 입력 편의성 향상",
              "건강 히스토리: 막대그래프 + 상태 컬러로 변동 인지 용이",
              "CTA 중심의 산책 버튼으로 유도 흐름 강화",
            ],
          }}
        />
      </Section>

      <Section number="04" title="Prototype — 5개 핵심 화면 재설계">
        <p>Figma로 다음 5개 핵심 화면을 재설계하고 클릭 가능한 프로토타입으로
          완성했습니다.</p>

        <div className="not-prose my-6 grid grid-cols-1 md:grid-cols-5 gap-3">
          {[
            "홈",
            "건강일기",
            "소변검사",
            "검사 히스토리",
            "마이페이지",
          ].map((name) => (
            <div
              key={name}
              className="rounded-xl border border-border bg-card p-4 text-center"
            >
              <div className="text-sm font-medium">{name}</div>
            </div>
          ))}
        </div>

        <p>
          이 과정에서 <strong>Figma 협업 프로세스를 팀에 도입</strong>해 기존
          PPT 기반 화면 공유의 버전 혼선을 해소하고 디자인 피드백 속도를
          개선했습니다.
        </p>
      </Section>

      <Section number="05" title="Learnings — 오픈하지 못한 프로젝트에서 배운 것">
        <p>
          검증받지 못한 프로젝트에서 무엇을 배웠는지가 오히려 이 프로젝트의
          핵심입니다.
        </p>
        <p>
          <strong>1. 리서치 → IA → 프로토타입의 사이클을 리드해본 경험.</strong>{" "}
          단순히 화면을 예쁘게 만드는 것이 아니라, 왜 이 화면 구조여야 하는지
          근거를 만드는 과정을 처음부터 끝까지 담당했습니다.
        </p>
        <p>
          <strong>2. "완성"과 "검증"은 다르다는 것.</strong> 잘 만든 프로토타입도
          사용자에게 닿지 않으면 가설로 남습니다. 이후 프로젝트에서는 초반부터
          검증 시점을 함께 설계하는 습관을 갖게 되었습니다.
        </p>
        <p>
          <strong>3. 팀의 협업 도구를 바꾸는 일의 파급력.</strong> Figma 도입
          하나로 문서 버전 혼선이 사라지고 피드백 속도가 눈에 띄게 개선되는 걸
          보면서, 도구 선택도 기획자의 중요한 판단 영역임을 배웠습니다.
        </p>
      </Section>

      <NextProject current={project} all={allProjects()} />
    </>
  );
}

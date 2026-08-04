import type { Metadata } from "next";
import { notFound } from "next/navigation";
import {
  ProjectHero,
  CaseStudyBody,
  Section,
  MetricGrid,
  Callout,
  Quote,
  BeforeAfter,
  NextProject,
} from "@/components/project/case-study";
import {
  CareXArchitecture,
  CareXFlow,
  AIDevJourney,
} from "@/components/project/care-x-diagrams";
import { TeamDiagram } from "@/components/diagrams/team-diagram";
import { RoleDonut } from "@/components/diagrams/role-donut";
import { GanttCompare } from "@/components/diagrams/gantt-compare";
import { allProjects, getProject } from "@/lib/projects";

const SLUG = "care-x";

export const metadata: Metadata = {
  title: "Care-X · QR 기반 O2O 세차 플랫폼",
};

const TOC = [
  { number: "01", id: "overview", label: "Overview" },
  { number: "02", id: "problem", label: "Problem" },
  { number: "03", id: "solution", label: "Solution" },
  { number: "04", id: "role", label: "My Role" },
  { number: "05", id: "ai-dev", label: "AI-Augmented Dev" },
  { number: "06", id: "impact", label: "Impact" },
  { number: "07", id: "learnings", label: "Learnings" },
];

export default function CareXPage() {
  const project = getProject(SLUG);
  if (!project) notFound();

  return (
    <>
      <ProjectHero project={project} />

      <CaseStudyBody toc={TOC}>
        <Section id="overview" number="01" title="Overview">
          <p>
            노터치 세차장을 위한 <strong>QR 기반 O2O 세차 플랫폼</strong>. 앱 ·
            키오스크 · 점주어드민 · 관리자어드민 4개 서비스로 구성되며, 결제부터
            기기 관리 · 실시간 모니터링까지 통합 운영 환경을 제공합니다.
          </p>
          <p>
            기획 · 어드민 디자인 · QA를 단독 담당했고,{" "}
            <strong>점주어드민과 관리자어드민은 프론트엔드까지 직접 구현</strong>
            했습니다.
          </p>

          <MetricGrid
            items={[
              { value: "4", label: "서비스 통합", sub: "앱·키오스크·점주·관리자" },
              { value: "33%", label: "개발 리드타임 단축", sub: "3개월 → 2개월" },
              { value: "90%", label: "QA 이슈 해결률", sub: "총 103건 중" },
            ]}
          />
        </Section>

        <Section id="problem" number="02" title="Problem — 왜 필요했나">
          <p>
            기존 노터치 세차장은 <strong>RF 카드 발급 기계</strong>가 필수였습니다.
            하드웨어 비용, 매장 방문 없이는 어려운 관리, 매장마다 별도 카드가
            필요한 불편함이 누적된 구조였습니다.
          </p>

          <BeforeAfter
            before={{
              title: "RF 카드 기반 운영",
              items: [
                "카드 발급 기계 하드웨어 필요",
                "카드 관리 · 재발급의 운영 부담",
                "기기 상태 실시간 파악 불가",
                "상품·매장 정보 수정 = 현장 방문",
              ],
            }}
            after={{
              title: "QR + 앱 기반 운영",
              items: [
                "매장 QR 스티커 하나로 대체",
                "앱 결제 → 점주 승인 → 세차 단일 플로우",
                "기기별 실시간 모니터링",
                "상품·매장 정보 원격 관리",
              ],
            }}
          />
        </Section>

        <Section id="solution" number="03" title="Solution — 4개 서비스 아키텍처">
          <p>
            하나의 백엔드가 4개 인터페이스를 유기적으로 연결합니다. 사용자 결제
            경험과 점주 운영 편의성을 동시에 해결하기 위한 구조입니다.
          </p>

          <CareXArchitecture />
          <CareXFlow />
        </Section>

        <Section id="role" number="04" title="My Role — 최소 팀에서 4개 서비스를">
          <p>
            4명 팀에서 기획 파트를 <strong>단독으로 담당</strong>했고, 어드민
            2종은 디자인과 프론트까지 이어갔습니다.
          </p>

          <TeamDiagram
            members={[
              { role: "기획 · PM", count: 1, self: true },
              { role: "개발", count: 2 },
              { role: "디자인", count: 1 },
            ]}
            caption="Team of 4 · 기획 1인이 4개 서비스를 커버"
          />

          <RoleDonut
            centerLabel="Contribution"
            centerValue="100%"
            slices={[
              { label: "서비스 기획", value: 40, color: "oklch(0.72 0.19 155)" },
              { label: "UI 디자인 (어드민 2종)", value: 20, color: "oklch(0.72 0.19 155 / 0.7)" },
              { label: "프론트엔드 (어드민 2종)", value: 30, color: "oklch(0.72 0.19 155 / 0.45)" },
              { label: "QA · 테스트", value: 10, color: "oklch(0.72 0.19 155 / 0.25)" },
            ]}
          />
        </Section>

        <Section id="ai-dev" number="05" title="AI-Augmented Dev — 실패에서 학습으로">
          <p>
            고객사에서 빠른 개발을 원했지만 개발 리소스가 부족한 상황.{" "}
            <strong>Claude Code로 어드민 프론트를 직접 구현</strong>하기로 결정했고,
            처음이라 시행착오가 많았습니다.
          </p>

          <Callout variant="brand" label="Key Approach">
            기존 개발자가 만든 레포지토리를 Claude Code에{" "}
            <strong>먼저 학습시킨 뒤</strong> 코드를 생성하도록 세팅. "우리 팀
            코드"를 쓰도록 AI를 정렬한 것이 핵심이었습니다.
          </Callout>

          <AIDevJourney />

          <Quote cite="개발팀 피드백">
            큰 기능들이 큰 무리 없이 구현되었다. 다만 더미 코드가 함께 생기는
            경향이 있어 개선이 필요하다.
          </Quote>

          <Callout variant="warning" label="Honest Limitation">
            AI로 빠르게 만들 수 있게 됐지만 <strong>불필요한 더미 코드</strong>가
            함께 생성되는 한계를 확인. 다음 프로젝트에서는 프롬프트에 "기존 함수
            재사용 우선" 원칙을 명시하고, PR 전 자체 리팩터링 라운드를 두는 방식으로
            개선할 계획입니다.
          </Callout>
        </Section>

        <Section id="impact" number="06" title="Impact">
          <GanttCompare
            unit="개월"
            maxUnits={3}
            highlight="1개월 단축 · 리드타임 33% 감소"
            bars={[
              {
                label: "당초 계획",
                sublabel: "개발자 견적",
                units: 3,
                color: "muted",
              },
              {
                label: "실제 완료",
                sublabel: "AI 활용 후",
                units: 2,
                color: "brand",
              },
            ]}
          />

          <MetricGrid
            items={[
              { value: "3주", label: "4개 서비스 화면 확정", sub: "기획→확정" },
              { value: "103건", label: "QA 이슈 발견", sub: "오픈 전 검증" },
              { value: "90%", label: "QA 해결률", sub: "오픈 전" },
            ]}
          />
          <p className="text-sm text-muted-foreground">
            MVP 개발 완료, 클라이언트의 투자 유치 일정에 따라 정식 오픈 조정 중.
            상세 화면 · QA 결과 · Figma 원본은 인터뷰 시 공유 가능합니다.
          </p>
        </Section>

        <Section id="learnings" number="07" title="Learnings">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 not-prose">
            <div className="rounded-2xl border border-border bg-card p-6">
              <div className="font-mono text-[10px] uppercase tracking-widest text-muted-foreground mb-3">
                Learning 01
              </div>
              <h3 className="font-medium mb-2">AI는 도구가 아닌 팀 멤버</h3>
              <p className="text-sm text-foreground/70 leading-relaxed">
                프롬프트만 잘 짜는 게 아니라 팀의 코드 스타일과 컨벤션을 학습하도록
                환경을 만드는 것이 결정적이었습니다.
              </p>
            </div>
            <div className="rounded-2xl border border-border bg-card p-6">
              <div className="font-mono text-[10px] uppercase tracking-widest text-muted-foreground mb-3">
                Learning 02
              </div>
              <h3 className="font-medium mb-2">기획 → 개발의 벽 낮추기</h3>
              <p className="text-sm text-foreground/70 leading-relaxed">
                기획자가 프론트를 직접 만들면 "어떻게 설명할까"를 고민하는 대신
                바로 보여줄 수 있습니다. 커뮤니케이션 비용이 극적으로 낮아졌습니다.
              </p>
            </div>
          </div>
        </Section>
      </CaseStudyBody>

      <NextProject current={project} all={allProjects()} />
    </>
  );
}

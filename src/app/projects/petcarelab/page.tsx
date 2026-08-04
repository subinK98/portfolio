import type { Metadata } from "next";
import { notFound } from "next/navigation";
import {
  ProjectHero,
  CaseStudyBody,
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

const TOC = [
  { number: "01", id: "overview", label: "Overview" },
  { number: "02", id: "research", label: "Research" },
  { number: "03", id: "ia", label: "IA Redesign" },
  { number: "04", id: "prototype", label: "Prototype" },
  { number: "05", id: "learnings", label: "Learnings" },
];

export default function Page() {
  const project = getProject(SLUG);
  if (!project) notFound();

  return (
    <>
      <ProjectHero project={project} />

      <CaseStudyBody toc={TOC}>
        <Section id="overview" number="01" title="Overview">
          <p>
            반려견 건강 모니터링 기반 헬스케어 플랫폼 리뉴얼. 산책 중심 UI를{" "}
            <strong>건강관리 중심 IA로 재설계</strong>하고, 소변검사·건강 히스토리
            등 핵심 기능의 접근성을 개선했습니다.
          </p>

          <Callout variant="warning" label="정직하게 밝힙니다">
            회사 사정으로 <strong>서비스 오픈에 이르지 못한</strong> 프로젝트입니다.
            사용자 검증 기회는 없었지만, <strong>리서치 → IA 재설계 →
            프로토타입</strong>까지의 사이클을 리드한 경험을 기록합니다.
          </Callout>
        </Section>

        <Section id="research" number="02" title="Research — 문제의 정의">
          <p>
            상담사 설문 데이터와 반려견 보호자 대상 2차 자료를 기반으로, 반려견
            건강관리의 핵심 문제를 도출했습니다.
          </p>

          <MetricGrid
            items={[
              { value: "고비용", label: "병원 진료·검사 비용", sub: "" },
              { value: "제한적", label: "병원 접근성", sub: "장소·시간 제약" },
              { value: "부재", label: "통합 건강 데이터", sub: "일상 모니터링" },
            ]}
          />

          <Callout variant="brand" label="Core Insight">
            <strong>보호자는 병원 가기 전에 반려견 상태를 미리 알고 싶어한다.</strong>{" "}
            그런데 기존 서비스는 산책 기록이 중심이라 건강 데이터가 부차적이었습니다.
          </Callout>
        </Section>

        <Section id="ia" number="03" title="IA Redesign — 산책 → 건강">
          <p>
            사용자 여정을 다시 그려보니 가장 자주 확인하고 싶은 것은{" "}
            <strong>"오늘 우리 아이 건강 괜찮은가"</strong>였습니다. 홈 화면의
            중심축을 산책 버튼에서 건강 상태 요약으로 옮겼습니다.
          </p>

          <BeforeAfter
            before={{
              title: "AS-IS · 산책 중심",
              items: [
                "홈: 여러 기능 혼합 노출로 시선 분산",
                "건강 기록: 수기 입력 위주 · 필드 나열",
                "히스토리: 표 기반, 이상 상태 시각화 부족",
                "산책 버튼이 하단, 부가 요소와 혼재",
              ],
            }}
            after={{
              title: "TO-BE · 건강 중심",
              items: [
                "홈: 핵심 요약 · 컬러로 상태 직관 파악",
                "건강 기록: 항목별 구분으로 입력 편의성",
                "히스토리: 막대그래프 + 상태 컬러",
                "CTA 중심의 산책 버튼 유도 흐름",
              ],
            }}
          />
        </Section>

        <Section id="prototype" number="04" title="Prototype — 5개 핵심 화면">
          <p>Figma로 다음 5개 핵심 화면을 재설계하고 클릭 가능한 프로토타입 완성.</p>

          <div className="not-prose my-6 grid grid-cols-2 md:grid-cols-5 gap-3">
            {[
              { name: "홈", accent: true },
              { name: "건강일기", accent: false },
              { name: "소변검사", accent: true },
              { name: "검사 히스토리", accent: false },
              { name: "마이페이지", accent: false },
            ].map((item, i) => (
              <div
                key={item.name}
                className={`rounded-xl border p-4 text-center transition-colors ${
                  item.accent
                    ? "border-[var(--brand)]/30 bg-[var(--brand)]/[0.05]"
                    : "border-border bg-card"
                }`}
              >
                <div className="font-mono text-[10px] text-muted-foreground mb-1">
                  0{i + 1}
                </div>
                <div className="text-sm font-medium">{item.name}</div>
              </div>
            ))}
          </div>

          <p className="text-sm text-muted-foreground">
            이 과정에서 <strong>Figma 협업 프로세스를 팀에 도입</strong>해 기존 PPT
            기반 화면 공유의 버전 혼선을 해소하고 피드백 속도를 개선했습니다.
          </p>
        </Section>

        <Section id="learnings" number="05" title="Learnings">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 not-prose">
            <div className="rounded-2xl border border-border bg-card p-6">
              <div className="text-2xl mb-3">🎯</div>
              <h3 className="font-medium mb-2 text-sm">사이클 리드 경험</h3>
              <p className="text-xs text-foreground/70 leading-relaxed">
                리서치 → IA → 프로토타입 전 과정을 처음부터 끝까지 담당한 경험.
              </p>
            </div>
            <div className="rounded-2xl border border-border bg-card p-6">
              <div className="text-2xl mb-3">🚫</div>
              <h3 className="font-medium mb-2 text-sm">완성 ≠ 검증</h3>
              <p className="text-xs text-foreground/70 leading-relaxed">
                잘 만든 프로토타입도 사용자에게 닿지 않으면 가설로 남음. 다음부터
                초반에 검증 시점을 함께 설계.
              </p>
            </div>
            <div className="rounded-2xl border border-border bg-card p-6">
              <div className="text-2xl mb-3">🛠️</div>
              <h3 className="font-medium mb-2 text-sm">도구 선택도 기획</h3>
              <p className="text-xs text-foreground/70 leading-relaxed">
                Figma 도입 하나로 버전 혼선 해소 + 피드백 속도 개선을 경험.
              </p>
            </div>
          </div>
        </Section>
      </CaseStudyBody>

      <NextProject current={project} all={allProjects()} />
    </>
  );
}

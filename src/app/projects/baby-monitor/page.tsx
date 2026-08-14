import type { Metadata } from "next";
import { notFound } from "next/navigation";
import {
  ProjectHero,
  CaseStudyBody,
  Section,
  MetricGrid,
  Callout,
  NextProject,
} from "@/components/project/case-study";
import {
  ComparisonMatrix,
  type MatrixRow,
} from "@/components/diagrams/comparison-matrix";
import { BabyMonitorSystemFlow } from "@/components/diagrams/system-flow";
import { ImageFigure } from "@/components/project/screenshots";
import { allProjects, getProject } from "@/lib/projects";

const SLUG = "baby-monitor";

export const metadata: Metadata = {
  title: "영유아 보조 육아 장치 · HW + SW + Web 통합",
};

const TOC = [
  { number: "01", id: "overview", label: "Overview" },
  { number: "02", id: "problem", label: "Problem" },
  { number: "03", id: "solution", label: "Solution" },
  { number: "04", id: "role", label: "My Role" },
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
            영유아 생체정보 모니터링·울음 감지·모빌 제어 기능을 통합한 IoT 육아
            보조 장치. <strong>기획 · 팀 리딩 · React 프론트엔드 개발까지</strong>{" "}
            담당한 학생 팀 프로젝트입니다.
          </p>

          <Callout label="Why included">
            지금은 <strong>AI 활용 프론트엔드 개발</strong>이 무기이지만, 그 기반이
            되는 <strong>React 개발 · 팀 리딩 · 시스템 설계 경험</strong>은 이
            프로젝트에서 쌓였습니다.
          </Callout>

          <MetricGrid
            items={[
              { value: "96%", label: "프로젝트 정확도", sub: "" },
              { value: "3종", label: "디바이스 통합", sub: "밴드·모빌·웹" },
              { value: "2개", label: "핵심 시나리오", sub: "질식·울음 감지" },
            ]}
          />
        </Section>

        <Section id="problem" number="02" title="Problem — 시장의 갭">
          <p>
            부모가 하루 종일 아이 곁에 있을 수 없는 현실에서{" "}
            <strong>떨어져 있어도 상태를 실시간 확인할 수 있는 장치</strong>가
            필요했지만, 기존 시장에는 통합 제품이 없었습니다.
          </p>

          <ComparisonMatrix
            columns={["생체정보", "위험감지", "원격제어"]}
            rows={
              [
                {
                  label: "NEBOO",
                  cells: ["full", "partial", "none"],
                },
                {
                  label: "SPROUTLING",
                  cells: ["full", "full", "none"],
                },
                {
                  label: "아이몬밴드",
                  cells: ["full", "full", "none"],
                },
                {
                  label: "OWLET",
                  cells: ["full", "full", "partial"],
                },
                {
                  label: "아이앤나",
                  cells: ["none", "full", "full"],
                },
                {
                  label: "Our Product",
                  cells: ["full", "full", "full"],
                  highlight: true,
                },
              ] as MatrixRow[]
            }
            caption="● 완전 지원 · ○ 부분 지원 · × 미지원"
          />
        </Section>

        <Section id="solution" number="03" title="Solution — 통합 시스템">
          <p>
            하드웨어(밴드) · 딥러닝(울음 분석) · 웹 UI를 하나의 시스템으로
            통합했습니다.
          </p>

          <BabyMonitorSystemFlow />

          <ImageFigure
            src="/images/projects/baby-monitor/hardware-and-ui.png"
            alt="실제 구현된 하드웨어와 웹 UI"
            label="실제 구현 · 발목 밴드(라즈베리파이) · 자동 회전 모빌 · 실시간 웹 UI"
            aspect="16/9"
            contain
          />
        </Section>

        <Section id="role" number="04" title="My Role — 기획 + 개발 + 팀 리딩">
          <p>
            팀 프로젝트였지만 <strong>PM 역할과 React 프론트엔드 개발을 동시에</strong>{" "}
            담당. 웹 UI에서 실시간 생체정보 시각화·위험 알림 UI·대시보드 구성을 직접
            구현했습니다.
          </p>

          <Callout label="Contribution">
            <ul className="space-y-2 text-sm">
              <li>
                <strong>기획:</strong> 제품 컨셉·시나리오·아키텍처 다이어그램
              </li>
              <li>
                <strong>개발:</strong> React 기반 웹 대시보드 (생체정보 시각화·알림)
              </li>
              <li>
                <strong>팀 리딩:</strong> 일정 관리·협업 구조·이슈 트래킹
              </li>
            </ul>
          </Callout>
        </Section>

        <Section id="learnings" number="05" title="Learnings">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 not-prose">
            <div className="rounded-2xl border border-border bg-card p-6">
              <div className="font-mono text-[10px] uppercase tracking-widest text-muted-foreground mb-3">
                Learning 01
              </div>
              <h3 className="font-medium mb-2">하드웨어 제약 → 소프트웨어 설계</h3>
              <p className="text-sm text-foreground/70 leading-relaxed">
                라즈베리파이 크기 특성상 밴드 소형화가 어려웠고, 결과적으로 울음
                감지 기능을 모빌로 옮겨야 했습니다. 이 제약을 미리 파악했어야
                한다는 교훈.
              </p>
            </div>
            <div className="rounded-2xl border border-border bg-card p-6">
              <div className="font-mono text-[10px] uppercase tracking-widest text-muted-foreground mb-3">
                Learning 02
              </div>
              <h3 className="font-medium mb-2">플랫폼 선택은 초반에</h3>
              <p className="text-sm text-foreground/70 leading-relaxed">
                "웹앱 특성상 접근성이 떨어진다"는 피드백을 받음. 이후 프로젝트에서
                iOS/안드로이드 vs 웹을 초반에 결정하는 습관을 갖게 됐습니다.
              </p>
            </div>
          </div>
        </Section>
      </CaseStudyBody>

      <NextProject current={project} all={allProjects()} />
    </>
  );
}

import type { Metadata } from "next";
import { notFound } from "next/navigation";
import {
  ProjectHero,
  Section,
  MetricGrid,
  Callout,
  NextProject,
} from "@/components/project/case-study";
import { allProjects, getProject } from "@/lib/projects";

const SLUG = "baby-monitor";

export const metadata: Metadata = {
  title: "영유아 보조 육아 장치 · HW + SW + Web 통합",
};

export default function Page() {
  const project = getProject(SLUG);
  if (!project) notFound();

  return (
    <>
      <ProjectHero project={project} />

      <Section number="01" title="Overview">
        <p>
          영유아의 생체 정보 모니터링·울음 감지·모빌 자동 제어 기능을 통합한
          IoT 육아 보조 장치를 <strong>기획 · 팀 리딩 · 프론트엔드 개발까지</strong>{" "}
          담당한 학생 팀 프로젝트입니다. 하드웨어(밴드 · 카메라 · 모빌),
          소프트웨어(딥러닝 울음 분석), 웹 UI를 하나의 시스템으로 통합했습니다.
        </p>

        <Callout label="Why included">
          지금은 <strong>AI 활용 프론트엔드 개발</strong>이 저의 무기이지만, 그
          기반이 되는 <strong>React 개발 · 팀 리딩 · 시스템 설계 경험</strong>은
          이 프로젝트에서 쌓였습니다.
        </Callout>

        <MetricGrid
          items={[
            { value: "96%", label: "프로젝트 정확도", sub: "" },
            {
              value: "3종",
              label: "디바이스 통합",
              sub: "밴드 · 모빌 · 웹",
            },
            {
              value: "2개",
              label: "핵심 시나리오",
              sub: "질식사 예방 · 울음 감지",
            },
          ]}
        />
      </Section>

      <Section number="02" title="Problem">
        <p>
          코로나로 인한 영유아 사망·질식사 뉴스를 접하며 시작된 프로젝트입니다.
          부모가 하루 종일 아이 곁에 있을 수 없는 현실에서,{" "}
          <strong>떨어져 있어도 아이의 상태를 실시간으로 확인할 수 있는
          장치</strong>가 필요하다는 문제 정의로 출발했습니다.
        </p>
        <p>
          시장의 기존 제품(NEBOO · SPROUTLING · OWLET 등)을 벤치마킹한 결과,{" "}
          <strong>생체정보 · 위험감지 · 원격 제어가 통합된 제품이
          없었습니다.</strong> 이 부재를 채우는 것을 프로젝트 목표로
          삼았습니다.
        </p>
      </Section>

      <Section number="03" title="Solution — 3-Part 아키텍처">
        <div className="not-prose my-6 grid grid-cols-1 md:grid-cols-3 gap-4">
          <div className="rounded-2xl border border-border bg-card p-6">
            <div className="font-mono text-[10px] uppercase tracking-widest text-[var(--brand)] mb-2">
              Sensing
            </div>
            <div className="text-lg font-medium mb-2">발목 밴드</div>
            <p className="text-sm text-muted-foreground leading-relaxed">
              심박수 · 체온 · 산소포화도 · 뒤집힘 감지
            </p>
          </div>
          <div className="rounded-2xl border border-border bg-card p-6">
            <div className="font-mono text-[10px] uppercase tracking-widest text-[var(--brand)] mb-2">
              Actuation
            </div>
            <div className="text-lg font-medium mb-2">스마트 모빌</div>
            <p className="text-sm text-muted-foreground leading-relaxed">
              울음 감지 시 자동 회전 · 카메라 실시간 스트리밍
            </p>
          </div>
          <div className="rounded-2xl border border-border bg-card p-6">
            <div className="font-mono text-[10px] uppercase tracking-widest text-[var(--brand)] mb-2">
              Interface
            </div>
            <div className="text-lg font-medium mb-2">웹 대시보드</div>
            <p className="text-sm text-muted-foreground leading-relaxed">
              생체정보 시각화 · 위험 상황 실시간 알림 (React)
            </p>
          </div>
        </div>
      </Section>

      <Section number="04" title="My Role — 기획 + 개발 + 팀 리딩">
        <p>
          팀 프로젝트였지만 <strong>PM 역할과 React 프론트엔드 개발을 동시에
          담당</strong>했습니다. 웹 UI에서 실시간 생체정보 시각화, 위험 알림
          UI, 대시보드 구성 등을 직접 구현했습니다.
        </p>
        <p>
          팀의 일정 관리와 협업 구조를 개선해{" "}
          <strong>프로젝트 정확도 96%</strong>를 달성했고, 개발 과정에서 발생한
          이슈들을 시나리오별로 정리해 우선순위를 조정했습니다.
        </p>

        <Callout label="Contribution">
          <ul className="space-y-2">
            <li>
              <strong>기획:</strong> 제품 컨셉 · 시나리오 · 아키텍처 다이어그램
            </li>
            <li>
              <strong>개발:</strong> React 기반 웹 대시보드 (생체정보 시각화 ·
              알림 UI)
            </li>
            <li>
              <strong>팀 리딩:</strong> 일정 관리 · 협업 구조 · 이슈 트래킹
            </li>
          </ul>
        </Callout>
      </Section>

      <Section number="05" title="Learnings">
        <p>
          이 프로젝트에서 두 가지를 배웠습니다.
        </p>
        <p>
          <strong>1. 하드웨어의 제약이 소프트웨어 설계를 결정한다.</strong>{" "}
          라즈베리파이 크기 특성상 밴드 소형화가 어려웠고, 결과적으로 밴드에서
          하려던 울음 감지 기능을 모빌 쪽으로 옮겨야 했습니다. 이런 제약을
          미리 파악하지 못해 후반부에 시나리오를 재설계한 것이 아쉬웠습니다.
        </p>
        <p>
          <strong>2. 웹앱은 접근성의 한계가 있다.</strong> 프로젝트 종료 후
          피드백에서 "웹앱 특성상 접근성·편의성이 떨어진다"는 지적을
          받았습니다. iOS · 안드로이드 네이티브 앱으로 확장했어야 한다는
          교훈이었고, 이후 프로젝트에서 <strong>플랫폼 선택을 초반에 결정하는
          습관</strong>을 갖게 되었습니다.
        </p>
      </Section>

      <NextProject current={project} all={allProjects()} />
    </>
  );
}

import type { Metadata } from "next";
import { notFound } from "next/navigation";
import {
  ProjectHero,
  Section,
  MetricGrid,
  Callout,
  Quote,
  BeforeAfter,
  NextProject,
} from "@/components/project/case-study";
import { allProjects, getProject } from "@/lib/projects";

const SLUG = "middle-aged-employment";

export const metadata: Metadata = {
  title: "중장년고용정보시스템 · 노사발전재단 공공 SI",
};

export default function Page() {
  const project = getProject(SLUG);
  if (!project) notFound();

  return (
    <>
      <ProjectHero project={project} />

      <Section number="01" title="Overview">
        <p>
          노사발전재단이 발주한 <strong>5억 규모의 공공 SI 프로젝트</strong>로,
          12개월간 진행된 중장년고용정보시스템의 유지보수·개편을 담당했습니다.
          기존 PC 중심으로 제공되던 중장년내일센터 서비스를 모바일 접근성까지
          확장하고, 산출물 관리 체계를 표준화한 프로젝트입니다.
        </p>
        <p>
          팀은 PM 1명 · 개발 4명 · 기획 1명(본인) · 디자인 1명으로 구성되었으며,{" "}
          <strong>기획 파트는 시니어 사수 없이 주니어 단독</strong>으로
          담당했습니다.
        </p>

        <MetricGrid
          items={[
            { value: "5억원", label: "프로젝트 규모", sub: "12개월" },
            { value: "19개", label: "모바일 신규 화면 설계", sub: "" },
            {
              value: "90%↓",
              label: "화면기획서 리뷰 이슈 감소",
              sub: "10건 → 1건",
            },
          ]}
        />
      </Section>

      <Section number="02" title="Problem — 두 개의 병목">
        <p>
          유지보수 단계에 들어온 시스템은 두 가지 방향의 병목을 안고 있었습니다.
        </p>

        <div className="not-prose my-6 grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="rounded-2xl border border-border bg-card p-6">
            <div className="font-mono text-[10px] uppercase tracking-widest text-muted-foreground mb-2">
              사용자 측면
            </div>
            <div className="text-lg font-medium mb-3">모바일 접근성 부족</div>
            <p className="text-sm text-muted-foreground leading-relaxed">
              중장년내일센터는 고용24 웹에서만 제공되었고, PC 기준 레이아웃은
              모바일에서 가독성·사용성이 떨어졌습니다. 대상 사용자층(중장년)이
              모바일로 접근할 방법이 없었습니다.
            </p>
          </div>
          <div className="rounded-2xl border border-border bg-card p-6">
            <div className="font-mono text-[10px] uppercase tracking-widest text-muted-foreground mb-2">
              운영 측면
            </div>
            <div className="text-lg font-medium mb-3">산출물 · 소통 분산</div>
            <p className="text-sm text-muted-foreground leading-relaxed">
              문서 템플릿이 표준화되지 않아 작성 편차가 컸고, 사업 관계자
              요청이 구두 · 메신저 · 메일로 흩어져 히스토리 추적이
              어려웠습니다.
            </p>
          </div>
        </div>
      </Section>

      <Section number="03" title="Approach — 주니어 단독, 무엇을 먼저 잡을까">
        <p>
          시니어 사수가 없는 환경이었기에{" "}
          <strong>어디에 리소스를 먼저 투입할지</strong>가 가장 중요했습니다.
          두 가지 원칙을 세웠습니다.
        </p>

        <Callout label="Principle 1">
          <strong>화면 분리 기준을 명확히 세우기.</strong> 기존 PC 화면에서
          "모바일 화면이 없는 메뉴"를 우선 기준으로 삼아, 다시 만들어야 하는
          화면 19개를 명확히 정의했습니다.
        </Callout>

        <Callout label="Principle 2">
          <strong>산출물을 두괄식으로.</strong> 결과와 제안을 첫 화면에서
          확인할 수 있도록 구성하고, 근거는 코드/캡처/쿼리로 첨부했습니다.
          "이거 왜 그렇게 하셨어요?"라는 질문이 나올 여지를 줄이는 게
          목표였습니다.
        </Callout>
      </Section>

      <Section number="04" title="Process Improvements">
        <p>
          단순히 화면을 잘 만드는 것을 넘어, <strong>협업의 병목을 없애는</strong>
          작업이 필요했습니다.
        </p>

        <BeforeAfter
          before={{
            title: "분산된 소통 · 반복된 리뷰",
            items: [
              "구두 · 메신저 · 메일로 흩어진 요청",
              "PM · 개발자 각기 다른 창구",
              "화면기획서 리뷰마다 수정 요청 10건 이상",
              "산출물 재작성 요청이 반복",
            ],
          }}
          after={{
            title: "단일 채널 · 표준화된 산출물",
            items: [
              "사업 관계자 소통을 기획자 이메일 · 번호 기준으로 일원화",
              "WBS · 회의록 · 요구사항 확인서 등 문서 템플릿 제작",
              "화면기획서 리뷰 이슈 마지막에는 1건으로 감소",
              "검수 포인트 표준화로 재작성 감소",
            ],
          }}
        />
      </Section>

      <Section number="05" title="Outcome">
        <MetricGrid
          items={[
            {
              value: "10 → 1",
              label: "화면기획서 리뷰 이슈",
              sub: "프로젝트 후반 기준",
            },
            {
              value: "1개",
              label: "통합 소통 채널",
              sub: "이전: 4-5개 분산",
            },
            {
              value: "4종",
              label: "표준 산출물 템플릿",
              sub: "WBS · 회의록 · 요구사항 등",
            },
          ]}
        />
        <p>
          단순한 산출물 개선을 넘어,{" "}
          <strong>주니어 혼자서도 프로젝트가 굴러가는 프로세스</strong>를
          만들어낸 것이 이 프로젝트의 가장 큰 성과였습니다.
        </p>
      </Section>

      <Section number="06" title="Learnings">
        <p>
          공공 SI는 이해관계자가 많고 요구사항 변경이 잦은 환경입니다. 이
          프로젝트는 저에게{" "}
          <strong>"내가 통제할 수 있는 것부터 정리하자"</strong>는 원칙을
          가르쳐줬습니다. 사업 관계자의 커뮤니케이션 스타일은 바꿀 수 없지만,
          내 소통 창구는 하나로 만들 수 있었으니까요.
        </p>
        <p>
          다음 프로젝트에서는{" "}
          <strong>초반 2주 안에 산출물 템플릿과 커뮤니케이션 규칙을 먼저
          확정하고 본 작업에 들어가는 방식</strong>을 시도할 계획입니다. 이번
          프로젝트에서는 표준화까지 도달하는 데 시간이 걸렸지만, 다음에는 그
          시간을 앞으로 당길 수 있을 것 같습니다.
        </p>
      </Section>

      <NextProject current={project} all={allProjects()} />
    </>
  );
}

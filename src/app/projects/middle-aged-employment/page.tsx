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
import { TeamDiagram } from "@/components/diagrams/team-diagram";
import { ChannelFlowCompare } from "@/components/diagrams/channel-flow";
import { PhoneShotGrid } from "@/components/project/screenshots";
import { allProjects, getProject } from "@/lib/projects";

const SLUG = "middle-aged-employment";

export const metadata: Metadata = {
  title: "중장년고용정보시스템 · 노사발전재단 공공 SI",
};

const TOC = [
  { number: "01", id: "overview", label: "Overview" },
  { number: "02", id: "context", label: "Team & Context" },
  { number: "03", id: "problem", label: "Problem" },
  { number: "04", id: "approach", label: "Approach" },
  { number: "05", id: "process", label: "Process 개선" },
  { number: "06", id: "outcome", label: "Outcome" },
  { number: "07", id: "learnings", label: "Learnings" },
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
            노사발전재단 발주 <strong>5억 규모 공공 SI 프로젝트</strong>. 12개월간
            중장년고용정보시스템 유지보수·개편을 담당했습니다. PC 중심으로
            제공되던 서비스를 모바일까지 확장하고 산출물 관리 체계를 표준화한
            프로젝트입니다.
          </p>

          <MetricGrid
            items={[
              { value: "5억원", label: "프로젝트 규모", sub: "12개월" },
              { value: "19개", label: "모바일 신규 화면", sub: "" },
              { value: "10건 → 1건", label: "리뷰 이슈 감소", sub: "화면기획서" },
            ]}
          />
        </Section>

        <Section id="context" number="02" title="Team & Context">
          <TeamDiagram
            lead={{ role: "PM", count: 1 }}
            members={[
              { role: "개발", count: 4 },
              { role: "기획", count: 1, self: true },
              { role: "디자인", count: 1 },
            ]}
            caption="총 7명 · 기획 파트는 시니어 사수 없이 주니어 단독"
          />
          <p className="text-sm text-muted-foreground">
            어디에 리소스를 먼저 투입할지, 어떤 원칙으로 산출물을 만들지 스스로
            결정해야 하는 환경이었습니다.
          </p>
        </Section>

        <Section id="problem" number="03" title="Problem — 두 개의 병목">
          <div className="not-prose grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="rounded-2xl border border-border bg-card p-6">
              <div className="font-mono text-[10px] uppercase tracking-widest text-muted-foreground mb-2">
                사용자 측면
              </div>
              <div className="text-lg font-medium mb-3">모바일 접근성 부족</div>
              <p className="text-sm text-muted-foreground leading-relaxed">
                중장년내일센터는 고용24 웹에서만 제공. PC 기준 레이아웃은
                모바일에서 가독성·사용성이 떨어졌고, 대상 사용자층이 모바일로
                접근할 방법이 없었습니다.
              </p>
            </div>
            <div className="rounded-2xl border border-border bg-card p-6">
              <div className="font-mono text-[10px] uppercase tracking-widest text-muted-foreground mb-2">
                운영 측면
              </div>
              <div className="text-lg font-medium mb-3">산출물 · 소통 분산</div>
              <p className="text-sm text-muted-foreground leading-relaxed">
                문서 템플릿이 표준화되지 않아 작성 편차가 컸고, 사업 관계자 요청이
                구두·메신저·메일로 흩어져 히스토리 추적이 어려웠습니다.
              </p>
            </div>
          </div>
        </Section>

        <Section id="approach" number="04" title="Approach — 원칙 두 가지">
          <div className="not-prose grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="rounded-2xl border border-[var(--brand)]/30 bg-[var(--brand)]/[0.05] p-6">
              <div className="font-mono text-[10px] uppercase tracking-widest text-[var(--brand)] mb-2">
                Principle 01
              </div>
              <h3 className="font-medium mb-2">화면 분리 기준을 명확히</h3>
              <p className="text-sm text-foreground/80 leading-relaxed">
                기존 PC 화면에서 "모바일 화면이 없는 메뉴"를 우선 기준으로 삼아,
                다시 만들어야 하는 화면 19개를 명확히 정의했습니다.
              </p>
            </div>
            <div className="rounded-2xl border border-[var(--brand)]/30 bg-[var(--brand)]/[0.05] p-6">
              <div className="font-mono text-[10px] uppercase tracking-widest text-[var(--brand)] mb-2">
                Principle 02
              </div>
              <h3 className="font-medium mb-2">산출물을 두괄식으로</h3>
              <p className="text-sm text-foreground/80 leading-relaxed">
                결과·제안을 첫 화면에서 확인하도록 구성하고, 근거는 코드·캡처·쿼리로
                첨부. "왜 그렇게 하셨어요?" 질문 여지를 최소화했습니다.
              </p>
            </div>
          </div>
        </Section>

        <Section id="process" number="05" title="Process 개선">
          <p>
            화면을 잘 만드는 것을 넘어 <strong>협업의 병목을 없애는</strong> 작업이
            필요했습니다.
          </p>

          <ChannelFlowCompare />

          <Callout label="추가 개선">
            <ul className="space-y-1.5 text-sm">
              <li>· WBS · 회의록 · 요구사항 확인서 등 <strong>표준 템플릿 4종 제작</strong></li>
              <li>· 검수 포인트 표준화로 <strong>재작성 요청 감소</strong></li>
              <li>· 화면기획서 리뷰 이슈 <strong>10건 → 1건 (프로젝트 후반)</strong></li>
            </ul>
          </Callout>
        </Section>

        <Section id="outcome" number="06" title="Outcome">
          <MetricGrid
            items={[
              { value: "10 → 1", label: "화면기획서 리뷰 이슈", sub: "프로젝트 후반" },
              { value: "1개", label: "통합 소통 채널", sub: "이전: 4-5개 분산" },
              { value: "4종", label: "표준 산출물 템플릿", sub: "WBS·회의록 등" },
            ]}
          />

          <p className="text-sm text-muted-foreground">
            아래는 신규 설계한 모바일 화면 중 일부입니다. 중장년 사용자를 위해
            큰 터치 영역, 명확한 CTA, 단순화된 검색 조건을 원칙으로 삼았습니다.
          </p>

          <PhoneShotGrid
            cols={4}
            items={[
              {
                src: "/images/projects/middle-aged-employment/mobile-01-career-list.png",
                alt: "생애경력설계 신청현황 리스트",
                label: "생애경력설계 · 신청현황",
              },
              {
                src: "/images/projects/middle-aged-employment/mobile-02-career-detail.png",
                alt: "생애경력설계 상세",
                label: "생애경력설계 · 상세",
              },
              {
                src: "/images/projects/middle-aged-employment/mobile-03-service-list.png",
                alt: "전직지원서비스 신청현황",
                label: "전직지원 · 신청현황",
              },
              {
                src: "/images/projects/middle-aged-employment/mobile-04-education-list.png",
                alt: "전직지원 교육신청현황",
                label: "전직지원 · 교육신청",
              },
            ]}
          />
        </Section>

        <Section id="learnings" number="07" title="Learnings">
          <Callout>
            공공 SI는 이해관계자가 많고 요구사항 변경이 잦습니다. 이 프로젝트에서
            배운 것은 <strong>"내가 통제할 수 있는 것부터 정리하자"</strong>는
            원칙이었습니다. 사업 관계자의 커뮤니케이션 스타일은 바꿀 수 없지만,
            내 소통 창구는 하나로 만들 수 있었으니까요.
          </Callout>
          <p>
            다음 프로젝트에서는 <strong>초반 2주 안에 산출물 템플릿과 커뮤니케이션
            규칙을 먼저 확정</strong>하고 본 작업에 들어가는 방식을 시도할
            계획입니다.
          </p>
        </Section>
      </CaseStudyBody>

      <NextProject current={project} all={allProjects()} />
    </>
  );
}

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

const SLUG = "care-x";

export const metadata: Metadata = {
  title: "Care-X · QR 기반 O2O 세차 플랫폼",
};

export default function CareXPage() {
  const project = getProject(SLUG);
  if (!project) notFound();

  return (
    <>
      <ProjectHero project={project} />

      <Section number="01" title="Overview">
        <p>
          Care-X는 노터치 세차장을 위한{" "}
          <strong>QR 기반 O2O 세차 플랫폼</strong>입니다. 앱, 키오스크,
          점주어드민, 관리자어드민 총 4개의 서비스로 구성되어 있으며, 결제부터
          기기 관리·실시간 모니터링까지 통합된 운영 환경을 제공합니다.
        </p>
        <p>
          기획, 디자인(어드민), QA를 모두 단독으로 담당했고,{" "}
          <strong>점주어드민과 관리자어드민은 프론트엔드까지 직접 구현</strong>
          했습니다. 개발 리소스가 부족한 상황에서 Claude Code를 활용해 개발
          리드타임을 3개월에서 2개월로 단축했습니다.
        </p>

        <MetricGrid
          items={[
            {
              value: "4개",
              label: "서비스 통합",
              sub: "앱 · 키오스크 · 점주 · 관리자",
            },
            {
              value: "33%↓",
              label: "개발 리드타임 단축",
              sub: "3개월 → 2개월",
            },
            { value: "90%", label: "QA 이슈 해결률", sub: "총 103건 중" },
          ]}
        />
      </Section>

      <Section number="02" title="Problem — 왜 이 서비스가 필요했나">
        <p>
          기존 노터치 세차장은 <strong>RF 카드 발급 기계</strong>가 반드시
          필요했습니다. 하드웨어 도입·유지 비용이 발생하고, 점주는 카드
          발급·관리에 시간을 써야 했으며, 사용자는 매장마다 별도의 카드를 들고
          다녀야 했습니다.
        </p>
        <p>
          또한 여러 기기(키오스크, 셀프세차기)가 흩어져 있어{" "}
          <strong>운영 현황을 실시간으로 파악하기 어렵고</strong>, 상품 정보나
          매장 정보를 수정하려면 매번 현장에서 직접 만져야 하는 구조였습니다.
        </p>

        <BeforeAfter
          before={{
            title: "RF 카드 기반 운영",
            items: [
              "카드 발급 기계 하드웨어 필요",
              "카드 관리 · 재발급 등 운영 부담",
              "매장별 기기 상태를 실시간으로 확인 불가",
              "상품 · 매장 정보 수정을 위해 현장 방문 필요",
            ],
          }}
          after={{
            title: "QR + 앱 기반 운영",
            items: [
              "매장에 부착된 QR 스티커 하나로 대체",
              "앱 결제 → 점주 승인 → 세차 시작의 단일 플로우",
              "점주어드민에서 기기별 실시간 모니터링",
              "상품 · 매장 정보를 어드민에서 원격 관리",
            ],
          }}
        />
      </Section>

      <Section number="03" title="Solution — 4개 서비스의 유기적 연결">
        <p>
          하나의 세차 경험을 완성하기 위해 4개의 서비스가 각자의 역할을 나눠
          가집니다. 이 구조는 사용자의 결제 경험과 점주의 운영 편의성을 동시에
          잡기 위해 설계되었습니다.
        </p>

        <div className="not-prose my-6 grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="rounded-2xl border border-border bg-card p-6">
            <div className="font-mono text-[10px] uppercase tracking-widest text-[var(--brand)] mb-2">
              User-facing
            </div>
            <div className="text-lg font-medium mb-1">고객 앱</div>
            <p className="text-sm text-muted-foreground leading-relaxed">
              QR 스캔 → 상품 확인 → 결제. 별도 카드 없이 앱만으로 세차 완결.
            </p>
          </div>
          <div className="rounded-2xl border border-border bg-card p-6">
            <div className="font-mono text-[10px] uppercase tracking-widest text-[var(--brand)] mb-2">
              User-facing
            </div>
            <div className="text-lg font-medium mb-1">키오스크</div>
            <p className="text-sm text-muted-foreground leading-relaxed">
              앱이 없는 사용자를 위한 대체 접점. 매장 앞에 설치되어 결제 흐름을
              제공.
            </p>
          </div>
          <div className="rounded-2xl border border-border bg-card p-6">
            <div className="font-mono text-[10px] uppercase tracking-widest text-muted-foreground mb-2">
              Operator
            </div>
            <div className="text-lg font-medium mb-1">점주 어드민</div>
            <p className="text-sm text-muted-foreground leading-relaxed">
              상품 관리, 기기 등록, 실시간 모니터링, 결제 승인 등 매장 운영의
              모든 것을 한 곳에서.
            </p>
          </div>
          <div className="rounded-2xl border border-border bg-card p-6">
            <div className="font-mono text-[10px] uppercase tracking-widest text-muted-foreground mb-2">
              Operator
            </div>
            <div className="text-lg font-medium mb-1">관리자 어드민</div>
            <p className="text-sm text-muted-foreground leading-relaxed">
              가맹점 관리, 전체 매장 통합 데이터, 정책 설정 등 Care-X
              본사(관계자)를 위한 통제 도구.
            </p>
          </div>
        </div>
      </Section>

      <Section number="04" title="My Role — 최소 팀에서 4개 서비스를 리드">
        <p>
          <strong>기획 1명(본인) + 개발 2명 + 디자인 1명</strong>의 최소
          팀에서, 4개 서비스 전체 기획을 단독으로 담당했습니다. 앱과 키오스크는
          와이어프레임까지, 점주·관리자 어드민은 <strong>디자인 시안까지</strong>{" "}
          직접 완성했습니다.
        </p>
        <p>
          QA 단계에서는 테스트 케이스 문서를 작성해 1차 검증을 진행하고, 실행
          중 발견된 이슈는 QA 리스트로 정리해 개발자와 공유하며 개선했습니다.
          총 103건의 이슈가 발견되었고, 그중 90%가 오픈 전 해결되었습니다.
        </p>

        <Callout label="Contribution">
          <ul className="space-y-2">
            <li>
              <strong>기획:</strong> 4개 서비스 전체 (앱 · 키오스크 · 점주 ·
              관리자)
            </li>
            <li>
              <strong>디자인:</strong> 점주 어드민, 관리자 어드민 시안
            </li>
            <li>
              <strong>프론트엔드 구현:</strong> 점주 어드민 · 관리자 어드민의
              API 연동 제외 프론트 전체 (Nuxt / Vue)
            </li>
            <li>
              <strong>QA:</strong> 테스트 케이스 작성 · 실행 · 이슈 트래킹
            </li>
          </ul>
        </Callout>
      </Section>

      <Section number="05" title="AI-Augmented Development — 실패에서 학습으로">
        <p>
          고객사에서 빠른 개발을 요구했지만 개발 리소스가 부족한 상황이었습니다.
          기획자로서 <strong>Claude Code를 활용해 어드민의 프론트단을 직접
          구현</strong>하기로 결정했습니다. 처음이었기 때문에 시행착오가
          많았습니다.
        </p>

        <Callout variant="brand" label="Approach">
          기존 개발자가 만든 레포지토리를 Claude Code에{" "}
          <strong>먼저 학습시킨 뒤</strong>, 코드 컨벤션과 프로젝트 구조에 맞춰
          코드가 생성되도록 세팅했습니다. AI가 "우리 팀 코드"를 쓰도록 정렬한
          거죠.
        </Callout>

        <p>
          <strong>1차 시도(점주 어드민)</strong>에서는 프롬프트를 얼마나 수정한지
          기억이 안 날 정도로 실패의 연속이었습니다. 원하는 디자인이 나오지
          않았고 기능이 제대로 구현되지 않았습니다.
        </p>

        <p>
          그러나 그 경험을 기반으로{" "}
          <strong>2차 시도(관리자 어드민)</strong>에서는 프롬프트를 훨씬
          세분화해서 작성했고, 대부분의 기능이 첫 번째 시도에 원하는 결과로
          나왔습니다.
        </p>

        <Quote cite="개발팀 피드백">
          큰 기능들이 큰 무리 없이 구현되었다. 다만 더미 코드가 함께 생기는
          경향이 있어 개선이 필요하다.
        </Quote>

        <Callout variant="warning" label="Honest limitation">
          AI로 빠른 구현이 가능해졌지만 <strong>불필요한 더미 코드</strong>가
          함께 생성되는 한계를 확인했습니다. 다음 프로젝트에서는 프롬프트에
          "기존 함수 재사용 우선" 원칙을 명시하고, PR 전 스스로 리팩터링
          라운드를 두는 방식으로 개선할 계획입니다.
        </Callout>
      </Section>

      <Section number="06" title="Impact">
        <MetricGrid
          items={[
            {
              value: "3개월 → 2개월",
              label: "개발 리드타임",
              sub: "33% 단축",
            },
            {
              value: "3주",
              label: "4개 서비스 화면 확정",
              sub: "기획 착수 → 화면 확정",
            },
            {
              value: "103건 / 90%",
              label: "QA 이슈 발견 / 해결률",
              sub: "오픈 전 검증 완료",
            },
          ]}
        />
        <p>
          MVP 개발 완료 상태이며, 클라이언트의 투자 유치 일정에 따라 정식 오픈은
          조정 중입니다. 상세 화면 · QA 결과 · Figma 원본은 인터뷰 시 상세
          공유가 가능합니다.
        </p>
      </Section>

      <Section number="07" title="Learnings">
        <p>
          이 프로젝트는 저에게 <strong>"AI는 도구가 아니라 팀 멤버로 세팅해야
          한다"</strong>는 관점을 심어주었습니다. 프롬프트만 잘 짜면 되는 게
          아니라, AI가 팀의 코드 스타일과 컨벤션을 학습하도록 환경을 만드는 것이
          더 중요했습니다.
        </p>
        <p>
          그리고 기획자가 프론트엔드까지 직접 만들 수 있다는 것은{" "}
          <strong>기획 → 개발 사이의 커뮤니케이션 비용을 극적으로 낮춘다</strong>
          는 것을 체감했습니다. "화면기획서로 어떻게 설명할까"를 고민하는 대신
          바로 만들어서 보여줄 수 있으니까요.
        </p>
        <p>
          다음 단계는 <strong>더미 코드 최소화</strong>와{" "}
          <strong>테스트 코드 자동화</strong>입니다. AI로 빠르게 만들 수 있게
          되었으니, 이제 품질 관리 프로세스를 함께 성장시킬 차례입니다.
        </p>
      </Section>

      <NextProject current={project} all={allProjects()} />
    </>
  );
}

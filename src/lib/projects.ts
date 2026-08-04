export type ProjectMetric = {
  value: string;
  label: string;
};

export type Project = {
  slug: string;
  title: string;
  subtitle: string;
  tagline: string;
  period: string;
  company: string;
  role: string;
  contribution: number;
  tags: string[];
  metrics: ProjectMetric[];
  featured: boolean;
  order: number;
  status: "shipped" | "mvp-complete" | "not-launched" | "student";
};

export const projects: Project[] = [
  {
    slug: "care-x",
    title: "Care-X",
    subtitle: "QR 기반 O2O 세차 플랫폼",
    tagline: "4개 서비스를 최소 팀으로 · AI로 개발 리드타임 33% 단축",
    period: "2026.04 – Present",
    company: "에이프",
    role: "서비스 기획 · 프론트엔드(AI-Assisted)",
    contribution: 100,
    tags: ["Service Planning", "AI-Assisted Dev", "O2O", "Multi-Service"],
    metrics: [
      { value: "4", label: "서비스 (앱·키오스크·점주·관리자)" },
      { value: "33%", label: "개발 리드타임 단축" },
      { value: "90%", label: "QA 이슈 해결률 (103건 중)" },
    ],
    featured: true,
    order: 1,
    status: "mvp-complete",
  },
  {
    slug: "middle-aged-employment",
    title: "중장년고용정보시스템",
    subtitle: "노사발전재단 5억 규모 공공 SI",
    tagline: "주니어 단독 참여 · 화면기획서 리뷰 이슈 10건 → 1건",
    period: "2025.03 – 2025.08",
    company: "소프트시그널",
    role: "서비스 기획 (단독)",
    contribution: 45,
    tags: ["Public SI", "Mobile Planning", "Process Design"],
    metrics: [
      { value: "5억", label: "프로젝트 규모" },
      { value: "19개", label: "모바일 화면 신규 설계" },
      { value: "90%↓", label: "화면기획서 리뷰 이슈 감소" },
    ],
    featured: true,
    order: 2,
    status: "shipped",
  },
  {
    slug: "petcarelab",
    title: "PetcareLab",
    subtitle: "반려동물 헬스케어 서비스",
    tagline: "리서치 → IA 재설계 → 프로토타입까지 리드",
    period: "2023.09 – 2023.12",
    company: "에이아이댑스",
    role: "서비스 기획 · UI/UX",
    contribution: 75,
    tags: ["UX Research", "IA Redesign", "Healthcare"],
    metrics: [
      { value: "5개", label: "핵심 화면 재설계" },
      { value: "3개", label: "기능 카테고리 정의" },
      { value: "1개", label: "완성된 프로토타입" },
    ],
    featured: false,
    order: 3,
    status: "not-launched",
  },
  {
    slug: "baby-monitor",
    title: "영유아 보조 육아 장치",
    subtitle: "HW + SW + Web 통합 프로젝트",
    tagline: "PM · React 개발 · 정확도 96%",
    period: "2021.09 – 2022.06",
    company: "학생 프로젝트 (팀 리딩)",
    role: "PM · 프론트엔드 개발",
    contribution: 50,
    tags: ["Team Leading", "React", "IoT", "Hardware"],
    metrics: [
      { value: "96%", label: "프로젝트 정확도" },
      { value: "2개", label: "핵심 시나리오 구현" },
      { value: "3종", label: "디바이스 통합" },
    ],
    featured: false,
    order: 4,
    status: "student",
  },
];

export const getProject = (slug: string) =>
  projects.find((p) => p.slug === slug);

export const featuredProjects = () =>
  projects.filter((p) => p.featured).sort((a, b) => a.order - b.order);

export const allProjects = () =>
  [...projects].sort((a, b) => a.order - b.order);

'use client';

import Link from 'next/link';
import { useState, useEffect, Suspense } from 'react';
import { useSearchParams } from 'next/navigation';
import { ArrowLeft, Download } from 'lucide-react';

/* ── 재직기간 계산 유틸 ── */
function calcDuration(startStr: string, endStr?: string): string {
  const [sy, sm] = startStr.split('.').map(Number);
  const end = endStr ? new Date(Number(endStr.split('.')[0]), Number(endStr.split('.')[1]) - 1) : new Date();
  const totalMonths = (end.getFullYear() - sy) * 12 + (end.getMonth() + 1 - sm);
  const years = Math.floor(totalMonths / 12);
  const months = totalMonths % 12;
  if (years === 0) return `${months}개월`;
  if (months === 0) return `${years}년`;
  return `${years}년 ${months}개월`;
}

/* 총 경력 계산: 각 구간 합산 (겹치는 기간 없다고 가정) */
function calcTotalCareer(): string {
  const ranges: [string, string | undefined][] = [
    ['2023.12', undefined],       // 메가존 ~ 현재
    ['2021.01', '2023.11'],       // NEW
    ['2020.04', '2020.12'],       // 브라보앤뉴
  ];
  let total = 0;
  for (const [s, e] of ranges) {
    const [sy, sm] = s.split('.').map(Number);
    const end = e ? new Date(Number(e.split('.')[0]), Number(e.split('.')[1]) - 1) : new Date();
    total += (end.getFullYear() - sy) * 12 + (end.getMonth() + 1 - sm);
  }
  const years = Math.floor(total / 12);
  const months = total % 12;
  if (months === 0) return `${years}년`;
  return `${years}년 ${months}개월`;
}

/* ─────────────────────────────────────────
   데이터
───────────────────────────────────────── */

const PROFILE = {
  name: '박교리',
  role: 'HR Planning & Tech Specialist',
  email: 'ryfl8829@gmail.com',
};

const SUMMARY =
  'HR 기획 및 보상 운영 경험을 바탕으로 조직 운영, 데이터 기반 의사결정, 업무 자동화를 연결한 실행 가능한 HR 시스템을 설계합니다.';

const EDUCATION = [
  {
    school: '인천대학교',
    major: '동북아국제통상학과 미국통상 전공',
    detail: '경제학(미시/거시), 국제통상학, 국제금융학 · 전학년 전액 장학생 · 3.97/4.5',
    degree: '학사',
    period: '2012.03 – 2017.08',
  },
];

const SKILLS = {
  'HR 기획': ['인사제도 설계', '보상 체계 구축', '성과 관리', '조직 설계', '페이밴드 설계'],
  '인사운영': ['급여 정산(Payroll)', '4대보험 관리', '입퇴사 관리', '근태 관리', '연말정산'],
  'HR Tech': ['Google Apps Script', '대시보드 개발', '업무 자동화', '데이터 시각화'],
  '어학 · 자격': ['TOEIC 910점', '비즈니스 영어', '컴퓨터활용능력 2급'],
};

/* ── 경력 (최신순) ── */
const CAREERS = [
  {
    company: '메가존클라우드 주식회사',
    dept: '인사팀',
    title: '인사기획 담당',
    period: '2023.12 – 현재',
    startDate: '2023.12',
    endDate: undefined,
    isCurrent: true,
    overview: '국내 최대 AWS 파트너 클라우드 MSP · IT/테크 기업 HR 기획 전반 운영',
    tasks: [
      '인사기획 업무 전반 담당',
      '페이밴드 제도 설계 및 시뮬레이터 개발 (GAS)',
      'PIP 성과 개선 프로그램 운영 웹 개발 (GAS)',
      '인건비·인원·퇴사자 설문 대시보드 구축',
    ],
    achievements: [
      '전사 페이밴드 도입 — 보상 형평성 이슈 ↓ 80%',
      'PIP 운영 웹 개발 — 워터마크·감사 로그 보안 기능 구현',
    ],
    subCompanies: null,
  },
  {
    company: 'NEW 엔터테인먼트 그룹',
    dept: '',
    title: '',
    period: '2020.04 – 2023.11',
    startDate: '2020.04',
    endDate: '2023.11',
    isCurrent: false,
    overview: '빅4 영화투자배급사 그룹 (밀수·무빙·닥터차정숙) · 8개 계열사 350명 규모\n엔터테인먼트 특수 고용형태(예술인·프리랜서) 포함 HR 전반 운영',
    tasks: [],
    achievements: [],
    subCompanies: [
      {
        company: '(주)넥스트엔터테인먼트월드',
        dept: '인사팀',
        title: '대리',
        period: '2021.01 – 2023.11',
        startDate: '2021.01',
        endDate: '2023.11',
        note: '본사',
        tasks: [
          '8개 계열사(350명) 급여 운영 — 임직원·정규직·계약직·수습 형태별 급여 계산 및 지급',
          '연말정산 3회 진행(2021–2023), 인건비 데이터 산출 및 사업계획 보고',
          '입퇴사자 관리 — 근로계약서 작성, 직급·연봉 산정, 퇴직연금(DC형) 운영',
          '4대보험 취득·상실·변경 신고 및 8개 사업장 보수총액 신고',
          '노동위원회 3건·노동청 1건 노무 문제 관리 및 합의 종결',
          '내부회계관리제도 도입(2022) — 운영 프로세스 및 내부통제 시스템 구축',
          '계열사 인수합병·매각 인수인계(2021, 2023) — 인사 DB·근로계약·급여 검토 및 협상',
          '채용 프로세스 개선(2023) — 잡플렉스 도입, 직무별 평가항목 설정, 면접규정 수립',
        ],
        achievements: [
          '정기 근로감독(2022) — 급여대장·노사협의회·법정의무교육 전 항목 지적사항 없음',
          '내부회계관리제도 도입 — 분기별 지정감사인 감사 대응 체계 구축',
        ],
      },
      {
        company: '(주)브라보앤뉴',
        dept: '인사팀',
        title: '사원',
        period: '2020.04 – 2020.12',
        startDate: '2020.04',
        endDate: '2020.12',
        note: '자회사 · 계열사 매각으로 본사((주)넥스트엔터테인먼트월드) 인사팀 이동',
        tasks: [
          '5개 계열사(150명) 급여 운영 — 정규직·계약직·단기 아르바이트 급여 계산 및 지급',
          '입퇴사자 관리 및 4대보험 신고, 퇴직급여(DC형) 운영',
          '법정의무교육 관리, 채용공고 운영, 근태·건강검진 관리',
        ],
        achievements: [],
      },
    ],
  },
];

/* ── 인턴·대외활동 ── */
const ACTIVITIES = [
  {
    org: '한국 페링제약 인사총무팀',
    role: '인턴',
    period: '2019.03 – 2019.07',
    tasks: [
      '인사카드 등 인사 관련 문서 정리 및 디지털화',
      'HQ·아시아지부 공문 영한/한영 번역',
      '비용 정산, 전표처리, 세금계산서 발행',
    ],
  },
  {
    org: '(주)해외교육 필리핀 지부',
    role: '인턴',
    period: '2016.07 – 2016.09',
    tasks: ['필리핀 마닐라 현지 교사 관리 및 유학생 관리'],
  },
];

/* ── 경력기술서 상세 ── */
const CAREER_DETAILS = [
  {
    company: '메가존클라우드 주식회사',
    period: '2023.12 – 현재',
    isCurrent: true,
    projects: [
      {
        name: '전사 페이밴드 제도 설계 및 시뮬레이터 개발',
        period: '2024',                          // TODO: 정확한 기간 추가
        role: '기획 · 개발 단독 수행',
        background: '보상 기준 부재로 인한 직급·직군 간 형평성 이슈 및 연봉 협상 비효율 해소',
        tasks: [
          '시장 급여 데이터 수집 및 직급별 페이밴드 구간(Min/Mid/Max) 설계',
          'Compa-Ratio 기반 보상 위치 분석 체계 수립',
          'GAS 기반 페이밴드 시뮬레이터 웹 개발 및 내부 급여 DB 연동',
        ],
        result: '전사 페이밴드 도입, 보상 불만 민원 ↓ 80%, 연봉 협상 의사결정 시간 ↓ 60%',
        skills: ['GAS', '보상 설계', '데이터 분석', '웹 개발'],
      },
      {
        name: 'PIP 성과 개선 프로그램 운영 웹 개발',
        period: '2024',                          // TODO: 정확한 기간 추가
        role: '기획 · 개발 단독 수행',
        background: '이메일·문서 기반 PIP 운영의 불투명성 및 민감 정보 유출 리스크',
        tasks: [
          '성과 개선 프로그램 제도 설계 및 운영 프로세스 정립',
          '워터마크(열람자 정보 자동 삽입) 보안 기능 개발',
          '감사 로그(Audit Log) 자동 기록 및 권한별 차등 접근 제어 설계',
        ],
        result: '정보 유출 사고 0건, 전 과정 이력 추적 가능, 감사 대응 즉시 가능',
        skills: ['GAS', '성과 관리', '보안 설계', '웹 개발'],
      },
      {
        name: '인사 대시보드 구축 (인건비 / 인원 / 퇴사자 설문)',
        period: '2024',                          // TODO: 정확한 기간 추가
        role: '기획 · 개발 단독 수행',
        background: '인사 데이터 분산으로 인한 현황 파악 지연 및 월간 리포트 수작업 부담',
        tasks: [
          '인건비·인원·퇴사자 설문 현황 대시보드 설계',
          'GAS 기반 자동 데이터 집계 및 시각화 구현',
        ],
        result: '월간 리포트 작업 시간 단축, 실시간 현황 파악 가능',
        skills: ['GAS', '데이터 시각화', '대시보드'],
      },
      // TODO: 현 직장 추가 프로젝트 입력 예정
    ],
  },
  {
    company: 'NEW 엔터테인먼트 그룹',
    period: '2020.04 – 2023.11',
    isCurrent: false,
    overview: '빅4 영화투자배급사 그룹 (밀수·무빙·닥터차정숙) · 8개 계열사 350명 규모\n엔터테인먼트 특수 고용형태(예술인·프리랜서) 포함 HR 전반 운영',
    projects: [
      {
        name: '채용 프로세스 및 사이트 개선',
        period: '2023',
        role: '기획 · 운영',
        background: '채용 평가 기준 부재 및 지원자 소통 창구 미흡',
        tasks: [
          '잡플렉스 평가·관리·지원 사이트 도입',
          '직무별·사업부별 서류전형 및 면접전형 평가항목 설정',
          '면접규정 설정 및 배포 (채용공정화 법률, 장애인·보훈 가감점 반영)',
          'FAQ 등 지원자 소통창구 활성화',
        ],
        result: '채용 평가 기준 표준화, 지원자 문의 응대 효율화',
        skills: ['채용 기획', '프로세스 설계'],
      },
      {
        name: '계열사 인수합병 및 매각 인수인계',
        period: '2021, 2023',
        role: '인사 담당',
        background: '계열사 인수·매각에 따른 인사 DB·제도·계약 전반 검토 및 승계 처리 필요',
        tasks: [
          '인수 전 감사 실시 및 인수계약서 검토',
          '인사 DB·근로계약서·급여 검토 후 개인별 승계 여부 결정 및 협상',
          '퇴직금·연차·4대보험 정산 확인',
          '인사규정 및 취업규칙 당사 기준으로 개정',
          '임직원 개별 이력서 검토 후 직급 부여 및 발령',
        ],
        result: '인수합병 2건·매각 1건 인사 인수인계 완료',
        skills: ['인사 기획', '노무 관리', '계약 검토'],
      },
      {
        name: '내부회계관리제도 도입 및 운영 프로세스 구축',
        period: '2022',
        role: '인사 담당',
        background: '내부회계관리제도 도입(2022.07)에 따른 인사 영역 내부통제 체계 수립 필요',
        tasks: [
          '각종 증빙서류 보완·신설 및 업무 보고체계 재정립',
          '내부회계 감사 대응을 위한 내부통제 자료 작성',
          '보안서약서 등 필요서류 관리, 분기별 지정감사인 감사 실행',
        ],
        result: '분기별 내부회계 감사 무결점 대응 체계 구축',
        skills: ['내부통제', '감사 대응', '프로세스 설계'],
      },
      {
        name: '노동위원회 부당노동행위 사건 대응',
        period: '2021',
        role: '인사 담당',
        background: '부당해고 및 임금체불 관련 노동위원회·노동청 신고 접수',
        tasks: [
          '부당해고 관련 노동위원회 진정 3건 — 지노위·중노위·행정소송 진행',
          '임금체불 관련 노동청 고발 1건(8명) — 조사 대응',
        ],
        result: '전 건 합의 종결 처리',
        skills: ['노무 관리', '노동위원회 대응'],
      },
    ],
  },
  {
    company: '(주)브라보앤뉴',
    period: '2020.04 – 2020.12',
    isCurrent: false,
    overview: '넥스트엔터테인먼트월드 자회사 · 계열사 매각으로 본사 이동',
    projects: [
      {
        name: '5개 계열사 급여 운영 및 인사 전반',
        period: '2020.04 – 2020.12',
        role: '인사 담당 (사원)',
        background: '스포츠매니지먼트 계열사 5개사 인사운영 전반 담당',
        tasks: [
          '5개 계열사(150명) 급여 계산 및 지급 — 정규직·계약직·단기 아르바이트 포함',
          '당구장 프랜차이즈 지점 파트타임 직원 급여 운영',
          '입퇴사자 관리 및 4대보험 신고, 퇴직급여(DC형) 운영',
          '법정의무교육, 채용공고 운영, 근태·건강검진 관리',
        ],
        result: '5개사 급여 운영 안정화 및 인사 행정 전반 처리',
        skills: ['급여 운영', '4대보험', '인사 행정'],
      },
    ],
  },
];

/* ─────────────────────────────────────────
   컴포넌트
───────────────────────────────────────── */

function ResumeTab() {
  const [totalCareer, setTotalCareer] = useState('');
  const [durations, setDurations] = useState<Record<number, string>>({});

  useEffect(() => {
    setTotalCareer(calcTotalCareer());
    const d: Record<number, string> = {};
    CAREERS.forEach((c, i) => {
      d[i] = calcDuration(c.startDate, c.endDate);
    });
    setDurations(d);
  }, []);

  return (
    <div id="print-area" className="space-y-12">

      {/* 프로필 */}
      <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4 pb-10 border-b border-gray-100">
        <div className="space-y-1">
          <h2 className="text-3xl font-bold text-gray-900">{PROFILE.name}</h2>
          <p className="text-base text-gray-500">{PROFILE.role}</p>
        </div>
        <div className="text-sm text-gray-500 space-y-1 md:text-right">
          <p>{PROFILE.email}</p>
        </div>
      </div>

      {/* Summary */}
      <div className="space-y-3">
        <h3 className="text-xs font-semibold text-gray-400 uppercase tracking-widest">Summary</h3>
        <p className="text-sm text-gray-600 leading-relaxed max-w-2xl">{SUMMARY}</p>
      </div>

      {/* Experience */}
      <div className="space-y-6">
        <div className="flex items-baseline gap-3">
          <h3 className="text-xs font-semibold text-gray-400 uppercase tracking-widest">Experience</h3>
          {totalCareer && (
            <span className="text-xs text-gray-400">총 {totalCareer}</span>
          )}
        </div>
        <div className="space-y-10">
          {CAREERS.map((c, i) => (
            <div key={i} className="grid md:grid-cols-[200px_1fr] gap-4">
              <div className="space-y-1">
                <p className="text-xs text-gray-400 font-mono">{c.period}</p>
                <p className="text-xs text-gray-400">{durations[i]}</p>
                {c.isCurrent && (
                  <span className="inline-block text-xs px-2 py-0.5 bg-gray-900 text-white rounded-full">현재</span>
                )}
              </div>
              <div className="space-y-3">
                {/* 회사명 */}
                <div>
                  <p className="text-sm font-semibold text-gray-900">{c.company}</p>
                  {c.dept && <p className="text-xs text-gray-500">{c.dept} · {c.title}</p>}
                  {c.overview && c.overview.split('\n').map((line, li) => (
                    <p key={li} className="text-xs text-gray-400 mt-0.5 leading-relaxed">{line}</p>
                  ))}
                </div>

                {/* 단일 회사 업무 */}
                {!c.subCompanies && (
                  <>
                    <ul className="space-y-1">
                      {c.tasks.map((t, j) => (
                        <li key={j} className="flex gap-2 text-xs text-gray-500">
                          <span className="text-gray-300 flex-shrink-0 mt-0.5">—</span>
                          {t}
                        </li>
                      ))}
                    </ul>
                    {c.achievements.length > 0 && (
                      <ul className="space-y-1">
                        {c.achievements.map((a, j) => (
                          <li key={j} className="flex gap-2 text-xs text-gray-700 font-medium">
                            <span className="text-gray-400 flex-shrink-0 mt-0.5">✦</span>
                            {a}
                          </li>
                        ))}
                      </ul>
                    )}
                  </>
                )}

                {/* 그룹 — 자회사 목록 */}
                {c.subCompanies && (
                  <div className="space-y-6 pl-3 border-l-2 border-gray-100">
                    {c.subCompanies.map((sub, si) => (
                      <div key={si} className="space-y-2">
                        <div>
                          <div className="flex items-center gap-2 flex-wrap">
                            <p className="text-xs font-semibold text-gray-800">{sub.company}</p>
                            <span className="text-xs text-gray-400 font-mono">{sub.period}</span>
                            <span className="text-xs text-gray-400">
                              {calcDuration(sub.startDate, sub.endDate)}
                            </span>
                          </div>
                          <p className="text-xs text-gray-500">{sub.dept} · {sub.title}</p>
                          {sub.note && (
                            <p className="text-xs text-gray-400 mt-0.5">{sub.note}</p>
                          )}
                        </div>
                        <ul className="space-y-1">
                          {sub.tasks.map((t, j) => (
                            <li key={j} className="flex gap-2 text-xs text-gray-500">
                              <span className="text-gray-300 flex-shrink-0 mt-0.5">—</span>
                              {t}
                            </li>
                          ))}
                        </ul>
                        {sub.achievements.length > 0 && (
                          <ul className="space-y-1">
                            {sub.achievements.map((a, j) => (
                              <li key={j} className="flex gap-2 text-xs text-gray-700 font-medium">
                                <span className="text-gray-400 flex-shrink-0 mt-0.5">✦</span>
                                {a}
                              </li>
                            ))}
                          </ul>
                        )}
                      </div>
                    ))}
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* 인턴·대외활동 */}
      <div className="space-y-6">
        <h3 className="text-xs font-semibold text-gray-400 uppercase tracking-widest">Internship & Activities</h3>
        <div className="space-y-6">
          {ACTIVITIES.map((a, i) => (
            <div key={i} className="grid md:grid-cols-[200px_1fr] gap-4">
              <p className="text-xs text-gray-400 font-mono">{a.period}</p>
              <div className="space-y-1.5">
                <p className="text-sm font-medium text-gray-900">{a.org} · {a.role}</p>
                <ul className="space-y-1">
                  {a.tasks.map((t, j) => (
                    <li key={j} className="flex gap-2 text-xs text-gray-500">
                      <span className="text-gray-300 flex-shrink-0 mt-0.5">—</span>
                      {t}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Skills */}
      <div className="space-y-4">
        <h3 className="text-xs font-semibold text-gray-400 uppercase tracking-widest">Skills</h3>
        <div className="space-y-3">
          {Object.entries(SKILLS).map(([category, items]) => (
            <div key={category} className="grid md:grid-cols-[200px_1fr] gap-4 items-start">
              <p className="text-xs text-gray-400">{category}</p>
              <div className="flex flex-wrap gap-2">
                {items.map((s) => (
                  <span key={s} className="px-2.5 py-1 bg-gray-100 text-gray-600 text-xs rounded-full">{s}</span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Education */}
      <div className="space-y-4">
        <h3 className="text-xs font-semibold text-gray-400 uppercase tracking-widest">Education</h3>
        <div className="space-y-4">
          {EDUCATION.map((e, i) => (
            <div key={i} className="grid md:grid-cols-[200px_1fr] gap-4">
              <p className="text-xs text-gray-400 font-mono">{e.period}</p>
              <div>
                <p className="text-sm font-medium text-gray-900">{e.school}</p>
                <p className="text-xs text-gray-500">{e.major} · {e.degree}</p>
                {e.detail && <p className="text-xs text-gray-400 mt-0.5">{e.detail}</p>}
              </div>
            </div>
          ))}
        </div>
      </div>

    </div>
  );
}

function CareerTab() {
  return (
    <div id="print-area" className="space-y-16">
      {CAREER_DETAILS.map((company, ci) => (
        <div key={ci} className="space-y-8">

          {/* 회사 헤더 */}
          <div className="pb-4 border-b border-gray-100">
            <div className="flex items-center gap-2">
              <h3 className="text-lg font-bold text-gray-900">{company.company}</h3>
              {company.isCurrent && (
                <span className="text-xs px-2 py-0.5 bg-gray-900 text-white rounded-full">현재</span>
              )}
            </div>
            <p className="text-xs text-gray-400 font-mono mt-0.5">{company.period}</p>
            {'overview' in company && company.overview && (
              <div className="mt-1.5 space-y-0.5">
                {(company.overview as string).split('\n').map((line: string, li: number) => (
                  <p key={li} className="text-xs text-gray-400 leading-relaxed">{line}</p>
                ))}
              </div>
            )}
          </div>

          {/* 프로젝트 목록 */}
          <div className="space-y-10">
            {company.projects.map((p, pi) => (
              <div key={pi} className="space-y-4 pl-4 border-l-2 border-gray-100">
                <div className="space-y-1">
                  <div className="flex items-start justify-between gap-4">
                    <h4 className="text-base font-semibold text-gray-900">{p.name}</h4>
                    <p className="text-xs text-gray-400 font-mono flex-shrink-0">{p.period}</p>
                  </div>
                  <p className="text-xs text-gray-400">{p.role}</p>
                </div>

                <div className="space-y-3">
                  <div className="space-y-1">
                    <p className="text-xs font-medium text-gray-500 uppercase tracking-wider">배경</p>
                    <p className="text-xs text-gray-500 leading-relaxed">{p.background}</p>
                  </div>
                  <div className="space-y-1">
                    <p className="text-xs font-medium text-gray-500 uppercase tracking-wider">주요 업무</p>
                    <ul className="space-y-1">
                      {p.tasks.map((t, ti) => (
                        <li key={ti} className="flex gap-2 text-xs text-gray-500">
                          <span className="text-gray-300 flex-shrink-0 mt-0.5">—</span>
                          {t}
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div className="space-y-1">
                    <p className="text-xs font-medium text-gray-500 uppercase tracking-wider">성과</p>
                    <p className="text-xs text-gray-700 font-medium leading-relaxed">{p.result}</p>
                  </div>
                </div>

                <div className="flex flex-wrap gap-1.5">
                  {p.skills.map((s) => (
                    <span key={s} className="px-2 py-0.5 bg-gray-100 text-gray-500 text-xs rounded-full">{s}</span>
                  ))}
                </div>
              </div>
            ))}
          </div>

        </div>
      ))}
    </div>
  );
}

/* ── 메인 ── */
function ResumeContent() {
  const searchParams = useSearchParams();
  const [tab, setTab] = useState<'resume' | 'career'>('resume');

  useEffect(() => {
    if (searchParams.get('tab') === 'career') setTab('career');
  }, [searchParams]);

  const handlePrint = () => window.print();

  return (
    <>
      <style>{`
        @media print {
          .no-print { display: none !important; }
          body { background: white; }
          #print-area { padding: 0; }
        }
      `}</style>

      <div className="min-h-screen bg-white">
        <nav className="no-print max-w-4xl mx-auto px-6 py-6 flex items-center justify-between">
          <Link href="/" className="inline-flex items-center gap-2 text-sm text-gray-500 hover:text-gray-900 transition-colors">
            <ArrowLeft className="w-4 h-4" />
            Back
          </Link>
          <button
            onClick={handlePrint}
            className="inline-flex items-center gap-2 px-4 py-2 bg-gray-900 text-white text-sm rounded-lg hover:bg-gray-700 transition-colors"
          >
            <Download className="w-4 h-4" />
            PDF 저장
          </button>
        </nav>

        <div className="max-w-4xl mx-auto px-6 pb-24">
          <div className="no-print flex gap-1 bg-gray-100 p-1 rounded-lg w-fit mb-12">
            {([
              { key: 'resume', label: 'Resume' },
              { key: 'career', label: 'Career' },
            ] as const).map((t) => (
              <button
                key={t.key}
                onClick={() => setTab(t.key)}
                className={`px-5 py-2 rounded-md text-sm font-medium transition-colors ${
                  tab === t.key ? 'bg-white text-gray-900 shadow-sm' : 'text-gray-500 hover:text-gray-700'
                }`}
              >
                {t.label}
              </button>
            ))}
          </div>

          {tab === 'resume' ? <ResumeTab /> : <CareerTab />}
        </div>
      </div>
    </>
  );
}

export default function ResumePage() {
  return (
    <Suspense>
      <ResumeContent />
    </Suspense>
  );
}

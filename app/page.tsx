import Link from 'next/link';
import Image from 'next/image';
import { ArrowRight, BarChart2, Cpu, Layout, FileText } from 'lucide-react';

export default function Home() {
  return (
    <div className="min-h-screen bg-white">

      {/* ── Nav ── */}
      <nav className="max-w-6xl mx-auto px-6 py-6 flex items-center justify-between">
        <span className="text-sm font-semibold text-gray-900 tracking-tight">HR Portfolio</span>
        <div className="flex items-center gap-6 text-sm text-gray-500">
          <a href="#projects" className="hover:text-gray-900 transition-colors">Projects</a>
          <Link href="/resume" className="hover:text-gray-900 transition-colors">Resume</Link>
          <a href="#contact"  className="hover:text-gray-900 transition-colors">Contact</a>
        </div>
      </nav>

      {/* ── Hero ── */}
      <section className="max-w-6xl mx-auto px-6 py-20 md:py-28">
        <div className="flex flex-col md:flex-row items-center md:items-stretch gap-12">

          {/* 프로필 사진 — 텍스트 영역 높이에 맞춰 정사각형 유지 */}
          <div className="flex-shrink-0 flex items-center">
            <div className="aspect-square w-48 md:w-64 lg:w-72 rounded-full overflow-hidden bg-gray-100 border border-gray-200">
              {/* TODO: public/profile.jpg 파일 추가 후 아래 Image 태그가 표시됩니다 */}
              <Image src="/profile.jpg" alt="프로필 사진" width={288} height={288} className="object-cover w-full h-full" />
            </div>
          </div>

          {/* 텍스트 */}
          <div className="flex flex-col justify-between space-y-4 text-center md:text-left">
            <div className="space-y-4">
              <p className="text-xs text-gray-400 uppercase tracking-widest">HR Planning & HR Tech</p>
              <h1 className="text-4xl md:text-5xl font-bold text-gray-900 tracking-tight leading-tight">
                박교리
              </h1>
              <p className="text-base font-medium text-gray-500 tracking-wide">
                HR Planning &amp; Tech Specialist
              </p>
              <p className="text-base text-gray-500 max-w-xl leading-relaxed">
                HR 기획 및 보상 운영 경험을 바탕으로 조직 운영, 데이터 기반 의사결정,
                업무 자동화를 연결한 실행 가능한 HR 시스템을 설계합니다.
              </p>
            </div>

            {/* CTA 버튼 */}
            <div className="flex flex-wrap gap-3 pt-2">
              <a
                href="#projects"
                className="inline-flex items-center gap-2 px-5 py-2.5 bg-gray-900 text-white text-sm font-medium rounded-lg hover:bg-gray-700 transition-colors"
              >
                프로젝트 보기
                <ArrowRight className="w-4 h-4" />
              </a>
              <Link
                href="/resume"
                className="inline-flex items-center gap-2 px-5 py-2.5 border border-gray-300 text-gray-700 text-sm font-medium rounded-lg hover:border-gray-900 hover:text-gray-900 transition-colors"
              >
                <FileText className="w-4 h-4" />
                Resume
              </Link>
              <Link
                href="/resume?tab=career"
                className="inline-flex items-center gap-2 px-5 py-2.5 border border-gray-300 text-gray-700 text-sm font-medium rounded-lg hover:border-gray-900 hover:text-gray-900 transition-colors"
              >
                <FileText className="w-4 h-4" />
                Career
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ── Expertise ── */}
      <section className="max-w-6xl mx-auto px-6 py-16 border-t border-gray-100">
        <div className="grid md:grid-cols-3 gap-10">
          {[
            {
              icon: <Layout className="w-5 h-5 text-white" />,
              title: '인사기획',
              desc: '조직 설계, 제도 기획, 성과 관리 체계 구축 등 HR 전략을 실행 가능한 제도로 구체화합니다.',
            },
            {
              icon: <BarChart2 className="w-5 h-5 text-white" />,
              title: '보상 체계 설계',
              desc: '페이밴드 설계, Compa-Ratio 분석, 보상 형평성 검토를 통해 데이터 기반 보상 의사결정을 지원합니다.',
            },
            {
              icon: <Cpu className="w-5 h-5 text-white" />,
              title: 'HR Tech · 자동화',
              desc: 'GAS 기반 웹 시스템, 대시보드, 자동화 도구를 직접 개발하여 HR 프로세스를 디지털화합니다.',
            },
          ].map((item) => (
            <div key={item.title} className="space-y-3">
              <div className="w-10 h-10 bg-gray-900 rounded-lg flex items-center justify-center">
                {item.icon}
              </div>
              <h3 className="text-base font-semibold text-gray-900">{item.title}</h3>
              <p className="text-sm text-gray-500 leading-relaxed">{item.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ── Featured Projects ── */}
      <section id="projects" className="max-w-6xl mx-auto px-6 py-16 border-t border-gray-100">
        <p className="text-xs text-gray-400 uppercase tracking-widest mb-2">Featured</p>
        <h2 className="text-3xl font-bold text-gray-900 mb-10">대표 프로젝트</h2>

        {/* ── 메인 1개 — 풀와이드 ── */}
        <Link href="/projects/payband" className="group block mb-6">
          <div className="border border-gray-200 rounded-xl p-10 hover:border-gray-900 transition-all duration-200 flex flex-col md:flex-row md:items-center gap-8">
            <div className="flex-1 space-y-4">
              <div className="flex items-center gap-3">
                <span className="text-xs text-gray-400 uppercase tracking-widest">인사기획 · 보상 설계</span>
                <span className="text-xs px-2 py-0.5 bg-gray-900 text-white rounded-full">대표 프로젝트</span>
              </div>
              <h3 className="text-2xl font-bold text-gray-900">페이밴드 시뮬레이터</h3>
              <p className="text-sm text-gray-500 leading-relaxed max-w-2xl">
                보상 제도 기획부터 직무레벨·직군별 페이밴드 시뮬레이션 웹 개발까지 직접 설계·구현.
                GAS 기반으로 내부 급여 데이터와 연동해 실시간 의사결정을 지원합니다.
              </p>
              <div className="flex flex-wrap gap-2">
                {['인사기획', '보상 설계', 'GAS', 'HR Tech', '데이터 시각화'].map((tag) => (
                  <span key={tag} className="px-2.5 py-1 bg-gray-100 text-gray-600 text-xs rounded-full">{tag}</span>
                ))}
              </div>
            </div>
            <div className="flex-shrink-0 flex items-center justify-end">
              <div className="w-10 h-10 rounded-full border border-gray-200 flex items-center justify-center group-hover:border-gray-900 group-hover:bg-gray-900 transition-all duration-200">
                <ArrowRight className="w-4 h-4 text-gray-400 group-hover:text-white group-hover:translate-x-0.5 transition-all duration-200" />
              </div>
            </div>
          </div>
        </Link>

        {/* ── 역할별 4개 — 2×2 그리드 ── */}
        <div className="grid md:grid-cols-2 gap-6">
          {[
            {
              href: '/projects/parental-leave',
              role: '정책 자동화',
              title: '배우자 출산휴가 관리 자동화',
              desc: '출산일 기준 120일 유효기간 트래킹, 잔여 휴가 자동 안내 메일 발송, 관리자 종합 리포트로 사용률 100% 달성.',
              tags: ['정책 자동화', 'GAS', '이메일 자동화'],
            },
            {
              href: '/projects/year-end-tax',
              role: '지식 자동화',
              title: '연말정산 헬프데스크',
              desc: '노트북 LLM 기반 챗봇, 요건 자동 체크리스트, 웹 Q&A 및 메일 자동 답변으로 문의 800건 대비 50% 절감.',
              tags: ['지식 자동화', 'LLM', 'GAS', '챗봇'],
            },
            {
              href: '/projects/pip',
              role: '운영 시스템',
              title: '성과 개선 관리 프로그램 (PIP)',
              desc: '본인·리더·인사팀·경영진 뷰를 별도 구성한 저성과자 성과 관리 웹. 워터마크·감사 로그 보안 기능 포함.',
              tags: ['운영 시스템', 'GAS', '보안 설계', '성과 관리'],
            },
            {
              href: '/projects/hr-dashboard',
              role: '분석 시스템',
              title: 'HR 대시보드',
              desc: '월별 인건비·인력 현황·입퇴사자·급여 구성을 시각화한 경영진용 대시보드. 데이터 기반 의사결정 지원.',
              tags: ['분석 시스템', 'GAS', '데이터 시각화', '경영진 리포트'],
            },
          ].map((p) => (
            <Link key={p.href} href={p.href} className="group block">
              <div className="border border-gray-200 rounded-xl p-8 hover:border-gray-900 transition-all duration-200 h-full flex flex-col gap-4">
                <div className="flex items-start justify-between">
                  <span className="text-xs text-gray-400 uppercase tracking-widest">{p.role}</span>
                  <ArrowRight className="w-4 h-4 text-gray-300 group-hover:text-gray-900 group-hover:translate-x-1 transition-all duration-200" />
                </div>
                <h3 className="text-lg font-semibold text-gray-900">{p.title}</h3>
                <p className="text-sm text-gray-500 leading-relaxed flex-1">{p.desc}</p>
                <div className="flex flex-wrap gap-2">
                  {p.tags.map((tag) => (
                    <span key={tag} className="px-2.5 py-1 bg-gray-100 text-gray-600 text-xs rounded-full">{tag}</span>
                  ))}
                </div>
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* ── Other Projects ── */}
      <section className="max-w-6xl mx-auto px-6 py-16 border-t border-gray-100">
        <div className="flex items-end justify-between mb-8">
          <div>
            <p className="text-xs text-gray-400 uppercase tracking-widest mb-2">More Work</p>
            <h2 className="text-3xl font-bold text-gray-900">기타 프로젝트</h2>
          </div>
          <span className="text-sm text-gray-400">30+ 프로젝트</span>
        </div>
        <div className="grid md:grid-cols-3 gap-4">
          {[
            { title: '인건비 대시보드',      desc: '인건비 현황 및 예측 분석 자동화' },
            { title: '퇴사자 설문 분석',     desc: '퇴사 사유 트렌드 자동 리포트' },
            { title: '인원 현황 대시보드',   desc: '조직별 인원 변동 추이 시각화' },
            { title: '급여 정산 자동화',     desc: '월별 급여 정산 프로세스 자동화' },
            { title: '채용 트래킹 시스템',   desc: '채용 단계별 현황 관리 자동화' },
            { title: '연봉 협상 지원 도구',  desc: '페이밴드 기반 협상 의사결정 지원' },
          ].map((p) => (
            <div key={p.title} className="border border-gray-100 rounded-lg p-5 hover:border-gray-300 transition-colors">
              <h4 className="text-sm font-medium text-gray-900 mb-1.5">{p.title}</h4>
              <p className="text-xs text-gray-500">{p.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ── Contact ── */}
      <section id="contact" className="max-w-6xl mx-auto px-6 py-16 border-t border-gray-100">
        <p className="text-xs text-gray-400 uppercase tracking-widest mb-3">Contact</p>
        <h2 className="text-3xl font-bold text-gray-900 mb-3">함께 일해요</h2>
        <p className="text-gray-500 text-sm max-w-md mb-6">
          프로젝트 문의나 협업 제안은 이메일로 연락주세요.
        </p>
        <a
          href="mailto:your.email@example.com"
          className="inline-block px-6 py-3 bg-gray-900 text-white text-sm rounded-lg hover:bg-gray-700 transition-colors"
        >
          이메일 보내기
        </a>
      </section>

      {/* ── Footer ── */}
      <footer className="border-t border-gray-100 py-8">
        <div className="max-w-6xl mx-auto px-6 text-center text-xs text-gray-400">
          © 2026 HR Automation Portfolio
        </div>
      </footer>

    </div>
  );
}

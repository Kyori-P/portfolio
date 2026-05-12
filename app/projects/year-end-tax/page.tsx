import Link from 'next/link';
import { ArrowLeft } from 'lucide-react';
import YearEndTaxDemo from '../_demo/YearEndTaxDemo';

export default function YearEndTaxPage() {
  return (
    <div className="min-h-screen bg-white">
      <nav className="max-w-4xl mx-auto px-6 py-6">
        <Link href="/" className="inline-flex items-center gap-2 text-sm text-gray-500 hover:text-gray-900 transition-colors">
          <ArrowLeft className="w-4 h-4" />Back
        </Link>
      </nav>

      <div className="max-w-4xl mx-auto px-6 pb-24 space-y-16">

        {/* Header */}
        <div className="pt-8 pb-12 border-b border-gray-100 space-y-4">
          <p className="text-xs text-gray-400 uppercase tracking-widest">지식 자동화 · LLM · GAS · 챗봇</p>
          <h1 className="text-4xl font-bold text-gray-900 tracking-tight">연말정산 헬프데스크</h1>
          <p className="text-lg text-gray-500 max-w-2xl leading-relaxed">
            노트북 LLM 기반 챗봇, 요건 자동 체크리스트, 웹 Q&A 및 메일 자동 답변 기능으로
            연간 문의 800건 대비 50% 절감을 달성한 지식 자동화 시스템.
          </p>
        </div>

        {/* Background */}
        <div className="space-y-6">
          <h2 className="text-xl font-semibold text-gray-900">배경 & 문제 정의</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="space-y-3">
              <h3 className="text-sm font-medium text-gray-700">기존 문제</h3>
              <ul className="space-y-2 text-sm text-gray-500">
                {[
                  '연말정산 시즌 HR 담당자에게 반복 문의 집중 (연 800건+)',
                  '동일한 질문에 개별 답변으로 업무 과부하',
                  '공제 요건 확인 등 단순 문의에도 전문 지식 필요',
                  '안내 자료 분산으로 구성원 셀프 해결 어려움',
                ].map((t) => (
                  <li key={t} className="flex gap-2"><span className="text-gray-300 mt-0.5 flex-shrink-0">—</span>{t}</li>
                ))}
              </ul>
            </div>
            <div className="space-y-3">
              <h3 className="text-sm font-medium text-gray-700">해결 방향</h3>
              <ul className="space-y-2 text-sm text-gray-500">
                {[
                  '노트북 LLM 기반 연말정산 전용 챗봇 구축',
                  '전체 프로세스 안내 및 PPT 가이드 연결',
                  '공제 요건 자동 체크리스트 제공',
                  '웹 Q&A 및 메일 자동 답변 회신 기능 구현',
                ].map((t) => (
                  <li key={t} className="flex gap-2"><span className="text-gray-300 mt-0.5 flex-shrink-0">—</span>{t}</li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        {/* Key Features */}
        <div className="space-y-6">
          <h2 className="text-xl font-semibold text-gray-900">주요 기능</h2>
          <div className="grid md:grid-cols-2 gap-4">
            {[
              { title: 'LLM 기반 챗봇',        desc: '노트북 LLM을 활용한 연말정산 전용 Q&A 챗봇' },
              { title: '프로세스 안내',          desc: '전체 연말정산 프로세스 단계별 안내 및 PPT 가이드 연결' },
              { title: '요건 자동 체크리스트',   desc: '공제 항목별 요건 입력 시 해당 여부 자동 판단' },
              { title: '메일 자동 답변',         desc: '웹 질문 접수 시 답변 자동 생성 및 메일 회신' },
            ].map((f) => (
              <div key={f.title} className="border border-gray-100 rounded-xl p-5 space-y-1.5">
                <h4 className="text-sm font-semibold text-gray-900">{f.title}</h4>
                <p className="text-xs text-gray-500 leading-relaxed">{f.desc}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Demo */}
        <div className="space-y-4">
          <div className="flex items-center justify-between">
            <h2 className="text-xl font-semibold text-gray-900">데모</h2>
            <span className="text-xs text-gray-400 bg-gray-100 px-3 py-1 rounded-full">데모 데이터 기반</span>
          </div>
          <YearEndTaxDemo />
        </div>

        {/* Results */}
        <div className="space-y-6">
          <h2 className="text-xl font-semibold text-gray-900">도입 결과</h2>
          <div className="grid md:grid-cols-3 gap-6">
            {[
              { metric: '문의 절감',     value: '↓ 50%', desc: '전년도 800건 대비 400건 감소' },
              { metric: 'HR 응답 시간',  value: '↓ 80%', desc: '자동 답변으로 즉시 해결' },
              { metric: '구성원 만족',   value: '↑',     desc: '셀프 해결률 대폭 향상' },
            ].map((item) => (
              <div key={item.metric} className="border border-gray-200 rounded-xl p-6 space-y-2">
                <p className="text-xs text-gray-400">{item.metric}</p>
                <p className="text-3xl font-bold text-gray-900">{item.value}</p>
                <p className="text-xs text-gray-500">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>

      </div>
    </div>
  );
}

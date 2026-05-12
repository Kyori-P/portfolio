import Link from 'next/link';
import { ArrowLeft } from 'lucide-react';
import PaybandDemo from '../_demo/PaybandDemo';

export default function PaybandPage() {
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
          <div className="flex items-center gap-3">
            <p className="text-xs text-gray-400 uppercase tracking-widest">인사기획 · 보상 설계 · GAS · HR Tech</p>
            <span className="text-xs px-2 py-0.5 bg-gray-900 text-white rounded-full">대표 프로젝트</span>
          </div>
          <h1 className="text-4xl font-bold text-gray-900 tracking-tight">페이밴드 시뮬레이터</h1>
          <p className="text-lg text-gray-500 max-w-2xl leading-relaxed">
            보상 제도 기획부터 직무레벨·직군별 페이밴드 시뮬레이션 웹 개발까지 직접 설계·구현.
            GAS 기반으로 내부 급여 데이터와 연동해 HR 담당자의 실시간 의사결정을 지원합니다.
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
                  '명확한 페이밴드 없이 개별 협상 중심의 보상 체계',
                  '직급·직군 간 보상 형평성 이슈 발생',
                  '연봉 협상 시 기준 부재로 의사결정 지연',
                  '시장 데이터 대비 내부 보상 수준 파악 불가',
                ].map((t) => (
                  <li key={t} className="flex gap-2"><span className="text-gray-300 mt-0.5 flex-shrink-0">—</span>{t}</li>
                ))}
              </ul>
            </div>
            <div className="space-y-3">
              <h3 className="text-sm font-medium text-gray-700">해결 방향</h3>
              <ul className="space-y-2 text-sm text-gray-500">
                {[
                  '직급별 Min-Mid-Max 페이밴드 제도 설계',
                  'Compa-Ratio 기반 보상 위치 분석 체계 수립',
                  'GAS 웹앱으로 HR 담당자 셀프 시뮬레이션 구현',
                  '내부 급여 DB 연동으로 실시간 현황 파악',
                ].map((t) => (
                  <li key={t} className="flex gap-2"><span className="text-gray-300 mt-0.5 flex-shrink-0">—</span>{t}</li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        {/* Process */}
        <div className="space-y-6">
          <h2 className="text-xl font-semibold text-gray-900">기획 및 개발 프로세스</h2>
          <div className="grid md:grid-cols-4 gap-6">
            {[
              { step: '01', title: '시장 조사',      desc: '외부 급여 데이터 수집 및 직급별 시장 기준점 도출' },
              { step: '02', title: '제도 설계',      desc: '직급·직군별 Min/Mid/Max 구간 설정 및 내부 검증' },
              { step: '03', title: '현황 분석',      desc: '현 구성원 보상 수준 분석 및 이상치 파악' },
              { step: '04', title: 'HR Tech 구현',   desc: 'GAS 기반 시뮬레이터 개발 및 DB 연동' },
            ].map((item) => (
              <div key={item.step} className="space-y-2">
                <span className="text-xs text-gray-300 font-mono">{item.step}</span>
                <h4 className="text-sm font-semibold text-gray-900">{item.title}</h4>
                <p className="text-xs text-gray-500 leading-relaxed">{item.desc}</p>
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
          <PaybandDemo />
        </div>

        {/* Results */}
        <div className="space-y-6">
          <h2 className="text-xl font-semibold text-gray-900">도입 결과</h2>
          <div className="grid md:grid-cols-3 gap-6">
            {[
              { metric: '전사 적용',     value: '100%',  desc: '전 직급·직군 페이밴드 도입' },
              { metric: '의사결정 시간', value: '↓ 60%', desc: '연봉 협상 기준 명확화' },
              { metric: '형평성 이슈',   value: '↓ 80%', desc: '보상 불만 민원 감소' },
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

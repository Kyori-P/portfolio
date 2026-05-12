import Link from 'next/link';
import { ArrowLeft } from 'lucide-react';
import HrDashboardDemo from '../_demo/HrDashboardDemo';

export default function HrDashboardPage() {
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
          <p className="text-xs text-gray-400 uppercase tracking-widest">분석 시스템 · GAS · 데이터 시각화 · 경영진 리포트</p>
          <h1 className="text-4xl font-bold text-gray-900 tracking-tight">HR 대시보드</h1>
          <p className="text-lg text-gray-500 max-w-2xl leading-relaxed">
            월별 인건비·인력 현황·입퇴사자·급여 구성을 시각화한 경영진용 대시보드.
            데이터 기반 의사결정을 지원하고 HR 리포트 작업 시간을 대폭 단축합니다.
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
                  '인사 데이터 분산으로 현황 파악에 시간 소요',
                  '월간 리포트 수작업으로 HR 담당자 업무 과부하',
                  '경영진 요청 시 즉시 데이터 제공 어려움',
                  '인건비·인력 트렌드 시각화 부재',
                ].map((t) => (
                  <li key={t} className="flex gap-2"><span className="text-gray-300 mt-0.5 flex-shrink-0">—</span>{t}</li>
                ))}
              </ul>
            </div>
            <div className="space-y-3">
              <h3 className="text-sm font-medium text-gray-700">해결 방향</h3>
              <ul className="space-y-2 text-sm text-gray-500">
                {[
                  '인건비·인원·입퇴사·급여 구성 통합 대시보드 설계',
                  'GAS 기반 자동 데이터 집계 및 시각화',
                  '경영진 전용 뷰로 핵심 지표 즉시 확인',
                  '월간 자동 업데이트로 리포트 작업 제거',
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
              { title: '인건비 현황',     desc: '월별 인건비 추이 및 예산 대비 실적 시각화' },
              { title: '인력 구성',       desc: '조직별·직급별 인원 현황 및 변동 추이' },
              { title: '입퇴사 현황',     desc: '월별 입퇴사자 현황 및 퇴사 사유 분석' },
              { title: '급여 구성 분석',  desc: '기본급·수당·성과급 등 급여 항목별 구성 비율' },
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
          <HrDashboardDemo />
        </div>

        {/* Results */}
        <div className="space-y-6">
          <h2 className="text-xl font-semibold text-gray-900">도입 결과</h2>
          <div className="grid md:grid-cols-3 gap-6">
            {[
              { metric: '리포트 작업',   value: '자동화', desc: '월간 수작업 리포트 제거' },
              { metric: '데이터 접근',   value: '즉시',   desc: '경영진 요청 즉시 대응' },
              { metric: '의사결정 속도', value: '↑',      desc: '데이터 기반 HR 의사결정' },
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

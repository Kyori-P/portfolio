import Link from 'next/link';
import { ArrowLeft } from 'lucide-react';
import ParentalLeaveDemo from '../_demo/ParentalLeaveDemo';

export default function ParentalLeavePage() {
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
          <p className="text-xs text-gray-400 uppercase tracking-widest">정책 자동화 · GAS · 이메일 자동화</p>
          <h1 className="text-4xl font-bold text-gray-900 tracking-tight">배우자 출산휴가 관리 자동화</h1>
          <p className="text-lg text-gray-500 max-w-2xl leading-relaxed">
            출산일 기준 120일 유효기간을 개인별로 트래킹하고, 잔여 휴가 만료 전 자동 안내 메일 발송 및
            관리자 종합 리포트로 사용률 100%를 달성한 정책 자동화 시스템.
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
                  '배우자 출산휴가 유효기간(출산일로부터 120일) 개별 트래킹 불가',
                  '대상자 증가로 수동 관리 한계 — 누락 및 미사용 리스크',
                  '그룹웨어에서 개인별 만료일 관리 기능 미지원',
                  '미사용 시 근로감독 대비 사용률 증빙 어려움',
                ].map((t) => (
                  <li key={t} className="flex gap-2"><span className="text-gray-300 mt-0.5 flex-shrink-0">—</span>{t}</li>
                ))}
              </ul>
            </div>
            <div className="space-y-3">
              <h3 className="text-sm font-medium text-gray-700">해결 방향</h3>
              <ul className="space-y-2 text-sm text-gray-500">
                {[
                  '출산일 입력 시 만료일 자동 계산 및 개인별 트래킹 웹 개발',
                  '잔여 유효기간 60·40·30·20·10일 시점 자동 안내 메일 발송',
                  '관리자 대상 종합 현황 리포트 자동 발송',
                  '사용 완료 처리 및 이력 관리로 근로감독 대비',
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
              { title: '개인별 유효기간 트래킹',  desc: '출산일 기준 120일 만료일 자동 계산 및 잔여일 실시간 표시' },
              { title: '단계별 자동 안내 메일',    desc: '60·40·30·20·10일 전 개인 맞춤 안내 메일 자동 발송' },
              { title: '관리자 종합 리포트',       desc: '전체 대상자 현황·사용률·만료 임박자 리포트 자동 발송' },
              { title: '사용 이력 관리',           desc: '사용 완료 처리 및 이력 보관으로 근로감독 대비 증빙 가능' },
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
          <ParentalLeaveDemo />
        </div>

        {/* Results */}
        <div className="space-y-6">
          <h2 className="text-xl font-semibold text-gray-900">도입 결과</h2>
          <div className="grid md:grid-cols-3 gap-6">
            {[
              { metric: '휴가 사용률',   value: '100%', desc: '전 대상자 기간 내 사용 완료' },
              { metric: '누락 건수',     value: '0건',  desc: '자동 트래킹 도입 이후' },
              { metric: '근로감독 대비', value: '완비', desc: '사용 이력 전수 증빙 가능' },
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

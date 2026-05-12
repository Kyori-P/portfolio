import Link from 'next/link';
import { ArrowLeft } from 'lucide-react';
import PipDemo from '../_demo/PipDemo';

export default function PipPage() {
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
          <p className="text-xs text-gray-400 uppercase tracking-widest">운영 시스템 · GAS · 성과 관리 · 보안 설계</p>
          <h1 className="text-4xl font-bold text-gray-900 tracking-tight">성과 개선 관리 프로그램 (PIP)</h1>
          <p className="text-lg text-gray-500 max-w-2xl leading-relaxed">
            저성과자 성과 관리를 위해 본인·리더·인사팀·경영진 뷰를 별도 구성한 운영 웹.
            워터마크·감사 로그 등 보안 기능으로 민감 정보를 보호합니다.
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
                  '이메일·문서 기반의 불투명한 PIP 운영',
                  '진행 현황 파악 어려움 및 누락 리스크',
                  '민감 정보 유출 방지 체계 부재',
                  '접근 이력 추적 불가로 감사 대응 취약',
                ].map((t) => (
                  <li key={t} className="flex gap-2"><span className="text-gray-300 mt-0.5 flex-shrink-0">—</span>{t}</li>
                ))}
              </ul>
            </div>
            <div className="space-y-3">
              <h3 className="text-sm font-medium text-gray-700">해결 방향</h3>
              <ul className="space-y-2 text-sm text-gray-500">
                {[
                  '본인·리더·인사팀·경영진 별도 뷰 구성',
                  '단계별 진행 현황 실시간 추적',
                  '문서 워터마크로 민감 정보 유출 방지',
                  '감사 로그(Audit Log) 자동 기록',
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
              { title: '역할별 뷰 분리',       desc: '본인·리더·인사팀·경영진 각각 다른 화면 구성으로 정보 접근 제어' },
              { title: '진행 현황 대시보드',   desc: '케이스별 단계·목표 달성률을 한눈에 파악' },
              { title: '워터마크 보안',         desc: '열람자 정보가 자동 삽입된 워터마크로 유출 억제' },
              { title: '감사 로그',             desc: '접근·수정 이력 자동 기록으로 투명한 운영 보장' },
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
          <PipDemo />
        </div>

        {/* Results */}
        <div className="space-y-6">
          <h2 className="text-xl font-semibold text-gray-900">도입 결과</h2>
          <div className="grid md:grid-cols-3 gap-6">
            {[
              { metric: '운영 투명성',    value: '↑',   desc: '전 과정 이력 추적 가능' },
              { metric: '정보 유출 사고', value: '0건', desc: '워터마크 도입 이후' },
              { metric: '감사 대응',      value: '즉시', desc: '로그 기반 즉각 대응 가능' },
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

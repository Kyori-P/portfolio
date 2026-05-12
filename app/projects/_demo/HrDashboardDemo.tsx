'use client';

// ✅ HTML 파일 교체 방법:
// public/demos/hr-dashboard.html 파일을 실제 HTML 코드로 교체하면 바로 반영됩니다.

export default function HrDashboardDemo() {
  return (
    <iframe
      src="/demos/hr-dashboard.html"
      className="w-full rounded-xl border border-gray-200"
      style={{ height: '700px' }}
      title="HR 대시보드 데모"
    />
  );
}

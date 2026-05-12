'use client';

// ✅ HTML 파일 교체 방법:
// public/demos/payband.html 파일을 실제 HTML 코드로 교체하면 바로 반영됩니다.

export default function PaybandDemo() {
  return (
    <iframe
      src="/demos/payband.html"
      className="w-full rounded-xl border border-gray-200"
      style={{ height: '700px' }}
      title="페이밴드 시뮬레이터 데모"
    />
  );
}

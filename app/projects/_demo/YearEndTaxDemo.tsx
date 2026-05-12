'use client';

// ✅ HTML 파일 교체 방법:
// public/demos/year-end-tax.html 파일을 실제 HTML 코드로 교체하면 바로 반영됩니다.

export default function YearEndTaxDemo() {
  return (
    <iframe
      src="/demos/year-end-tax.html"
      className="w-full rounded-xl border border-gray-200"
      style={{ height: '700px' }}
      title="연말정산 헬프데스크 데모"
    />
  );
}

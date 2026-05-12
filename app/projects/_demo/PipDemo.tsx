'use client';

// ✅ HTML 파일 교체 방법:
// public/demos/pip.html 파일을 실제 HTML 코드로 교체하면 바로 반영됩니다.

export default function PipDemo() {
  return (
    <iframe
      src="/demos/pip.html"
      className="w-full rounded-xl border border-gray-200"
      style={{ height: '700px' }}
      title="PIP 성과 개선 프로그램 데모"
    />
  );
}

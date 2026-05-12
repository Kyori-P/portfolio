'use client';

// ✅ HTML 파일 교체 방법:
// public/demos/parental-leave.html 파일을 실제 HTML 코드로 교체하면 바로 반영됩니다.

export default function ParentalLeaveDemo() {
  return (
    <iframe
      src="/demos/parental-leave.html"
      className="w-full rounded-xl border border-gray-200"
      style={{ height: '700px' }}
      title="배우자 출산휴가 관리 데모"
    />
  );
}

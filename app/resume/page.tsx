const PROFILE = {
  name: '박교리',
  role: 'HR Strategy & HR Tech Specialist',
  email: 'ryfl8829@gmail.com',
};

const SUMMARY =
  'HR 운영 경험을 기반으로 평가·보상·성과관리 체계를 설계하고 데이터 기반 HR 의사결정 구조를 구축해온 HR Strategy & HR Tech Specialist입니다. 2,000명 규모 조직의 C&B 및 평가 운영을 수행하며 Pay Band 설계, Calibration 운영, 성과개선(PIP) 체계 개편, HR 데이터 대시보드 구축 및 AI/GAS 기반 업무 자동화를 직접 기획·개발했습니다. 실무 운영과 전략 기획을 연결하여 조직의 운영 효율성과 제도 완성도를 동시에 개선하는 역할에 강점을 가지고 있습니다.';

const SKILLS = {
  'HR Strategy': [
    'Performance Management',
    'Compensation Strategy',
    'Pay Band Design',
    'Calibration',
    'Leveling Framework',
    'Organizational Design',
  ],

  'HR Tech & Data': [
    'Google Apps Script',
    'Workflow Automation',
    'Dashboard Development',
    'HR Data Visualization',
    'AI-based Reporting',
    'Process Digitization',
  ],

  'Core HR': [
    'Payroll',
    'HR Compliance',
    'Labor Relations',
    'Internal Control',
    'HR Governance',
  ],

  'Business & Communication': [
    'Executive Communication',
    'Cross-functional Coordination',
    'Project Leadership',
    'Business English',
    'TOEIC 910',
  ],
};

const CAREERS = [
  {
    company: '메가존클라우드 주식회사',
    dept: 'HR Unit / C&B',
    title: 'HR Strategy & HR Tech',
    period: '2023.12 – 현재',
    startDate: '2023.12',
    endDate: undefined,
    isCurrent: true,

    overview:
      '2,000명 규모 클라우드 MSP 기업 · 평가/보상 체계 구축 및 HR Transformation 프로젝트 리딩',

    tasks: [
      '전사 C&B 및 평가 운영 전반 수행',
      '정기평가(Self > Manager > Calibration > 임원조정) 운영 리딩',
      '평가 프로세스 정립 및 제도화, 전사 평가·보상 설명회 운영',
      'Leveling 및 직군별 Pay Band 체계 설계',
      'Compa-Ratio 및 Outlier 관리 기준 수립',
      '성과개선프로그램(PIP) 전면 개편 및 운영 체계 설계',
      'AI/GAS 기반 HR 업무 자동화 시스템 기획·개발',
      '인건비·인원·퇴사 데이터 기반 HR Dashboard 구축',
      'CEO 및 경영진 대상 제도·데이터 기반 보고 수행',
    ],

    achievements: [
      '전사 Pay Band 체계 신규 구축 및 보상 기준 체계화',
      '평가·보상 운영 프로세스 표준화 및 Calibration 체계 정립',
      '성과개선(PIP) 제도 재설계 및 운영 시스템 웹화',
      'HR 데이터 기반 의사결정 및 운영 자동화 환경 구축',
    ],

    subCompanies: null,
  },

  {
    company: 'NEW 엔터테인먼트 그룹',
    dept: '',
    title: '',
    period: '2020.04 – 2023.11',
    startDate: '2020.04',
    endDate: '2023.11',
    isCurrent: false,

    overview:
      '빅4 영화투자배급사 그룹 · 8개 계열사 350명 규모 HR 운영',

    tasks: [],

    achievements: [],

    subCompanies: [
      {
        company: '(주)넥스트엔터테인먼트월드',
        dept: '인사팀',
        title: '대리',
        period: '2021.01 – 2023.11',
        startDate: '2021.01',
        endDate: '2023.11',

        note: '본사',

        tasks: [
          '8개 계열사 급여 및 인사 운영',
          '연말정산 및 인건비 데이터 운영',
          '노동위원회 및 노동청 대응',
          '내부회계관리제도 운영 및 감사 대응',
          '채용 프로세스 개선 및 운영',
          '계열사 인수합병 HR 실사 및 승계 대응',
        ],

        achievements: [
          '정기 근로감독 지적사항 없음',
          '내부회계 감사 대응 체계 구축',
        ],
      },

      {
        company: '(주)브라보앤뉴',
        dept: '인사팀',
        title: '사원',
        period: '2020.04 – 2020.12',
        startDate: '2020.04',
        endDate: '2020.12',

        note:
          '자회사 · 계열사 매각으로 본사 이동',

        tasks: [
          '5개 계열사 급여 운영',
          '입퇴사 및 4대보험 관리',
          '근태 및 법정의무교육 운영',
        ],

        achievements: [],
      },
    ],
  },
];

const CAREER_DETAILS = [
  {
    company: '메가존클라우드 주식회사',

    period: '2023.12 – 현재',

    isCurrent: true,

    projects: [
      {
        name: '전사 Pay Band 및 Leveling 체계 구축',

        period: '2024',

        role: '기획 · 설계 · 시스템 개발 리딩',

        background:
          '직무·직급별 보상 기준 부재로 인한 형평성 이슈 및 연봉 협상 비효율 개선 필요',

        tasks: [
          '직무 및 레벨 기반 보상 구조 설계',
          '직군별 Pay Band(Min/Mid/Max) 기준 수립',
          'Compa-Ratio 및 Outlier 관리 기준 정의',
          'Excel 기반 시뮬레이션 구조 설계 후 GAS 기반 시각화·자동화 시스템 개발',
          '경영진 대상 제도 방향성 및 운영 기준 보고',
        ],

        result:
          '전사 보상 체계 표준화 기반 구축 및 차년도 연봉 협상 운영 체계 마련',

        skills: [
          'Compensation Strategy',
          'Pay Band Design',
          'Data Analysis',
          'GAS',
          'Executive Communication',
        ],
      },

      {
        name: '전사 Performance Management 체계 구축',

        period: '2024',

        role: '평가 운영 및 제도화 리딩',

        background:
          '기존 평가 운영 프로세스 및 기준 부재로 인한 운영 비효율 및 평가 신뢰도 개선 필요',

        tasks: [
          '정기평가(Self > Manager > Calibration > 임원조정) 운영 전반 리딩',
          'Calibration Session 및 경영진 리뷰 운영',
          '평가등급 조정 및 운영 기준 수립',
          '전사 평가·보상 설명회 기획 및 운영',
          '승진·보상 연계를 위한 Leveling 체계 구축',
          'CEO 대상 평가 제도 및 운영 방향 보고',
        ],

        result:
          '평가 프로세스 표준화 및 보상 연계 기반 구축',

        skills: [
          'Performance Management',
          'Calibration',
          'Executive Communication',
          'Organizational Design',
        ],
      },

      {
        name: '성과개선프로그램(PIP) 체계 전면 개편 및 시스템 구축',

        period: '2024',

        role:
          '제도 설계 · 프로세스 구축 · 시스템 개발 리딩',

        background:
          '기존 Excel 기반 운영 방식의 추적 불가, 운영 불투명성 및 민감정보 관리 한계 개선 필요',

        tasks: [
          '2년 연속 저성과자 대상 기준 정의 및 후보군 분류 체계 구축',
          '대상자 4개 카테고리 분류 및 사업부별 선정 기준 설계',
          'Option A/B/C 기반 성과개선 운영 정책 설계',
          '액션플랜·월간보고·리더 피드백·HR Review 웹 프로세스 구축',
          '경영진 대상 종합 모니터링 뷰 구현',
          '감사 로그 및 운영 이력 추적 체계 구축',
        ],

        result:
          '성과개선 운영 프로세스 표준화 및 데이터 기반 운영 체계 구축',

        skills: [
          'Performance Management',
          'HR Transformation',
          'Workflow Automation',
          'GAS',
          'Process Design',
        ],
      },

      {
        name: 'HR Data & Workflow Automation 구축',

        period: '2024',

        role: '기획 · 개발 단독 수행',

        background:
          '분산된 HR 데이터와 반복 수작업 기반 리포팅으로 인한 운영 비효율 개선 필요',

        tasks: [
          '인건비·인원·퇴사 데이터 Dashboard 구축',
          'AI 기반 상향평가 요약 및 리포트 자동화',
          '퇴사자 설문 자동화 및 감성 분석 체계 구축',
          'Google Apps Script 기반 HR 업무 자동화 개발',
        ],

        result:
          'HR 운영 리소스 절감 및 실시간 데이터 기반 의사결정 환경 구축',

        skills: [
          'HR Tech',
          'AI Automation',
          'Dashboard',
          'Data Visualization',
          'GAS',
        ],
      },
    ],
  },

  {
    company: 'NEW 엔터테인먼트 그룹',

    period: '2020.04 – 2023.11',

    isCurrent: false,

    overview:
      '빅4 영화투자배급사 그룹 · 8개 계열사 350명 규모 HR 운영',

    projects: [
      {
        name: '채용 프로세스 개선 및 운영',

        period: '2023',

        role: '기획 · 운영',

        background:
          '채용 평가 기준 및 지원자 관리 체계 개선 필요',

        tasks: [
          '채용 플랫폼 도입 및 운영',
          '직무별 평가 기준 설계',
          '면접 프로세스 표준화',
        ],

        result:
          '채용 운영 프로세스 효율화 및 평가 기준 체계화',

        skills: [
          'Recruiting',
          'Process Design',
        ],
      },

      {
        name: '계열사 인수합병 및 HR 실사',

        period: '2021, 2023',

        role: 'HR 담당',

        background:
          '계열사 인수·매각에 따른 HR 승계 및 운영 체계 검토 필요',

        tasks: [
          'HR 실사 및 인수계약 검토',
          '근로계약 및 급여 검토',
          '퇴직금 및 연차 정산 검토',
        ],

        result:
          '인수합병 및 매각 HR 인수인계 안정적 완료',

        skills: [
          'HR Compliance',
          'Labor Relations',
        ],
      },

      {
        name: '내부회계관리제도 구축 및 감사 대응',

        period: '2022',

        role: 'HR 담당',

        background:
          '내부회계관리제도 도입에 따른 HR 내부통제 체계 구축 필요',

        tasks: [
          '내부통제 프로세스 정비',
          '감사 대응 자료 구축',
          '분기별 감사 대응 운영',
        ],

        result:
          '분기별 감사 대응 체계 구축',

        skills: [
          'Internal Control',
          'Audit',
        ],
      },
    ],
  },
];
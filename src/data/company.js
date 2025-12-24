/**
 * Company Data Structure
 * Firebase Firestore 연동 시 구조 유지
 * Collection: company
 */

export const companyData = {
  name: '메이슨코리아',
  nameEn: 'Mason Korea',
  slogan: '산업용 마킹 솔루션의 기준, LINX',
  subSlogan: '대한민국 공식 총판 Mason Korea',
  
  // 왜 메이슨코리아인가요 섹션
  whyMason: {
    title: '왜 메이슨코리아인가요?',
    points: [
      {
        id: 'official',
        title: '대한민국 유일의 공식 총판',
        description: 'LINX 본사 공인 파트너로 정품만 취급합니다.',
        icon: 'badge',
      },
      {
        id: 'direct',
        title: '중간 유통 없이 직접 납품',
        description: '중간 마진 없는 합리적 가격으로 공급합니다.',
        icon: 'truck',
      },
      {
        id: 'quality',
        title: '합리적 가격, 정품 품질 보장',
        description: '가격 경쟁력과 품질을 동시에 보장합니다.',
        icon: 'shield',
      },
      {
        id: 'experience',
        title: '산업용 마킹 업계 전문 경력 10년+',
        description: '축적된 노하우로 최적의 솔루션을 제안합니다.',
        icon: 'award',
      },
      {
        id: 'coverage',
        title: '대기업부터 개인 공장까지 전국 설치',
        description: '규모에 관계없이 전국 어디든 방문합니다.',
        icon: 'map',
      },
      {
        id: 'vision',
        title: '비전 검사 프로그램 자체 개발',
        description: '마킹 후 품질 검증까지 원스톱 솔루션을 제공합니다.',
        icon: 'eye',
      },
      {
        id: 'service',
        title: '전국 출동 기술 엔지니어 / 빠른 A/S',
        description: '장비 문제 발생 시 신속하게 대응합니다.',
        icon: 'tool',
      },
    ],
    images: [
      {
        url: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600&h=400&fit=crop',
        alt: '비전 검사 설치 현장',
      },
      {
        url: 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=600&h=400&fit=crop',
        alt: '마킹기 실제 설치 사진',
      },
    ],
  },
  
  // 연락처 정보
  contact: {
    phone: '031-123-4567',
    mobile: '010-1234-5678',
    fax: '031-123-4568',
    email: 'info@masonkorea.co.kr',
    kakao: 'masonkorea',
    address: {
      full: '경기도 용인시 기흥구 동백중앙로 123, 메이슨빌딩 3층',
      zipCode: '17015',
    },
  },
  
  // 사업자 정보
  business: {
    registrationNumber: '123-45-67890',
    ceo: '홍길동',
    reportNumber: '제2024-경기용인-1234호',
  },
  
  // 운영 시간
  hours: {
    weekday: '09:00 - 18:00',
    weekend: '휴무',
    holiday: '휴무',
  },
};

export default companyData;


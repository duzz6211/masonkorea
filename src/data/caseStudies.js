/**
 * Case Studies Data Structure
 * Firebase Firestore 연동 시 구조 유지
 * Collection: caseStudies
 */

export const caseStudiesData = [
  {
    id: 'case-001',
    title: '대형 식품 제조사 삼면필름 라인 구축',
    industry: '식품',
    industryId: 'food',
    product: 'TIJ 잉크젯 마킹기',
    productId: 'tij',
    tags: ['#식품', '#TIJ', '#삼면필름', '#고속라인'],
    summary: '국내 대형 식품 제조사의 삼면필름 포장 라인에 TIJ 마킹 시스템을 도입하여 분당 200개 이상의 고속 인쇄 환경을 구축했습니다.',
    images: [
      'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=400&h=300&fit=crop',
      'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=400&h=300&fit=crop',
    ],
    href: '/cases/case-001',
    featured: true,
    createdAt: '2024-11-15',
  },
  {
    id: 'case-002',
    title: '음료 제조 라인 CIJ 마킹 시스템',
    industry: '음료',
    industryId: 'beverage',
    product: 'CIJ 잉크젯 마킹기',
    productId: 'cij',
    tags: ['#음료', '#CIJ', '#PET병', '#유통기한'],
    summary: '국내 음료 제조사의 PET병 생산 라인에 CIJ 마킹기를 설치하여 초당 10병 이상의 고속 유통기한 인쇄 시스템을 완성했습니다.',
    images: [
      'https://images.unsplash.com/photo-1565043589221-1a6fd9ae45c7?w=400&h=300&fit=crop',
      'https://images.unsplash.com/photo-1518770660439-4636190af475?w=400&h=300&fit=crop',
    ],
    href: '/cases/case-002',
    featured: true,
    createdAt: '2024-10-28',
  },
  {
    id: 'case-003',
    title: '제약사 레이저 마킹 + 비전검사 통합',
    industry: '제약/의약',
    industryId: 'pharma',
    product: '레이저 마킹기',
    productId: 'laser',
    tags: ['#제약', '#레이저', '#비전검사', '#QR코드'],
    summary: '의약품 제조사의 블리스터 포장 라인에 레이저 마킹기와 자체 개발 비전검사 시스템을 통합 구축하여 100% 품질 검증 라인을 완성했습니다.',
    images: [
      'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=400&h=300&fit=crop',
      'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=400&h=300&fit=crop',
    ],
    href: '/cases/case-003',
    featured: true,
    createdAt: '2024-09-10',
  },
];

export default caseStudiesData;


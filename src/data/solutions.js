/**
 * Solutions Data Structure
 * Firebase Firestore 연동 시 구조 유지
 * Collection: solutions
 */

export const solutionsData = {
  marking: {
    title: '마킹 장비',
    items: [
      {
        id: 'sol-cij',
        name: 'CIJ 잉크젯',
        usp: '고속 생산 라인에 최적화된 연속식 잉크젯',
        href: '/products/inkjet/cij',
        icon: 'inkjet',
        imageUrl: 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=300&h=200&fit=crop',
      },
      {
        id: 'sol-tij',
        name: 'TIJ 카트리지',
        usp: '간편한 카트리지 교체, 저유지비용',
        href: '/products/inkjet/tij',
        icon: 'cartridge',
        imageUrl: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=300&h=200&fit=crop',
      },
      {
        id: 'sol-tto',
        name: 'TTO 열전사',
        usp: '필름 포장재 고해상도 인쇄 전문',
        href: '/products/tto',
        icon: 'thermal',
        imageUrl: 'https://images.unsplash.com/photo-1565043589221-1a6fd9ae45c7?w=300&h=200&fit=crop',
      },
      {
        id: 'sol-laser',
        name: '레이저 마킹기',
        usp: '무소모품, 영구적 마킹 솔루션',
        href: '/products/laser',
        icon: 'laser',
        imageUrl: 'https://images.unsplash.com/photo-1518770660439-4636190af475?w=300&h=200&fit=crop',
      },
    ],
  },
  process: {
    title: '공정 솔루션',
    items: [
      {
        id: 'sol-vision',
        name: '비전 검사기',
        usp: '자체 개발 프로그램으로 실시간 품질 검사',
        href: '/solutions/vision',
        icon: 'vision',
        imageUrl: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=300&h=200&fit=crop',
      },
      {
        id: 'sol-feeder',
        name: '피더기',
        usp: '안정적인 제품 공급 및 정렬',
        href: '/solutions/feeder',
        icon: 'feeder',
        imageUrl: 'https://images.unsplash.com/photo-1565043589221-1a6fd9ae45c7?w=300&h=200&fit=crop',
      },
      {
        id: 'sol-conveyor',
        name: '컨베이어',
        usp: '생산 라인 맞춤형 이송 시스템',
        href: '/solutions/conveyor',
        icon: 'conveyor',
        imageUrl: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=300&h=200&fit=crop',
      },
      {
        id: 'sol-sealer',
        name: '밴드 실링기',
        usp: '포장 라인 자동화 밀봉 장비',
        href: '/solutions/sealer',
        icon: 'sealer',
        imageUrl: 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=300&h=200&fit=crop',
      },
    ],
  },
};

export default solutionsData;


/**
 * Hero Products Data Structure (LINX 4)
 * Firebase Firestore 연동 시 구조 유지
 * Collection: products
 */

export const heroProducts = [
  {
    id: 'cij',
    name: '소형 연속 잉크젯 마킹기',
    nameEn: 'CIJ',
    description: 'Continuous Inkjet Printer',
    specs: [
      { label: '최대 인쇄 속도', value: '293 m/min' },
      { label: '인쇄 높이', value: '1~12.1mm' },
      { label: '적용 재질', value: '플라스틱, 금속, 유리, 필름' },
    ],
    ctaText: 'CIJ 자세히 보기',
    ctaLink: '/products/inkjet/cij',
    imageUrl: 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=400&h=300&fit=crop',
    order: 1,
  },
  {
    id: 'lcm',
    name: '대문자 마킹기',
    nameEn: 'LCM',
    description: 'Large Character Printer',
    specs: [
      { label: '인쇄 높이', value: '10~70mm' },
      { label: '잉크 타입', value: '고점도 잉크 사용' },
      { label: '적용 분야', value: '박스, 파레트, 판지류' },
    ],
    ctaText: '대문자 마킹기 자세히 보기',
    ctaLink: '/products/lcm',
    imageUrl: 'https://images.unsplash.com/photo-1565043589221-1a6fd9ae45c7?w=400&h=300&fit=crop',
    order: 2,
  },
  {
    id: 'laser',
    name: '레이저 마킹기',
    nameEn: 'Laser',
    description: 'Fiber / CO₂ Laser Marker',
    specs: [
      { label: '파장', value: 'Fiber 1064nm / CO₂ 10.6μm' },
      { label: '특징', value: '무소모품, 영구 마킹' },
      { label: '적용', value: '금속, 플라스틱, 종이, PET' },
    ],
    ctaText: '레이저 마킹기 자세히 보기',
    ctaLink: '/products/laser',
    imageUrl: 'https://images.unsplash.com/photo-1518770660439-4636190af475?w=400&h=300&fit=crop',
    order: 3,
  },
  {
    id: 'tto',
    name: '열전사 마킹기',
    nameEn: 'TTO',
    description: 'Thermal Transfer Overprinter',
    specs: [
      { label: '해상도', value: '300dpi' },
      { label: '특징', value: '필름 포장재 고해상도 인쇄' },
      { label: '기능', value: '간헐식 / 연속식 리본 절감' },
    ],
    ctaText: 'TTO 자세히 보기',
    ctaLink: '/products/tto',
    imageUrl: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=400&h=300&fit=crop',
    order: 4,
  },
];

export default heroProducts;


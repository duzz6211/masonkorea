/**
 * Navigation Data Structure
 * Firebase Firestore 연동 시 구조 유지
 * Collection: navigation
 */

export const navigationData = {
  logo: {
    text: 'Mason Korea',
    href: '/',
    // imageUrl: '/images/logo.svg' // Firebase Storage URL로 대체 가능
  },
  menuItems: [
    {
      id: 'company',
      label: '회사 소개',
      href: '/company',
      children: [
        { id: 'about', label: '메이슨코리아 소개', href: '/company/about' },
        { id: 'location', label: '오시는 길', href: '/company/location' },
      ],
    },
    {
      id: 'products',
      label: '제품 소개',
      href: '/products',
      children: [
        {
          id: 'inkjet',
          label: '잉크젯 마킹기',
          href: '/products/inkjet',
          children: [
            { id: 'cij', label: 'CIJ', href: '/products/inkjet/cij' },
            { id: 'tij', label: 'TIJ', href: '/products/inkjet/tij' },
          ],
        },
        { id: 'tto', label: '열전사 마킹기 (TTO)', href: '/products/tto' },
        { id: 'laser', label: '레이저 마킹기', href: '/products/laser' },
        { id: 'lcm', label: '대문자 마킹기', href: '/products/lcm' },
      ],
    },
    {
      id: 'cases',
      label: '설치 사례',
      href: '/cases',
      children: [
        { id: 'by-industry', label: '산업별 사례', href: '/cases/industry' },
        { id: 'by-product', label: '장비별 사례', href: '/cases/product' },
      ],
    },
    {
      id: 'resources',
      label: '자료실',
      href: '/resources',
      children: [
        { id: 'catalog', label: '제품 카탈로그', href: '/resources/catalog' },
        { id: 'manual', label: '매뉴얼 / SDS', href: '/resources/manual' },
      ],
    },
  ],
  ctaButton: {
    label: '견적 문의',
    href: '/inquiry',
  },
};

export default navigationData;


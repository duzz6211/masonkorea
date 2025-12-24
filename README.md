# Mason Korea - LINX 대한민국 공식 총판

B2B 산업용 마킹 장비 기업 메이슨코리아의 공식 웹사이트입니다.

## 🚀 시작하기

### 설치

```bash
npm install
```

### 개발 서버 실행

```bash
npm run dev
```

### 프로덕션 빌드

```bash
npm run build
```

## 🌐 GitHub Pages 배포 (레포: `masonkorea`)

이 프로젝트는 GitHub Pages에서 아래 경로로 서비스되는 것을 전제로 설정되어 있습니다:

- `https://<github-username>.github.io/masonkorea/`

### 배포 스크립트

```bash
# dist 생성
npm run build

# gh-pages 브랜치로 dist 배포
npm run deploy
```

### 배포 전제 조건 (중요)

- **`dist/` 폴더는 GitHub에 커밋하지 않습니다.** (`.gitignore`에 의해 제외)
- **`dist/`는 `gh-pages` 브랜치에서만 관리됩니다.**
- **`main` 브랜치는 소스 코드 전용입니다.**

### 라우팅/새로고침 이슈 방지

GitHub Pages는 SPA 라우팅 새로고침 시 서버가 해당 경로를 알 수 없어 404가 날 수 있습니다.  
이를 방지하기 위해 현재 프로젝트는 **`HashRouter`** 기반으로 구성되어 **새로고침 시에도 흰 화면 없이 정상 렌더링**되도록 했습니다.

## 📁 프로젝트 구조

```
src/
├── components/
│   ├── common/              # 공통 컴포넌트
│   │   ├── Navbar.jsx       # 상단 네비게이션 바
│   │   ├── Footer.jsx       # 푸터
│   │   └── FloatingButton.jsx # 플로팅 버튼 (카카오톡/전화)
│   │
│   └── sections/            # 페이지 섹션 컴포넌트
│       ├── Hero.jsx         # LINX 4 제품 히어로 섹션
│       ├── WhyMason.jsx     # 왜 메이슨코리아인가요 섹션
│       ├── Solutions.jsx    # 주요 솔루션 바로가기 (8종)
│       ├── Industries.jsx   # 적용 산업 바로가기 (7종)
│       ├── CaseStudies.jsx  # 설치 사례 하이라이트
│       ├── Resources.jsx    # 자료실 바로가기
│       └── CustomerSupport.jsx # 하단 고객지원 바
│
├── data/                    # 데이터 구조 (Firebase 연동 대비)
│   ├── navigation.js        # 네비게이션 메뉴 데이터
│   ├── products.js          # Hero 제품 데이터 (LINX 4)
│   ├── solutions.js         # 솔루션 데이터 (8종)
│   ├── industries.js        # 산업군 데이터 (7종)
│   ├── caseStudies.js       # 설치 사례 데이터
│   └── company.js           # 회사 정보 데이터
│
├── styles/
│   └── index.css            # 글로벌 스타일 및 CSS 변수
│
├── App.jsx                  # 메인 앱 컴포넌트
└── main.jsx                 # 엔트리 포인트
```

## 🎨 디자인 시스템

### 컬러 팔레트

- **Primary**: #1a365d (딥 네이비) - 신뢰감, 전문성
- **Secondary**: #4a5568 (슬레이트) - 보조 색상
- **Accent**: #c05621 (산업용 오렌지) - CTA 강조

### 타이포그래피

- **한글**: Noto Sans KR
- **영문/숫자**: Poppins

## 🔧 Firebase 연동 가이드

### 데이터 구조

모든 데이터 파일은 Firebase Firestore 스키마와 호환되도록 설계되었습니다:

```javascript
// 예시: products 컬렉션
{
  id: 'cij',
  name: '소형 연속 잉크젯 마킹기',
  nameEn: 'CIJ',
  specs: [...],
  imageUrl: 'gs://bucket/images/cij.jpg', // Firebase Storage URL
  order: 1,
  createdAt: Timestamp,
  updatedAt: Timestamp
}
```

### 연동 순서

1. Firebase 프로젝트 생성
2. `src/config/firebase.js` 생성
3. 각 데이터 파일을 Firebase hooks로 교체
4. Firebase Storage에 이미지 업로드

## 📱 반응형 브레이크포인트

- **Desktop**: 1025px 이상
- **Tablet**: 768px ~ 1024px
- **Mobile**: 768px 이하

## 🚧 향후 확장 계획

### 추가 페이지

- [ ] 회사 소개 페이지
- [ ] 제품 상세 페이지
- [ ] 설치 사례 목록/상세 페이지
- [ ] 자료실 페이지
- [ ] 견적 문의 페이지

### 관리자 페이지

- [ ] 제품 관리 (CRUD)
- [ ] 설치 사례 관리
- [ ] 자료실 관리
- [ ] 문의 관리

## 📝 라이선스

© 2024 Mason Korea. All Rights Reserved.


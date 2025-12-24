import { Link } from 'react-router-dom';
import './Resources.css';

const resourcesData = [
  {
    id: 'catalog',
    title: '제품 카탈로그',
    description: 'LINX 전 제품군의 상세 스펙과 특장점을 확인하세요.',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/>
        <polyline points="14 2 14 8 20 8"/>
        <line x1="16" y1="13" x2="8" y2="13"/>
        <line x1="16" y1="17" x2="8" y2="17"/>
        <polyline points="10 9 9 9 8 9"/>
      </svg>
    ),
    href: '/resources/catalog',
    cta: '카탈로그 보기',
  },
  {
    id: 'manual',
    title: '매뉴얼 / SDS',
    description: '제품 사용 매뉴얼과 안전보건자료(SDS)를 다운로드하세요.',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20"/>
        <path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z"/>
        <line x1="12" y1="6" x2="16" y2="6"/>
        <line x1="12" y1="10" x2="16" y2="10"/>
        <line x1="8" y1="6" x2="8" y2="6"/>
        <line x1="8" y1="10" x2="8" y2="10"/>
      </svg>
    ),
    href: '/resources/manual',
    cta: '자료 다운로드',
  },
];

function Resources() {
  return (
    <section className="resources section section--gray">
      <div className="container">
        {/* Section Header */}
        <header className="section__header">
          <h2 className="section__title">자료실 바로가기</h2>
          <p className="section__subtitle">
            제품 카탈로그와 기술 문서를 다운로드하세요.
          </p>
        </header>

        {/* Resources Cards */}
        <div className="resources__grid">
          {resourcesData.map((resource) => (
            <Link
              key={resource.id}
              to={resource.href}
              className="resources__card"
            >
              <div className="resources__icon">
                {resource.icon}
              </div>
              <div className="resources__content">
                <h3 className="resources__title">{resource.title}</h3>
                <p className="resources__description">{resource.description}</p>
              </div>
              <span className="resources__cta">
                {resource.cta}
                <svg viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd" />
                </svg>
              </span>
            </Link>
          ))}
        </div>

        {/* Footer CTA */}
        <div className="resources__footer">
          <Link to="/resources" className="btn btn--outline">
            자료실 이동
            <svg viewBox="0 0 20 20" fill="currentColor">
              <path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd" />
            </svg>
          </Link>
        </div>
      </div>
    </section>
  );
}

export default Resources;


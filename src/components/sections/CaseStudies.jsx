import { Link } from 'react-router-dom';
import { caseStudiesData } from '../../data/caseStudies';
import './CaseStudies.css';

function CaseStudies() {
  // Get featured case studies (max 3)
  const featuredCases = caseStudiesData
    .filter((caseStudy) => caseStudy.featured)
    .slice(0, 3);

  return (
    <section className="case-studies section">
      <div className="container">
        {/* Section Header */}
        <header className="section__header">
          <h2 className="section__title">설치 사례 하이라이트</h2>
          <p className="section__subtitle">
            메이슨코리아가 구축한 실제 마킹 시스템 설치 사례를 확인하세요.
          </p>
        </header>

        {/* Case Studies Grid */}
        <div className="case-studies__grid">
          {featuredCases.map((caseStudy) => (
            <article key={caseStudy.id} className="case-studies__card">
              {/* Image Carousel */}
              <div className="case-studies__images">
                <img
                  src={caseStudy.images[0]}
                  alt={caseStudy.title}
                  loading="lazy"
                  className="case-studies__image"
                />
                {caseStudy.images.length > 1 && (
                  <div className="case-studies__image-count">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <rect x="3" y="3" width="18" height="18" rx="2"/>
                      <circle cx="8.5" cy="8.5" r="1.5"/>
                      <path d="M21 15l-5-5L5 21"/>
                    </svg>
                    <span>+{caseStudy.images.length - 1}</span>
                  </div>
                )}
              </div>

              {/* Content */}
              <div className="case-studies__content">
                {/* Tags */}
                <div className="case-studies__tags">
                  {caseStudy.tags.slice(0, 4).map((tag, index) => (
                    <span key={index} className="case-studies__tag">
                      {tag}
                    </span>
                  ))}
                </div>

                {/* Meta */}
                <div className="case-studies__meta">
                  <span className="case-studies__industry">{caseStudy.industry}</span>
                  <span className="case-studies__separator">·</span>
                  <span className="case-studies__product">{caseStudy.product}</span>
                </div>

                {/* Title */}
                <h3 className="case-studies__title">{caseStudy.title}</h3>

                {/* Summary */}
                <p className="case-studies__summary">{caseStudy.summary}</p>

                {/* CTA */}
                <Link to={caseStudy.href} className="case-studies__cta">
                  설치 사례 보기
                  <svg viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd" />
                  </svg>
                </Link>
              </div>
            </article>
          ))}
        </div>

        {/* View All CTA */}
        <div className="case-studies__footer">
          <Link to="/cases" className="btn btn--outline">
            전체 설치 사례 보기
            <svg viewBox="0 0 20 20" fill="currentColor">
              <path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd" />
            </svg>
          </Link>
        </div>
      </div>
    </section>
  );
}

export default CaseStudies;


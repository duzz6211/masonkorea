import { Link } from 'react-router-dom';
import { companyData } from '../../data/company';
import './WhyMason.css';

// Icon Components
const icons = {
  badge: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
      <path d="M12 15l-2 5l9-7h-6l2-5l-9 7h6z"/>
    </svg>
  ),
  truck: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
      <rect x="1" y="3" width="15" height="13"/>
      <polygon points="16 8 20 8 23 11 23 16 16 16 16 8"/>
      <circle cx="5.5" cy="18.5" r="2.5"/>
      <circle cx="18.5" cy="18.5" r="2.5"/>
    </svg>
  ),
  shield: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
      <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/>
    </svg>
  ),
  award: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
      <circle cx="12" cy="8" r="7"/>
      <polyline points="8.21 13.89 7 23 12 20 17 23 15.79 13.88"/>
    </svg>
  ),
  map: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
      <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/>
      <circle cx="12" cy="10" r="3"/>
    </svg>
  ),
  eye: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
      <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"/>
      <circle cx="12" cy="12" r="3"/>
    </svg>
  ),
  tool: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
      <path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z"/>
    </svg>
  ),
};

function WhyMason() {
  const { whyMason } = companyData;

  return (
    <section className="why-mason section section--gray">
      <div className="container">
        {/* Section Header */}
        <header className="section__header">
          <h2 className="section__title">{whyMason.title}</h2>
          <p className="section__subtitle">
            LINX 공식 총판 메이슨코리아만의 차별화된 서비스를 경험하세요.
          </p>
        </header>

        <div className="why-mason__content">
          {/* Features Grid */}
          <div className="why-mason__features">
            {whyMason.points.map((point) => (
              <article key={point.id} className="why-mason__item">
                <div className="why-mason__icon">
                  {icons[point.icon]}
                </div>
                <div className="why-mason__text">
                  <h3 className="why-mason__item-title">{point.title}</h3>
                  <p className="why-mason__item-desc">{point.description}</p>
                </div>
              </article>
            ))}
          </div>

          {/* Images */}
          <div className="why-mason__images">
            {whyMason.images.map((image, index) => (
              <div key={index} className="why-mason__image-wrapper">
                <img
                  src={image.url}
                  alt={image.alt}
                  loading="lazy"
                  className="why-mason__image"
                />
                <div className="why-mason__image-overlay">
                  <span>{image.alt}</span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* CTA */}
        <div className="why-mason__cta">
          <Link to="/company/about" className="btn btn--primary btn--lg">
            회사 소개 보기
            <svg viewBox="0 0 20 20" fill="currentColor">
              <path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd" />
            </svg>
          </Link>
        </div>
      </div>
    </section>
  );
}

export default WhyMason;


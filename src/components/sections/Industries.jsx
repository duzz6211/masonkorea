import { Link } from 'react-router-dom';
import { industriesData } from '../../data/industries';
import './Industries.css';

// Industry Icons
const industryIcons = {
  food: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
      <path d="M18 8h1a4 4 0 0 1 0 8h-1"/>
      <path d="M2 8h16v9a4 4 0 0 1-4 4H6a4 4 0 0 1-4-4V8z"/>
      <line x1="6" y1="1" x2="6" y2="4"/>
      <line x1="10" y1="1" x2="10" y2="4"/>
      <line x1="14" y1="1" x2="14" y2="4"/>
    </svg>
  ),
  beverage: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
      <path d="M17 11h1a3 3 0 0 1 0 6h-1"/>
      <path d="M9 12v6"/>
      <path d="M13 12v6"/>
      <path d="M14 7.5c-1 0-1.44.5-3 .5s-2-.5-3-.5-1.72.5-2.5.5a2.5 2.5 0 0 1 0-5c.78 0 1.57.5 2.5.5S9.44 3 11 3s2 .5 3 .5 1.72-.5 2.5-.5a2.5 2.5 0 0 1 0 5c-.78 0-1.5-.5-2.5-.5z"/>
      <path d="M5 8v12a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2V8"/>
    </svg>
  ),
  pharma: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
      <path d="M10.5 20.5L3.5 13.5a4.95 4.95 0 0 1 7-7l10 10a4.95 4.95 0 0 1-7 7l-3-3"/>
      <path d="M8.5 8.5l7 7"/>
    </svg>
  ),
  cable: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
      <path d="M4 9a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2a2 2 0 0 1-2 2H4z"/>
      <path d="M14 9a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2a2 2 0 0 1-2 2h-4z"/>
      <path d="M5 9v6a2 2 0 0 0 2 2h3"/>
      <path d="M15 9v6a2 2 0 0 1-2 2h-3"/>
      <rect x="8" y="15" width="4" height="6"/>
    </svg>
  ),
  electronics: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
      <rect x="4" y="4" width="16" height="16" rx="2"/>
      <rect x="9" y="9" width="6" height="6"/>
      <path d="M15 2v2"/>
      <path d="M15 20v2"/>
      <path d="M2 15h2"/>
      <path d="M20 15h2"/>
      <path d="M9 2v2"/>
      <path d="M9 20v2"/>
      <path d="M2 9h2"/>
      <path d="M20 9h2"/>
    </svg>
  ),
  consumer: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
      <path d="M6 2L3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4z"/>
      <line x1="3" y1="6" x2="21" y2="6"/>
      <path d="M16 10a4 4 0 0 1-8 0"/>
    </svg>
  ),
  industrial: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
      <path d="M2 20a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V8l-7 5V8l-7 5V4a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2v16z"/>
    </svg>
  ),
};

function Industries() {
  return (
    <section className="industries section section--gray">
      <div className="container">
        {/* Section Header */}
        <header className="section__header">
          <h2 className="section__title">적용 산업 바로가기</h2>
          <p className="section__subtitle">
            산업군별 솔루션과 실제 설치 결과를 확인하세요.
          </p>
        </header>

        {/* Industries Grid */}
        <div className="industries__grid">
          {industriesData.map((industry) => (
            <Link
              key={industry.id}
              to={industry.href}
              className="industries__item"
            >
              <div className="industries__icon">
                {industryIcons[industry.icon]}
              </div>
              <span className="industries__name">{industry.name}</span>
              <span className="industries__name-en">{industry.nameEn}</span>
            </Link>
          ))}
        </div>

        {/* CTA */}
        <div className="industries__cta">
          <Link to="/cases" className="btn btn--primary">
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

export default Industries;


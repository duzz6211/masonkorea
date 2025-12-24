import { Link } from 'react-router-dom';
import { solutionsData } from '../../data/solutions';
import './Solutions.css';

function Solutions() {
  const allSolutions = [
    ...solutionsData.marking.items,
    ...solutionsData.process.items,
  ];

  return (
    <section className="solutions section">
      <div className="container">
        {/* Section Header */}
        <header className="section__header">
          <h2 className="section__title">주요 솔루션 바로가기</h2>
          <p className="section__subtitle">
            다양한 산업 환경에 최적화된 마킹 장비와 공정 솔루션을 제공합니다.
          </p>
        </header>

        {/* Solution Categories */}
        <div className="solutions__categories">
          {/* Marking Equipment */}
          <div className="solutions__category">
            <h3 className="solutions__category-title">
              <span className="solutions__category-icon">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <rect x="2" y="3" width="20" height="14" rx="2" ry="2"/>
                  <line x1="8" y1="21" x2="16" y2="21"/>
                  <line x1="12" y1="17" x2="12" y2="21"/>
                </svg>
              </span>
              {solutionsData.marking.title}
            </h3>
            <div className="solutions__grid">
              {solutionsData.marking.items.map((solution) => (
                <Link
                  key={solution.id}
                  to={solution.href}
                  className="solutions__card"
                >
                  <div className="solutions__card-image">
                    <img src={solution.imageUrl} alt={solution.name} loading="lazy" />
                  </div>
                  <div className="solutions__card-content">
                    <h4 className="solutions__card-title">{solution.name}</h4>
                    <p className="solutions__card-usp">{solution.usp}</p>
                    <span className="solutions__card-cta">
                      자세히 보기
                      <svg viewBox="0 0 20 20" fill="currentColor">
                        <path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd" />
                      </svg>
                    </span>
                  </div>
                </Link>
              ))}
            </div>
          </div>

          {/* Process Solutions */}
          <div className="solutions__category">
            <h3 className="solutions__category-title">
              <span className="solutions__category-icon">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <circle cx="12" cy="12" r="3"/>
                  <path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1 0 2.83 2 2 0 0 1-2.83 0l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-2 2 2 2 0 0 1-2-2v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83 0 2 2 0 0 1 0-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1-2-2 2 2 0 0 1 2-2h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 0-2.83 2 2 0 0 1 2.83 0l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 2-2 2 2 0 0 1 2 2v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 0 2 2 0 0 1 0 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 2 2 2 2 0 0 1-2 2h-.09a1.65 1.65 0 0 0-1.51 1z"/>
                </svg>
              </span>
              {solutionsData.process.title}
            </h3>
            <div className="solutions__grid">
              {solutionsData.process.items.map((solution) => (
                <Link
                  key={solution.id}
                  to={solution.href}
                  className="solutions__card"
                >
                  <div className="solutions__card-image">
                    <img src={solution.imageUrl} alt={solution.name} loading="lazy" />
                  </div>
                  <div className="solutions__card-content">
                    <h4 className="solutions__card-title">{solution.name}</h4>
                    <p className="solutions__card-usp">{solution.usp}</p>
                    <span className="solutions__card-cta">
                      자세히 보기
                      <svg viewBox="0 0 20 20" fill="currentColor">
                        <path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd" />
                      </svg>
                    </span>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Solutions;


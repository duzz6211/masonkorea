import { Link } from 'react-router-dom';
import { heroProducts } from '../../data/products';
import { companyData } from '../../data/company';
import './Hero.css';

function Hero() {
  return (
    <section className="hero">
      {/* Background */}
      <div className="hero__background">
        <div className="hero__gradient"></div>
        <div className="hero__pattern"></div>
      </div>

      <div className="hero__container">
        {/* Header */}
        <div className="hero__header">
          <h1 className="hero__title">
            {companyData.slogan}
          </h1>
          <p className="hero__subtitle">
            {companyData.subSlogan}
          </p>
        </div>

        {/* Product Cards */}
        <div className="hero__products">
          {heroProducts.map((product) => (
            <article key={product.id} className="hero__card">
              <div className="hero__card-image">
                <img src={product.imageUrl} alt={product.name} loading="lazy" />
                <span className="hero__card-badge">{product.nameEn}</span>
              </div>
              <div className="hero__card-content">
                <h3 className="hero__card-title">{product.name}</h3>
                <p className="hero__card-desc">{product.description}</p>
                <ul className="hero__card-specs">
                  {product.specs.map((spec, index) => (
                    <li key={index}>
                      <span className="hero__spec-label">{spec.label}</span>
                      <span className="hero__spec-value">{spec.value}</span>
                    </li>
                  ))}
                </ul>
                <Link to={product.ctaLink} className="hero__card-cta">
                  {product.ctaText}
                  <svg viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd" />
                  </svg>
                </Link>
              </div>
            </article>
          ))}
        </div>

        {/* Official Distributor Banner */}
        <div className="hero__banner">
          <div className="hero__banner-content">
            <div className="hero__banner-icon">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>
            <div className="hero__banner-text">
              <span className="hero__banner-label">LINX Official Distributor</span>
              <span className="hero__banner-title">대한민국 공식 총판 Mason Korea</span>
            </div>
          </div>
          <Link to="/company/about" className="hero__banner-cta">
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

export default Hero;


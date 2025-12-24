import { Link } from 'react-router-dom';
import { companyData } from '../../data/company';
import './CustomerSupport.css';

const supportItems = [
  {
    id: 'inquiry',
    title: '견적 문의',
    description: '맞춤형 견적을 받아보세요',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/>
        <polyline points="14 2 14 8 20 8"/>
        <line x1="12" y1="18" x2="12" y2="12"/>
        <line x1="9" y1="15" x2="15" y2="15"/>
      </svg>
    ),
    href: '/inquiry',
    cta: '견적 요청',
    highlight: true,
  },
  {
    id: 'test',
    title: '출력 테스트',
    description: '무료 샘플 인쇄 테스트',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <polyline points="6 9 6 2 18 2 18 9"/>
        <path d="M6 18H4a2 2 0 0 1-2-2v-5a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v5a2 2 0 0 1-2 2h-2"/>
        <rect x="6" y="14" width="12" height="8"/>
      </svg>
    ),
    href: '/inquiry?type=test',
    cta: '테스트 신청',
  },
  {
    id: 'service',
    title: 'A/S 접수',
    description: '장비 점검 및 수리 접수',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z"/>
      </svg>
    ),
    href: '/inquiry?type=service',
    cta: 'A/S 접수',
  },
  {
    id: 'contact',
    title: '연락처',
    description: companyData.contact.phone,
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/>
      </svg>
    ),
    href: `tel:${companyData.contact.phone}`,
    cta: '전화 연결',
    isExternal: true,
  },
];

function CustomerSupport() {
  return (
    <section className="customer-support section section--dark">
      <div className="container">
        {/* Section Header */}
        <header className="section__header">
          <h2 className="section__title">고객 지원</h2>
          <p className="section__subtitle">
            메이슨코리아가 빠르고 정확한 지원을 약속합니다.
          </p>
        </header>

        {/* Support Items Grid */}
        <div className="customer-support__grid">
          {supportItems.map((item) => (
            <Link
              key={item.id}
              to={item.href}
              className={`customer-support__card ${item.highlight ? 'customer-support__card--highlight' : ''}`}
              {...(item.isExternal && { target: '_blank', rel: 'noopener noreferrer' })}
            >
              <div className="customer-support__icon">
                {item.icon}
              </div>
              <div className="customer-support__content">
                <h3 className="customer-support__title">{item.title}</h3>
                <p className="customer-support__description">{item.description}</p>
              </div>
              <span className="customer-support__cta">
                {item.cta}
                <svg viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd" />
                </svg>
              </span>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}

export default CustomerSupport;


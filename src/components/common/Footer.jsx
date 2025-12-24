import { Link } from 'react-router-dom';
import { companyData } from '../../data/company';
import { navigationData } from '../../data/navigation';
import './Footer.css';

function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="footer__container">
        {/* Top Section */}
        <div className="footer__top">
          {/* Company Info */}
          <div className="footer__company">
            <Link to="/" className="footer__logo">
              <span className="footer__logo-icon">M</span>
              <span className="footer__logo-text">{companyData.nameEn}</span>
            </Link>
            <p className="footer__slogan">{companyData.slogan}</p>
            <p className="footer__sub-slogan">{companyData.subSlogan}</p>
          </div>

          {/* Quick Links */}
          <div className="footer__links">
            <div className="footer__links-group">
              <h4 className="footer__links-title">회사 소개</h4>
              <ul>
                <li><Link to="/company/about">메이슨코리아 소개</Link></li>
                <li><Link to="/company/location">오시는 길</Link></li>
              </ul>
            </div>

            <div className="footer__links-group">
              <h4 className="footer__links-title">제품 소개</h4>
              <ul>
                <li><Link to="/products/inkjet/cij">CIJ 잉크젯</Link></li>
                <li><Link to="/products/inkjet/tij">TIJ 잉크젯</Link></li>
                <li><Link to="/products/tto">열전사 마킹기</Link></li>
                <li><Link to="/products/laser">레이저 마킹기</Link></li>
              </ul>
            </div>

            <div className="footer__links-group">
              <h4 className="footer__links-title">고객 지원</h4>
              <ul>
                <li><Link to="/inquiry">견적 문의</Link></li>
                <li><Link to="/cases">설치 사례</Link></li>
                <li><Link to="/resources">자료실</Link></li>
              </ul>
            </div>
          </div>

          {/* Contact Info */}
          <div className="footer__contact">
            <h4 className="footer__contact-title">연락처</h4>
            <ul className="footer__contact-list">
              <li>
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/>
                </svg>
                <span>{companyData.contact.phone}</span>
              </li>
              <li>
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/>
                  <polyline points="22,6 12,13 2,6"/>
                </svg>
                <span>{companyData.contact.email}</span>
              </li>
              <li>
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/>
                  <circle cx="12" cy="10" r="3"/>
                </svg>
                <span>{companyData.contact.address.full}</span>
              </li>
            </ul>
            <div className="footer__hours">
              <span>영업시간: {companyData.hours.weekday}</span>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="footer__divider"></div>

        {/* Bottom Section */}
        <div className="footer__bottom">
          <div className="footer__business">
            <p>
              <span>상호: {companyData.name}</span>
              <span className="footer__separator">|</span>
              <span>대표: {companyData.business.ceo}</span>
              <span className="footer__separator">|</span>
              <span>사업자등록번호: {companyData.business.registrationNumber}</span>
            </p>
            <p>
              <span>통신판매업신고: {companyData.business.reportNumber}</span>
            </p>
          </div>
          <p className="footer__copyright">
            © {currentYear} {companyData.nameEn}. All Rights Reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;


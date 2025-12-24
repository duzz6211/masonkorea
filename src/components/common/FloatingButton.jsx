import { useState } from 'react';
import { companyData } from '../../data/company';
import './FloatingButton.css';

function FloatingButton() {
  const [isExpanded, setIsExpanded] = useState(false);

  const handleKakaoClick = () => {
    // 카카오톡 채널 URL로 이동 (실제 URL로 변경 필요)
    window.open(`https://pf.kakao.com/${companyData.contact.kakao}`, '_blank');
  };

  const handlePhoneClick = () => {
    window.location.href = `tel:${companyData.contact.phone}`;
  };

  return (
    <div className={`floating ${isExpanded ? 'floating--expanded' : ''}`}>
      {/* Expanded Buttons */}
      <div className="floating__buttons">
        {/* Kakao Button */}
        <button
          className="floating__btn floating__btn--kakao"
          onClick={handleKakaoClick}
          aria-label="카카오톡 문의"
        >
          <svg viewBox="0 0 24 24" fill="currentColor">
            <path d="M12 3c-5.52 0-10 3.58-10 8 0 2.83 1.89 5.31 4.71 6.71-.18.65-.7 2.36-.8 2.73-.13.46.17.45.36.33.15-.1 2.37-1.57 3.33-2.21.8.12 1.6.18 2.4.18 5.52 0 10-3.58 10-8s-4.48-8-10-8z"/>
          </svg>
          <span>카카오톡 문의</span>
        </button>

        {/* Phone Button */}
        <button
          className="floating__btn floating__btn--phone"
          onClick={handlePhoneClick}
          aria-label="전화 문의"
        >
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/>
          </svg>
          <span>전화 문의</span>
        </button>
      </div>

      {/* Toggle Button */}
      <button
        className="floating__toggle"
        onClick={() => setIsExpanded(!isExpanded)}
        aria-label={isExpanded ? '문의 버튼 접기' : '문의 버튼 펼치기'}
      >
        {isExpanded ? (
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <line x1="18" y1="6" x2="6" y2="18"/>
            <line x1="6" y1="6" x2="18" y2="18"/>
          </svg>
        ) : (
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/>
          </svg>
        )}
      </button>

      {/* Quick Phone (Always Visible on Mobile) */}
      <a
        href={`tel:${companyData.contact.phone}`}
        className="floating__quick-phone"
        aria-label="전화 문의"
      >
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/>
        </svg>
      </a>
    </div>
  );
}

export default FloatingButton;


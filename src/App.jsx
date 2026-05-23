import React, { useState } from 'react';
import './App.css';

const PEOPLE_ICON = (
  <svg className="top-bar__nav-item-icon" viewBox="0 0 24 16" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
    <path d="M8 7.5a3.5 3.5 0 1 0 0-7 3.5 3.5 0 0 0 0 7Zm8 0a3 3 0 1 0 0-6 3 3 0 0 0 0 6Zm-8 1.5C5.5 9 0 10.3 0 13v2.5h16V13c0-2.7-5.5-4-8-4Zm9 0c-.3 0-.7 0-1 .1.7.9 1 1.9 1 2.9V15h7v-2.5C24 10.3 19.5 9 17 9Z" fill="currentColor"/>
  </svg>
);

function App() {
  const [currentPage, setCurrentPage] = useState(0);
  const [isPreviewMode, setIsPreviewMode] = useState(false);
  const [locale, setLocale] = useState('DE');

  const page1Img = "/cert-page-1.png";
  const page2Img = "/cert-page-2.png";

  const nextPage = () => { if (currentPage < 1) setCurrentPage(currentPage + 1); };
  const prevPage = () => { if (currentPage > 0) setCurrentPage(currentPage - 1); };
  const togglePreview = () => {
    setIsPreviewMode(p => !p);
    if (!isPreviewMode) window.scrollTo(0, 0);
  };

  const renderCertImage = (imgSrc, pageNum) =>
    imgSrc
      ? <img src={imgSrc} alt={`Zertifikat Seite ${pageNum}`} className="cert-image" />
      : <div className="placeholder-cert">Page {pageNum}</div>;

  return (
    <div className="app-container">

      {/* ═══════════════════════════════ Row 1: Top bar ═══════════════════════════════ */}
      <div className="top-bar">
        <div className="top-bar__auth">
          <svg className="top-bar__user-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
            <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"/>
            <circle cx="12" cy="7" r="4"/>
          </svg>
          <div className="top-bar__separator" />
        </div>

        <nav className="top-bar__nav">
          <a href="https://www.telc.net/" target="_blank" rel="noopener noreferrer" className="top-bar__nav-item">telc.net</a>
          <a href="https://campus.telc.net/" target="_blank" rel="noopener noreferrer" className="top-bar__nav-item">Campus</a>
          <a href="https://training.telc.net/" target="_blank" rel="noopener noreferrer" className="top-bar__nav-item">Training</a>
          <a href="#" className="top-bar__nav-item is-active">
            {PEOPLE_ICON}
            <span>Community</span>
          </a>
          <a href="https://shop.telc.net/" target="_blank" rel="noopener noreferrer" className="top-bar__nav-item">Shop</a>
        </nav>
      </div>

      {/* ═══════════════════════════════ Row 2: c-header (logo + locale switch) ═══════════════════════════════ */}
      <header className="c-header">
        <a className="c-header__logo" href="https://results.telc.net/" target="_blank" rel="noopener noreferrer">
          <img src="/telc-logo.svg" alt="Telc Logo" />
        </a>

        <ul className="c-header__localeSwitch">
          <li className={`c-header__localeSwitchItem${locale === 'DE' ? ' is-active' : ''}`}>
            <button type="button" onClick={() => setLocale('DE')} aria-label="Deutsch">DE</button>
          </li>
          <li className={`c-header__localeSwitchItem${locale === 'EN' ? ' is-active' : ''}`}>
            <button type="button" onClick={() => setLocale('EN')} aria-label="English">EN</button>
          </li>
        </ul>
      </header>

      {/* ═══════════════════════════════ Preview Mode ═══════════════════════════════ */}
      {isPreviewMode ? (
        <div className="preview-container">
          <div className="preview-content-wrapper">
            <button className="preview-close-btn" onClick={togglePreview} aria-label="Vorschau schließen">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <line x1="18" y1="6" x2="6" y2="18"/>
                <line x1="6" y1="6" x2="18" y2="18"/>
              </svg>
            </button>
            <div className="preview-document-mock">{renderCertImage(page1Img, 1)}</div>
            <div className="preview-document-mock">{renderCertImage(page2Img, 2)}</div>
          </div>
        </div>
      ) : (
        /* ═══════════════════════════════ Main certificate content ═══════════════════════════════ */
        <main className="main-content">

          <div className="content-header">
            <h1 className="page-title">telc Deutsch B1 Zertifikat</h1>
            <div className="upload-instruction">
              <span>Laden Sie die PDF-Datei zur Validierung dieses Zertifikats hoch</span>
              <span className="info-icon" aria-hidden="true">i</span>
            </div>
          </div>

          <div className="content-body">

            {/* Left — slider */}
            <div className="left-column">
              <div className="document-viewer-container">

                <button
                  className={`nav-arrow${currentPage === 0 ? ' is-hidden' : ''}`}
                  onClick={prevPage}
                  aria-label="Vorherige Seite"
                >
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M15 18l-6-6 6-6"/>
                  </svg>
                </button>

                <div className="document-slider-window">
                  <div
                    className="document-slider-track"
                    style={{ transform: `translateX(-${currentPage * 50}%)` }}
                  >
                    <div className="document-mock">{renderCertImage(page1Img, 1)}</div>
                    <div className="document-mock">{renderCertImage(page2Img, 2)}</div>
                  </div>

                  <button
                    className="open-new-window"
                    onClick={togglePreview}
                    aria-label="Vollbild anzeigen"
                  >
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"/>
                      <polyline points="15 3 21 3 21 9"/>
                      <line x1="10" y1="14" x2="21" y2="3"/>
                    </svg>
                  </button>
                </div>

                <button
                  className={`nav-arrow${currentPage === 1 ? ' is-hidden' : ''}`}
                  onClick={nextPage}
                  aria-label="Nächste Seite"
                >
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M9 18l6-6-6-6"/>
                  </svg>
                </button>
              </div>

              <div className="pagination-dots">
                <button
                  className={`dot${currentPage === 0 ? ' is-active' : ''}`}
                  onClick={() => setCurrentPage(0)}
                  aria-label="Seite 1"
                />
                <button
                  className={`dot${currentPage === 1 ? ' is-active' : ''}`}
                  onClick={() => setCurrentPage(1)}
                  aria-label="Seite 2"
                />
              </div>
            </div>

            {/* Right — details */}
            <div className="right-column">
              <div className="detail-group">
                <div className="detail-label">Ausgestellt für:</div>
                <div className="detail-value">Aliev Jamshid</div>
              </div>

              <div className="detail-group">
                <div className="detail-label">Ausgestellt am:</div>
                <div className="detail-value">9 Januar 2026</div>
              </div>

              <div className="detail-group">
                <div className="detail-label">Ausgestellt von:</div>
                <div className="detail-value">telc gGmbH</div>
              </div>

              <div className="detail-group">
                <div className="detail-label">Link zur Webseite:</div>
                <a href="https://www.telc.net/" target="_blank" rel="noopener noreferrer" className="detail-link">
                  https://www.telc.net/
                </a>
              </div>

              <div className="detail-group">
                <div className="detail-label">Identifikationsnummer:</div>
                <div className="detail-value">telc-R70XcGp</div>
              </div>

              <div className="verify-box">
                <div className="verify-title">PDF-Zertifikat überprüfen</div>
                <div className="verify-text">
                  Laden Sie die PDF-Version dieses Zertifikats hoch, um seine Echtheit zu überprüfen.
                </div>
                <button className="upload-button" aria-label="PDF hochladen">
                  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/>
                    <polyline points="14 2 14 8 20 8"/>
                    <line x1="12" y1="18" x2="12" y2="12"/>
                    <polyline points="9 15 12 12 15 15"/>
                  </svg>
                </button>
              </div>
            </div>
          </div>

          <div className="details-footer">
            <h2 className="details-title">Weitere Details</h2>
            <hr className="details-divider" />
            <p className="details-text">
              Weitere Informationen zur Prüfung finden Sie auf der <em>telc Deutsch B1 Zertifikat Seite</em>.
            </p>
            <p className="details-text">
              For more information about the examination, please visit the <em>telc Deutsch B1</em> page.
            </p>
          </div>
        </main>
      )}
    </div>
  );
}

export default App;

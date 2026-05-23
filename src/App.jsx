import React, { useState } from 'react';
import './App.css';
import {
  UserIcon,
  UsersIcon,
  InfoCircleIcon,
  ExternalLinkIcon,
  FileUploadIcon,
  ChevronLeftIcon,
  ChevronRightIcon,
  TimesIcon
} from './icons.jsx';

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
          <UserIcon size={20} className="top-bar__user-icon" />
          <div className="top-bar__separator" />
        </div>

        <nav className="top-bar__nav">
          <a href="https://www.telc.net/" target="_blank" rel="noopener noreferrer" className="top-bar__nav-item">telc.net</a>
          <a href="https://campus.telc.net/" target="_blank" rel="noopener noreferrer" className="top-bar__nav-item">Campus</a>
          <a href="https://training.telc.net/" target="_blank" rel="noopener noreferrer" className="top-bar__nav-item">Training</a>
          <a href="#" className="top-bar__nav-item is-active">
            <UsersIcon size={20} className="top-bar__nav-item-icon" />
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
              <TimesIcon size={18} />
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
              <InfoCircleIcon size={22} className="info-icon" />
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
                  <ChevronLeftIcon size={12} />
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
                    <ExternalLinkIcon size={16} />
                  </button>
                </div>

                <button
                  className={`nav-arrow${currentPage === 1 ? ' is-hidden' : ''}`}
                  onClick={nextPage}
                  aria-label="Nächste Seite"
                >
                  <ChevronRightIcon size={12} />
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
                  <FileUploadIcon size={22} />
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

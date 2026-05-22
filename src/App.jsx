import React, { useState } from 'react';
import './App.css';

function App() {
  const [currentPage, setCurrentPage] = useState(0);
  const [isPreviewMode, setIsPreviewMode] = useState(false);

  const page1Img = "/cert-page-1.png";
  const page2Img = "/cert-page-2.png";

  const nextPage = () => {
    if (currentPage < 1) setCurrentPage(currentPage + 1);
  };

  const prevPage = () => {
    if (currentPage > 0) setCurrentPage(currentPage - 1);
  };

  const togglePreview = () => {
    setIsPreviewMode(!isPreviewMode);
    if (!isPreviewMode) {
      window.scrollTo(0, 0);
    }
  };

  const renderCertImage = (imgSrc, pageNum) => {
    if (imgSrc) {
      return <img src={imgSrc} alt={`Certificate Page ${pageNum}`} className="cert-image" />;
    }
    return <div className="placeholder-cert">Photoshop Image {pageNum} Goes Here</div>;
  };

  return (
    <div className="app-container">
      {/* Top Header */}
      <header className="top-header">
        <div className="top-header-left">
          <div className="user-icon-container">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path>
              <circle cx="12" cy="7" r="4"></circle>
            </svg>
          </div>
        </div>

        <div className="top-nav">
          <a href="https://sso.ow.telc.net/auth/realms/onlinewelt/protocol/openid-connect/auth?client_id=moodle&response_type=code&redirect_uri=https%3A%2F%2Fcampus.telc.net%2Fadmin%2Foauth2callback.php&state=%2Fauth%2Foauth2%2Flogin.php%3Fwantsurl%3Dhttps%253A%252F%252Fcampus.telc.net%252Fmy%26sesskey%3D4R7S2tTA9t%26id%3D1&scope=openid%20profile%20email" target="_blank" rel="noopener noreferrer" className="nav-link">telc.net</a>
          <a href="https://sso.ow.telc.net/auth/realms/onlinewelt/protocol/openid-connect/auth?client_id=moodle&response_type=code&redirect_uri=https%3A%2F%2Fcampus.telc.net%2Fadmin%2Foauth2callback.php&state=%2Fauth%2Foauth2%2Flogin.php%3Fwantsurl%3Dhttps%253A%252F%252Fcampus.telc.net%252Fmy%26sesskey%3D4R7S2tTA9t%26id%3D1&scope=openid%20profile%20email" target="_blank" rel="noopener noreferrer" className="nav-link">Campus</a>
          <a href="https://training.telc.net/" target="_blank" rel="noopener noreferrer" className="nav-link">Training</a>
          <a href="#" className="nav-link active">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path>
              <circle cx="9" cy="7" r="4"></circle>
              <path d="M23 21v-2a4 4 0 0 0-3-3.87"></path>
              <path d="M16 3.13a4 4 0 0 1 0 7.75"></path>
            </svg>
            Community
          </a>
          <a href="https://shop.telc.net/" target="_blank" rel="noopener noreferrer" className="nav-link">Shop</a>
        </div>

        <div className="top-header-right">
          <div className="lang-switch">
            <span className="lang active">DE</span>
            <span className="lang">EN</span>
          </div>
        </div>
      </header>

      {/* Logo Header */}
      <div className="logo-header">
        <div className="logo-header-inner">
          <a href="https://results.telc.net/" target="_blank" rel="noopener noreferrer" style={{ display: 'inline-flex', flexDirection: 'column', color: '#838b8f', alignItems: 'center', textDecoration: 'none' }}>
            <svg viewBox="155.531 164.202 85.997 35.154" width="100" height="40" style={{ fill: '#838b8f' }}>
              <path d="M164.268 190.633c0 5.322 3.033 8.716 8.516 8.716a18.14 18.14 0 005.162-.623l-.2-5.543a6.315 6.315 0 01-3.193.723c-2.671 0-3.294-2.15-3.294-4.44v-25.264l-6.991 2.249zm23.358-7.993c.32-3.6 2.29-6.326 6.206-6.326s5.483 2.932 5.684 6.326zm16.61 8.877a18.128 18.128 0 01-8.937 2.71c-4.338 0-7.371-2.45-7.672-6.787h18.6c0-9.4-2.812-16.248-12.794-16.248-8.355 0-12.472 6.427-12.472 14.2 0 8.817 5.162 13.938 14.039 13.938a18.279 18.279 0 009.239-2.15v-5.664zm5.8-25.125h6.989v32.335h-6.985zm31.03 5.7a22.543 22.543 0 00-6.788-.884c-8.415 0-12.994 6.166-12.994 13.938 0 8.194 4.439 14.2 13.255 14.2a22.854 22.854 0 006.989-.884l-.321-5.8a14.863 14.863 0 01-5.38 1.24c-4.9 0-7.25-3.816-7.25-8.777 0-5.061 2.773-8.516 7.11-8.516a10.789 10.789 0 014.76.984l.624-5.5zm-68.398 4.562l7.47-.02v-4.56l-7.47.04z" fillRule="evenodd" />
              <circle cx="3.695" cy="3.695" r="3.695" transform="translate(155.53 170.569)" />
            </svg>
            <div style={{ fontSize: '11px', letterSpacing: '1.5px', marginTop: '2px', fontFamily: 'sans-serif', fontWeight: 600 }}>LANGUAGE TESTS</div>
          </a>
        </div>
      </div>

      {/* Preview Mode View */}
      {isPreviewMode ? (
        <div className="preview-container">
          <div className="preview-content-wrapper">
            <button className="preview-close-btn" onClick={togglePreview}>
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <line x1="18" y1="6" x2="6" y2="18"></line>
                <line x1="6" y1="6" x2="18" y2="18"></line>
              </svg>
            </button>
            
            <div className="preview-document-mock">
              {renderCertImage(page1Img, 1)}
            </div>
            
            <div className="preview-document-mock">
              {renderCertImage(page2Img, 2)}
            </div>
          </div>
        </div>
      ) : (
        /* Normal Main Content */
        <main className="main-content">
          <div className="content-header">
            <h1 className="page-title">telc Deutsch B1 Zertifikat</h1>
            <div className="upload-instruction">
              <span>Laden Sie die PDF-Datei zur Validierung dieses Zertifikats hoch</span>
              <span className="info-icon">i</span>
            </div>
          </div>

          <div className="content-body">
            {/* Left Column - Document Viewer Slider */}
            <div className="left-column">
              <div className="document-viewer-container">
                <button className="nav-arrow" onClick={prevPage} style={{ visibility: currentPage > 0 ? 'visible' : 'hidden' }}>
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M15 18l-6-6 6-6"/>
                  </svg>
                </button>
                
                <div className="document-slider-window">
                  <div className="document-slider-track" style={{ transform: `translateX(-${currentPage * 380}px)` }}>
                    {/* PAGE 1 */}
                    <div className="document-mock">
                      {renderCertImage(page1Img, 1)}
                    </div>
                    {/* PAGE 2 */}
                    <div className="document-mock">
                      {renderCertImage(page2Img, 2)}
                    </div>
                  </div>
                </div>

                <div className="open-new-window" onClick={togglePreview} title="Open in new window">
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path>
                    <polyline points="15 3 21 3 21 9"></polyline>
                    <line x1="10" y1="14" x2="21" y2="3"></line>
                  </svg>
                </div>

                <button className="nav-arrow" onClick={nextPage} style={{ visibility: currentPage < 1 ? 'visible' : 'hidden' }}>
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M9 18l6-6-6-6"/>
                  </svg>
                </button>
              </div>

              <div className="pagination-dots">
                <div className={`dot ${currentPage === 0 ? 'active' : ''}`} onClick={() => setCurrentPage(0)}></div>
                <div className={`dot ${currentPage === 1 ? 'active' : ''}`} onClick={() => setCurrentPage(1)}></div>
              </div>
            </div>

            {/* Right Column - Details */}
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
                <a href="https://www.telc.net/" className="detail-link">https://www.telc.net/</a>
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
                <button className="upload-button">
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path>
                    <polyline points="14 2 14 8 20 8"></polyline>
                    <line x1="12" y1="18" x2="12" y2="12"></line>
                    <polyline points="9 15 12 12 15 15"></polyline>
                  </svg>
                </button>
              </div>
            </div>
          </div>

          {/* Footer */}
          <div className="details-footer">
            <h2 className="details-title">Weitere Details</h2>
            <hr className="details-divider" />
            <p className="details-text">
              Weitere Informationen zur Prüfung finden Sie auf der <em className="italic">telc Deutsch B1 Zertifikat Seite</em>.
            </p>
            <p className="details-text">
              For more information about the examination, please visit the <em className="italic">telc Deutsch B1 page</em>.
            </p>
          </div>
        </main>
      )}
    </div>
  );
}

export default App;

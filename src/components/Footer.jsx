const FooterV = () => {

  return (
    <footer className="footer-v1">
      <div className="divider-wrapper">
        <div className="divider" />
      </div>
      <div className="value-normalizer">
        <div className="path-modifier-parent">
          <div className="path-modifier">
            <img className="logo-icon2" alt="" src="/src/assets/logo-footer.svg" />
            <div className="copyright">
              Menciptakan platform digital barang bekas yang menampilkan
              berbagai kategori barang yang layak pakai dengan tujuan untuk
              memberikan ruang dalam berbagi atau menjual barang bekas kepada
              orang yang membutuhkan dan juga memberikan nilai tambahan dalam
              mendukung upaya pengurangan limbah dan perpanjangan umur pakai
              barang di kota Bandung.
            </div>
            <div className="social-media-icon-squarefaceb-parent">
              <div className="social-media-icon-squarefaceb">
                <div className="social-media-icon" />
                <img
                  className="facebook-icon"
                  alt=""
                  src="/src/assets/Facebook.svg"
                />
              </div>
              <div className="social-media-icon-squaretwitt-wrapper">
                <div className="social-media-icon-squaretwitt">
                  <div className="social-media-icon1" />
                  <img
                    className="twitter-icon"
                    alt=""
                    src="/src/assets/Twitter.svg"
                  />
                </div>
              </div>
              <div className="function-tester">
                <div className="social-media-icon-squareyoutu">
                  <div className="social-media-icon3" />
                  <img
                    className="youtube-icon"
                    alt=""
                    src="/src/assets/YouTube.svg"
                  />
                </div>
              </div>
            </div>
          </div>
          <div className="tree-splitter-parent">
            <div className="tree-splitter">
              <h3 className="footer-title">Product</h3>
              <div className="value-space">
                <div className="ai-img-detector">AI IMG Detector</div>
                <div className="catalog">Catalog</div>
                <div className="goods-gift">Goods Gift</div>
                <div className="privat-chat">Privat Chat</div>
                <div className="updates">Updates</div>
              </div>
            </div>
            <div className="footer-title-parent">
              <h2 className="footer-title1">Contacts us</h2>
              <div className="frame-parent1">
                <div className="line-roundedemail-parent">
                  <img
                    className="line-roundedemail-icon"
                    alt=""
                    src="/src/assets/Email.svg"
                  />
                  <div className="link-item">bekasberkah@company.com</div>
                </div>
                <div className="line-roundedphone-parent">
                  <img
                    className="line-roundedphone-icon"
                    alt=""
                    src="/src/assets/Phone.svg"
                  />
                  <div className="link-item1">(+62) 874568892</div>
                </div>
                <div className="spacer-icon-wrapper-parent">
                  <div className="spacer-icon-wrapper">
                    <div className="spacer" />
                    <img
                      className="line-roundedmark-icon"
                      alt=""
                      src="/src/assets/Map.svg"
                    />
                  </div>
                  <div className="footer-description">
                    Bandung Indonesia, 40135
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="footer-v1-inner">
        <div className="string-standardizer-parent">
          <div className="string-standardizer" />
          <div className="pattern-recognizer">
            <div className="tree-builder">
              <div className="footer-left">Copyright © 2024 BekasBerkah.com</div>
              <div className="footer-right">
                <span className="all-rights-reserved">All Rights Reserved</span>
                <span>{` | `}</span>
                <span className="terms-and-conditions">
                  Terms and Conditions
                </span>
                <span>{` | `}</span>
                <span className="privacy-policy">Privacy Policy</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default FooterV;

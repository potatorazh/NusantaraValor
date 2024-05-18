import "./HomePage.css";

import "../components/Navbar";
import "../components/Footer";

const HomePage = () => {
  return (
    <div className="home-page">
        <section className="landing-page-inner">
        <div className="group-parent">
          <img className="group-icon" alt="" src="/src/assets/vector-icon.svg" />
          <div className="mask-group-parent">
            <img className="mask-group-icon" alt="" src="/src/assets/hero.svg" />
            <img className="group-icon1" alt="" src="/src/assets/vector-icon2.svg" />
          </div>
          <div className="logo-group">
            <img className="logo-icon1" alt="" src="/src/assets/logo-header.svg" />
            <div className="frame-group">
              <div className="berkontribusi-pada-lingkungan-parent">
                <div className="berkontribusi-pada-lingkungan-container">
                  <span className="berkontribusi-pada">Berkontribusi pada</span>
                  <span className="lingkungan"> lingkungan</span>
                </div>
                <img
                  className="frame-child"
                  loading="lazy"
                  alt=""
                  src="/src/assets/bumi-icon.svg"
                />
                <div className="dan">dan</div>
              </div>
              <div className="menghemat-biaya-dengan-parent">
                <div className="menghemat-biaya-dengan-container">
                  <span className="menghemat-biaya">{`menghemat biaya `}</span>
                  <span className="dengan">dengan</span>
                </div>
                <img
                  className="frame-item"
                  loading="lazy"
                  alt=""
                  src="/src/assets/recycle-icon.svg"
                />
                <div className="barang-bekas">barang bekas</div>
              </div>
              <div className="berkualitas-parent">
                <div className="berkualitas">berkualitas</div>
                <img
                  className="frame-inner"
                  loading="lazy"
                  alt=""
                  src="/src/assets/lamp-icon.svg"
                />
              </div>
            </div>
          </div>
          <img className="group-icon2" alt="" src="/src/assets/vector-icon3.svg" />
        </div>
      </section>
      <section className="landing-page-child">
        <div className="kategori-parent">
          <h1 className="kategori">Kategori</h1>
          <div className="frame-container">
            <div className="frame-wrapper">
              <div className="frame-div">
                <div className="furniture-wrapper">
                  <h1 className="furniture">Furniture</h1>
                </div>
              </div>
            </div>
            <div className="frame-wrapper1">
              <div className="frame-wrapper2">
                <div className="pakaian-wrapper">
                  <h1 className="pakaian">Pakaian</h1>
                </div>
              </div>
            </div>
            <div className="frame-wrapper3">
              <div className="frame-wrapper4">
                <div className="buku-wrapper">
                  <h1 className="buku">Buku</h1>
                </div>
              </div>
            </div>
            <div className="frame-wrapper5">
              <div className="frame-wrapper6">
                <div className="sepatu-wrapper">
                  <h1 className="sepatu1">Sepatu</h1>
                </div>
              </div>
            </div>
            <div className="frame-wrapper7">
              <div className="frame-wrapper8">
                <div className="aksesoris-wrapper">
                  <h1 className="aksesoris">Aksesoris</h1>
                </div>
              </div>
            </div>
            <div className="frame-wrapper9">
              <div className="frame-wrapper10">
                <div className="alat-musik-wrapper">
                  <h1 className="alat-musik">Alat Musik</h1>
                </div>
              </div>
            </div>
          </div>
        </div>
        </section>
        <section className="frame-section">
        <div className="terbaru-parent">
          <h1 className="terbaru">Terbaru Nich</h1>
          <div className="card-parent">
            <div className="card">
              <img
                className="card-child"
                loading="lazy"
                alt=""
                src="/src/assets/lemari.svg"
              />
              <div className="data-aggregator-parent">
                <div className="data-aggregator">
                  <div className="produk">Produk</div>
                  <div className="mei-2024">2 Mei 2024</div>
                </div>
                <div className="value-filter">
                  <div className="lemari-2-pintu">Lemari 2 Pintu</div>
                  <div className="rp-570000">Rp. 570.000</div>
                </div>
              </div>
            </div>
            <div className="card1">
              <img className="card-item" alt="" src="/src/assets/tas.svg" />
              <div className="frame-parent1">
                <div className="produk-parent">
                  <div className="produk1">Produk</div>
                  <div className="mei-20241">2 Mei 2024</div>
                </div>
                <div className="lemari-2-pintu-parent">
                  <div className="lemari-2-pintu1">Tas Sekolah</div>
                  <div className="rp-5700001">Rp. 78.000</div>
                </div>
              </div>
            </div>
            <div className="card2">
              <img className="card-inner" alt="" src="/src/assets/kasur.svg" />
              <div className="frame-parent2">
                <div className="produk-group">
                  <div className="produk2">Produk</div>
                  <div className="mei-20242">2 Mei 2024</div>
                </div>
                <div className="lemari-2-pintu-group">
                  <div className="lemari-2-pintu2">{`Kasur `}</div>
                  <div className="rp-5700002">Rp. 850.000</div>
                </div>
              </div>
            </div>
            <div className="card3">
              <img
                className="rectangle-icon"
                alt=""
                src="/src/assets/sepatu-snikers.svg"
              />
              <div className="frame-parent3">
                <div className="produk-container">
                  <div className="produk3">Produk</div>
                  <div className="mei-20243">3 Mei 2024</div>
                </div>
                <div className="lemari-2-pintu-container">
                  <div className="lemari-2-pintu3">PVN Sepatu Sneakers</div>
                  <div className="rp-5700003">Rp. 98.000</div>
                </div>
              </div>
            </div>
            <div className="card4">
              <img
                className="card-child1"
                alt=""
                src="/src/assets/thrif-blouse.svg"
              />
              <div className="frame-parent4">
                <div className="produk-parent1">
                  <div className="produk4">Produk</div>
                  <div className="mei-20244">3 Mei 2024</div>
                </div>
                <div className="lemari-2-pintu-parent1">
                  <div className="lemari-2-pintu4">Thrift Blouse</div>
                  <div className="rp-5700004">Rp. 25.000</div>
                </div>
              </div>
            </div>
            <div className="card5">
              <img
                className="card-child2"
                alt=""
                src="/src/assets/pintu.svg"
              />
              <div className="frame-parent5">
                <div className="produk-parent2">
                  <div className="produk5">Produk</div>
                  <div className="mei-20245">3 Mei 2024</div>
                </div>
                <div className="lemari-2-pintu-parent2">
                  <div className="lemari-2-pintu5">Pintu Kamar Mandi</div>
                  <div className="rp-5700005">Rp. 120.000</div>
                </div>
              </div>
            </div>
            <div className="card6">
              <img
                className="card-child3"
                alt=""
                src="/src/assets/meja.svg"
              />
              <div className="frame-parent6">
                <div className="produk-parent3">
                  <div className="produk6">Produk</div>
                  <div className="mei-20246">2 Mei 2024</div>
                </div>
                <div className="lemari-2-pintu-parent3">
                  <div className="lemari-2-pintu6">Meja Belajar</div>
                  <div className="rp-5700006">Rp. 100.000</div>
                </div>
              </div>
            </div>
            <div className="card7">
              <img
                className="card-child4"
                alt=""
                src="/src/assets/novel-ty.svg"
              />
              <div className="frame-parent7">
                <div className="produk-parent4">
                  <div className="produk7">Produk</div>
                  <div className="mei-20247">2 Mei 2024</div>
                </div>
                <div className="lemari-2-pintu-parent4">
                  <div className="lemari-2-pintu7">Novel Tere Liye</div>
                  <div className="rp-5700007">Rp. 32.500</div>
                </div>
              </div>
            </div>
            <div className="card8">
              <img
                className="card-child5"
                alt=""
                src="/src/assets/gitar.svg"
              />
              <div className="frame-parent8">
                <div className="produk-parent5">
                  <div className="produk8">Produk</div>
                  <div className="mei-20248">3 Mei 2024</div>
                </div>
                <div className="lemari-2-pintu-parent5">
                  <div className="lemari-2-pintu8">Gitar Ukulele</div>
                  <div className="rp-5700008">Rp. 44.000</div>
                </div>
              </div>
            </div>
            <div className="card9">
              <img
                className="card-child6"
                alt=""
                src="/src/assets/celana.svg"
              />
              <div className="frame-parent9">
                <div className="produk-parent6">
                  <div className="produk9">Produk</div>
                  <div className="mei-20249">3 Mei 2024</div>
                </div>
                <div className="lemari-2-pintu-parent6">
                  <div className="lemari-2-pintu9">Celana wanita</div>
                  <div className="rp-5700009">Rp. 30.000</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default HomePage;
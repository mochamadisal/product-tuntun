import styles from '@/styles/components/footer.module.scss'
import { 
  FiPhone, 
  FiMail, 
  FiInstagram, 
  FiFacebook,
  FiTwitter,
  FiYoutube,
  FiTwitch
} from 'react-icons/fi'

const Footer = () => {
  return (
    <footer className={styles.footerWrapper}>
      <div className={styles.footerContent}>
        <div className={styles.footerLogo}>
          <h2>
            catalogpedia
          </h2>
          <p>
            Solusi pembelian murah di catalogpedia
          </p>
        </div>
        <div className={styles.footerAbout}>
          <h2>
            Tentang Kami
          </h2>
          <ul>
            <li>
              Tentang catalogpedia
            </li>
            <li>
              Artikel &amp; Edukasi
            </li>
            <li>
              Mulai Belanja
            </li>
            <li>
              Ketentuan Umum
            </li>
            <li>
              Kebijakan Privasi
            </li>
            <li>
              Pusat Bantuan
            </li>
          </ul>
        </div>
        <div className={styles.footerContact}>
          <h2>
            Hubungi Kami
          </h2>
          <p>
            Hubungi Layanan Pelanggan dan Pengaduan Konsumen catalogpedia:
          </p>
          <p style={{ display: 'flex', alignItems: 'center' }}>
            <FiPhone style={{ marginRight: '5px' }} />
            0810000000
          </p>
          <p style={{ display: 'flex', alignItems: 'center' }}>
            <FiMail style={{ marginRight: '5px' }} />
            care@catalog.id
          </p>
        </div>
        <div className={styles.footerSocialMedia}>
          <h2>
            Ikuti Kami
          </h2>
          <div className={styles.footerSocialMediaIcon}>
            <FiInstagram />
            <FiTwitch />
            <FiFacebook />
            <FiTwitter />
            <FiYoutube />
          </div>
        </div>
      </div>
      <div className={styles.footerCopyRight}>
        ©2025 catalogpedia. Segala Hak Cipta Dilindungi
      </div>
    </footer>
  )
}

export default Footer

import styles from "./networkComponent.module.css";
import Link from "next/link";
import Image from "next/image";

const NetworkComponent = () => {
  const whatsappNumber = "491704315540";
  const telegramUsername = "NadineBerke";
  return (
    <div className={styles.wrapperComponentNetwork}>
      <Link href={`https://t.me/${telegramUsername}`}>
        <div className={styles.icon}>
          <Image
            src="/images/social-networks/telegramV2.svg"
            width={39}
            height={39}
            alt="telegram Icon"
          />
        </div>
      </Link>
      <Link href={`https://wa.me/${whatsappNumber}`}>
        <div className={styles.icon}>
          <Image
            src="/images/social-networks/whatsapp.svg"
            width={43}
            height={43}
            alt="whatsapp Icon"
          />
        </div>
      </Link>
      <Link
        href={"https://www.instagram.com/deutsch_solutions/"}
        target="_blank"
      >
        <div className={styles.icon}>
          <Image
            src="/images/social-networks/instagram.svg"
            width={38}
            height={38}
            alt="Instagram Icon"
          />
        </div>
      </Link>
    </div>
  );
};

export default NetworkComponent;

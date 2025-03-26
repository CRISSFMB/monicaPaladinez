
import Image from "next/image";
import NetworkComponent from "../networkComponents/NetworkComponent";
import styles from "./Hero.module.css";

// import NetworkComponent from "../networkComponents/NetworkComponent";



const Hero = () => {


  return (
    <div className={`${styles.hero} container `}>

      <div className={styles["hero__content"]}>
        <Image
          src="/logos/logoMonica.webp"
          width={100}
          height={90}
          alt="monica logo"
          className={styles["hero__content__logo"]}
        />
        <h1 className={styles["hero__content__title"]}><span className={styles["hero__content__titleSpan"]}>M</span>onica <span className={styles["hero__content__titleSpan"]}>P</span>aladinez |  20 <span className={styles["hero__content__titleSpan"]}>+</span> Years Of Real Estate Experience<span className={styles["hero__content__titleSpan"]}>.</span></h1>
        <p className={styles["hero__content__paragraph"]}>With Me at your side, managing your Orlando properties becomes a hassle-free task</p>

        <NetworkComponent />
      </div>


    </div>
  );
};

export default Hero;

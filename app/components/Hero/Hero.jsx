
import styles from "./Hero.module.css";

// import NetworkComponent from "../networkComponents/NetworkComponent";



const Hero = () => {


  return (
    <div className={`${styles.hero} container `}>
      <div className={styles["hero__content"]}>
        <h1 className={styles["hero__content__title"]}>Monica paladinez</h1>
        <p className={styles["hero__content__paragraph"]}> Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque minima sit illum atque harum velit beatae vel maiores! Nisi vero quaerat at cumque neque molestiae voluptates magnam. Fugiat, mollitia officia.</p>

        {/* <NetworkComponent /> */}
      </div>


    </div>
  );
};

export default Hero;

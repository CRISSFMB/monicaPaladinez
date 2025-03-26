import Image from "next/image";
import styles from "./sectionWhyUs.module.css";


const SectionWhyUs = () => {


  return (
    <div className={`${styles.whySection} container`} id="whyUs">
      <h2 className={`${styles.title}`}>Smart Buying, Successful Selling</h2>
      <p className={`${styles.sub}`}> | Become an expert in buying and selling with our personalized advice</p>

      <div className={`${styles.wrapperContent}`}>
        <div className={`${styles.ContentImage}`}>
          <Image
            src="/perfilFotos/monica3.jpeg"
            alt="why choose us imagen"
            width={300}
            height={500}
            className={styles.imagenWhy}
          />
        </div>
        <ul className={`${styles.textContent}`}>
          <li>
            <p className={styles.paragraphBlue}>
              {/* <span className={styles.row}>
                <Image
                  src="/images/section-why/row.svg"
                  alt="row"
                  width={20}
                  height={20}
                />
              </span> */}
              Sellers
            </p>

            <p className={styles.paragraphNormal}>
              Are you ready to sell your property? We offer exceptional opportunities and expert support to ensure you achieve a successful, fast sale at the best price on the market. Your property deserves the best, and we help you get it!
            </p>
          </li>

          <li>
            <p className={styles.paragraphBlue}>
              {/* <span className={styles.row}>
                <Image
                  src="/images/section-why/row.svg"
                  alt="row"
                  width={20}
                  height={20}
                />
              </span> */}
              Buyers
            </p>
            <p className={styles.paragraphNormal}>
              Are you ready to find the home of your dreams? Contact us, and I Will guide you through every step of the process to help you acquire the property you ve always wanted.
            </p>
          </li>

          <li>
            <p className={styles.paragraphBlue}>
              {/* <span className={styles.row}>
                <Image
                  src="/images/section-why/row.svg"
                  alt="row"
                  width={20}
                  height={20}
                />
              </span> */}
              Lets talk and make your real estate goal a reality
            </p>
            <p className={styles.paragraphNormal}>
              Lets talk about your real estate futuren and make your real estate goal a reality. Contact me today to get started!
            </p>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default SectionWhyUs;

import styles from "@/src/styles/aboutme.module.scss";
import ScrollDownArrow from "@/src/components/scroll";
const About = () => {
    return (
        <>
            <div className={styles.container}>
                <div className={styles.animatedtitle}>
                    <div className={styles.texttop}>
                        <div className={styles.innerText}>
                            <span className={styles.spanner}>uhhh</span>
                            <span>ummm</span>
                        </div>
                    </div>
                    <div className={styles.textbottom}>
                        <div className={styles.innerText}>about me!!</div>
                    </div>
                </div>
        </div>
        <ScrollDownArrow/>
                <div className={styles.hero}>
                    <div className={styles.text}>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam a ligula pretium, consequat ligula ac, tempor nulla. Cras mollis augue sapien, non cursus est lacinia in. Maecenas iaculis neque nisl, quis congue nibh rutrum eget. Curabitur porta felis id fringilla elementum. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque feugiat felis tincidunt justo posuere vehicula. Interdum et malesuada fames ac ante ipsum primis in faucibus. Aliquam erat volutpat. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Etiam ultrices, lacus vel pulvinar hendrerit, elit nibh fermentum eros, eu mollis urna purus vitae metus. Nulla ac facilisis ipsum. Curabitur dapibus leo at orci maximus, at placerat justo laoreet. Pellentesque vitae accumsan lacus. Donec fermentum luctus lorem ut aliquet. Phasellus vitae nunc et ipsum faucibus vestibulum eget nec leo.
        </p>
                    </div>
                    <div className={styles.picDiv}>
                        <img className={styles.pic} src="./about1.jpg" />
                    </div>
                </div>
            </>
            );
};

            export default About;


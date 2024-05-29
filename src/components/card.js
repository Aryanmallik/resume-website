import styles from '@/src/styles/card.module.css';
import PropTypes from 'prop-types';
import Link from "next/link";

const Card = ({ badge, title, footer, backContent }) => {
    return (
        <div className={styles.card}>
            <div className={styles.content}>
                <div className={styles.back}>
                    <div className={styles.backContent}>
                        <strong>{backContent}</strong>
                    </div>
                </div>
                <div className={styles.front}>
                    <div className={styles.img}>
                        <div className={styles.circle}></div>
                        <div className={`${styles.circle} ${styles.right}`}></div>
                        <div className={`${styles.circle} ${styles.bottom}`}></div>
                    </div>
                    <div className={styles.frontContent}>
                        <small className={styles.badge}>{badge}</small>
                        <div className={styles.description}>
                            <div className={styles.title}>
                                <p><strong>{title}</strong></p>
                            </div>
                            <Link href={footer} target="_blank" className={styles.cardFooter}>
                                {footer}
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

Card.propTypes = {
    badge: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    footer: PropTypes.string.isRequired,
    backContent: PropTypes.string.isRequired,
};

export default Card;


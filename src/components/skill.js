import styles from "../styles/skill.module.css";
const Skill = ( {name})=>{  
    return( 
        <div className={styles.element}>{name}</div>
    );
};
export default Skill;

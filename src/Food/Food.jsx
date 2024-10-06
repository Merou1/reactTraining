
import styles from './Food.module.css'
function Food(){
    const food1 = "orange"
    const food2 = "banana"
    return(
        <div className={styles.foodList}>
            <ul>
                <li>Apple</li>
                <li>{food1}</li>
                <li>{food2.toUpperCase()}</li>
            </ul>
        </div>
    )
}

export default Food
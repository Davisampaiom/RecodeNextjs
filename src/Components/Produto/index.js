import React from 'react';

import styles from '../component.module.css'

const Produto = (props) => {
    return (
        <div className={styles.produto}>
            <img className={styles.img} src={props.image} />
            <center><p>{props.title}</p></center>
            <h2>R$ {props.price}</h2>
            <br />
        </div>
    )
}

export default Produto;

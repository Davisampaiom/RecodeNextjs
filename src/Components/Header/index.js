import React from "react";
import Link from "next/link";

import styles from "../component.module.css";
  


const Header = () => {
  return(
    <nav className={styles.header}>
       <style jsx global>{`
      body {
        display: flex;
        align-items:center;
        background-color: rgb(241, 228, 228);
        margin: 0px;
        padding: 0px;        
        font-family: sans-serif;
      }
    `}</style>
  
          <Link  href="/">
            <a className={styles.a}>Home</a>
          </Link>
        
        
          <Link  href="/produtos">
            <a className={styles.a}> Produtos</a>
          </Link>
      
          <Link  href="/contato">
            <a className={styles.a}> Contato</a>
          </Link>
       
    </nav>
  );
};

export default Header;

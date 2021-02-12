import React from 'react'
import {Header, Footer} from '../Components'
import Container from '@material-ui/core/Container';

import styles from './page.module.css'

function HomePage() {
    return (
    <div className={styles.bodyPage}>
        <Header />
   <Container maxWidth="lg" className={styles.mainPage}>
   <center>
      
        <h1>Seja bem vindo(a)!</h1>
        <p>
          Aqui em nossa loja, <em>programadores tem desconto</em> nos produtos
          para sua casa!
        </p>
    <hr></hr>
      </center>
      <br /> <br /> <br /> <br /> <br />
     </Container>
    
      <Footer />
    </div>)
  }
  
  export default HomePage
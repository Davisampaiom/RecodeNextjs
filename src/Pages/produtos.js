import {useState , useEffect , lazy , Suspense} from "react";
import { Header, Footer } from "../Components";

import styles from './page.module.css'

 import {Produto} from '../Components'



const Produtos = () => {
  const url= 'https://fakestoreapi.com/products'

  const [produtos, setProdutos] =useState(null)
  const fetchApi = async() =>{
      const response = await fetch(url)
      const responsJSON = await response.json()
      setProdutos(responsJSON)
  }
      useEffect(()=>{
      fetchApi()
  }, [])
  
  return (
    <div>
        <Header />
      <div className={styles.produtos}>
      
      {produtos && produtos.map(item => <Produto key={item.id} image={item.image} title={item.title}
       price={item.price}  /> )}
      
       </div>

      <Footer />
    </div>
  );
};

export default Produtos;

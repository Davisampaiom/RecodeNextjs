import React from "react";
import { Header, Footer } from "../Components";
import { withStyles , makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import styles from "./page.module.css";


const useStyles = makeStyles((theme) => ({
  root: {
    '& .MuiTextField-root': {
      margin: theme.spacing(1),
      width: '25ch',}
    
  },

}));

const BButton = withStyles({
  root: {
    boxShadow: 'none',
    textTransform: 'none',
    fontSize: 16,
    padding: '6px 12px',
    lineHeight: 1.5,
    backgroundColor: '#ff0000',
    
    fontFamily: [
      'Roboto',
      'Arial',
      'sans-serif',
    ].join(','),
    '&:hover': {
      backgroundColor: '#ff5131',
      
      boxShadow: 'none',
    },
    '&:active': {
      boxShadow: 'none',
      backgroundColor: '#9c0000',
     
    },
    '&:focus': {
      boxShadow: '0 0 0 0.2rem rgba(255,81,49,.5)',
    },
  },
})(Button);




const Contato = () => {
  const classes = useStyles();
  return (
    <div>
      <Header />
      <div>

  <form className={classes.root, styles.form }  autoComplete="off" >
   <br />
    <TextField id="filled-basic"  label="Nome" className={styles.input} />
    <br />
    <TextField id="filled-basic"  label="Telefone"  className={styles.input}/>
    <br />
    <TextField id="filled-basic"  label="Email" className={styles.input} />
    <br />
    <TextField
          id="outlined-multiline-flexible"
          label="Mensagem"
          multiline
          row={5}
          className={styles.input}  />
            <br /><br />
        
    <BButton variant="contained" color='#000' className={classes.margin} className={styles.botao}>Enviar</BButton>
    
  </form>

   </div>
   <br /><br /><br /><br /><br /><br /><br /><br />
   <br /><br /><br /><br /><br /><br /><br /><br />
   <br /><br /><br />
      <Footer />
    </div>
  );
};

export default Contato;

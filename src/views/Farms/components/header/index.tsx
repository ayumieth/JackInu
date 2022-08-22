
import React, { useState, useEffect } from 'react';
import { Box, Stack, IconButton } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import styles from './header.module.css';



const Header = () => {
  const [color, setColor] = useState<string>('transparent');
  const [showHambuger, setShowHambuger] = useState<boolean>(false);
  const handleScrollbar = () => {
    if(window.pageYOffset < 100) setColor("transparent");
    else if( window.pageYOffset >= 100 ) setColor('black');
    else if( window.pageYOffset >= 300 ) setColor('#020207');
  }

  useEffect(() => {
   window.addEventListener('scroll', handleScrollbar) 
  });

  return(
    <>
      <Box id='header' className={styles.header_body} sx={{width: '100%', background: `${color}` , position:'fixed', top:'0px', zIndex:'3 !important', transition: '0.5s'}}>
        <Box  className={  styles.header_container}>
          <a href='/' style={{marginRight:'20px'}} ><img src='./images/landing/logo.png' alt='logo' /></a>
          <Box className={styles.menu_item}>
            <Stack className={styles.header_left}  direction='row' alignItems='center' spacing={2}>
            {/* <Link containerId="about" spy={true} smooth={true} className="menuitem">Grill section</Link> */}
            </Stack>
            <Stack className={styles.header_right} justifyContent='right'  direction='row' alignItems='center' spacing={2}>
            <a href='https://jack-inu.gitbook.io/docs' target='_blank' rel="noreferrer">WHITEPAPER</a>
              <a href='https://pancakeswap.finance/swap?outputCurrency=0x81b8341329ec97e109b604D3C877065A5164aEc1' target='_blank' rel='noreferrer'>BUY JACK</a>
              <a href='/'>PLAY BONE HUNTER</a>
              <a href='/farms'>FARM</a>
            </Stack>
          </Box>

          <IconButton onClick={() => setShowHambuger(!showHambuger)} className={styles.menu_btn} sx={{ background:'#d2793d', width:'60x', height:'40px', borderRadius:'8px', marginTop:'50px', marginRight:'10px'}}>
              <MenuIcon sx={{color:'white'}}/>
          </IconButton>
        </Box>

        {
          showHambuger &&
            <Stack className={styles.hambuger_menu} direction='column' spacing={2}>
              
              <Stack className={styles.header_right}  direction='row' alignItems='start'  flexWrap='wrap'>
              <a href='https://jack-inu.gitbook.io/docs' target='_blank' rel="noreferrer">WHITEPAPER</a>
              <a href='https://pancakeswap.finance/swap?outputCurrency=0x81b8341329ec97e109b604D3C877065A5164aEc1' target='_blank' rel='noreferrer'>BUY JACK</a>
                <a href='/'>PLAY BONE HUNTER</a>
                <a href='/farms'>FARM</a>
              </Stack>
            </Stack>
        }
      </Box>
    </>
  );
}


export default Header;
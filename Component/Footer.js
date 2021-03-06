import React from 'react';
import {Layout,Grid,Collapse} from 'antd'
import {SlackOutlined,TwitterOutlined,FacebookOutlined,GithubFilled,InstagramFilled} from '@ant-design/icons'
import styles from '@/styles/Components.module.scss'


const Overview=(
             <div className={styles.itemsdiv}>
              <p><b>Overview</b> </p>
              <p>Home</p>
              <p>About</p>
              <p>Why Hasibu</p>
              <p> Features</p>
            </div>
)
const Contacts=(
  <div className={styles.itemsdiv} >
  <p><b>Contact us:</b> </p>
  <p> creareafrica.gmail.com</p>
  <p>+254 783 434 433</p>
  <p>Shikunga Road,South B</p>
  <p> Nairobi,Kenya</p>
</div>
)
const Socials=(
  <div className={styles.socials} >
  <TwitterOutlined/> 
    <FacebookOutlined/>  
   <InstagramFilled/>  
   <GithubFilled/> 
   <SlackOutlined/> 
</div>
)


const { Panel } = Collapse;
const SmallScreen=()=>{
  return(
    <div className={styles.footer}>
    <Collapse accordion ghost  >
      <Panel header="Overview" key="1">
        {Overview}
      </Panel>
      <Panel header="Contacts" key="2">
        {Contacts}
      </Panel>
      {Socials}
    </Collapse>
   <p>@creareafrica</p> 
     </div>
  )
}
const FooterComp = () => {
  const screen= Grid.useBreakpoint()
    return (
      <>
        { screen.xs? <SmallScreen/>
          : ( <div className={styles.footer}>
            {Overview}
            {Contacts}
            {Socials} 
           
            </div>) }
        
        </>
        
      );
}
 
export default FooterComp;

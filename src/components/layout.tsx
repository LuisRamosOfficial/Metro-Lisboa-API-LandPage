import { type ParentComponent, JSX } from "solid-js";
import styles from "~/styles/layout.module.scss";



const wavesvg: JSX.Element = (<svg id="visual" viewBox="0 0 1920 1080" width="1920" height="1080" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" version="1.1"><rect x="0" y="0" width="1920" height="1080" fill="none"></rect><path d="M0 653L35.5 641.7C71 630.3 142 607.7 213.2 594C284.3 580.3 355.7 575.7 426.8 602.2C498 628.7 569 686.3 640 716.5C711 746.7 782 749.3 853.2 730C924.3 710.7 995.7 669.3 1066.8 636.5C1138 603.7 1209 579.3 1280 565.2C1351 551 1422 547 1493.2 545C1564.3 543 1635.7 543 1706.8 578.7C1778 614.3 1849 685.7 1884.5 721.3L1920 757L1920 1081L1884.5 1081C1849 1081 1778 1081 1706.8 1081C1635.7 1081 1564.3 1081 1493.2 1081C1422 1081 1351 1081 1280 1081C1209 1081 1138 1081 1066.8 1081C995.7 1081 924.3 1081 853.2 1081C782 1081 711 1081 640 1081C569 1081 498 1081 426.8 1081C355.7 1081 284.3 1081 213.2 1081C142 1081 71 1081 35.5 1081L0 1081Z" fill="#0066FF" stroke-linecap="round" stroke-linejoin="miter"></path></svg>);



const layout: ParentComponent = (props) => {
  
  return <main class={styles.main}>
  {wavesvg}
    <nav class={styles.navbar}>
      <img class="logo" src="logo.png" />
      <h1>Metro Lisboa</h1>
    </nav>

    {props.children}
    
    
    </main>;
};




export default layout;
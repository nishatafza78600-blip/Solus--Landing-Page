import heroImg from '../assets/Illustration_1.png';
import cartoonImg from '../assets/Illustration_2.png'

function Hero(){
    return(
        <div style={{backgroundColor:'F9E6D0', width:'100%' , minHeight:'80vh', background:'#F9E6D0', marginTop:'2rem',borderRadius:'60px',
      display:'flex',
        }}>
         <img src={cartoonImg} style={{borderRadius:'0 0 0 50px'}}></img>
        <div> <h1 style={{width:'200px !important',lineHeight:'1',fontWeight:'650',marginTop:'7rem'}}>Support For Your mental Well Being</h1>
        <p>Connect With Licenced, Therapists, councelors and Wellness coaches to support your Journey</p>
         <button style={{padding:'0.8rem', fontWeight:'bold', margin:'2rem', borderRadius:'50px',border:'none' , padding:'1rem 2rem', backgroundColor:'#00373E', color:'white'}}>Get Started</button></div>
          <img src={heroImg} style={{borderRadius:'0 0 50px 0'}}></img>
        </div>
    );
     
}

export default Hero;
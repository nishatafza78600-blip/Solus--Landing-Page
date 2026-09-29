
import flowerImg from '../assets/Illustration_7.png'
import logoImg from '../assets/solus.png'
function Footer() {
    return (
        <div style={{display:'flex', justifyContent:'center', alignItems:'center' , justifyContent:'space-evenly', marginTop:'5rem'}}>
            <div style={{ display: 'flex', flexDirection: 'column',width:'400px', height:'400px',backgroundColor:'white',borderRadius:'50px'
                ,padding:'3rem',justifyContent:'space-evenly,',
             }}><img src={logoImg} style={{width:'200px'}}></img>
               <div style={{display:'flex',marginTop:'4rem'}}>


 <div ><ul style={{listStyle:'none'}}>
                    <li>About</li>
                    <li>Services</li>
                    <li>Therapist</li>
                    <li>Recources</li>
                    <li>Contact</li>
                </ul></div>

                <div><ul style={{listStyle:'none'}}>
                    <li>Instagram</li>
                    <li>Facebook</li>
                    <li>Youtube</li>
                    <li>LinkedIN</li>
                </ul></div>

                <div><ul style={{listStyle:'none'}}>
                    <li>Terms Of Use</li>
                    <li>Privacy Policy</li>
                </ul></div>




               </div>
            </div>
            <div style={{ display: 'flex', flexDirection: 'column',width:'400px', height:'400px', backgroundColor:'#00373E',borderRadius:'50px',padding:'3rem' }}>
                <h1 style={{lineHeight:'1',color:'white'}}>Find Support,Guidance and Balance</h1>
            <button style={{padding:'0.8rem', margin:'2rem', borderRadius:'50px' , padding:'0.8rem 2rem' , border:' solid 3px #00373E', color:'#00373E ', fontSize:'15px',fontWeight:'bold', backgroundColor:'#f6f6f6'}}>Find Support Now</button>
            </div>
        </div>
    );
}

export default Footer;
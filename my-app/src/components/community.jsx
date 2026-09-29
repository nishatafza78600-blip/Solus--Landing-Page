  
import girlImg from '../assets/Illustration_6.png'
  
  
  function Community(){
    return(
        <div style={{ width: '100%', minHeight: '80vh', display: 'flex', marginTop: '4rem' }}>
             <div style={{ padding:'20px'}}>
               <h1 style={{ color:'#00373E', width: '500px', lineHeight: '1',marginTop:'3rem' 
                 ,fontWeight:'650'
               }}>Wellness Coaching</h1>
               <p style={{ width:'600px'
                ,marginLeft:'2rem',
                 color:'#00373E'}}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Temporibus, ullam! Lorem ipsum dolor sit amet consectetur adipisicing.</p>
                <p style={{ width:'600px',
                marginTop:'2rem',
                marginLeft:'2rem',
                 color:'#00373E'}}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Temporibus, ullam! Lorem ipsum dolor sit amet consectetur adipisicing. </p>
               <button style={{padding:'0.8rem', fontWeight:'bold',
                marginright:'250px'
                , margin:'2rem', borderRadius:'50px',border:'none' , padding:'1rem 2rem', backgroundColor:'#00373E', color:'white'}}>Find a Therapist</button>
             </div>
             <img src={girlImg} style={{height:'400px'}}></img>
           </div>
    )
  }

  export default Community;
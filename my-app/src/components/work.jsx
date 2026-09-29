
import Therapist from '../assets/Frame 4.png'


function Work() {
  return (
    <div style={{ width: '100%', minHeight: '80vh', display: 'flex', marginTop: '4rem' }}>
      <div style={{ padding:'20px'}}>
        <h1 style={{ color:'#00373E', width: '500px', lineHeight: '1',marginTop:'3rem',fontWeight:'650' }}>We Help You Prioritize Your Mental Health</h1>
        <p style={{ width:'400px',marginLeft:'2rem', color:'#00373E'}}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Temporibus, ullam!</p>
        <button style={{padding:'0.8rem', margin:'2rem', fontWeight:'bold',borderRadius:'50px',border:'none' , padding:'1rem 2rem', backgroundColor:'#00373E', color:'white'}}>Find a Therapist</button>
      </div>
      <img src={Therapist}></img>
    </div>
  )
}

export default Work;
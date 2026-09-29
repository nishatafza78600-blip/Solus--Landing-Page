
import heartImg from '../assets/Illustration_10.png'

function Card(){
    return(
        <div style={{display:'flex',justifyContent:'space-evenly'}}>
            <div style={{width:'450px',minHeight:'350px', backgroundColor:'#F9E6D0', borderRadius:'50px' }}>
          <h1 style={{lineHeight:'1', color:'#00373E ',fontWeight:'650'}}>Mindfulness & dedication</h1>
         <div style={{display:'flex'}}> <p style={{width:'200px', marginLeft:'2rem', color:'#00373E '}} >Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nostrum, dolore!</p>
          <img src={heartImg} style={{width:'100px', marginLeft:'3rem'}} ></img></div>
          <button style={{padding:'0.8rem',backgroundColor:'#F9E6D0', margin:'2rem', borderRadius:'50px' , padding:'0.8rem 2rem' , border:' solid 3px #00373E', color:'#00373E ', fontSize:'15px',fontWeight:'bold'}}>Learn More</button>
            </div>
             <div style={{width:'450px',minHeight:'350px', backgroundColor:'#f1f1a3', borderRadius:'50px' }}>
          <h1 style={{lineHeight:'1', color:'#00373E ',fontWeight:'650'}}>One-ON-One Therapy</h1>
          <div style={{display:'flex'}}> <p style={{width:'200px', marginLeft:'2rem', color:'#00373E '}} >Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nostrum, dolore!</p>
          <img src={heartImg} style={{width:'100px', marginLeft:'3rem'}} ></img></div>
           <button style={{padding:'0.8rem', margin:'2rem', borderRadius:'50px' , fontWeight:'bold', padding:'0.8rem 2rem' , border:' solid 3px #00373E', color:'#00373E ', fontSize:'15px',fontWeight:'bold', backgroundColor:'#f1f1a3'}}>Learn More</button>
            </div>
        </div>
    )
}

export default Card;
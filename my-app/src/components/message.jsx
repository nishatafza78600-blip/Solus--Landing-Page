function Message() {
    return (
        <div style={{ display: 'flex', backgroundColor:'white' , width:'900px', borderRadius:'50px',height:'400px',
         alignItems:'center',marginLeft:"7rem",
         justifyContent:'center',
         justifyContent:'space-evenly'}}>
            <div>
                <h2 style={{color:'#00373E',fontWeight:'650'}}>Contact Details</h2>
                <p style={{color:'#00373E'}}><span style={{fontWeight:'bold'}}>Email</span>: abcd@gmail.com</p>
                <p style={{color:'#00373E'}}><span style={{fontWeight:'bold'}}>Phone</span>: 033333333333</p>
                <p style={{color:'#00373E'}}><span style={{fontWeight:'bold'}}>Address</span>: abcstreet, xyz road, karachi</p>
                <p style={{color:'#00373E'}}>We typically respond within 12 hours.</p>
            </div>
            <div>
                <h3 style={{color:'#00373E',fontWeight:'650'}}>Send Us a Message</h3>
                <div style={{display:'flex',borderRadius:'50px',
                    alignItems:'center',
                    justifyContent:'center',
                     flexDirection:'column', height:'250px',width:'300px', backgroundColor:'#FDF7F1',
                     justifyContent:'space-evenly'}}>
                    <input type="text" placeholder="Email" style={{border:'none', borderBottom:'2px solid #00373E', color:'#FDF7F1'}}/>
                    <input type="text" placeholder="Message"  style={{border:'none', borderBottom:'2px solid #00373E', color:'#FDF7F1'}}/>
                </div>
            </div>
        </div>
    );
}

export default Message;
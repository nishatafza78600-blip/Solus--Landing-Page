import logoImg from '../assets/solus.png';

function Navbar(){
    return(
        <nav style={{display: 'flex', justifyContent: 'space-between', padding: '15px 30px', backgroundColor: '#f59855', color: '#fff', alignItems: 'center', borderRadius:'40px' }}>
            <ul style={{ display: 'flex', listStyle: 'none', gap: '90px', margin: 0, padding: 0, alignItems:'center' , color:'#00373E', fontWeight:'600'}}>
                <li>Home</li>
                 <li>About</li>
                  <li>Service</li>
                   <li> <img src={logoImg}></img></li>
                   <li>Therapists</li>
                    <li>Recources</li>
                     <li>Contact</li>
            </ul>
        </nav>
    
    );
}

export default Navbar;
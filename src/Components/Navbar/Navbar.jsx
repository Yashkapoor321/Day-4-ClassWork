

const Navbar = ()=> {
    return(
        <div style={{display:'flex', alignItems:'center', justifyContent:'space-around', backgroundColor:'light-grey', height:'50px',}} className="navbar">
            <div style={{display:'flex', alignItems:'center',gap:'35px' }}>
                <h1>Hootsuite</h1>
                <h3>Platform</h3>
                <h3>Plans</h3>
                <h3>Enterprise</h3>
                <h3>Resources</h3>
                <h3>Education</h3>
            </div>

            <div style={{display:'flex', alignItems:'center', gap:'35px'}}>
                <span>Contact Us</span>
                <span>Log In</span>
                <button style={{backgroundColor:'green', color:'white', height:'40px', width:'80px', borderRadius:'10px', border:'none'}}>Sign Up</button>
            </div>
        </div>
    )
}

export default Navbar;
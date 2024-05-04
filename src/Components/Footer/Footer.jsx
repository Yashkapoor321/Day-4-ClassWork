import image1 from './image1.png';
 import image2 from './image2.png';
import image3 from './image3.png';

const Footer = () => {
    return(
        <div style={{display:'flex', alignItems:'center', justifyContent:'center', gap:'100px', marginTop:'2%'}}>

            <div style={{display:'flex', flexDirection:'column', alignItems:'center'}}>
                <img src={image1} alt="p1" style={{width:'200px', height:'200px', marginTop:'8px'}} />
                <h5>2,500</h5>
                <p>enterprise organizations successfully launched</p>
            </div>

            <div style={{display:'flex', flexDirection:'column', alignItems:'center'}}>
                <img src={image2} alt="p2" style={{width:'200px', height:'200px', marginTop:'12px'}} />
                <h5>45,000</h5>
                <p>enterprise users onboarded seamlessly</p>
            </div>

            <div style={{display:'flex', flexDirection:'column', alignItems:'center'}}>
                <img src={image3} alt="p3" style={{width:'200px', height:'200px', marginTop:'8px'}} />
                <h5>200,000+</h5>
                <p>professionals trained on product and strategy</p>
            </div>  
        </div>
    )
}

export default Footer;
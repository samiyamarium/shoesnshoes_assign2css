import React from 'react';
import './App.css'
import hom from './hom.png';
import wit from './wit.png';
const Home=()=>{
    return(<div>
        <div className='back'><b className='back'>HOME</b></div>
        <div className='hom'><div className='para'><img className='disp1' src={hom} alt="hey"/><p><b><i>This is for you!!!!</i></b></p></div><p className='para'><b><i>Shoes are one way to reflect your personality..<br/><br/>Colours, designs and the way you carry them says it all<br/><br/>but wait??!! <br/><br/>Does it bother you to go shop to shop and finding no best fit after all that  tiring drill??!!<br/><br/>No more worries!! we have just launched an onine shop to fit the best to every one!!</i></b></p><div className='para'><p className='para'>We are here</p><img className='disp1' src={wit} alt="with"/></div>
</div>
        </div>
    )
}
export default Home;
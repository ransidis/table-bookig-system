import './UnderConstruction.css'
import developing from './developing.png'


function UnderConstruction(){

    return(
        <div className='construction-container'>
        <img src={developing}/>
        <h1>Page Under Construction!</h1>
        </div>
        
    )
}

export default UnderConstruction;
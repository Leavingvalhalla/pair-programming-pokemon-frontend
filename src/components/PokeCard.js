import {Link} from 'react-router-dom'

function PokeCard({pokeman}) {
    const {img, name} = pokeman
    return (
        <div className='card'>
            <img src={img} /> 
            <h1>{name}</h1>
            {/* <button><Link>Details</Link></button> */}
        </div>
    )
}
export default PokeCard
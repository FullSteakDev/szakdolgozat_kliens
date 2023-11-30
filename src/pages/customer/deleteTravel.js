import { useState } from "react"
import { Link } from "react-router-dom"
import { removeTravel } from "../../api/authApi"
import { useParams } from "react-router-dom";
import '../manager/style/manager.css'

const RemoveTravel = () => {
    const { Id, name } = useParams();

      const [error, setError] = useState(false)
      const [succes, setSucces] = useState(false)
  
      const onSubmit = async (e) => {
        e.preventDefault()
  
        try{
            const { data } = await removeTravel(Id)         
          setError('')
          setSucces(data.message)
        } catch (error) {
          setError(error.response.data.errors)
          setSucces('')
        }
      }
    return (
        <div className="customer-login">
        <form onSubmit={onSubmit} className="customer-box">
            <h1>Utazás eltávolítása</h1>
            <p>Biztos törölni szeretné a(z)</p>
            <h3>{name}</h3>
            <p>utazást a bakancslistáról?</p>

            {error && <div className="error-message">{error}</div>}

            {succes && <div className="error-message">{succes}</div>}

            <button type="submit">Törlés</button>
                <button><Link to="/reservedtravels">Vissza</Link></button>
            </form>
        </div>
    )
}

export default RemoveTravel
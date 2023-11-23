import supabase from "../config/supabaseClient"
import { Link } from 'react-router-dom'

const SmoothieCard = ({ smoothie, onDelete}) => {

  const handleDelete = async () => {
    const { data, error } = await supabase
      .from('smoothies')
      .delete()
      .eq('id', smoothie.id);
  
    if (error) {
      console.error(error);
    } else {
      // Log a success message or perform any other necessary actions
      console.log('Smoothie deleted successfully');
      console.log(data);
      
      // Call a callback function (onDelete) if needed
      onDelete(smoothie.id);
    }
  }
  

  return (
    <div className="smoothie-card">
      <h3>{smoothie.title}</h3>
      <p>{smoothie.method}</p>
      <div className="rating">{smoothie.rating}</div>
      <div className="buttons">
        <Link to={"/" + smoothie.id}>
          <i className="material-icons">edit</i>
        </Link>
        <i className="material-icons" onClick={handleDelete}>delete</i>
      </div>
    </div>
  )
}

export default SmoothieCard
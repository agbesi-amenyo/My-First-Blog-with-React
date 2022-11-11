import { Link } from "react-router-dom";

const NotFound = () => {
    return ( 

        <div className="not-found">
            <h2>Sorry</h2>
            <p>That page cannot be found</p>
            <p> Would you like to go <Link to ="/" > back to the homepage?</Link></p>

        </div>

     );
}
 
export default NotFound;
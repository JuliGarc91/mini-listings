//Nav requires importation of Link
// useNavigate is used in interactive App components in conjuction with this
import { Link } from "react-router-dom";
const Nav = () => {
    // deleted Header component because in this particular App Nav will contain the header and relevant links
  return (
    <header>
        <article>
            <h1>
                <Link to="/">
                    <span>Home</span>
                </Link>
            </h1>
        </article>
        <nav>
            <ul>
                <li>
                    <Link to="/create-listing">Create Listing</Link>
                </li>
                <li>
                    <Link to="/listings">All Listings</Link>
                </li>
            </ul>
        </nav>
    </header>
  );
}

export default Nav
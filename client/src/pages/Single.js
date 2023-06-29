import Edit from "../img/edit.png"
import Delete from "../img/delete.png"
import { Link } from "react-router-dom";
import Menu from "../component/Menu";

const Single = () => {
  return(
    <div className="single">
      <div className="content">
        <img src="https://images.pexels.com/photos/4230630/pexels-photo-4230630.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" alt="" />
        <div className="user">
          <img src="https://images.pexels.com/photos/4230630/pexels-photo-4230630.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" alt="" />
          <div className="info">
            <span>John</span>
            <p>Posted 2 days ago</p>
          </div>
          <div className="edit">
            <Link to={`/write?edit=2`}>
              <img src={Edit} alt="edit" />
            </Link>
              <img src={Delete} alt="delete" />
          </div>
        </div>
        <h1>Lorem ipsum dolor sit amet consectetur adipisicing</h1>
        <p>Lorem</p>
      </div>
      <div className="menu"><Menu /></div>
    </div>
  )
}

export default Single;
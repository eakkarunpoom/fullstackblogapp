import Edit from "../img/edit.png"
import Delete from "../img/delete.png"
import { Link, useLocation, useNavigate } from "react-router-dom";
import Menu from "../component/Menu";
import { useContext, useEffect, useState } from "react";
import axios from "axios";
import moment from "moment";
import { AuthContext } from "../context/authContext";


const Single = () => {
  const [post,setPost] = useState({});

  const location = useLocation()
  const navigate = useNavigate()
  const postID = location.pathname.split("/")[2]
  const {currentUser} = useContext(AuthContext)

  // console.log(post);

  const handleDelete = async() => {
    try{
      await axios.delete(`/post/${postID}`)
      navigate('/')
    }catch(err){
      console.log(err)
    }
  }

  const getText = (html) =>{
    const doc = new DOMParser().parseFromString(html, "text/html")
    return doc.body.textContent
  }

  useEffect(()=>{
    const fetchData = async ()=>{
      try{
        const res = await axios.get(`/post/${postID}`)
        setPost(res.data);
      }catch(err){
        console.log(err)
      }
    }
    fetchData();
  },[postID])
  // console.log(currentUser.username)
  // console.log(post.username)
  return(
    <div className="single">
      <div className="content">
        <img src={`../upload/${post?.img}`} alt="" />
        <div className="user">
          {post.userImg && <img src={post.userImg} alt="" />}
          <div className="info">
            <span>{post.username}</span>
            <p>Posted {moment(post.data).fromNow()}</p>
          </div>
          {currentUser.username === post.username && <div className="edit">
            <Link to={`/write?edit=2`} state={post}>
              <img src={Edit} alt="edit" />
            </Link>
              <img src={Delete} alt="delete" onClick={handleDelete} />
          </div>}
        </div>
        <h1>{post.title}</h1>
        {getText(post.desc)}
      </div>
      <div className="menu"><Menu cat={post.cat}/></div>
    </div>
  )
}

export default Single;
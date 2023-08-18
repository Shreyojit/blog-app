import React from 'react'
import "./post.css"


export default function Post() {
  return (
    <div className="post">
        <img className='postImg' src="https://images.pexels.com/photos/6685428/pexels-photo-6685428.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500" alt="" />
    
    <div className="postInfo">
        <div className="postCats">
            <span className="postCat">Music</span>
            <span className="postCat">Life</span>
        </div>
        <span className="postTitle">
            Lorem ipsum, dolor sit amet 
        </span>
        <hr/>
        <span className="postDate">1 hr ago</span>
    </div>
    <p className="postDesc">
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Vel expedita dolor provident est similique pariatur accusantium quisquam. Explicabo ducimus accusantium itaque, reiciendis aliquam vitae temporibus quas cumque doloremque nulla rerum.
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit quod reiciendis, iure nam ea, tempora magni molestiae velit architecto veniam quas eius ex, iste voluptatem magnam in fugit. Rerum, porro.
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Porro cupiditate delectus dignissimos repudiandae mollitia? Quasi commodi ipsam voluptatum soluta recusandae libero provident facere adipisci doloribus odio, deserunt, asperiores enim exercitationem?
        
    </p>
    </div>
  )
}

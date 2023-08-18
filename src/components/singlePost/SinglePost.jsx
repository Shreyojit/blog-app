import "./singlePost.css"
import React from 'react'

export default function SinglePost() {
  return (
    <div className="singlePost">
        <div className="singlePostWrapper">
        <img
          className="singlePostImg"
          src="https://images.pexels.com/photos/6685428/pexels-photo-6685428.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500"
          alt=""
        />
        <h1 className="singlePostTitle">
            Lorem ipsum dolor sit amet consectetur adipi
            <div className="singlePostEdit">
            <i className="singlePostIcon far fa-edit"></i>
            <i className="singlePostIcon far fa-trash-alt"></i>
            </div>
        </h1>
          <div className="singlePostInfo">
            <span className="singlePostAuthor">Author: <b>Saif</b></span>
          <span className="singlePostDate">1 hr ago</span>
          </div>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga itaque corporis impedit praesentium, at quasi optio repudiandae voluptates, quam ea ipsam aspernatur sed, natus maiores voluptas necessitatibus veritatis aperiam voluptate?
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Aperiam dolorum in voluptatem quis recusandae illo beatae adipisci, vero pariatur quos eos voluptatum autem nulla fugiat deserunt expedita eius tempora modi.
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse numquam repudiandae ipsam, sequi eaque cumque nisi amet commodi veritatis est? Rem, expedita alias. Autem enim laudantium, nulla mollitia necessitatibus modi.
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam libero illum itaque at dolor voluptatem debitis quas, corrupti, consectetur dignissimos hic dolores. Eveniet ullam voluptatem sequi debitis distinctio, corrupti architecto!
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sequi temporibus dolores facilis itaque a, quo aperiam vitae voluptates harum repellat ipsa nisi neque assumenda minima alias? Excepturi praesentium sapiente 
          </p>
        </div>
    </div>
  )
}

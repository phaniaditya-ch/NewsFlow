import React from 'react'

function NewsItem(props) {
  return (
    <div>
      <div className='my-5'>
        <div className="card" style={{width: "18rem"}}>
          <img src={props.imgadd} className="card-img-top" alt="missing" />
            <div className="card-body">
              <h5 className="card-title">{props.title}{props.title.length >= 45 ? "..." : ''}</h5>
              <p className="card-text">{props.description}{props.description.length >= 88 ? "..." : ''}</p>
              <a href={props.newsUrl} target='blank' className="btn btn-primary">READ MORE</a>
            </div>
        </div>
      </div>
    </div>
  )
}

export default NewsItem

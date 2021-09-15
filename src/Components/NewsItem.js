import React, { Component } from "react";

export default class NewsItem extends Component {

    // constructor() {
    //     super();
    // }
  render() {
    let { title, description,urlToImage,newsUrl,author,date,source } = this.props;
    return (
      <div className=" my-3">
        <div className="card cardy" >
        <span className="position-absolute top-0 translate-middle badge rounded-pill bg-secondary"
         style={{left: '90%', zIndex: '1'}}> {source}
                        </span>
          <img src={urlToImage?urlToImage:
            "https://images.unsplash.com/photo-1588681664899-f142ff2dc9b1?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1000&q=80"}
            className="card-img-top top-card" alt="..." />
          <div className="newsitemy card-body">
            <h5 className="card-title">{title}</h5>
            <p className="card-text">
              {description}
            </p>
            <p className="card-text"><small className="text-muted">-{author?author : "Unknown"} on {new Date(date).toGMTString()}</small></p>

            
            <a rel="noreferrer" href={newsUrl} target="_blank" className="btn btn-primary">
              Read More
            </a>

          </div>
        </div>
      </div>
    );
  }
}

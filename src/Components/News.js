import React, { Component } from "react";
import axios from "axios";
import NewsItem from "./NewsItem";

const apikey = process.env.REACT_APP_KEY;
export default class News extends Component {
  constructor() {
    super();
    console.log("news.js constructor");
    this.state = {
      articles: [],
      loading: false,
    };
    console.log("Artciled:::", this.state.articles);
  }
        async componentDidMount() {
            let base_URl =
            "https://newsapi.org/v2/everything?" +
            "q=Apple&" +
            "from=2021-09-12&" +
            "sortBy=popularity&" +
            "apiKey=" +
            `${process.env.REACT_APP_KEY}`;
            let { data } = await axios.get(base_URl);
            this.setState({ articles: data.articles });
            console.log("Artcikkles", this.state.articles);
        }

  render() {
    return (
      <div className="asder my-3">
        This is A Nesws Component.
        <div className="row">
          {console.log(this.state.articles)}

          {this.state.articles.map((element) => {
            return (
              <div className="col-md-4" key={element.url}>
                <NewsItem
                  title={element.title ? element.title.slice(0,50) : ""}
                  description={element.description ? element.description.slice(0,100) : ""}
                  urlToImage={element.urlToImage}
                  newsUrl={element.url}
                />
              </div>
            );
          })}
        </div>
      </div>
    );
  }
}

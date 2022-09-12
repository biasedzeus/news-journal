import React, { Component } from "react";
import axios from "axios";
import NewsItem from "./NewsItem";
import PropTypes from "prop-types";
import Loading from "./Loading";

export default class News extends Component {
  static defaultProps = {
    country: "us",
    pageSize: 6,
    category: "general",
  };

  static propTypes = {
    country: PropTypes.string,
    pageSize: PropTypes.number,
    category: PropTypes.string,
  };

  constructor(props) {
    super(props);
    console.log("news.js constructor");
    this.state = {
      articles: [],
      loading: false,
      page: 1,
    };
  }
  

  async updateNews() {
    this.setState({ loading: true });

    let { data } = await axios.get(
      `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=${process.env.REACT_APP_KEY}&pageSize=${this.props.pageSize}`
    );
    this.setState({ articles: data.articles,
       loading: false,
      totalResults:data.totalResults });
  }

            async componentDidMount() {
              this.updateNews();
          }

        handlePrevClick = async () => {
            this.setState({ page: this.state.page - 1 });
            this.updateNews();
        }

        handleNextClick = async () => {
            this.setState({ page: this.state.page + 1 });
            this.updateNews()
        }

   

  render() {
    return (
      <div className="container my-5">
        {this.state.loading && <Loading />}
        <div className="row">
          {console.log(this.state.articles)}
          {!this.state.loading &&
            this.state.articles.map((element) => {
              return (
                <div className="col-lg-4 col-md-6 col-sm-12" key={element.url}>
                  <NewsItem
                    title={element.title ? element.title : ""}
                    description={
                      element.description
                        ? element.description.slice
                        : element.title
                    }
                    urlToImage={element.urlToImage}
                    newsUrl={element.url}
                    author={element.author}
                    date={element.publishedAt}
                    source={element.source.name}
                  />
                

                </div>
              );
            })}
        </div>
        <div className="container d-flex justify-content-between">
                    <button disabled={this.state.page <= 1} type="button" className="btn btn-dark" onClick={this.handlePrevClick}> &larr; Previous</button>
                    <button disabled={this.state.page + 1 > Math.ceil(this.state.totalResults / this.props.pageSize)} type="button" className="btn btn-dark" onClick={this.handleNextClick}>Next &rarr;</button>
                </div>
        
      </div>
    );
  }
}

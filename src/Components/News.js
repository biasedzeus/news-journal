import React, { Component } from "react";
import axios from "axios";
import NewsItem from "./NewsItem";
import PropTypes from 'prop-types'
import Loading from "./Loading";



export default class News extends Component {
  
  static defaultProps = {
    country: "in",
    pageSize: 8,
    category: "general",
  };

  static propTypes = {
    country: PropTypes.string,
    pageSize: PropTypes.number,
    category: PropTypes.string,
  };

  constructor() {
    super();
    console.log("news.js constructor");
    this.state = {
      articles: [],
      loading: false,
      page: 1,
    };
  }
  async componentDidMount() {

      this.setState({loading:true});

    let { data } = await axios.get(`https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=${process.env.REACT_APP_KEY}&pageSize=${this.props.pageSize}`
    );
    this.setState({ articles: data.articles,
                  loading:false,

    });
    console.log("Artcikkles", this.state.articles);
  }

  handlePrevClick = async () => {
    console.log("Previous");

    let { data } = await axios.get(
    `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=${process.env.REACT_APP_KEY}&pageSize=${this.props.pageSize}&page=${this.state.page-1}`

    );
    this.setState({loading: true});
    this.setState({
      page: this.state.page - 1,
      articles: data.articles,
      totalResults: data.totalResults,
      loading:false
    });
  };

  handleNextClick = async () => {

    let { data } = await axios.get(
    `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=${process.env.REACT_APP_KEY}&pageSize=${this.props.pageSize}&page=${this.state.page+1}`

    );
    this.setState({loading: true});
    this.setState({
      page: this.state.page + 1,
      articles: data.articles,
      totalResults: data.totalResults,
      loading:false
    });
  };

  render() {
    return (
      <div className="container my-5">
        {this.state.loading && <Loading/>}
        <div className="row">
          {console.log(this.state.articles)}

          {!this.state.loading &&this.state.articles.map((element) => {
            return (
              <div className="col-md-4" key={element.url}>
                <NewsItem
                  title={element.title ? element.title.slice(0, 100) : ""} 
                  description={
                    element.description ? element.description.slice(0, 100) : element.title
                  }
                  urlToImage={element.urlToImage}
                  newsUrl={element.url}
                  author ={element.author}
                  date={element.publishedAt.slice(0,10)}
                  source={element.source.name}

                />
                
              </div>
            );
          })}
          
        </div>
        
        <div className="container d-flex justify-content-between">
                <button disabled={this.state.page<=1} type="button" className="btn btn-dark" onClick={this.handlePrevClick}> &larr; Previous</button>
                <button disabled={this.state.page + 1 > Math.ceil(this.state.totalResults/this.props.pageSize)} type="button" className="btn btn-dark" onClick={this.handleNextClick}>Next &rarr;</button>
                </div>
      </div>
    );
  }
}

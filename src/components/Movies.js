import React, { Component } from "react";
import { movies } from "./GetMovies";

export default class Movies extends Component {
  constructor() {
    super();
    this.state = {
      hover: "",
      parr: [1]
    };
  }

  render() {
    let movie = movies.results;
    return (
      <div>
        {movie.length === 0 ? (
          <div class="spinner-border text-primary" role="status">
            <span class="visually-hidden">Loading...</span>
          </div>
        ) : (
          <div>
            <h3 className="text-center">
              <strong>Trending</strong>
            </h3>
            <div className="movies-list">
              {movie.map((movieObj, index) => (
                <div
                  className="card movies-card"
                  onMouseEnter={() => this.setState({ hover: movieObj.id })}
                  onMouseLeave={() => this.setState({ hover: "" })}
                >
                  <img
                    src={`https://image.tmdb.org/t/p/original${movieObj.backdrop_path}`}
                    className="card-img-top movies-img"
                    alt={`${movieObj.title}`}
                  />
                  <h5 className="card-title movies-title">
                    {movieObj.original_title}
                  </h5>
                  <div
                    className="button-wrapper"
                    style={{
                      display: "flex",
                      width: "100%",
                      justifyContent: "center !important",
                      left: "20px"
                    }}
                  ></div>
                  {/* <p className="card-text banner-text">{movieObj.overview}</p> */}

                  {this.state.hover === movieObj.id && (
                    <a className="btn btn-primary movies-button">
                      Add To favourites
                    </a>
                  )}
                </div>
              ))}
            </div>
            <div style={{ display: "flex", justifyContent: "center" }}>
              <nav aria-label="Page navigation example">
                <ul className="pagination">
                  <li className="page-item">
                    <a className="page-link" href="#" aria-label="Previous">
                      {/* <span aria-hidden="true">&laquo;</span> */}
                      Prev
                    </a>
                    {this.state.parr.map((value) => (
                      <a className="page-link" href="#" aria-label="Previous">
                        {value}
                      </a>
                    ))}
                    <a className="page-link" href="#" aria-label="Previous">
                      {/* <span aria-hidden="true">&laquo;</span> */}
                      Next
                    </a>
                  </li>
                </ul>
              </nav>
            </div>
          </div>
        )}
      </div>
    );
  }
}

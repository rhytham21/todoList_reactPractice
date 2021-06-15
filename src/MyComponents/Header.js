import React from "react";
import PropTypes from "prop-types";

export default function Header(props) {
  return (
    <div>
      <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
        <a class="navbar-brand" href="#">
          {props.title}
        </a>
        <button
          class="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>

        <div class="collapse navbar-collapse" id="navbarSupportedContent">
          {props.searchBar ? (
            <form class="form-inline my-2 my-lg-0">
              <input
                class="form-control mr-sm-2"
                type="search"
                placeholder="Search"
                aria-label="Search"
              />
              <button
                class="btn btn-outline-success my-2 my-sm-0"
                type="submit"
              >
                Search
              </button>
            </form>
          ) : (
            ""
          )}
        </div>
      </nav>
    </div>
  );
}

Header.defaultProps = {
  title: "Your Title Here",
  searchBar: true,
};

Header.propTypes = {
  title: PropTypes.string,
  searchBar: PropTypes.bool.isRequired,
};

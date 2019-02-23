import React, { Component } from "react";
import Pagination from "react-js-pagination";
//require("bootstrap/less/bootstrap.less");

class Paginator extends Component {
  constructor(props) {
    super(props);
    this.state = {
      activePage: 1
    };
    this.handlePageChange = this.handlePageChange.bind(this);
  }
 
  handlePageChange(pageNumber) {
    console.log(`active page is ${pageNumber}`);
    this.setState({activePage: pageNumber});
  }
 
  render() {
    return (
      <div>
        <h1>Paginator! {this.state.activePage}</h1>
        <Pagination
          activePage={this.state.activePage}
          itemsCountPerPage={1}
          totalItemsCount={10}
          pageRangeDisplayed={5}
          onChange={this.handlePageChange}
        />
      </div>
    );
  }
}
 
export default Paginator;
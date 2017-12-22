import React, {Component} from 'react';

class SearchBar extends Component {

    constructor(props) {
        super(props);
        this.state = {
            term: ''
        }
        props.onChangeSearchTerm(this.state.term);

    }

    onInputchange(term) {
        console.log(term);
        this.setState({term});
        this.props.onChangeSearchTerm(term);
    }

    render() {
        var mar={
            marginTop:"20px",
            marginBottom:"20px"
        };
        return (
            <div style={mar}>
                <input placeholder={"Search"}  className="form-control bg-transparent mr-sm-2 " value={this.state.term} onChange={(event) => this.onInputchange(event.target.value)}/>
            </div>
        );
    }
}

export default SearchBar;
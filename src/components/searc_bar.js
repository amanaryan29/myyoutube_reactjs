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
        return (
            <div className="search-bar">
                <input value={this.state.term} onChange={(event) => this.onInputchange(event.target.value)}/>
            </div>
        );
    }
}

export default SearchBar;
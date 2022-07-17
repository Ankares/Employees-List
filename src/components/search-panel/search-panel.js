import './search-panel.css';
import { Component } from 'react';

// search employees
class SearchPanel extends Component {
    constructor(props) {
        super(props);
        this.state = {
            search: ''
        }
    }

    updateSearch = (e) => {
        const search = e.target.value;
        this.setState({search});
        this.props.onUpdateSearch(search);
    }

    render() {
        return (
            <input type="text" 
                 className="form-control search-input" 
                 placeholder="Найти сотрудника"
                 value={this.state.search}
                 onChange={this.updateSearch}
             />
        )
    }
}

export default SearchPanel;
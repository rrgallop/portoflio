import React from 'react';
import { Paper, TextField } from '@material-ui/core';

class SearchBar extends React.Component {
    state = {
        searchTerm: '',
    }

    doChange = (event) => {
        this.setState({searchTerm: event.target.value})
    }

    doSubmit = (event) => {
        const { searchTerm } = this.state;
        const { onFormSubmit } = this.props;
        onFormSubmit(searchTerm);

        event.preventDefault();
        
    }

    render(){
        return(
            <div>
                <form onSubmit={this.doSubmit}>
                    <TextField fullWidth color="secondary" label="Search YouTube..." onChange={this.doChange}/>
                    <br/><br/>
                </form>
            </div>
        )
    }
}

export default SearchBar;
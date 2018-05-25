import React, { Component } from 'react';
import { connect } from 'react-redux';
import {movieslist, directorslist} from "../actions";
import { bindActionCreators } from 'redux';
import Movielist from '../components/Movielist';
import DirectorList from '../components/DirectorList';

class App extends Component {
    componentWillMount() {
        this.props.movieslist();
        this.props.directorslist();
    }
    
    render() {
        console.log(this.props);
        return (
            <div>
                <Movielist movies={this.props.data.movies}/>
                <DirectorList directorslist={this.props.data.directors} />
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        data: state.data
    }
}

const mapDispatchToProps = (dispatch) => {
    return bindActionCreators({
        movieslist,
        directorslist
    },dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
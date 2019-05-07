import {connect} from 'react-redux';
import App from '../components';
import { fetchData } from '../actions';

const mapStateToProps = (state, props) => {
    return {
        data: state.data
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        readEndpoint: (url) => dispatch(fetchData(url))
    };
};

export default (connect(mapStateToProps, mapDispatchToProps)(App));
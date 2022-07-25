import Lists from "../List/List";
import MyComponent from "../Map/Map";
import { Grid } from '@mui/material';
import { useEffect } from "react";
import { connect } from 'react-redux';
import {
    fetchAllRestourants
} from '../../store/action/action';

const Home = (props) => {
    useEffect(() => {
        props.fetchAllRestourants()
    }, [props])

    return (<Grid
        container
        direction="row"
        justifyContent="space-between"
        alignItems="center">
        <Lists />
        <MyComponent />
    </Grid>);
}
const mapStateToProps = () => ({});

const mapDispatchToProps = (dispatch) => ({
    fetchAllRestourants: () => (dispatch(fetchAllRestourants()))
});

export default connect(mapStateToProps, mapDispatchToProps)(Home);
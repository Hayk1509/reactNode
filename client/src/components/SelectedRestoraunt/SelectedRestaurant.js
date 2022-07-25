import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import StarIcon from '@mui/icons-material/Star';
import StarBorderIcon from '@mui/icons-material/StarBorder';
import { connect } from 'react-redux';
import {
    setRoutePath
} from '../../store/action/action';
import {
    useNavigate
} from "react-router-dom";

const SelectedRestaurant = (props) => {
    let navigate = useNavigate();

    let recItem = [0, 0, 0, 0, 0]
    const { _id, name,city, desc, rating } = props.selectedResourant
    for (let index = 0; index < rating; index++) {
        if (index < rating) {
            recItem[index] = 1
        } else {
            return recItem[index] = 0
        }

    }
    return (
        <Card sx={{ maxWidth: 600, margin: 3 }} key={_id}  >
            <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                    {name}
                </Typography>
                <Typography gutterBottom variant="h4" component="div">
                {city}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                    {desc}
                </Typography>
            </CardContent>
            <CardContent>
                {recItem.map((item, index) => {
                    return item ? <StarIcon key={index} /> : <StarBorderIcon key={index} />
                })}
            </CardContent>
            <CardActions sx={{ justifyContent: 'space-around' }}>
                <Button size="medium"
                onClick={() => {
                    props.setRoutePath("/")
                    navigate("/")
                }}
                >Back</Button>
            </CardActions>
        </Card>
    );
}
const mapStateToProps = (state) => ({
    selectedResourant: state.selectedResourant
});

const mapDispatchToProps = (dispatch) => ({
    setRoutePath: (path) => (dispatch(setRoutePath(path)))
});

export default connect(mapStateToProps, mapDispatchToProps)(SelectedRestaurant);
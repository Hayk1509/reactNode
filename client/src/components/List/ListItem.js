import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import StarIcon from '@mui/icons-material/Star';
import StarBorderIcon from '@mui/icons-material/StarBorder';
import { connect } from 'react-redux';
import {
    selectMapCenter, getSelectedRestaurant, setRoutePath
} from '../../store/action/action';
import {
    useNavigate
} from "react-router-dom";
const MediaCard = (props) => {

    let navigate = useNavigate();
    const { item } = props
    let recItem = [0, 0, 0, 0, 0]
    for (let index = 0; index < item.rating; index++) {
        if (index < item.rating) {
            recItem[index] = 1
        } else {
            return recItem[index] = 0
        }

    }

    return (
        <Card sx={{ maxWidth: 600, margin: 3 }} key={item._id}  >
            <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                    {item.name}
                </Typography>
                <Typography gutterBottom variant="h4" component="div">
                    {item.city}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                    {item.desc}
                </Typography>
            </CardContent>
            <CardContent>
                {recItem.map((item, index) => {
                    return item ? <StarIcon key={index} /> : <StarBorderIcon key={index} />
                })}
            </CardContent>
            <CardActions sx={{ justifyContent: 'space-around' }}>
                <Button size="medium" onClick={() => {
                    props.getSelectedRestaurant(item);
                    props.setRoutePath(`${item._id}`);
                    navigate(item._id)
                }}>Learn More</Button>
                <LocationOnIcon fontSize='large' cursor="pointer" onClick={() => {
                    props.selectMapCenter(item.location);
                }} />
            </CardActions>
        </Card>
    );
}
const mapStateToProps = () => ({});
const mapDispatchToProps = (dispatch) => ({
    selectMapCenter: (i) => (dispatch(selectMapCenter(i))),
    setRoutePath: (i) => (dispatch(setRoutePath(i))),
    getSelectedRestaurant: (i) => (dispatch(getSelectedRestaurant(i)))
});

export default connect(mapStateToProps, mapDispatchToProps)(MediaCard);


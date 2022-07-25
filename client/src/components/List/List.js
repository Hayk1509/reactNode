import MediaCard from "./ListItem";
import List from '@mui/material/List';
import { connect } from 'react-redux';

const Lists = (props) => {
    let items = props.restourant.map((item) => <MediaCard item={item} key={item._id} />)
    return <List sx={{ width: '100%', maxWidth: "50%", maxHeight: "600px", overflow: 'auto', bgcolor: 'lavender' }}>
        {items}
    </List>
}

const mapStateToProps = (state) => ({
    restourant: state.restourant
});

const mapDispatchToProps = () => ({
});

export default connect(mapStateToProps, mapDispatchToProps)(Lists);



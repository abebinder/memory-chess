import React from 'react';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import {FixedSizeList} from 'react-window';
import {Opening} from "./EcoLoader";

interface VirtualizedOpeningListProps {
    openings: Opening[],
    onClickCallback: Function
}

interface VirtualizedOpeningListState {
    selectedIndex: number
}

class VirtualizedOpeningList extends React.Component<VirtualizedOpeningListProps, VirtualizedOpeningListState> {

    constructor(props) {
        super(props);
        //Only initialize state like this in constructor. Everywhere else use setstate https://stackoverflow.com/a/35548362
        this.state = {
            selectedIndex: 0,
        }
        this.renderRow = this.renderRow.bind(this);
    }

    handleListItemClick(index) {
        this.setState({
            selectedIndex: index,
        })
        this.props.onClickCallback(index)
    }

    renderRow(props) {
        const {index, style} = props;
        return (
            <ListItem
                button style={style}
                key={index}
                selected={index === this.state.selectedIndex}
                onClick={() => this.handleListItemClick(index)}
            >
                <ListItemText primary={`${this.props.openings[index].name}`}/>
            </ListItem>
        );
    }

    render() {
        return (
            <FixedSizeList height={600}
                           width={300}
                           itemSize={100}
                           itemCount={this.props.openings.length}
                           state={this.state}
            >
                {this.renderRow}
            </FixedSizeList>
        )
    }
}

export default VirtualizedOpeningList;
import React, { Component } from 'react';
import Item from './item';

export default class List extends Component {

    static propTypes = {
        data: React.PropTypes.array,
        open: React.PropTypes.bool,
        selected: React.PropTypes.array,
        active: React.PropTypes.array
    };

    static defaultProps = {
        data: [],
        open: true,
        selected: [],
        active: []
    };

    // Ul Click 仅传递
    _handleClick(actives) {
        this.props.onClick(actives);
    };

    render() {
        let { data, open, selected, active, selectKey, opened } = this.props,
            divStyle = {
                display: open || opened ? 'block' : 'none'
            },
            self = this;

        return (
            <ul style={divStyle}>
                {
                    data.map(item => {
                        return (
                            <Item
                                key={item.name}
                                data={item}
                                opened={opened}
                                selected={selected}
                                active={active}
                                selectKey={selectKey}
                                onClick={self::self._handleClick}
                            />
                        );
                    })
                }
            </ul>
        );
    }
}


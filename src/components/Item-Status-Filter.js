import React, { Component } from 'react';

export default class ItemStatusFilter extends Component {
    render() {
        return ( <
            div className = 'btn-group' >
            <
            button type = 'button'
            className = 'btn btn-info' >
            All <
            /button> <
            button type = 'buuton'
            className = 'btn btn-outline-secondary' >
            Active <
            /button> <
            button type = 'btn btn-outline-secondary' >
            Done <
            /button> <
            /div>
        )
    }
}
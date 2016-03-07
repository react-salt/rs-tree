import React, { Component } from 'react';
import Tree from '../src/tree.js';
import DATA from './data';
import '../assets/index.less';

export default class Example extends Component {

    state = {
        data: DATA[0].children,
        selected: '/pages/price/weakarea.jsp'
    };
    
    render() {
        return (
            <div style={{width: '200px'}}>
                <Tree {...this.state} opened/>
            </div>
        );
    }
}

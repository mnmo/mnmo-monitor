import {Component} from 'react';
import template from '../templates/rowheaders.jsx';
import merge from 'lodash/object/merge';
import keys from 'lodash/object/keys';

class RowHeaders extends Component {
    shouldComponentUpdate(nextProps) {
        return (
            (nextProps.ui.lastVisibleRow !== this.props.ui.lastVisibleRow) ||
            (nextProps.rows.lastLoad > this.props.rows.lastLoad) ||
            (nextProps.ui.screenWidth !== this.props.ui.screenWidth) ||
            (nextProps.ui.screenHeight !== this.props.ui.screenHeight) ||
            (nextProps.columns.enabled.length !== this.props.columns.enabled.length)
        );
    }
    render() {
        let p = merge({}, this.props);
        if (p.rows.type === 'detailed' && p.rows.headers){
            let rowsWithSeparators = [];
            let varsCount = keys(p.vars.combos).length;
            p.rows.headers.forEach( (row, key) => {
                if (key % varsCount === 0){
                    //duplicate row
                    let rowCopy = row.slice();
                    rowCopy[2] = 'separator';
                    rowsWithSeparators.push(rowCopy);
                }
                rowsWithSeparators.push(row);
            });
            p.rows.headers = rowsWithSeparators;
        }
        // console.log('render RowHeaders', this.props.rows.headers);
        return template(p);
    }
}

export default RowHeaders;
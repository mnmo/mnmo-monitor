import React from 'react';
import columnHeaderRenderer from './tableheadercell.jsx';
import tableStyles from '../styles/table';
import merge from 'lodash/object/merge';

export default (p) => {

    return (
        <div style={merge({
            width: p.tableWidth - p.columnWidth,
            overflow: 'hidden',
            // backgroundColor: 'green',
            textAlign: 'center',
        }, tableStyles(p).borderBottom)}>
            <div
                style={{
                    display: 'table-row',
                    height: p.rowHeight
                }}
            >
                {p.columns.enabled.map(
                    (column, key) => columnHeaderRenderer(column, key, p)
                )}
            </div>
        </div>
    );
};
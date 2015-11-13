import cellRenderer from './tablecell.jsx';

function rowHeaderCell(headers, index){
    let cellData = headers[index],
        firstValue = cellData[0].indexOf('__') === -1 ?
                                                cellData[0] :
                                                cellData[0].split('__')[1],
        secondValue = parseFloat(cellData[1]);
    if (cellData[3] === 'separator'){
        firstValue = cellData[0].split('__')[0];
    }
    let secondHeader = isNaN(secondValue) ? null : secondValue;

    return (
        <td key={'rowheader-' + index}>
            <span>{firstValue}</span><br />
            <span className="secondary">{secondHeader}</span>
        </td>
    );
}

function columnHeaderContent(column, p){
    let columnActions = p.flux.getActions('columns');
    let onImageError = (event) => {
        columnActions.columnIconFailed(event.target.getAttribute('data-id'));
    };
    let cellContent = (column.icons && !column.iconError) ? (
        <img
            onError={onImageError}
            src={column.icons.menuBitmap}
            width={p.iconWidth}
            height={p.iconWidth}
            alt={column.label}
            title={column.label}
            data-id={column.id}
        />
    ) : (
        <span>
            {column.label}
        </span>
    );
    return cellContent;
}
export default (p) =>
<table className={'simple-table-print'}  cellSpacing="0">
    <thead>
        <th key={'headers-column'}></th>
        {p.columns.enabled.map( (column, key) => (
                <th key={key}>
                    {columnHeaderContent(column, p)}
                </th>
            )
        )}
    </thead>
    <tbody>
        {p.rows.data.map( (row, key) => (
                <tr key={key} className={(key % 2 === 0 ? 'odd' : 'even')}>
                    {rowHeaderCell(p.rows.headers, key)}
                    {row.map( (cell, cellKey) => {
                        return cellRenderer(cell, key, cellKey, p);
                    })}
                </tr>
            )
        )}
    </tbody>
</table>;
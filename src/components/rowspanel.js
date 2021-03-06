// import {findDOMNode} from 'react';
import moment from 'moment';
import template from '../templates/rowspanel.jsx';
import tryRender from '../lib/trycomponent';

class RowsPanel {
    componentDidMount(){
        let dialogHeight = document.getElementById('rowPanelDrawer').offsetHeight + 90;
        // let dialog = findDOMNode(this);
        // console.log('rowPanelDrawer componentDidUpdate', dialogHeight, this.props.ui.rowPanelHeight, this.props.ui.screenHeight);
        this.props.flux.getActions('rows').rowPanelHeightCalculated(dialogHeight);
    }
    render() {
        const userActions = this.props.flux.getActions('user');
        const actions = {
            closePanel: () =>
                userActions.closePanel(),
            calendarDayClick: (e, day) =>
                userActions.dateUpdated(moment(day).format('YYYY-MM-DD')),
            monthChange: (d) =>
                userActions.monthUpdated(moment(d).format('YYYY-MM-DD')),
            startHourChange: (event) =>
                userActions.startHourUpdated(event.target.value),
            startMinuteChange: (event) =>
                userActions.startMinuteUpdated(event.target.value),
            endHourChange: (event) =>
                userActions.endHourUpdated(event.target.value),
            endMinuteChange: (event) =>
                userActions.endMinuteUpdated(event.target.value),
            frequencyChange: (event) =>
                userActions.frequencyUpdated(event.target.value),
            mergeFunctionChange: (event) =>
                userActions.mergeFunctionUpdated(event.target.checked ? 1: 0)
        };
        return tryRender('rowspanel', template, this.props, actions);
    }
}

export default RowsPanel;

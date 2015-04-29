// Generate the main html page for the derived project project-traditional
import {
    DOM,
    createElement,
    renderToStaticMarkup
} from 'react';
import {html} from 'js-beautify';

import {Page} from 'mnmo-components';

var options = {
    title: 'unbundled webapp',
    stylesheets: [
        './lib/css/normalize.css',
        './lib/css/typography.css',
        './lib/css/calendar.css',
        './css/main.css'
    ],
    scripts: [
        './lib/js/es5-shim.js',
        './lib/js/es5-sham.js',
        './lib/js/console-polyfill.js',
        './lib/js/Intl.js',
        './lib/js/Promise.js',
        './lib/js/fetch.js',
        '$comment=polyfills',
        './lib/js/react.js',
        './lib/js/flummox.js',
        './lib/js/flummox-component.js',
        '$comment=flummox',
        './lib/js/react-intl.js',
        '$comment=reactintl',
        './lib/js/moment.js',
        './lib/js/react-day-picker.js',
        '$comment=react-day-picker',
        './lib/js/lodash-merge.js',
        './lib/js/lodash-partition.js',
        './lib/js/lodash-sortby.js',
        './lib/js/lodash-find.js',
        './lib/js/lodash-capitalize.js',
        './lib/js/lodash-keys.js',
        './lib/js/lodash-pluck.js',
        '$comment=lodash',
        './lib/js/component-shared.js',
        './lib/js/component-stage.js',
        './lib/js/component-drawer.js',
        './lib/js/component-dialog.js',
        './lib/js/component-centeredbox.js',
        './lib/js/component-fieldset.js',
        './lib/js/component-textinput.js',
        './lib/js/component-select.js',
        './lib/js/component-checkbox.js',
        './lib/js/component-radio.js',
        './lib/js/component-radiogroup.js',
        './lib/js/component-submit.js',
        './lib/js/component-list.js',
        './lib/js/component-li.js',
        './lib/js/component-switch.js',
        './lib/js/component-a.js',
        './lib/js/component-toolbar.js',
        './lib/js/component-toolbarbutton.js',
        './lib/js/component-multipicker.js',
        '$comment=mnmo-components',
        './js/endpoints.js',
        './js/apiHelpers.js',
        './js/actions/country.js',
        './js/actions/user.js',
        './js/actions/loginValidation.js',
        './js/actions/session.js',
        './js/actions/columns.js',
        './js/actions/groups.js',
        './js/actions/variables.js',
        './js/actions/rows.js',
        '$comment=actions',
        './lib/js/local.js',
        './js/messages-pt.js',
        './js/messages-es.js',
        './js/messages-en.js',
        './js/messages-extra-pt.js',
        './js/messages-extra-es.js',
        './js/messages-extra-en.js',
        './js/languageHelpers.js',
        './js/stores/country.js',
        './js/stores/user.js',
        './js/stores/loginValidation.js',
        './js/stores/session.js',
        './js/stores/language.js',
        './js/stores/ui.js',
        './js/stores/columns.js',
        './js/stores/groups.js',
        './js/stores/variables.js',
        './js/stores/rows.js',
        './js/stores/frequency.js',
        '$comment=stores',
        './js/menulinks.js',
        './js/components/submenucolumns.js',
        './js/components/submenurouter.js',
        './js/components/menu.js',
        '$comment=sidebar-menu',
        './js/components/groupselect.js',
        './js/components/varspanel.js',
        './js/components/rowspanel.js',
        './js/components/subgroupspanel.js',
        './js/components/panelrouter.js',
        '$comment=dialogs',
        './js/components/header.js',
        './js/components/login.js',
        './js/components/datatable.js',
        './js/components/dashboard.js',
        './js/components/router.js',
        '$comment=components',
        './js/flux.js',
        './js/app.js',
        '$comment=app'
    ]
};

console.log(
html(
    renderToStaticMarkup(
        createElement(Page, options,
            DOM.div({id: 'main', className: 'mnmo-root'},
                DOM.p(null, 'carregando...')
            )
        )
    )
).replace(/(<script[^\"]*\"\$comment\=)([^\"]*)(\">[^>]*>)/ig, '<!-- $2 -->\n')
);

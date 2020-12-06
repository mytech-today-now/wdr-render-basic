import 'core-js/stable';
import 'regenerator-runtime/runtime';

import loader from 'wdr-loader';
import { render } from 'wdr-render-basic';

import './css/main.css';

loader(data => {
    render(data);
});

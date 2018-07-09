// loader.js

import { loader } from 'single-spa-angular-cli';

const lifecycles = loader({
    name: 'prodducts',
    selector: 'prodducts-root',
    baseHref: '/prodducts'
});

export const bootstrap = [
    lifecycles.bootstrap
];

export const mount = [
    lifecycles.mount
];

export const unmount = [
    lifecycles.unmount
];

export const unload = [
    lifecycles.unload
];
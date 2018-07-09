// loader.js

import { loader } from 'single-spa-angular-cli';

const lifecycles = loader({
    name: 'cart',
    selector: 'cart-root',
    baseHref: '/cart'
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
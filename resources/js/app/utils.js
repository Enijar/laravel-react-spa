import get from "lodash/get";
import config from "./config";

export function url(pathname) {
    // Replace leading and trailing "/"
    pathname = pathname.replace(/^\/+/, '');
    pathname = pathname.replace(/\/+$/, '');

    // Replace trailing "/"
    const url = window.APP.url.replace(/\/+$/);

    return `${url}/${pathname}`;
}

export function asset(pathname) {
    return url(`${pathname}?v=${window.APP.version}`);
}

export function route(routeName, params = {}) {
    for (let name in window.APP.routes) {
        if (!window.APP.routes.hasOwnProperty(name)) {
            continue;
        }

        if (name === routeName) {
            let path = window.APP.routes[name];

            for (let param in params) {
                if (!params.hasOwnProperty(param)) {
                    continue;
                }
                // Add data to paths that look like /path/:user/name
                path = path.split(`:${param}`).join(params[param]);
                // Add data to paths that look like /path/{user}/name
                path = path.split(`{${param}}`).join(params[param]);
            }

            return url(path);
        }
    }

    throw new Error(`Named route does not exist: ${routeName}`);
}

export function data(path, defaultValue = '') {
    return get(config.data, path, defaultValue);
}

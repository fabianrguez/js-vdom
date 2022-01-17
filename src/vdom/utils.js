export const isString = (value) => typeof value === 'string';

export const isNumber = (value) => typeof value === 'number';

export const isEvent = (prop) => prop.startsWith('on');

export const isFunction = (element) => typeof element === 'function';

export const getEventName = (event) => event.substring(2).toLowerCase();

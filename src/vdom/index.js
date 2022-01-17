import { getEventName, isEvent, isFunction, isNumber, isString } from './utils';

export function transformJSX(type, props, ...args) {
  return {
    type,
    props,
    children: [...args],
  };
}

function createElement(node) {
  if (isFunction(node.type)) {
    return createElement(node.type(node.props));
  }

  const element = document.createElement(node.type);
  node.children &&
    node.children.flat().forEach((child) => {
      return isString(child) || isNumber(child)
        ? element.appendChild(document.createTextNode(child))
        : element.appendChild(createElement(child));
    });
  node.props &&
    Object.keys(node.props)?.forEach((prop) => {
      if (isEvent(prop)) {
        const eventName = getEventName(prop);
        element.addEventListener(eventName, (e) => {
          node.props[prop]({ target: e.target, currentTarget: e.currentTarget, type: e.type, nativeEvent: e });
        });
      } else {
        element.setAttribute(prop, node.props[prop]);
      }
    });

  return element;
}

export function renderDOM(target, element) {
  if (typeof element?.type === 'function') {
    element = createElement(element.type(element.props));
  }
  document.querySelector(target).appendChild(element);
}

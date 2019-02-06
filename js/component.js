export default class Component {

  constructor({ element }) {
    this._element = element;
    this._callbackMap = {};
  }

  on(eventName, elementName, callback) {
    this._element.addEventListener(eventName, (event) => {
      const delegateTarget = event.target.closest(`[data-element="${ elementName }"]`);

      if (!delegateTarget) {
        return;
      }

      callback(event);
    });
  }

  show() {
    this._element.hidden = false;
  }

  hide() {
    this._element.hidden = true;
  }

  subscribe(eventName, callback) {
    let eventCallbacks = this._callbackMap[eventName] || [];

    eventCallbacks.push(callback);

    this._callbackMap[eventName] = eventCallbacks;
  }

  emit(eventName, data) {
    let eventCallbacks = this._callbackMap[eventName] || [];

    eventCallbacks.forEach(callback => {
      callback(data);
    });
  }
}

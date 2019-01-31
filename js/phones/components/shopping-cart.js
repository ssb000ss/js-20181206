export default class ShoppingCart {
  constructor({ element }) {
    this._element = element;

    this.items = [];

    this._render();
  }

  add(itemId) {
    this.items.push(itemId);

    this._render();
  }

  _render() {
    this._element.innerHTML = `
      <p>Shopping Cart</p>
      <ul>
        ${ this.items.map(itemId => `
          <li>
            ${ itemId }
          </li>
        `).join('')}
      </ul>
    `;
  }
}

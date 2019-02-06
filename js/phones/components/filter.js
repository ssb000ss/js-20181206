import Component from "../../component.js";

export default class Filter extends Component {
    constructor({element}) {
        super({element});

        this._render();
        this.on('input','query-field',(event)=>{
            this.emit('query-changed', event.target.value);
        });

        this.on('change','order-field',(event)=>{
            console.log("order-changed");
            this.emit('order-changed', event.target.value);
        })
    }

    _render() {
        this._element.innerHTML = `
      <p>
        Search:
        <input data-element="query-field">
      </p>

      <p>
        Sort by:
        <select data-element="order-field">
          <option value="name">Alphabetical</option>
          <option value="age">Newest</option>
        </select>
      </p>
    `;
    }
}

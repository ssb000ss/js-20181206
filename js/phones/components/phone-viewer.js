import Component from '../../component.js';

export default class PhoneViewer extends Component {

  show(phoneDetails) {
    this._phoneDetails = phoneDetails;

    super.show();

    this._render();
  }

  _render() {
    let phone = this._phoneDetails;

    this._element.innerHTML = `
      <img class="phone" src="${ phone.images[0] }">

      <button>Back</button>
      <button>Add to basket</button>
  
  
      <h1>${ phone.name }</h1>
  
      <p>${ phone.description }</p>
  
      <ul class="phone-thumbs">
        ${ phone.images.map(imageUrl => `
        
          <li>
            <img src="${ imageUrl }">
          </li>
        
        `).join('') }
      </ul>
    `;
  }
}

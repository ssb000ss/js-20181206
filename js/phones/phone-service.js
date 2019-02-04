

const PhoneService = {
  getAll(callback, { query = '', orderBy = 'age' } = {}) {
    let url = 'https://mgrinko.github.io/js-20181206/phones/phones.json';

    this._sendRequest(url, (phones) => {
      const filteredPhones = this._filter(phones, query);
      const sortedPhones = this._sort(filteredPhones, orderBy);

      callback(sortedPhones);
    });
  },

  getById(phoneId, callback) {
    let url = `https://mgrinko.github.io/js-20181206/phones/${ phoneId }.json`;

    this._sendRequest(url, callback);
  },


  _sendRequest(url, callback) {
    let xhr = new XMLHttpRequest();

    xhr.open('GET', url, true);
    xhr.send();

    xhr.onload = () => {
      if (xhr.status !== 200) {
        console.error(`Server error: ${ xhr.status } ${ xhr.statusText }`);
        return {};
      }

      const data = JSON.parse(xhr.responseText);

      callback(data);
    };
  },

  _filter(phones, query) {
    const normalizedQuery = query.toLowerCase();

    return phones.filter((phone) => {
      return phone.name.toLowerCase().includes(normalizedQuery);
    });
  },

  _sort(phones, orderBy) {
    return phones.sort((phoneA, phoneB) => {
      return phoneA[orderBy] > phoneB[orderBy] ? 1 : -1
    });
  },
};

export default PhoneService;



const PhoneService = {
  getAll() {

    let xhr = new XMLHttpRequest();

    xhr.open(
      'GET',
      'https://mgrinko.github.io/js-20181206/phones/phones.json',
      false
    );

    xhr.send();

    if (xhr.status !== 200) {
      console.log(`Server error: ${ xhr.status } ${ xhr.statusText }`);
      return [];
    }

    return JSON.parse(xhr.responseText);
  },

  getById(phoneId, callback) {
    let xhr = new XMLHttpRequest();

    xhr.open(
      'GET',
      `https://mgrinko.github.io/js-20181206/phones/${ phoneId }.json`,
      true
    );

    xhr.send();

    xhr.onload = () => {
      if (xhr.status !== 200) {
        console.log(`Server error: ${ xhr.status } ${ xhr.statusText }`);
        return {};
      }

      const data = JSON.parse(xhr.responseText);

      callback(data);
    };
  },
};

export default PhoneService;

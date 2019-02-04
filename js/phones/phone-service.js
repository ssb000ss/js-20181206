

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

    const phones = JSON.parse(xhr.responseText);
    console.log(phones);

    return phones;
  },

  getById(phoneId) {
    return phoneDetails;
  },
};

export default PhoneService;

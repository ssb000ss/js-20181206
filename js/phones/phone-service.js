const PhoneService = {
    getAll({query = '', orderBy = 'age'} = {}) {
        let url = "https://mgrinko.github.io/js-20181206/phones/phones.json";

        const phonesPromise = this._sendRequest(url);
        return phonesPromise.then((phones) => {
            const filteredPhones = this._filter(phones, query);
            const sortedPhones = this._sort(filteredPhones, orderBy);
            return sortedPhones;
        });
    },


    getById(phoneId) {
        let url = `https://mgrinko.github.io/js-20181206/phones/${phoneId}.json`;
        return this._sendRequest(url);
    },

    _sendRequest(url) {
        const instructionFn = (resolve, reject) => {
            let xhr = new XMLHttpRequest();
            xhr.open('GET', url, true);
            xhr.send();
            xhr.onload = () => {
                if (xhr.status !== 200) {
                    console.error(xhr.statusText);
                    reject();
                    return {};
                }
                const data = JSON.parse(xhr.responseText);
                resolve(data);
            }
        };

        return new Promise(instructionFn);

    },

    _filter(phones, query) {
        let normalizeQuery = query.toLowerCase();
        return phones.filter((phone) => {
            return phone.name.toLowerCase().includes(normalizeQuery);
        })
    },

    _sort(phones, orderBy) {
        return phones.sort((phoneA, phoneB) => {
            return phoneA[orderBy].toLowerCase() > phoneB[orderBy].toLowerCase() ? 1 : -1;
        });
    }
};

export default PhoneService;


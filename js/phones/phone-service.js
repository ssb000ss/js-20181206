const PhoneService = {
    async getAll({query = '', orderBy = 'age'} = {}) {
        let url = "https://mgrinko.github.io/js-20181206/phones/phones.json";

        const phones = await this._sendRequest(url);
        const filteredPhones = this._filter(phones, query);
        return this._sort(filteredPhones, orderBy);
    },


    getById(phoneId) {
        let url = `https://mgrinko.github.io/js-20181206/phones/${phoneId}.json`;
        return this._sendRequest(url);
    },

    _sendRequest(url) {
        return fetch(url)
            .then(response => response.json());
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


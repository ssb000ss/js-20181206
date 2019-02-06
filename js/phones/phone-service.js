const PhoneService = {
    getAll(callback) {
        let url = "https://mgrinko.github.io/js-20181206/phones/phones.json";
        this._sendRequest(url, callback);
    },


    getById(phoneId, callback) {
        let url = `https://mgrinko.github.io/js-20181206/phones/${phoneId}.json`;
        this._sendRequest(url, callback);
    },

    _sendRequest(url, callback) {
        let xhr = new XMLHttpRequest();
        xhr.open(
            'GET',
            url,
            true
        );

        xhr.send();
        xhr.onload = () => {
            if (xhr.status !== 200) {
                console.error(xhr.statusText);
                return {};
            }
            const data = JSON.parse(xhr.responseText);
            callback(data);
        }

    }
};

export default PhoneService;


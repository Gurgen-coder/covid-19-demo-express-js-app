const getData = require('./getData');
const axios = require('axios');

jest.mock('axios');

describe('getData function', () => {
    it('GETs the API URL it is given', async () => {
        const apiUrl = 'https://example.com/myTest';
        const mockResponse = {
            data: {
                key: "Value",
            },
        };
        axios.get.mockImplementationOnce(() => Promise.resolve(mockResponse));
        getData(apiUrl);
        expect(axios.get).toHaveBeenCalledWith(apiUrl);
    });
});
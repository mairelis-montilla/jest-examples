const axios = require('axios')
jest.mock('axios')
const { getUrlStatus } = require('../src/axios')

describe('getUrlStatus mock axios', ()=>{
  it('url status 200', () => {
    axios.get.mockResolvedValue(200);
    getUrlStatus('https://httpstat.us/200').then((result) => {
        expect(result).toEqual(200);
      });
  })
  it('url status 404', () => {
    axios.get.mockImplementation(() => Promise.reject('error'));
    getUrlStatus('https://httpstat.us/404').then((result) => {
        expect(result).toEqual('error');
    })
  })
  it('invalid url', () => {
    const result = getUrlStatus()
        expect(result).toEqual('invalid url');
    })

})
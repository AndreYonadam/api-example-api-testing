import HttpStatus from 'http-status-codes';
import axios from 'axios';

axios.defaults.headers = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Headers': '*'
};

describe("Hello World Route", () => {
  test("should create an entry", () => {
    axios
      .post('http://127.0.0.1:3000/hello-world',
        {
          message: 'This should work!'
        }
      )
      .then(res => {
        let id = res.data.id
        expect(res.status).toEqual(HttpStatus.CREATED);
        expect(res.data.id).not.toEqual(null);
        console.log(res)
      })
      .catch(error => {
        console.error(error)
      })
  });
});
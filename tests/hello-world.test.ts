import HttpStatus from 'http-status-codes';
import axios from 'axios';

describe("Hello World Route", () => {
  test("should create an entry", async () => {
    await axios
      .post('http://127.0.0.1:3000/hello-world',
        null,
        {
          params: {
            message: 'This should work!'
          }
        }
      )
      .then(res => {
        let id = res.data.id
        expect(res.status).toEqual(HttpStatus.CREATED);
        expect(res.data.id).not.toEqual(null);
      })
      .catch(error => {
        throw new Error('Error');
      })
  });
});
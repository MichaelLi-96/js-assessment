asyncAnswers = {
  /**
   * Asynchronously returns a value via a promise. Example:
   * async('anyValue').then((result) => { return result === 'anyValue';});
   * 
   * @param value - Any value
   * @returns {then: function} A promise like object containing a then property.
   */
  async: function async(value) {
    const promise = new Promise(function(resolve, reject) {
      resolve(value);
    });
    return promise;
  },

  /**
   * Creates a promise that resolves with the data returned from an ajax call to the url url.
   * You may use jquery, XMLHttpRequest, or fetch.
   * https://developer.mozilla.org/en-US/docs/Web/API/XMLHttpRequest
   * https://api.jquery.com/jQuery.ajax/
   * https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API   * 
   * 
   * @param {String} url - a valid url
   * @returns {then: function} A promise like object containing a then property.
   */
  manipulateRemoteData: function manipulateRemoteData(url) {
    const promise = new Promise(function(resolve, reject) {
      const request = new XMLHttpRequest();
      request.open("GET", url);
      request.onload = () => {
        if (request.status === 200) {
          const people = JSON.parse(request.response).people;
          const names = [];
          for(let i = 0; i < people.length; i++) {
            names.push(people[i].name);
          }
          resolve(names.sort());
        } 
        else {
          reject(Error(request.statusText));
        }
      };

      request.onerror = () => {
        reject(Error('Error fetching data.'));
      };
      request.send();
    });
    // promise.then((result) => {
    //   console.log(result);
    // }).catch((error) => {
    //   console.log(error);
    // });
    return promise;
  },
};

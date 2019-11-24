function listFilesHelper(data, dirName, files, reachedDir) {
  if(dirName === undefined) {
    for(let i = 0; i < data.files.length; i++) {
      files.push(data.files[i]);
    }
    for(let i = 0; i < data.subDirs.length; i++) {
      listFilesHelper(data.subDirs[i], dirName, files, false);
    }
  }
  else {
    if(data.dirName === dirName || reachedDir === true) {
      for(let i = 0; i < data.files.length; i++) {
        files.push(data.files[i]);
      }
      for(let i = 0; i < data.subDirs.length; i++) {
        listFilesHelper(data.subDirs[i], dirName, files, true);
      }
    }
    else {
      for(let i = 0; i < data.subDirs.length; i++) {
        listFilesHelper(data.subDirs[i], dirName, files, false);
      }
    }
  }
}

recursionAnswers = {
  /**
   * List the files in a given directory, of a filesystem described by data.
   * Data is an object that looks like this:
   * {
      dirName: 'app',
      files: ['index.html', 'page.html'],
      subDirs: [{...}]
      }
   *
   * Where ... is the same type of object
   * 
   * @param {fileSystemObject} data - a file system object as described above
   * @param {String} dirName - a directory name the files are desired to be listed from.
   * Note: This parameter is optional. If it is not provided, list ALL files.
   * 
   * @returns {Number[]} The files under the directory dirName, including subdiretories.
   */
  listFiles: function listFiles(data, dirName) {
    const files = [];
    listFilesHelper(data, dirName, files, false);
    return files;
  },

  /**
   * Determines the fibonacci number at position n.
   * https://en.wikipedia.org/wiki/Fibonacci_number
   * 
   * The first few fibonacci numbers are: 1, 1, 2, 3, 5, 8, 13, 21, 34, 55, 89, ...
   * 
   * @param {Number} n - the index of the fibonacci number desired
   * @returns {Number} The nth fibonacci number
   */
  fibonacci: function fibonacci(n) {
    if(n === 0) {
      return 0;
    }
    if(n === 1 || n === 2) {
      return 1;
    }
    return fibonacci(n - 1) + fibonacci(n - 2);
    },
};
